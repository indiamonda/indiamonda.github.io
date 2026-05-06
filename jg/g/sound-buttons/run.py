import os
import json
import aiohttp
import asyncio
import aiofiles

async def download_sound(session, url, save_path):
    async with session.get(url) as response:
        if response.status == 200:
            os.makedirs(os.path.dirname(save_path), exist_ok=True)
            async with aiofiles.open(save_path, 'wb') as file:
                await file.write(await response.read())
            print(f"Sound saved to {save_path}")
        else:
            print(f"Failed to download sound: {response.status}")

async def main():
    async with aiohttp.ClientSession() as session:
        with open("sounds.js", 'r', encoding='utf-8') as file:
            js_content = file.read()
            split_content = js_content.split("// SPLITTER ---------------")
            json_data = json.loads(split_content[1].strip())
            tasks = []
            for sound in json_data:
                sound_url = "https://www.myinstants.com" + sound["mp3"]
                save_path = os.path.join(os.getcwd(), "media", "sounds", sound_url.split('/')[-1])
                if not os.path.exists(save_path):
                    tasks.append(download_sound(session, sound_url, save_path))
            await asyncio.gather(*tasks)

if __name__ == "__main__":
    asyncio.run(main())