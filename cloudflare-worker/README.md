# DeepSeek proxy worker

Tiny Cloudflare Worker that holds the DeepSeek API key and exposes a CORS-safe
streaming endpoint to the static site. Without this the API key would be
exposed in client JS.

## One-time setup

1. Get a DeepSeek API key from <https://platform.deepseek.com/api_keys>.
   (Pricing is roughly $0.14/M input tokens and $0.28/M output tokens for
   `deepseek-chat`; `deepseek-reasoner` is a bit more.)

2. Install Wrangler if you don't have it:
   ```bash
   npm install -g wrangler
   wrangler login
   ```

3. From this folder, store the key as a Worker secret:
   ```bash
   cd cloudflare-worker
   wrangler secret put DEEPSEEK_KEY
   # paste your sk-... key when prompted
   ```

4. (Optional but recommended) Create a KV namespace for server-side rate
   limiting:
   ```bash
   # Wrangler v4+ (current)
   wrangler kv namespace create RATE_KV
   # Wrangler v3 (older versions used a colon)
   # wrangler kv:namespace create RATE_KV

   # copy the printed id, then uncomment the [[kv_namespaces]] block in
   # wrangler.toml and paste the id
   ```

5. Deploy:
   ```bash
   wrangler deploy
   ```

   You'll get a URL like `https://deepseek-proxy.<your-subdomain>.workers.dev`.

6. Copy that URL into `js/jqrg-aichat.js` — find the `WORKER_URL` constant
   near the top and replace the placeholder. (You can also set a custom
   domain in the Cloudflare dashboard, e.g. `https://ai.jimmyqrg.com`,
   and use that instead — recommended for a cleaner URL.)

## Updating

After editing `worker.js`, redeploy with:
```bash
wrangler deploy
```

## Cost

Free tier covers 100 000 requests/day. A single chat message is one
request, so this should comfortably handle thousands of users before you
hit a paid tier.

DeepSeek API itself is pay-as-you-go and very cheap — typical chat
session costs fractions of a cent.

## Security model

- The Worker only accepts requests from the allowed origin list at the top
  of `worker.js`. Edit that array if you add more domains.
- Models are restricted to `deepseek-chat` and `deepseek-reasoner` so a
  malicious caller can't swap to a more expensive model.
- Input size is capped at 60 000 characters and 64 messages per request.
- `max_tokens` is capped at 4 096 to bound output cost.
- Per-IP rate limit is 30 req/min when KV is bound. Without KV, only the
  client-side limiter (in `jqrg-aichat.js`) applies.

## Local testing

```bash
wrangler dev
# proxy listens on http://localhost:8787
```

Then in a browser console on the live site:
```js
window.__JqrgAiChatWorker = 'http://localhost:8787';
JqrgAiChat.open();
```

## Endpoints

- `GET  /health` — returns `{ok:true, service:'deepseek-proxy', ts}`
- `POST /v1/chat` — proxies to DeepSeek, body matches DeepSeek's chat
  completions schema. Streams SSE when `stream: true` (default). When the
  request includes file attachment markers, the user must have an active
  subscription (see Stripe section below) or the worker returns 402.
- `GET  /v1/subscription-status` — returns `{ active: bool, plan: ..., ... }`
  for the user identified by the `Authorization: Bearer <jqrg-token>` header.
- `POST /v1/checkout` — creates a Stripe Checkout Session and returns
  `{ url }` for the browser to redirect to. Requires the same auth header.
- `POST /v1/billing-portal` — creates a Stripe Customer Portal session for
  the logged-in user to manage/cancel their subscription.
- `POST /v1/stripe-webhook` — receives Stripe events
  (`checkout.session.completed`, `customer.subscription.updated`,
  `customer.subscription.deleted`). Verifies the webhook signature and
  updates the subscription record in KV.

## Stripe subscription gate (file uploads)

File uploads (text + image OCR) are gated behind a Stripe subscription so
the worker doesn't pay OCR / model costs for non-paying users. Setup:

1. **Create a Stripe account** at <https://dashboard.stripe.com> (free).

2. **Add a product + recurring price** in the dashboard:
   - Products → "+ Add product"
   - Name it (e.g. "Venory Pro"), pick a recurring price (e.g. $4.99/month).
   - Copy the *Price ID* (starts with `price_…`).

3. **Grab your API secret key** from Developers → API keys.
   - Use the test key (`sk_test_…`) while wiring this up. Switch to the
     live key (`sk_live_…`) only when you've confirmed everything works.

4. **Set worker secrets**:
   ```bash
   cd cloudflare-worker
   wrangler secret put STRIPE_SECRET_KEY        # paste sk_test_… or sk_live_…
   wrangler secret put STRIPE_PRICE_ID          # paste price_…
   wrangler secret put STRIPE_WEBHOOK_SECRET    # filled in step 6
   wrangler secret put SUB_RETURN_URL           # e.g. https://jimmyqrg.com/?upgraded=1
   ```

5. **Create a KV namespace for subscription state** (separate from rate
   limits so quotas can't evict subscriptions):
   ```bash
   wrangler kv namespace create SUB_KV
   ```
   Paste the printed id into the `[[kv_namespaces]]` block in
   `wrangler.toml` under `binding = "SUB_KV"`.

6. **Configure the webhook**:
   - Deploy the worker first (`wrangler deploy`).
   - In Stripe Dashboard → Developers → Webhooks → "+ Add endpoint",
     set the URL to
     `https://deepseek-proxy.<sub>.workers.dev/v1/stripe-webhook`
     (or your custom domain equivalent).
   - Subscribe to events:
     `checkout.session.completed`,
     `customer.subscription.updated`,
     `customer.subscription.deleted`.
   - Copy the signing secret (`whsec_…`) and run
     `wrangler secret put STRIPE_WEBHOOK_SECRET`.

7. **Redeploy** so the webhook secret is picked up:
   ```bash
   wrangler deploy
   ```

8. **Test in test mode** with Stripe's test card `4242 4242 4242 4242`,
   any future expiry, any CVC. The webhook should fire and the user's
   subscription should appear in `SUB_KV` (look in the Cloudflare
   dashboard → Workers & Pages → KV → SUB_KV).

### How user identity flows

The frontend reads the bearer token from the existing `__jqrg_auth_v1`
localStorage entry (set by `jqrg-cloud.js` after sign-in) and forwards it
to the worker as `Authorization: Bearer <token>`. The worker exchanges
that token with the chat server (`https://chat.jimmyqrg.com/api/auth/me`)
once per request to resolve the user id, then stores subscription rows in
KV under `sub:<user_id>`. Anonymous (signed-out) visitors are blocked at
the frontend with a "sign in to subscribe" prompt.
