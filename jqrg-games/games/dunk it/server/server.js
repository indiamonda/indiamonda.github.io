const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

let score = 0;

app.get('/api/score', (request, response) => {
  response.send({ score });
});

// When score is changed, we call broadcast to notify all clients.
app.get('/api/score/increment', (request, response) => {
  score = score + 1;
  broadcast({ score });
  response.send({ score });
});

app.get('/api/score/reset', (request, response) => {
  score = 0;
  broadcast({ score });
  response.send({ score });
});

const WebSocketServer = require('ws').Server
const wss = new WebSocketServer({ port: 4001 })
let connections = {}
wss.on('connection', (conn) => {
  let id = '' + Math.random()
  connections[id] = conn
  conn.on('message', (message) => {
    broadcast(message)
  })
})

const broadcast = (message) => {
  console.log("\nbroadcast: " + JSON.stringify(message))
  for (let key in connections) {
      try {
        connections[key].send(JSON.stringify(message))
      } catch (e) {
        delete connections[key]
      }
  }
}

app.listen(port, () => console.log(`Listening on port ${port}`));