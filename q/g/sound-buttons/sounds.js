/*
taken from https://www.myinstants.com/en/trending/us/

(() => {
  return Array.from(document.querySelectorAll("#instants_container .instant")).map(el => ({
    name: el.querySelector(".instant-link")?.textContent.trim(),
    color: el.querySelector(".circle")?.style.backgroundColor,
    mp3: el.querySelector("button[onclick^='play']")?.getAttribute("onclick")?.match(/'([^']+\.mp3)'/)?.[1]
  }));
})()
*/
export const sounds =
    // SPLITTER ---------------
[
    {
        "name": "FAHHHHHHHHHHHHHH",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fahhhhhhhhhhhhhh.mp3"
    },
    {
        "name": "VINE BOOM SOUND",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/vine-boom.mp3"
    },
    {
        "name": "FAAAH",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/faaah.mp3"
    },
    {
        "name": "Fart",
        "color": "rgb(102, 51, 0)",
        "mp3": "/media/sounds/dry-fart.mp3"
    },
    {
        "name": "Fahhh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fahhh_KcgAXfs.mp3"
    },
    {
        "name": "rizz sound effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/rizz-sound-effect.mp3"
    },
    {
        "name": "Among Us role reveal sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/among-us-role-reveal-sound.mp3"
    },
    {
        "name": "Chicken on tree screaming",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/chicken-on-tree-screaming.mp3"
    },
    {
        "name": "Anime Wow",
        "color": "rgb(255, 51, 102)",
        "mp3": "/media/sounds/anime-wow-sound-effect.mp3"
    },
    {
        "name": "YOURE PHONE IS RINGING",
        "color": "rgb(16, 0, 0)",
        "mp3": "/media/sounds/youre-phone-is-ringing.mp3"
    },
    {
        "name": "I've Got This FAAAAAAAAAHHHHH",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ive-got-this-faaaaaaaaahhhhh.mp3"
    },
    {
        "name": "Apple Pay",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/applepay.mp3"
    },
    {
        "name": "Bone Crack",
        "color": "rgb(255, 255, 160)",
        "mp3": "/media/sounds/bone-crack.mp3"
    },
    {
        "name": "rip my granny she got hit by a bazooka",
        "color": "rgb(147, 255, 233)",
        "mp3": "/media/sounds/rip-my-granny-she-got-hit-by-a-bazooka.mp3"
    },
    {
        "name": "SpongeBob Fail",
        "color": "rgb(202, 195, 26)",
        "mp3": "/media/sounds/spongebob-fail.mp3"
    },
    {
        "name": "Hub Intro Sound",
        "color": "rgb(255, 150, 30)",
        "mp3": "/media/sounds/hub-intro-sound.mp3"
    },
    {
        "name": "LIZARD BUTTON",
        "color": "rgb(127, 168, 255)",
        "mp3": "/media/sounds/lizard-button.mp3"
    },
    {
        "name": "Dexter meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/dexter-meme.mp3"
    },
    {
        "name": "Metal pipe clang",
        "color": "rgb(92, 92, 92)",
        "mp3": "/media/sounds/metal-pipe-clang.mp3"
    },
    {
        "name": "Fart Button",
        "color": "rgb(51, 153, 0)",
        "mp3": "/media/sounds/perfect-fart.mp3"
    },
    {
        "name": "Tuco: GET OUT",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/tuco-get-out.mp3"
    },
    {
        "name": "BRUH",
        "color": "rgb(255, 255, 51)",
        "mp3": "/media/sounds/movie_1.mp3"
    },
    {
        "name": "romanceeeeeeeeeeeeee",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/romanceeeeeeeeeeeeee.mp3"
    },
    {
        "name": "ACK",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/ack.mp3"
    },
    {
        "name": "Smoke Detector Beep",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/smoke-detector-beep.mp3"
    },
    {
        "name": "What a good boy",
        "color": "rgb(245, 110, 255)",
        "mp3": "/media/sounds/what-a-good-boy.mp3"
    },
    {
        "name": "Error SOUNDSS",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/error_CDOxCYm.mp3"
    },
    {
        "name": "WHAT IS THIS DIDDY BLUD DOING ON THE",
        "color": "rgb(141, 114, 181)",
        "mp3": "/media/sounds/what-is-this-diddy-blud-doing-on-the.mp3"
    },
    {
        "name": "dun dun dunnnnnnnn",
        "color": "rgb(255, 44, 44)",
        "mp3": "/media/sounds/dun-dun-dun-sound-effect-brass_8nFBccR.mp3"
    },
    {
        "name": "The Undertaker Bell",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/undertakers-bell_2UwFCIe.mp3"
    },
    {
        "name": "Звук фотоаппарата",
        "color": "rgb(225, 163, 255)",
        "mp3": "/media/sounds/zvuk-fotoapparata.mp3"
    },
    {
        "name": "67",
        "color": "rgb(199, 255, 30)",
        "mp3": "/media/sounds/67_SQlv2Xv.mp3"
    },
    {
        "name": "Sad Violin (the meme one)",
        "color": "rgb(0, 255, 51)",
        "mp3": "/media/sounds/tf_nemesis.mp3"
    },
    {
        "name": "We are charlie kirk loud asf",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/we-are-charlie-kirk-loud-asf.mp3"
    },
    {
        "name": "We are Charlie Kirk phone",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/we-are-charlie-kirk-phone.mp3"
    },
    {
        "name": "Taco Bell Bong",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/taco-bell-bong-sfx.mp3"
    },
    {
        "name": "Taco Bell Bong",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/taco-bell-bong-sfx.mp3"
    },
    {
        "name": "gey echo",
        "color": "rgb(0, 255, 4)",
        "mp3": "/media/sounds/gey-echo.mp3"
    },
    {
        "name": "Buzzer",
        "color": "rgb(204, 0, 153)",
        "mp3": "/media/sounds/wrong-answer-sound-effect.mp3"
    },
    {
        "name": "oi oi oe oi a eye eye",
        "color": "rgb(0, 255, 18)",
        "mp3": "/media/sounds/oi-oi-oe-oi-a-eye-eye.mp3"
    },
    {
        "name": "Galaxy meme",
        "color": "rgb(25, 75, 255)",
        "mp3": "/media/sounds/galaxy-meme.mp3"
    },
    {
        "name": "I am going to commit great crime",
        "color": "rgb(18, 52, 112)",
        "mp3": "/media/sounds/i-am-going-to-commit-great-crime.mp3"
    },
    {
        "name": "Death sound (Fortnite)",
        "color": "rgb(255, 0, 142)",
        "mp3": "/media/sounds/tmp_7901-951678082.mp3"
    },
    {
        "name": "indian song",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/indian-song.mp3"
    },
    {
        "name": "Prowler Sound Effect",
        "color": "rgb(101, 32, 124)",
        "mp3": "/media/sounds/prowler-sound-effect_6bXErot.mp3"
    },
    {
        "name": "Punch Sound",
        "color": "rgb(42, 141, 255)",
        "mp3": "/media/sounds/punch-gaming-sound-effect-hd_RzlG1GE.mp3"
    },
    {
        "name": "oh my god bro oh hell nah man",
        "color": "rgb(7, 255, 6)",
        "mp3": "/media/sounds/oh-my-god-bro-oh-hell-nah-man.mp3"
    },
    {
        "name": "yeah boiii i i i",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/yeah-boiii-i-i-i.mp3"
    },
    {
        "name": "FAHHHHHHHHHHHHHHH",
        "color": "rgb(112, 84, 255)",
        "mp3": "/media/sounds/fahhhhhhhhhhhhhhh.mp3"
    },
    {
        "name": "Daddyy Chill",
        "color": "rgb(255, 138, 239)",
        "mp3": "/media/sounds/daddyy-chill.mp3"
    },
    {
        "name": "sad meow song",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sad-meow-song.mp3"
    },
    {
        "name": "Discord Notification",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/discord-notification.mp3"
    },
    {
        "name": "Long brain fart",
        "color": "rgb(0, 127, 255)",
        "mp3": "/media/sounds/long-brain-fart.mp3"
    },
    {
        "name": "FAHHHHHHHH EARRAPE",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/fahhhhhhhh-earrape.mp3"
    },
    {
        "name": "spiderman meme song",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/spiderman-meme-song.mp3"
    },
    {
        "name": "cat laugh meme 1",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/cat-laugh-meme-1.mp3"
    },
    {
        "name": "yes!(lara voice)",
        "color": "rgb(41, 255, 16)",
        "mp3": "/media/sounds/yes-lara-voice.mp3"
    },
    {
        "name": "baby laughing meme",
        "color": "rgb(0, 233, 255)",
        "mp3": "/media/sounds/baby-laughing-meme.mp3"
    },
    {
        "name": "my mommy said no more skibidi toilet",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/my-mommy-said-no-more-skibidi-toilet.mp3"
    },
    {
        "name": "GopGopGop",
        "color": "rgb(255, 250, 206)",
        "mp3": "/media/sounds/gopgopgop.mp3"
    },
    {
        "name": "instagram thud",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/vine-boom-sound-effect_KT89XIq.mp3"
    },
    {
        "name": "ding sound effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ding-sound-effect_2.mp3"
    },
    {
        "name": "Emotional Damage Meme",
        "color": "rgb(229, 0, 0)",
        "mp3": "/media/sounds/emotional-damage-meme.mp3"
    },
    {
        "name": "SEÑORA SU HIJO ESTÁ BIENDO",
        "color": "rgb(21, 255, 247)",
        "mp3": "/media/sounds/senora-su-hijo-esta-biendo_IyhrFhn.mp3"
    },
    {
        "name": "I got this fahhhhhh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/i-got-this-fahhhhhh.mp3"
    },
    {
        "name": "Censor Beep 1",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/censor-beep-1.mp3"
    },
    {
        "name": "YAAAAAAAAY",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/kids-saying-yay-sound-effect_3.mp3"
    },
    {
        "name": "Вы позвонили царю батюшке",
        "color": "rgb(255, 133, 26)",
        "mp3": "/media/sounds/vy-pozvonili-tsariu-batiushke.mp3"
    },
    {
        "name": "fart with extra reverb",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fart-with-extra-reverb.mp3"
    },
    {
        "name": "GunShottttt",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gunshotjbudden.mp3"
    },
    {
        "name": "oi, oi oe oi a eye eye",
        "color": "rgb(18, 21, 108)",
        "mp3": "/media/sounds/oi-oi-oe-oi-a-eye-eye_tUunIyy.mp3"
    },
    {
        "name": "°__°",
        "color": "rgb(2, 1, 3)",
        "mp3": "/media/sounds/deg-deg_4M6Cojn.mp3"
    },
    {
        "name": "Вы позвонили царю батюшке",
        "color": "rgb(255, 133, 26)",
        "mp3": "/media/sounds/vy-pozvonili-tsariu-batiushke.mp3"
    },
    {
        "name": "oh shit not good",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/wcgertcz074.mp3"
    },
    {
        "name": "kim jong un is master of g00n",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/kim-jong-un-is-master-of-g00n.mp3"
    },
    {
        "name": "°__°",
        "color": "rgb(2, 1, 3)",
        "mp3": "/media/sounds/deg-deg_4M6Cojn.mp3"
    },
    {
        "name": "the weeknd rizzz",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/the-weeknd-rizzz.mp3"
    },
    {
        "name": "Goo goo gagaaa",
        "color": "rgb(251, 255, 122)",
        "mp3": "/media/sounds/goo-goo-gagaaa.mp3"
    },
    {
        "name": "Shocked sound",
        "color": "rgb(255, 238, 135)",
        "mp3": "/media/sounds/shocked-sound-effect.mp3"
    },
    {
        "name": "ENRIQUE!",
        "color": "rgb(45, 129, 255)",
        "mp3": "/media/sounds/enrique.mp3"
    },
    {
        "name": "FAHHHHH",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fahhhhh.mp3"
    },
    {
        "name": "a few moments later sponge bob sfx fun",
        "color": "rgb(6, 255, 39)",
        "mp3": "/media/sounds/a-few-moments-later-sponge-bob-sfx-fun.mp3"
    },
    {
        "name": "lack of a father figure?",
        "color": "rgb(211, 16, 255)",
        "mp3": "/media/sounds/lack-of-a-father-figure.mp3"
    },
    {
        "name": "Фото",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/foto_btYFRHF.mp3"
    },
    {
        "name": "goku drip",
        "color": "rgb(182, 255, 56)",
        "mp3": "/media/sounds/drip-goku-meme-song-original-dragon-ball-super-music-clash-of-gods-in-description.mp3"
    },
    {
        "name": "outro song",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/outro-song_oqu8zAg.mp3"
    },
    {
        "name": "Door Knocking SOUND EFFECT",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/crazy-realistic-knocking-sound-troll-twitch-streamers_small.mp3"
    },
    {
        "name": "-999 Social Credit Siren",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/999-social-credit-siren.mp3"
    },
    {
        "name": "BIG N WORD",
        "color": "rgb(63, 53, 37)",
        "mp3": "/media/sounds/big-n-word_C7DFtdX.mp3"
    },
    {
        "name": "Meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/are-you-out-of-your-mind-greenscreen-change-quality-and-end-wont-cut-off_2.mp3"
    },
    {
        "name": "nuclear diarrhea",
        "color": "rgb(109, 58, 10)",
        "mp3": "/media/sounds/nuclear-diarrhea.mp3"
    },
    {
        "name": "Визг свиньи",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/vizg-svini.mp3"
    },
    {
        "name": "Oh My God Meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/oh-my-god-meme.mp3"
    },
    {
        "name": "RUN vine",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/run-vine-sound-effect.mp3"
    },
    {
        "name": "Fart Meme Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fart-meme-sound.mp3"
    },
    {
        "name": "A NEW HAND TOUCHES THE BEACON",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ur-dur.mp3"
    },
    {
        "name": "IM BOUT TO CUHHHH",
        "color": "rgb(205, 96, 255)",
        "mp3": "/media/sounds/im-bout-to-cuhhhh.mp3"
    },
    {
        "name": "MLG AIR HORN!!!!!!!!!!!",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/mlg-airhorn.mp3"
    },
    {
        "name": "Brother Ewwwwwww",
        "color": "rgb(255, 15, 123)",
        "mp3": "/media/sounds/brother-ewwwwwww.mp3"
    },
    {
        "name": "*Snore* mimimimimimi",
        "color": "rgb(173, 255, 255)",
        "mp3": "/media/sounds/snore-mimimimimimi.mp3"
    },
    {
        "name": "ROBLOX oof",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/roblox-death-sound_1.mp3"
    },
    {
        "name": "fart with reverb",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fart-with-reverb.mp3"
    },
    {
        "name": "Rehehehe",
        "color": "rgb(108, 255, 150)",
        "mp3": "/media/sounds/rehehehe.mp3"
    },
    {
        "name": "Whip",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/crack_the_whip.mp3"
    },
    {
        "name": "We are Charlie Kirk (song)",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/we-are-charlie-kirk-song.mp3"
    },
    {
        "name": "Diddy done",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/diddy-done.mp3"
    },
    {
        "name": "Anderdingus",
        "color": "rgb(54, 150, 30)",
        "mp3": "/media/sounds/anderdingus.mp3"
    },
    {
        "name": "Metal Gear Solid Alert",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/tindeck_1.mp3"
    },
    {
        "name": "We are Charlie Kirk (song)",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/we-are-charlie-kirk-song.mp3"
    },
    {
        "name": "'What' Bottom Text Meme (Sanctuary Guardian) - S",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/what-bottom-text-meme-sanctuary-guardian-sound-effect-hd.mp3"
    },
    {
        "name": "MI BOMBO",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mi-bombo.mp3"
    },
    {
        "name": "Metal Gear Solid Alert",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/tindeck_1.mp3"
    },
    {
        "name": "italian brainrot ringtone",
        "color": "rgb(120, 38, 38)",
        "mp3": "/media/sounds/italian-brainrot-ringtone.mp3"
    },
    {
        "name": "Core Sound Effect",
        "color": "rgb(105, 0, 0)",
        "mp3": "/media/sounds/core-sound-effect.mp3"
    },
    {
        "name": "Faaaa",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/faaaa.mp3"
    },
    {
        "name": "Epstein kidnapped me when I was 11",
        "color": "rgb(0, 242, 255)",
        "mp3": "/media/sounds/epstein-kidnapped-me-when-i-was-11_zl0hWU0.mp3"
    },
    {
        "name": "Meme final",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/meme-de-creditos-finales.mp3"
    },
    {
        "name": "A NEW HAND TOUCHES THE BEACON",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ur-dur.mp3"
    },
    {
        "name": "Aww",
        "color": "rgb(255, 0, 153)",
        "mp3": "/media/sounds/studio-audience-awwww-sound-fx.mp3"
    },
    {
        "name": "Elevator Music Background",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/musica-elevador-short.mp3"
    },
    {
        "name": "AAAAAAAAAAAAAAAAAAAA é lutador",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa-e-lutador.mp3"
    },
    {
        "name": "jixaw metal pipe falling sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/jixaw-metal-pipe-falling-sound.mp3"
    },
    {
        "name": "BRUH sound effect!",
        "color": "rgb(49, 255, 6)",
        "mp3": "/media/sounds/bruh-sound-effect_WstdzdM.mp3"
    },
    {
        "name": "shut up mom",
        "color": "rgb(213, 181, 255)",
        "mp3": "/media/sounds/shut-up-mom.mp3"
    },
    {
        "name": "Womp Womp Womp",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/downer_noise.mp3"
    },
    {
        "name": "Skeleton with shield",
        "color": "rgb(255, 251, 135)",
        "mp3": "/media/sounds/skeleton-with-shield.mp3"
    },
    {
        "name": "what da dog doin",
        "color": "rgb(113, 105, 255)",
        "mp3": "/media/sounds/yt1s_wU4BGgD.mp3"
    },
    {
        "name": "iPhone Notification",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/notification_o14egLP.mp3"
    },
    {
        "name": "Jeopardy Theme Song!",
        "color": "rgb(0, 51, 255)",
        "mp3": "/media/sounds/jeopardy-themelq.mp3"
    },
    {
        "name": "Mario Jump",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/maro-jump-sound-effect_1.mp3"
    },
    {
        "name": "Shut your mouth SYFM",
        "color": "rgb(116, 101, 255)",
        "mp3": "/media/sounds/shut-your-mouth-syfm.mp3"
    },
    {
        "name": "HAha funny laugh",
        "color": "rgb(70, 255, 24)",
        "mp3": "/media/sounds/ny-video-online-audio-converter.mp3"
    },
    {
        "name": "GREEN GIANT (no HO HO HO)",
        "color": "rgb(72, 255, 35)",
        "mp3": "/media/sounds/green-giant-no-ho-ho-ho.mp3"
    },
    {
        "name": "heavenly musiic",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/heavenly-music-gaming-sound-effect-hd-mp3cut.mp3"
    },
    {
        "name": "Awkward cricket",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/awkward-cricket-sound-effect.mp3"
    },
    {
        "name": "Correct Answer GameShow",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/correct.mp3"
    },
    {
        "name": "Ngakak laugh annoying",
        "color": "rgb(214, 255, 142)",
        "mp3": "/media/sounds/ngakak-laugh-annoying.mp3"
    },
    {
        "name": "MAN SNORING MEME",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/man-snoring-meme_ctrllNn.mp3"
    },
    {
        "name": "Pookie Bear",
        "color": "rgb(255, 0, 200)",
        "mp3": "/media/sounds/pookie-bear.mp3"
    },
    {
        "name": "You are an idiot!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/you-are-an-idiot.mp3"
    },
    {
        "name": "Sybau",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sybau.mp3"
    },
    {
        "name": "Lobotomy Sound Effect",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/lobotomy-sound-effect.mp3"
    },
    {
        "name": "asian meme huh?",
        "color": "rgb(186, 255, 255)",
        "mp3": "/media/sounds/huh_37bAoRo.mp3"
    },
    {
        "name": "Mac Quack",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mac-quack.mp3"
    },
    {
        "name": "Shut your mouth SYFM",
        "color": "rgb(116, 101, 255)",
        "mp3": "/media/sounds/shut-your-mouth-syfm.mp3"
    },
    {
        "name": "Звук литвина",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/zvuk-litvina.mp3"
    },
    {
        "name": "Lobotomy Sound Effect",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/lobotomy-sound-effect.mp3"
    },
    {
        "name": "Awkward cricket",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/awkward-cricket-sound-effect.mp3"
    },
    {
        "name": "asian meme huh?",
        "color": "rgb(186, 255, 255)",
        "mp3": "/media/sounds/huh_37bAoRo.mp3"
    },
    {
        "name": "Mac Quack",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mac-quack.mp3"
    },
    {
        "name": "You are an idiot!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/you-are-an-idiot.mp3"
    },
    {
        "name": "Explosion meme",
        "color": "rgb(255, 201, 52)",
        "mp3": "/media/sounds/explosion-meme_dTCfAHs.mp3"
    },
    {
        "name": "500 CIGARETTES (TikTok Version)",
        "color": "rgb(57, 83, 113)",
        "mp3": "/media/sounds/500-cigarettes-tiktok-version.mp3"
    },
    {
        "name": "пердеж",
        "color": "rgb(0, 255, 72)",
        "mp3": "/media/sounds/perdezh_YQ5l54B.mp3"
    },
    {
        "name": "danger alarm sound effect meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/danger-alarm-sound-effect-meme.mp3"
    },
    {
        "name": "Wow Anime meme",
        "color": "rgb(255, 60, 0)",
        "mp3": "/media/sounds/anime-wow-sound-effect-mp3cut.mp3"
    },
    {
        "name": "Pop SFX",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/pop_7e9Is8L.mp3"
    },
    {
        "name": "The Price is Right Losing Horn",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/the-price-is-right-losing-horn.mp3"
    },
    {
        "name": "Fears to Fathom Notification Sound",
        "color": "rgb(10, 59, 51)",
        "mp3": "/media/sounds/fears-to-fathom-notification-sound.mp3"
    },
    {
        "name": "Mouse Click Sound",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/mouse-click-sound.mp3"
    },
    {
        "name": "Smoke alarm beep",
        "color": "rgb(0, 26, 255)",
        "mp3": "/media/sounds/smoke-alarm-beep.mp3"
    },
    {
        "name": "я никого не убивал",
        "color": "rgb(74, 27, 4)",
        "mp3": "/media/sounds/ia-nikogo-ne-ubival.mp3"
    },
    {
        "name": "Пошел ты н пид",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/poshel-ty-n-pid.mp3"
    },
    {
        "name": "Oh Brother, This Guy Stinks!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/oh-brother-this-guy-stinks.mp3"
    },
    {
        "name": "СКАЧАЙ МАКС",
        "color": "rgb(62, 30, 255)",
        "mp3": "/media/sounds/skachai-maks.mp3"
    },
    {
        "name": "We are Charlie Kirk",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/we-are-charlie-kirk.mp3"
    },
    {
        "name": "fahhh pump sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fahhh-pump-sound.mp3"
    },
    {
        "name": "Звук удара по металу",
        "color": "rgb(26, 255, 0)",
        "mp3": "/media/sounds/zvuk-udara-po-metalu.mp3"
    },
    {
        "name": "Camera Flash Sound Effect",
        "color": "rgb(255, 132, 224)",
        "mp3": "/media/sounds/camera-flash-sound-effect.mp3"
    },
    {
        "name": "Low honor RDR 2",
        "color": "rgb(128, 0, 0)",
        "mp3": "/media/sounds/low-honor-rdr-2.mp3"
    },
    {
        "name": "Sybau",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sybau.mp3"
    },
    {
        "name": "FNAF Jumpscare Scream",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/five-nights-at-freddys-full-scream-sound_2.mp3"
    },
    {
        "name": "Fart Meme Sound (Better and louder)",
        "color": "rgb(146, 93, 52)",
        "mp3": "/media/sounds/fartmeme.mp3"
    },
    {
        "name": "67 kid",
        "color": "rgb(255, 190, 40)",
        "mp3": "/media/sounds/67-kid.mp3"
    },
    {
        "name": "SUBWAY SURFERS BASS BOOSTED",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/subway-surfers-bass-boosted.mp3"
    },
    {
        "name": "SUKUNA GUGU GAGA LOUDEST",
        "color": "rgb(255, 18, 20)",
        "mp3": "/media/sounds/sukuna-gugu-gaga-loudest.mp3"
    },
    {
        "name": "he he he ha clash royale (DEEP FRIED)",
        "color": "rgb(88, 85, 255)",
        "mp3": "/media/sounds/he-he-he-ha-clash-royale-deep-fried.mp3"
    },
    {
        "name": "gah dayum",
        "color": "rgb(6, 0, 107)",
        "mp3": "/media/sounds/gah-dayum.mp3"
    },
    {
        "name": "Another One DJ Khaled",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/another-one_dPvHt2Z.mp3"
    },
    {
        "name": "where are you goingg",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/where-are-you-goingg.mp3"
    },
    {
        "name": "пердеж",
        "color": "rgb(0, 255, 72)",
        "mp3": "/media/sounds/perdezh_YQ5l54B.mp3"
    },
    {
        "name": "fahhh pump sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fahhh-pump-sound.mp3"
    },
    {
        "name": "Fears to Fathom Notification Sound",
        "color": "rgb(10, 59, 51)",
        "mp3": "/media/sounds/fears-to-fathom-notification-sound.mp3"
    },
    {
        "name": "Another One DJ Khaled",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/another-one_dPvHt2Z.mp3"
    },
    {
        "name": "FBI OPEN UP (with explosion)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fbi-open-up_dwLhIFf.mp3"
    },
    {
        "name": "Jogo do botão",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/psycho-scream-soundbible.mp3"
    },
    {
        "name": "rip my granny loud asf",
        "color": "rgb(195, 233, 255)",
        "mp3": "/media/sounds/rip-my-granny-loud-asf.mp3"
    },
    {
        "name": "Loud Explosion",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/loud-explosion.mp3"
    },
    {
        "name": "Call me a good boy",
        "color": "rgb(255, 145, 180)",
        "mp3": "/media/sounds/call-me-a-good-boy.mp3"
    },
    {
        "name": "СКАЧАЙ МАКС",
        "color": "rgb(62, 30, 255)",
        "mp3": "/media/sounds/skachai-maks.mp3"
    },
    {
        "name": "Звук удара по металу",
        "color": "rgb(26, 255, 0)",
        "mp3": "/media/sounds/zvuk-udara-po-metalu.mp3"
    },
    {
        "name": "City Boy",
        "color": "rgb(23, 15, 255)",
        "mp3": "/media/sounds/city-boy.mp3"
    },
    {
        "name": "Пошел ты н пид",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/poshel-ty-n-pid.mp3"
    },
    {
        "name": "Extremely loud incorrect buzzer",
        "color": "rgb(173, 255, 96)",
        "mp3": "/media/sounds/extremely-loud-incorrect-buzzer_0cDaG20.mp3"
    },
    {
        "name": "Money SoundFX",
        "color": "rgb(255, 253, 0)",
        "mp3": "/media/sounds/money-soundfx.mp3"
    },
    {
        "name": "he he he ha clash royale (DEEP FRIED)",
        "color": "rgb(88, 85, 255)",
        "mp3": "/media/sounds/he-he-he-ha-clash-royale-deep-fried.mp3"
    },
    {
        "name": "я никого не убивал",
        "color": "rgb(74, 27, 4)",
        "mp3": "/media/sounds/ia-nikogo-ne-ubival.mp3"
    },
    {
        "name": "Lagging/loading",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/loading-lost-connection-green-screen-with-sound-effect-2_K8HORkT.mp3"
    },
    {
        "name": "ACTUALLY GOOD FAHHHH sfx",
        "color": "rgb(255, 0, 247)",
        "mp3": "/media/sounds/actually-good-fahhhh-sfx.mp3"
    },
    {
        "name": "WIDE PUTIN MEME",
        "color": "rgb(33, 255, 100)",
        "mp3": "/media/sounds/my-movie-6_0RlWMvM.mp3"
    },
    {
        "name": "Please Speed I Need This",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/please-speed-i-need-this.mp3"
    },
    {
        "name": "Keyboard Typing Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/keyboard-typing-sound-effect.mp3"
    },
    {
        "name": "AUUGHHH",
        "color": "rgb(0, 33, 255)",
        "mp3": "/media/sounds/auughhh.mp3"
    },
    {
        "name": "Duck toy sound",
        "color": "rgb(255, 222, 9)",
        "mp3": "/media/sounds/duck-toy-sound.mp3"
    },
    {
        "name": "eh?eh?ehhhh?",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/eh-eh-ehhhh.mp3"
    },
    {
        "name": "spongebob boowomp",
        "color": "rgb(255, 249, 26)",
        "mp3": "/media/sounds/spongebob-boowomp.mp3"
    },
    {
        "name": "Chipmunk Laugh",
        "color": "rgb(241, 255, 0)",
        "mp3": "/media/sounds/funny_82hiegE.mp3"
    },
    {
        "name": "Hello there- obi Wan",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/obi-wan-hello-there.mp3"
    },
    {
        "name": "Lizard",
        "color": "rgb(11, 192, 53)",
        "mp3": "/media/sounds/lizard.mp3"
    },
    {
        "name": "Wrong Answer Buzzer",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/wrong-answer-buzzer.mp3"
    },
    {
        "name": "ваш сын смотрит (сирена)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/vash-syn-smotrit-sirena.mp3"
    },
    {
        "name": "BASS BOOST discord call",
        "color": "rgb(93, 0, 255)",
        "mp3": "/media/sounds/bass-boost-discord-call.mp3"
    },
    {
        "name": "1,000,000,000 IQ",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/1-000-000-000-iq.mp3"
    },
    {
        "name": "metal gear alert sound effect",
        "color": "rgb(127, 185, 255)",
        "mp3": "/media/sounds/metal-gear-alert-sound-effect_XKoHReZ.mp3"
    },
    {
        "name": "we do not care",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mike-tomlin-we-do-not-care-trim.mp3"
    },
    {
        "name": "MICHAEL DONT LEAVE ME HERE",
        "color": "rgb(131, 0, 0)",
        "mp3": "/media/sounds/michael-dont-leave-me-here.mp3"
    },
    {
        "name": "AUUGHHH",
        "color": "rgb(0, 33, 255)",
        "mp3": "/media/sounds/auughhh.mp3"
    },
    {
        "name": "Lizard",
        "color": "rgb(11, 192, 53)",
        "mp3": "/media/sounds/lizard.mp3"
    },
    {
        "name": "Дядя Саша",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/diadia-sasha_K0Xb9eR.mp3"
    },
    {
        "name": "BASS BOOST discord call",
        "color": "rgb(93, 0, 255)",
        "mp3": "/media/sounds/bass-boost-discord-call.mp3"
    },
    {
        "name": "City Boy",
        "color": "rgb(23, 15, 255)",
        "mp3": "/media/sounds/city-boy.mp3"
    },
    {
        "name": "Money SoundFX",
        "color": "rgb(255, 253, 0)",
        "mp3": "/media/sounds/money-soundfx.mp3"
    },
    {
        "name": "we do not care",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mike-tomlin-we-do-not-care-trim.mp3"
    },
    {
        "name": "Awkward Moment",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/awkward-moment.mp3"
    },
    {
        "name": "spongebob boowomp",
        "color": "rgb(255, 249, 26)",
        "mp3": "/media/sounds/spongebob-boowomp.mp3"
    },
    {
        "name": "bonk doge",
        "color": "rgb(255, 201, 121)",
        "mp3": "/media/sounds/bonk_7zPAD7C.mp3"
    },
    {
        "name": "minecraft eating sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/nom-nom-nom_gPJiWn4.mp3"
    },
    {
        "name": "The Rock Shut Up",
        "color": "rgb(0, 255, 94)",
        "mp3": "/media/sounds/the-rock-shut-up.mp3"
    },
    {
        "name": "Keyboard Typing Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/keyboard-typing-sound-effect.mp3"
    },
    {
        "name": "Доброе утро моя девочка",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/dobroe-utro-moia-devochka.mp3"
    },
    {
        "name": "discordjoin",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/discord-sounds.mp3"
    },
    {
        "name": "wet fart",
        "color": "rgb(204, 102, 0)",
        "mp3": "/media/sounds/wet-fart_1.mp3"
    },
    {
        "name": "Huh Cat",
        "color": "rgb(0, 72, 255)",
        "mp3": "/media/sounds/huh-cat.mp3"
    },
    {
        "name": "moving stone",
        "color": "rgb(65, 77, 76)",
        "mp3": "/media/sounds/moving-stone.mp3"
    },
    {
        "name": "ACTUALLY GOOD FAHHHH sfx",
        "color": "rgb(255, 0, 247)",
        "mp3": "/media/sounds/actually-good-fahhhh-sfx.mp3"
    },
    {
        "name": "Low Cortisol song",
        "color": "rgb(117, 239, 61)",
        "mp3": "/media/sounds/low-cortisol-song.mp3"
    },
    {
        "name": "Fuuuuh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fuuuuh.mp3"
    },
    {
        "name": "nelly ahh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ahh_gLSTOu4.mp3"
    },
    {
        "name": "What The Hell Meme Sound Effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/what-the-hell-meme-sound-effect.mp3"
    },
    {
        "name": "Le fart de Simon",
        "color": "rgb(75, 255, 0)",
        "mp3": "/media/sounds/le-fart-de-simon.mp3"
    },
    {
        "name": "FAHHHHH 3",
        "color": "rgb(122, 0, 0)",
        "mp3": "/media/sounds/fahhhhh-3.mp3"
    },
    {
        "name": "Оплата",
        "color": "rgb(141, 255, 239)",
        "mp3": "/media/sounds/oplata.mp3"
    },
    {
        "name": "PUMP SHOTGUN FORTNITE LOUD",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/pump-shotgun-fortnite-loud.mp3"
    },
    {
        "name": "Popular Riser metallic sound effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/popular-riser-metallic-sound-effect.mp3"
    },
    {
        "name": "1738 song",
        "color": "rgb(223, 255, 219)",
        "mp3": "/media/sounds/1738-song.mp3"
    },
    {
        "name": "HL2 Stalker Scream",
        "color": "rgb(255, 199, 228)",
        "mp3": "/media/sounds/hl2-stalker-scream.mp3"
    },
    {
        "name": "Лучший рингтон на телефон.",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/luchshii-rington-na-telefon.mp3"
    },
    {
        "name": "Rizzbot laugh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/rizzbot-laugh.mp3"
    },
    {
        "name": "EFN1",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/efn1.mp3"
    },
    {
        "name": "Hello there- obi Wan",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/obi-wan-hello-there.mp3"
    },
    {
        "name": "Man screaming aaaah",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/man-screaming-aaaah.mp3"
    },
    {
        "name": "Service Bell (2)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/stupid-f__king-bird.mp3"
    },
    {
        "name": "Fuuuuh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fuuuuh.mp3"
    },
    {
        "name": "1738 song",
        "color": "rgb(223, 255, 219)",
        "mp3": "/media/sounds/1738-song.mp3"
    },
    {
        "name": "moving stone",
        "color": "rgb(65, 77, 76)",
        "mp3": "/media/sounds/moving-stone.mp3"
    },
    {
        "name": "EFN1",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/efn1.mp3"
    },
    {
        "name": "67 brain fart",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/67-brain-fart.mp3"
    },
    {
        "name": "nelly ahh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ahh_gLSTOu4.mp3"
    },
    {
        "name": "Тёмная ночь",
        "color": "rgb(7, 0, 0)",
        "mp3": "/media/sounds/tiomnaia-noch.mp3"
    },
    {
        "name": "discord join call",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/yt1s_nYWSz5R.mp3"
    },
    {
        "name": "Pistol-shot",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/pistol-shot.mp3"
    },
    {
        "name": "sudden suspense",
        "color": "rgb(255, 251, 0)",
        "mp3": "/media/sounds/sudden-suspense-sound-effect.mp3"
    },
    {
        "name": "Service Bell (2)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/stupid-f__king-bird.mp3"
    },
    {
        "name": "DJ Airhorn",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/dj-airhorn-sound-effect-kingbeatz_1.mp3"
    },
    {
        "name": "Rahhh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/rahhh.mp3"
    },
    {
        "name": "I'm Gonna Come Trump",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/im-gonna-come_6HehWm4.mp3"
    },
    {
        "name": "Le fart de Simon",
        "color": "rgb(75, 255, 0)",
        "mp3": "/media/sounds/le-fart-de-simon.mp3"
    },
    {
        "name": "We do not care (TikTok Sound)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/we-do-not-care_phB0mEB.mp3"
    },
    {
        "name": "windows xp shutdown",
        "color": "rgb(102, 102, 255)",
        "mp3": "/media/sounds/preview_4.mp3"
    },
    {
        "name": "WhatsApp Bass Boosted",
        "color": "rgb(40, 39, 39)",
        "mp3": "/media/sounds/whatsapp-bass-boosted.mp3"
    },
    {
        "name": "plankton augh",
        "color": "rgb(49, 108, 87)",
        "mp3": "/media/sounds/plankton-augh.mp3"
    },
    {
        "name": "Gta v notification",
        "color": "rgb(69, 255, 0)",
        "mp3": "/media/sounds/gta-v-notification.mp3"
    },
    {
        "name": "English or Spanish Song",
        "color": "rgb(144, 212, 255)",
        "mp3": "/media/sounds/english-or-spanish-song.mp3"
    },
    {
        "name": "nope",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/engineer_no01_1.mp3"
    },
    {
        "name": "Данил Колбасенко",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/danil-kolbasenko.mp3"
    },
    {
        "name": "I've got this",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ive-got-this.mp3"
    },
    {
        "name": "Пицца 4 сына",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/pitstsa-4-syna.mp3"
    },
    {
        "name": "Dolphin Censor",
        "color": "rgb(0, 255, 255)",
        "mp3": "/media/sounds/spongebob-dolphin-censor.mp3"
    },
    {
        "name": "Super Mario Death",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/super-mario-death-sound-sound-effect.mp3"
    },
    {
        "name": "Mambo曼波 诗歌剧Matikanetannhauser",
        "color": "rgb(255, 211, 172)",
        "mp3": "/media/sounds/mamboman-bo-shi-ge-ju-matikanetannhauser.mp3"
    },
    {
        "name": "CSGO AWP",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/awp_02.mp3"
    },
    {
        "name": "Село Молочное",
        "color": "rgb(90, 255, 180)",
        "mp3": "/media/sounds/selo-molochnoe_STEyRIn.mp3"
    },
    {
        "name": "Час радости днс",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/chas-radosti-dns.mp3"
    },
    {
        "name": "Screaming Goat (best)",
        "color": "rgb(0, 204, 204)",
        "mp3": "/media/sounds/screaming-goat.mp3"
    },
    {
        "name": "Результаты по запросу роблокс",
        "color": "rgb(242, 129, 255)",
        "mp3": "/media/sounds/rezultaty-po-zaprosu-robloks.mp3"
    },
    {
        "name": "Fortnite default dance bass boost",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fortnite-default-dance-bass-boosted.mp3"
    },
    {
        "name": "Apple Pay Sound",
        "color": "rgb(33, 77, 255)",
        "mp3": "/media/sounds/apple-pay-sound.mp3"
    },
    {
        "name": "You Need to Leave!",
        "color": "rgb(111, 59, 255)",
        "mp3": "/media/sounds/you-need-to-leave_wDmQeme.mp3"
    },
    {
        "name": "Sponge Stank Noise",
        "color": "rgb(255, 11, 156)",
        "mp3": "/media/sounds/sponge-stank-noise.mp3"
    },
    {
        "name": "FNAF Yay Children",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/crowd_small_chil_ec049202_9klCwI6.mp3"
    },
    {
        "name": "Happy happy happy song",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/happy-happy-happy-song.mp3"
    },
    {
        "name": "omg bruh oh hell nah",
        "color": "rgb(164, 0, 255)",
        "mp3": "/media/sounds/omg-bruh-oh-hell-nah.mp3"
    },
    {
        "name": "homero gimiendo",
        "color": "rgb(219, 76, 255)",
        "mp3": "/media/sounds/homero-gimiendo.mp3"
    },
    {
        "name": "You Need to Leave!",
        "color": "rgb(111, 59, 255)",
        "mp3": "/media/sounds/you-need-to-leave_wDmQeme.mp3"
    },
    {
        "name": "Пицца 4 сына",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/pitstsa-4-syna.mp3"
    },
    {
        "name": "Clapping",
        "color": "rgb(255, 0, 51)",
        "mp3": "/media/sounds/aplausos_2.mp3"
    },
    {
        "name": "No no Wait Wait!",
        "color": "rgb(0, 255, 11)",
        "mp3": "/media/sounds/no-no-wait-wait.mp3"
    },
    {
        "name": "English or Spanish Song",
        "color": "rgb(144, 212, 255)",
        "mp3": "/media/sounds/english-or-spanish-song.mp3"
    },
    {
        "name": "Flashbang + Gah dayum",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/flashbang-gah-dayum.mp3"
    },
    {
        "name": "lizzard-1",
        "color": "rgb(28, 255, 28)",
        "mp3": "/media/sounds/lizzard-1.mp3"
    },
    {
        "name": "Данил Колбасенко",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/danil-kolbasenko.mp3"
    },
    {
        "name": "NFL Bass Boosted",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/nfl.mp3"
    },
    {
        "name": "White tee RIZZ",
        "color": "rgb(227, 224, 255)",
        "mp3": "/media/sounds/white-tee-rizz_Pw3bPh4.mp3"
    },
    {
        "name": "Fnaf 1 music box",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fnaf-1-music-box.mp3"
    },
    {
        "name": "goofy slip",
        "color": "rgb(255, 100, 12)",
        "mp3": "/media/sounds/goofy-slip.mp3"
    },
    {
        "name": "CSGO AWP",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/awp_02.mp3"
    },
    {
        "name": "fahh but louder",
        "color": "rgb(0, 255, 98)",
        "mp3": "/media/sounds/fahh-but-louder.mp3"
    },
    {
        "name": "Час радости днс",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/chas-radosti-dns.mp3"
    },
    {
        "name": "flashbang cs",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/flashbang-cs_qoRhxLn.mp3"
    },
    {
        "name": "Село Молочное",
        "color": "rgb(90, 255, 180)",
        "mp3": "/media/sounds/selo-molochnoe_STEyRIn.mp3"
    },
    {
        "name": "punch sound effect meme",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/punch-sound-effect-meme.mp3"
    },
    {
        "name": "Minecraft Hurt",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/classic_hurt.mp3"
    },
    {
        "name": "app",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/aplausos_3.mp3"
    },
    {
        "name": "vine boom bass boost sound effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/vine-boom-bass-boost-sound-effect.mp3"
    },
    {
        "name": "Результаты по запросу роблокс",
        "color": "rgb(242, 129, 255)",
        "mp3": "/media/sounds/rezultaty-po-zaprosu-robloks.mp3"
    },
    {
        "name": "oh no no no laugh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/oh-no-no-no-no-laugh.mp3"
    },
    {
        "name": "nope.avi",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/engineer_no01.mp3"
    },
    {
        "name": "Snoop Dogg meme",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/tmpbxydyrz3.mp3"
    },
    {
        "name": "Wet Slow Fart",
        "color": "rgb(129, 105, 64)",
        "mp3": "/media/sounds/fartmemereloaded.mp3"
    },
    {
        "name": "Bruh meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/movie_1_C2K5NH0.mp3"
    },
    {
        "name": "cooked dog meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/cooked-dog-meme.mp3"
    },
    {
        "name": "IA IA AHH YEYE YEYE - lovely sad",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/ia-ia-ahh-yeye-yeye-lovely-sad.mp3"
    },
    {
        "name": "My Mom Is Kinda FAHHH",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/my-mom-is-kinda-fahhh.mp3"
    },
    {
        "name": "DEJA VU MEME",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/deja-vu.mp3"
    },
    {
        "name": "Mario screaming 1",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/tmpcoj3v_01.mp3"
    },
    {
        "name": "mi bombo duolingo",
        "color": "rgb(22, 135, 255)",
        "mp3": "/media/sounds/mi-bombo-duolingo.mp3"
    },
    {
        "name": "Flashbang + Gah dayum",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/flashbang-gah-dayum.mp3"
    },
    {
        "name": "Adele- This is the end",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/ad.mp3"
    },
    {
        "name": "Law and Order DUN DUN",
        "color": "rgb(204, 153, 102)",
        "mp3": "/media/sounds/dun_dun_1.mp3"
    },
    {
        "name": "spongebob sad song",
        "color": "rgb(255, 228, 58)",
        "mp3": "/media/sounds/spongebob-sad-song.mp3"
    },
    {
        "name": "app",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/aplausos_3.mp3"
    },
    {
        "name": "Slap *oh*",
        "color": "rgb(114, 88, 255)",
        "mp3": "/media/sounds/slap-oh_LGvkhyt.mp3"
    },
    {
        "name": "Clapping",
        "color": "rgb(255, 0, 51)",
        "mp3": "/media/sounds/aplausos_2.mp3"
    },
    {
        "name": "goofy slip",
        "color": "rgb(255, 100, 12)",
        "mp3": "/media/sounds/goofy-slip.mp3"
    },
    {
        "name": "Sponge Bob Disgusting",
        "color": "rgb(211, 199, 0)",
        "mp3": "/media/sounds/sponge-bob-disgusting.mp3"
    },
    {
        "name": "American Anthem (Gun and Eagle)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/american-anthem-gun-and-eagle.mp3"
    },
    {
        "name": "French meme song",
        "color": "rgb(60, 37, 255)",
        "mp3": "/media/sounds/french-meme-song.mp3"
    },
    {
        "name": "Load and Gunshot Fire",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gunshot-one.mp3"
    },
    {
        "name": "sonic ring",
        "color": "rgb(0, 51, 255)",
        "mp3": "/media/sounds/26f8b9_sonic_ring_sound_effect.mp3"
    },
    {
        "name": "Minecraft Click",
        "color": "rgb(255, 102, 153)",
        "mp3": "/media/sounds/minecraft_click.mp3"
    },
    {
        "name": "WEAVE",
        "color": "rgb(132, 0, 255)",
        "mp3": "/media/sounds/weave.mp3"
    },
    {
        "name": "Fnaf 1 music box",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fnaf-1-music-box.mp3"
    },
    {
        "name": "omg bruh oh hell nah",
        "color": "rgb(164, 0, 255)",
        "mp3": "/media/sounds/omg-bruh-oh-hell-nah.mp3"
    },
    {
        "name": "Metal Pipe Falling Sound Effect",
        "color": "rgb(87, 69, 96)",
        "mp3": "/media/sounds/metal-pipe-falling-sound-effect.mp3"
    },
    {
        "name": "IA IA AHH YEYE YEYE - lovely sad",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/ia-ia-ahh-yeye-yeye-lovely-sad.mp3"
    },
    {
        "name": "Система поиска пи###са",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sistema-poiska-pi-sa.mp3"
    },
    {
        "name": "GET OVER HERE Scorpion",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/scorpion-get_over_here.mp3"
    },
    {
        "name": "roblox horror",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/do-not-open.mp3"
    },
    {
        "name": "punch sound effect meme",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/punch-sound-effect-meme.mp3"
    },
    {
        "name": "Имбо отрыжка",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/imbo-otryzhka.mp3"
    },
    {
        "name": "LO SIENTO WILSON",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/lo-siento-wilson.mp3"
    },
    {
        "name": "discord troll",
        "color": "rgb(0, 255, 17)",
        "mp3": "/media/sounds/mikejebait-3.mp3"
    },
    {
        "name": "squidward walking sound",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/squidward-walking-sound.mp3"
    },
    {
        "name": "i farted and a poopy almost slipped out",
        "color": "rgb(152, 120, 60)",
        "mp3": "/media/sounds/i-farted-and-a-poopy-almost-slipped-out.mp3"
    },
    {
        "name": "hold up tiktok",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/hold-up-tiktok.mp3"
    },
    {
        "name": "Happy happy happy song",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/happy-happy-happy-song.mp3"
    },
    {
        "name": "Трактор въехал в днс",
        "color": "rgb(8, 159, 255)",
        "mp3": "/media/sounds/traktor-vekhal-v-dns.mp3"
    },
    {
        "name": "vine boom bass boost sound effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/vine-boom-bass-boost-sound-effect.mp3"
    },
    {
        "name": "wut",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/record-scratch-2.mp3"
    },
    {
        "name": "Kids Cheering",
        "color": "rgb(0, 204, 0)",
        "mp3": "/media/sounds/kids_cheering.mp3"
    },
    {
        "name": "omg bruh oh hell nah",
        "color": "rgb(164, 0, 255)",
        "mp3": "/media/sounds/omg-bruh-oh-hell-nah.mp3"
    },
    {
        "name": "Metal Pipe Falling Sound Effect",
        "color": "rgb(87, 69, 96)",
        "mp3": "/media/sounds/metal-pipe-falling-sound-effect.mp3"
    },
    {
        "name": "Имбо отрыжка",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/imbo-otryzhka.mp3"
    },
    {
        "name": "Система поиска пи###са",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sistema-poiska-pi-sa.mp3"
    },
    {
        "name": "discord troll",
        "color": "rgb(0, 255, 17)",
        "mp3": "/media/sounds/mikejebait-3.mp3"
    },
    {
        "name": "Kids Cheering",
        "color": "rgb(0, 204, 0)",
        "mp3": "/media/sounds/kids_cheering.mp3"
    },
    {
        "name": "GET OVER HERE Scorpion",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/scorpion-get_over_here.mp3"
    },
    {
        "name": "Pan Hit",
        "color": "rgb(51, 51, 204)",
        "mp3": "/media/sounds/hitsound_2.mp3"
    },
    {
        "name": "LO SIENTO WILSON",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/lo-siento-wilson.mp3"
    },
    {
        "name": "Wilhelm Scream",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/wilhelmscream.mp3"
    },
    {
        "name": "\"My leg!\" Fish",
        "color": "rgb(255, 204, 0)",
        "mp3": "/media/sounds/my-leg_2.mp3"
    },
    {
        "name": "bass drop sound effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bass-drop-edit_mixdown.mp3"
    },
    {
        "name": "Tik Tok India",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/panjabi-mc-mundian-tu-bach-ke-0s-16s-kfmq4pgaove_tjS6M4I.mp3"
    },
    {
        "name": "wut",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/record-scratch-2.mp3"
    },
    {
        "name": "punch sound effect meme",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/punch-sound-effect-meme.mp3"
    },
    {
        "name": "Meow 1",
        "color": "rgb(202, 155, 0)",
        "mp3": "/media/sounds/meow-1.mp3"
    },
    {
        "name": "hold up tiktok",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/hold-up-tiktok.mp3"
    },
    {
        "name": "Ankle breaker",
        "color": "rgb(255, 136, 0)",
        "mp3": "/media/sounds/ankle-breaker_j3Df0TU.mp3"
    },
    {
        "name": "Charlie kirky funk",
        "color": "rgb(0, 85, 255)",
        "mp3": "/media/sounds/charlie-kirky-funk.mp3"
    },
    {
        "name": "nya cat girl sound",
        "color": "rgb(90, 65, 255)",
        "mp3": "/media/sounds/nya_2xyALFL.mp3"
    },
    {
        "name": "Chalo",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/chalo.mp3"
    },
    {
        "name": "Shut up!",
        "color": "rgb(204, 102, 153)",
        "mp3": "/media/sounds/shutup.swf.mp3"
    },
    {
        "name": "It was at this moment he knew",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/heknew.mp3"
    },
    {
        "name": "oh my god, wow!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/omgwow.mp3"
    },
    {
        "name": "Deltarune Explosion",
        "color": "rgb(52, 106, 255)",
        "mp3": "/media/sounds/deltarune-explosion.mp3"
    },
    {
        "name": "LEBRON",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/lebron.mp3"
    },
    {
        "name": "She gonna call me baby boo",
        "color": "rgb(172, 255, 163)",
        "mp3": "/media/sounds/she-gonna-call-me-baby-boo.mp3"
    },
    {
        "name": "cooked dog meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/cooked-dog-meme.mp3"
    },
    {
        "name": "you've got mail",
        "color": "rgb(102, 0, 255)",
        "mp3": "/media/sounds/yougotmail.mp3"
    },
    {
        "name": "take a look around you",
        "color": "rgb(60, 70, 255)",
        "mp3": "/media/sounds/take-a-look-around-you.mp3"
    },
    {
        "name": "Re:Zero Return by Death",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/re-zero-return-by-death.mp3"
    },
    {
        "name": "Mimimi clash Royale",
        "color": "rgb(54, 199, 29)",
        "mp3": "/media/sounds/mimimi-clash-royale.mp3"
    },
    {
        "name": "смех ребенка",
        "color": "rgb(255, 213, 0)",
        "mp3": "/media/sounds/smekh-rebenka.mp3"
    },
    {
        "name": "Talking ben saying ben",
        "color": "rgb(255, 231, 133)",
        "mp3": "/media/sounds/talking-ben-saying-ben.mp3"
    },
    {
        "name": "RICK ROLLED!!!! BWHAHAHAHAHAHA",
        "color": "rgb(255, 255, 102)",
        "mp3": "/media/sounds/epic.mp3"
    },
    {
        "name": "DAMN!!!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/friday-damn.mp3"
    },
    {
        "name": "Rizz walk",
        "color": "rgb(91, 225, 255)",
        "mp3": "/media/sounds/rizz-walk.mp3"
    },
    {
        "name": "wee weee weee",
        "color": "rgb(49, 255, 221)",
        "mp3": "/media/sounds/weeeee_original_1193597514938524841.mp3"
    },
    {
        "name": "oiia oiia Sound",
        "color": "rgb(136, 126, 36)",
        "mp3": "/media/sounds/oiia-oiia-sound.mp3"
    },
    {
        "name": "Metal Pipe Falling Sound Effect",
        "color": "rgb(87, 69, 96)",
        "mp3": "/media/sounds/metal-pipe-falling-sound-effect.mp3"
    },
    {
        "name": "2017 youtube background music LOW QUALITY",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/2017-youtube-background-music-low-quality.mp3"
    },
    {
        "name": "DAMN!!!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/friday-damn.mp3"
    },
    {
        "name": "GET OVER HERE Scorpion",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/scorpion-get_over_here.mp3"
    },
    {
        "name": "FAHHHH 2",
        "color": "rgb(100, 38, 255)",
        "mp3": "/media/sounds/fahhhh-2.mp3"
    },
    {
        "name": "X files",
        "color": "rgb(153, 153, 153)",
        "mp3": "/media/sounds/expedientes-secretos-x-musica22.mp3"
    },
    {
        "name": "Roblox Explosion Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/roblox-explosion-sound.mp3"
    },
    {
        "name": "FNaF Golden Freddy Scream",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/full-golden-freddy-scream.mp3"
    },
    {
        "name": "Cartoon boing sfx",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/cartoon-boing_7vRWDlc.mp3"
    },
    {
        "name": "67 normal",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/67-normal.mp3"
    },
    {
        "name": "discord troll",
        "color": "rgb(0, 255, 17)",
        "mp3": "/media/sounds/mikejebait-3.mp3"
    },
    {
        "name": "correct (ding)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ding-sound-effect_1.mp3"
    },
    {
        "name": "Talking ben saying ben",
        "color": "rgb(255, 231, 133)",
        "mp3": "/media/sounds/talking-ben-saying-ben.mp3"
    },
    {
        "name": "bass drop sound effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bass-drop-edit_mixdown.mp3"
    },
    {
        "name": "Deltarune Explosion",
        "color": "rgb(52, 106, 255)",
        "mp3": "/media/sounds/deltarune-explosion.mp3"
    },
    {
        "name": "Flapjack Scream",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/flap-jack-scream.mp3"
    },
    {
        "name": "Система поиска пи###са",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sistema-poiska-pi-sa.mp3"
    },
    {
        "name": "Noooo!",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/nooo.swf.mp3"
    },
    {
        "name": "Pew",
        "color": "rgb(0, 255, 255)",
        "mp3": "/media/sounds/pew-pew-lame-sound-effect.mp3"
    },
    {
        "name": "vine boom sound effect full",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/vine-boom-sound-effect-full.mp3"
    },
    {
        "name": "SYFM LOUD",
        "color": "rgb(255, 223, 223)",
        "mp3": "/media/sounds/syfm-loud_xRTiPcw.mp3"
    },
    {
        "name": "GUNSHOT",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gunshot1-connor_p-8650_hifi.mp3"
    },
    {
        "name": "Thank You For Your Patronage",
        "color": "rgb(255, 217, 63)",
        "mp3": "/media/sounds/thank-you-for-your-patronage.mp3"
    },
    {
        "name": "Sonic.exe scream",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sonic-exe-scream.mp3"
    },
    {
        "name": "f1 Radio",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/f1-radio_QLwLncI.mp3"
    },
    {
        "name": "Мелстрой пам-пам-пам",
        "color": "rgb(111, 255, 79)",
        "mp3": "/media/sounds/melstroi-pam-pam-pam.mp3"
    },
    {
        "name": "frog laughing meme",
        "color": "rgb(255, 71, 224)",
        "mp3": "/media/sounds/frog-laughing-meme.mp3"
    },
    {
        "name": "Indian under the water",
        "color": "rgb(107, 169, 220)",
        "mp3": "/media/sounds/y2mate_HOnnyD0.mp3"
    },
    {
        "name": "Rahh Skeletons",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/rahh-skeletons.mp3"
    },
    {
        "name": "take a look around you",
        "color": "rgb(60, 70, 255)",
        "mp3": "/media/sounds/take-a-look-around-you.mp3"
    },
    {
        "name": "CINEMATIC SUSPENSE RISER",
        "color": "rgb(132, 66, 255)",
        "mp3": "/media/sounds/cinematic-suspense-riser.mp3"
    },
    {
        "name": "Doge bonk",
        "color": "rgb(67, 179, 180)",
        "mp3": "/media/sounds/bonk_BEtiM8g.mp3"
    },
    {
        "name": "oh my god, wow!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/omgwow.mp3"
    },
    {
        "name": "baby boo ice cream",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/baby-boo-ice-cream.mp3"
    },
    {
        "name": "Tudum tedev",
        "color": "rgb(8, 0, 85)",
        "mp3": "/media/sounds/tudum-tedev.mp3"
    },
    {
        "name": "AMOGUS SCREAMING",
        "color": "rgb(255, 214, 49)",
        "mp3": "/media/sounds/guy-yelling-among-us-sound-effect.mp3"
    },
    {
        "name": "Directed by Robert B Weide",
        "color": "rgb(126, 255, 165)",
        "mp3": "/media/sounds/directed-by-robert-b_voI2Z4T.mp3"
    },
    {
        "name": "oof minecraft",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/steve-old-hurt-sound_XKZxUk4.mp3"
    },
    {
        "name": "Nintendo Game Boy Startup",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/nintendo-game-boy-startup.mp3"
    },
    {
        "name": "check mark",
        "color": "rgb(255, 129, 33)",
        "mp3": "/media/sounds/check-mark_oPG7Xo5.mp3"
    },
    {
        "name": "Discord Leaving",
        "color": "rgb(255, 51, 0)",
        "mp3": "/media/sounds/discord_leave_sound_effect_download.mp3"
    },
    {
        "name": "f1 Radio",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/f1-radio_QLwLncI.mp3"
    },
    {
        "name": "RDR2 low honour sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/rdr2-low-honour-sound.mp3"
    },
    {
        "name": "SYFM LOUD",
        "color": "rgb(255, 223, 223)",
        "mp3": "/media/sounds/syfm-loud_xRTiPcw.mp3"
    },
    {
        "name": "Fart Sound Effect (From 21st Century Memes)",
        "color": "rgb(151, 42, 2)",
        "mp3": "/media/sounds/fart-meme-sound_qo90QRs.mp3"
    },
    {
        "name": "Prowler",
        "color": "rgb(118, 49, 154)",
        "mp3": "/media/sounds/prowler.mp3"
    },
    {
        "name": "I'm over here strokin my d",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/im-over-here-strokin-my-d.mp3"
    },
    {
        "name": "Indian under the water",
        "color": "rgb(107, 169, 220)",
        "mp3": "/media/sounds/y2mate_HOnnyD0.mp3"
    },
    {
        "name": "Car Crash SFX",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/car-crash_OwBDipR.mp3"
    },
    {
        "name": "Parry ultrakill",
        "color": "rgb(35, 50, 148)",
        "mp3": "/media/sounds/parry-ultrakill.mp3"
    },
    {
        "name": "Путин виноват",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/putin-vinovat.mp3"
    },
    {
        "name": "Pokemon-Level Up!",
        "color": "rgb(0, 255, 204)",
        "mp3": "/media/sounds/12_3.mp3"
    },
    {
        "name": "Super Mario Beedoo",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/super-mario-beedoo_F3cwLoe.mp3"
    },
    {
        "name": "Violin screech meme",
        "color": "rgb(71, 255, 83)",
        "mp3": "/media/sounds/violin-screech-meme.mp3"
    },
    {
        "name": "BOING . MP3",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/boing_lmke36X.mp3"
    },
    {
        "name": "Something In My Ass!",
        "color": "rgb(17, 38, 55)",
        "mp3": "/media/sounds/something-in-my-ass_gCDhPgd.mp3"
    },
    {
        "name": "auraa",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/auraa.mp3"
    },
    {
        "name": "Выстрел! Выстрел!",
        "color": "rgb(34, 0, 255)",
        "mp3": "/media/sounds/vystrel-vystrel_HtHCfaH.mp3"
    },
    {
        "name": "Crickets",
        "color": "rgb(51, 153, 0)",
        "mp3": "/media/sounds/crickets.swf.mp3"
    },
    {
        "name": "Minecraft Villager Sound",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/minecraft-villager-sound-effect.mp3"
    },
    {
        "name": "Nuclear Fart",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/nuclear-fart-1.mp3"
    },
    {
        "name": "helicopter helicopter parakofer parakofer",
        "color": "rgb(0, 255, 84)",
        "mp3": "/media/sounds/helicopter-helicopter-parakofer-parakofer.mp3"
    },
    {
        "name": "Nuclear Alarm Siren",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/nuclear-alarm-siren.mp3"
    },
    {
        "name": "Duolingo Correct",
        "color": "rgb(26, 255, 13)",
        "mp3": "/media/sounds/duolingo-correct.mp3"
    },
    {
        "name": "excellent raid",
        "color": "rgb(2, 255, 162)",
        "mp3": "/media/sounds/excellent-raid.mp3"
    },
    {
        "name": "Eww brother eww",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/eww-brother-eww.mp3"
    },
    {
        "name": "angry roblox",
        "color": "rgb(129, 26, 26)",
        "mp3": "/media/sounds/angry-roblox.mp3"
    },
    {
        "name": "TF2 Critical hit",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/critical-hit-sounds-effect.mp3"
    },
    {
        "name": "Weird route jingle",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/weird-route-jingle.mp3"
    },
    {
        "name": "helicopter helicopter parakofer parakofer",
        "color": "rgb(0, 255, 84)",
        "mp3": "/media/sounds/helicopter-helicopter-parakofer-parakofer.mp3"
    },
    {
        "name": "sonic rings falling",
        "color": "rgb(0, 51, 255)",
        "mp3": "/media/sounds/sonic-rings-drop.mp3"
    },
    {
        "name": "Eww brother eww",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/eww-brother-eww.mp3"
    },
    {
        "name": "angry roblox",
        "color": "rgb(129, 26, 26)",
        "mp3": "/media/sounds/angry-roblox.mp3"
    },
    {
        "name": "Cinematic Boom",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/cinematicboom.mp3"
    },
    {
        "name": "samsung spaceline notification",
        "color": "rgb(17, 0, 255)",
        "mp3": "/media/sounds/samsung-spaceline-notification.mp3"
    },
    {
        "name": "Rahh Skeletons",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/rahh-skeletons.mp3"
    },
    {
        "name": "Арматура",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/armatura_P29FH2w.mp3"
    },
    {
        "name": "Fahhhh",
        "color": "rgb(255, 105, 125)",
        "mp3": "/media/sounds/fahhhh.mp3"
    },
    {
        "name": "Minecraft drinking sound",
        "color": "rgb(0, 255, 13)",
        "mp3": "/media/sounds/minecraft-drinking-sound-effect.mp3"
    },
    {
        "name": "Johnny Test Whip Crack",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/johnny-test-whip-crack.mp3"
    },
    {
        "name": "Mii Channel Music",
        "color": "rgb(213, 226, 255)",
        "mp3": "/media/sounds/mii-channel-music.mp3"
    },
    {
        "name": "Stranger Things Clock Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/stranger-things-clock-sound.mp3"
    },
    {
        "name": "YOU NEED TO LEAVE",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/you-need-to-leave.mp3"
    },
    {
        "name": "FAAHHHHHH",
        "color": "rgb(0, 255, 251)",
        "mp3": "/media/sounds/faahhhhhh.mp3"
    },
    {
        "name": "Minecraft Enderman Teleport Sound",
        "color": "rgb(189, 19, 231)",
        "mp3": "/media/sounds/teleport1_Cw1ot9l.mp3"
    },
    {
        "name": "uwu discord gorl",
        "color": "rgb(252, 204, 255)",
        "mp3": "/media/sounds/uwu-discord-gorl.mp3"
    },
    {
        "name": "Crowd Boo",
        "color": "rgb(204, 0, 204)",
        "mp3": "/media/sounds/crowd-boo.mp3"
    },
    {
        "name": "Give it to him Boom Shakalaka",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/give-it-to-him-boom.mp3"
    },
    {
        "name": "Смешарики Погоня",
        "color": "rgb(0, 81, 255)",
        "mp3": "/media/sounds/smeshariki-pogonia.mp3"
    },
    {
        "name": "ILARI ILARI ILARIÊ TROLL",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/ilari-ilari-ilarie-troll.mp3"
    },
    {
        "name": "sitcom laugh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sitcom-laughing-1.mp3"
    },
    {
        "name": "You What?",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/you-what-spongebob.mp3"
    },
    {
        "name": "Reload Gun",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gunreload.mp3"
    },
    {
        "name": "crowd gasp",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gasp_SJHmiqB.mp3"
    },
    {
        "name": "Uwu hannah",
        "color": "rgb(222, 74, 255)",
        "mp3": "/media/sounds/uwu-hannah.mp3"
    },
    {
        "name": "TheBurntPeanut Hooray",
        "color": "rgb(207, 117, 14)",
        "mp3": "/media/sounds/theburntpeanut-hooray.mp3"
    },
    {
        "name": "pokemon battle",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/pokemon-battle.mp3"
    },
    {
        "name": "Wrong lie incorrect buzzer",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/wrong-lie-incorrect-buzzer.mp3"
    },
    {
        "name": "Burp & Fart",
        "color": "rgb(255, 114, 114)",
        "mp3": "/media/sounds/burp-fart.mp3"
    },
    {
        "name": "Pikmin!",
        "color": "rgb(93, 84, 84)",
        "mp3": "/media/sounds/pikmin-gcn.mp3"
    },
    {
        "name": "Anime punch",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/strongpunch.mp3"
    },
    {
        "name": "discord kitten",
        "color": "rgb(255, 66, 206)",
        "mp3": "/media/sounds/discord-kitten.mp3"
    },
    {
        "name": "AW HELL NAH MAN",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/aw-hell-nah-man.mp3"
    },
    {
        "name": "Swoosh Sound Effects",
        "color": "rgb(64, 51, 255)",
        "mp3": "/media/sounds/swoosh-sound-effects.mp3"
    },
    {
        "name": "jet set radio spray full",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/jet-set-radio-spray-full_DP2X9GC.mp3"
    },
    {
        "name": "AIIII AIII AIIII",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/aiiii-aiii-aiiii.mp3"
    },
    {
        "name": "hitmarker.mp3",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hitmarker_2.mp3"
    },
    {
        "name": "Swoosh Sound Effects",
        "color": "rgb(64, 51, 255)",
        "mp3": "/media/sounds/swoosh-sound-effects.mp3"
    },
    {
        "name": "jet set radio spray 1",
        "color": "rgb(246, 255, 0)",
        "mp3": "/media/sounds/jet-set-radio-spray-1_4CFwPkb.mp3"
    },
    {
        "name": "Coin Mario",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/super-mario-coin-sound.mp3"
    },
    {
        "name": "Gojo domain expansion",
        "color": "rgb(217, 202, 255)",
        "mp3": "/media/sounds/rpreplay_final1623689697_mov.mp3"
    },
    {
        "name": "67 normal",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/67-normal.mp3"
    },
    {
        "name": "Train horn meme",
        "color": "rgb(18, 164, 255)",
        "mp3": "/media/sounds/train-horn-meme_v6N3591.mp3"
    },
    {
        "name": "yes king teach me",
        "color": "rgb(251, 255, 52)",
        "mp3": "/media/sounds/yes-king-teach-me.mp3"
    },
    {
        "name": "Whoosh Wind",
        "color": "rgb(104, 124, 255)",
        "mp3": "/media/sounds/whoosh-wind.mp3"
    },
    {
        "name": "Snapchat message",
        "color": "rgb(255, 242, 1)",
        "mp3": "/media/sounds/snapchat-message.mp3"
    },
    {
        "name": "quack.mp3",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/quack_5.mp3"
    },
    {
        "name": "Anime punch",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/strongpunch.mp3"
    },
    {
        "name": "Fart Effect",
        "color": "rgb(50, 255, 112)",
        "mp3": "/media/sounds/09037.mp3"
    },
    {
        "name": "РЖД прибытие поезда",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/rzhd-pribytie-poezda.mp3"
    },
    {
        "name": "Mogged",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mogged.mp3"
    },
    {
        "name": "Винкс",
        "color": "rgb(160, 255, 86)",
        "mp3": "/media/sounds/vinks.mp3"
    },
    {
        "name": "Darth Vader NOOOOOOOOO!",
        "color": "rgb(0, 255, 255)",
        "mp3": "/media/sounds/nooo.mp3"
    },
    {
        "name": "Knuckles-Oh No",
        "color": "rgb(204, 51, 0)",
        "mp3": "/media/sounds/oh_no_1.mp3"
    },
    {
        "name": "Zelda - Item Get",
        "color": "rgb(0, 153, 0)",
        "mp3": "/media/sounds/139-item-catch.mp3"
    },
    {
        "name": "Boxing Bell",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/boxing-bell.mp3"
    },
    {
        "name": "Миша Привет!!!",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/misha-privet.mp3"
    },
    {
        "name": "CLAP BUTTON",
        "color": "rgb(255, 213, 0)",
        "mp3": "/media/sounds/clap-button_u6oe9JL.mp3"
    },
    {
        "name": "FBI open UP",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fbi-open-up-sfx.mp3"
    },
    {
        "name": "Crazy Realistic Knocking Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/crazy-realistic-knocking-sound-troll-twitch-streamers_small_mYNcUdA.mp3"
    },
    {
        "name": "aw Shit here we go again",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gta-san-andreas-ah-shit-here-we-go-again.mp3"
    },
    {
        "name": "Steal a Brainrot - Dragon Cannelloni",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/steal-a-brainrot-dragon-cannelloni.mp3"
    },
    {
        "name": "HO HO GREEN GIANT",
        "color": "rgb(38, 255, 49)",
        "mp3": "/media/sounds/ho-ho-ho-green-giant-audio-clip_yJDcgA1.mp3"
    },
    {
        "name": "Данило Колбасенко",
        "color": "rgb(91, 41, 53)",
        "mp3": "/media/sounds/danilo-kolbasenko.mp3"
    },
    {
        "name": "Why are you running?",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/why-are.mp3"
    },
    {
        "name": "Goofy Yell",
        "color": "rgb(51, 102, 255)",
        "mp3": "/media/sounds/goofy-yell.mp3"
    },
    {
        "name": "MMM (Rap)",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/mmm-6.mp3"
    },
    {
        "name": "СЛЫШ 1",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/slysh-1.mp3"
    },
    {
        "name": "Windows XP - Startup Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/windows-xp-startup.mp3"
    },
    {
        "name": "Dial Up Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/dial_up.mp3"
    },
    {
        "name": "pop",
        "color": "rgb(102, 51, 204)",
        "mp3": "/media/sounds/comedy_pop_finger_in_mouth_001.mp3"
    },
    {
        "name": "Say wallahi - ishowspeed",
        "color": "rgb(255, 37, 230)",
        "mp3": "/media/sounds/say-wallahi-ishowspeed.mp3"
    },
    {
        "name": "FBI open UP",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fbi-open-up-sfx.mp3"
    },
    {
        "name": "FIRE IN THE HOLE Geometry Dash",
        "color": "rgb(18, 255, 0)",
        "mp3": "/media/sounds/fire-in-the-hole-geometry-dash.mp3"
    },
    {
        "name": "Crowd Boo",
        "color": "rgb(204, 0, 204)",
        "mp3": "/media/sounds/crowd-boo.mp3"
    },
    {
        "name": "jet set radio spray full",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/jet-set-radio-spray-full_DP2X9GC.mp3"
    },
    {
        "name": "Got a Item BOTW",
        "color": "rgb(36, 101, 3)",
        "mp3": "/media/sounds/zelda_-botw-item-get-sound-effect_360p-online-audio-converter.mp3"
    },
    {
        "name": "AIIII AIII AIIII",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/aiiii-aiii-aiiii.mp3"
    },
    {
        "name": "Ladle meoww ghop ghop ghop",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/ladle-meoww-ghop-ghop-ghop.mp3"
    },
    {
        "name": "Kim jung goon",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/kim-jung-goon.mp3"
    },
    {
        "name": "Minecraft XP Sound",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/orb.mp3"
    },
    {
        "name": "pop",
        "color": "rgb(102, 51, 204)",
        "mp3": "/media/sounds/comedy_pop_finger_in_mouth_001.mp3"
    },
    {
        "name": "Whoosh Wind",
        "color": "rgb(104, 124, 255)",
        "mp3": "/media/sounds/whoosh-wind.mp3"
    },
    {
        "name": "jet set radio spray 1",
        "color": "rgb(246, 255, 0)",
        "mp3": "/media/sounds/jet-set-radio-spray-1_4CFwPkb.mp3"
    },
    {
        "name": "Give it to him Boom Shakalaka",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/give-it-to-him-boom.mp3"
    },
    {
        "name": "NO GOD! PLEASE NO!!! NOOOOOOOO",
        "color": "rgb(0, 0, 153)",
        "mp3": "/media/sounds/no-god-please-no-noooooooooo.mp3"
    },
    {
        "name": "quack.mp3",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/quack_5.mp3"
    },
    {
        "name": "FNAF 2 Hallway Ambience",
        "color": "rgb(93, 255, 240)",
        "mp3": "/media/sounds/fnaf-2-hallway-ambience.mp3"
    },
    {
        "name": "Cartoon running",
        "color": "rgb(255, 193, 0)",
        "mp3": "/media/sounds/cartoon-running-sound-effect-online-audio-converter.mp3"
    },
    {
        "name": "Wrong lie incorrect buzzer",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/wrong-lie-incorrect-buzzer.mp3"
    },
    {
        "name": "Defy Gravity x God Is Kanye",
        "color": "rgb(0, 222, 7)",
        "mp3": "/media/sounds/defy-gravity-x-god-is-kanye.mp3"
    },
    {
        "name": "Snapchat message",
        "color": "rgb(255, 242, 1)",
        "mp3": "/media/sounds/snapchat-message.mp3"
    },
    {
        "name": "Roblox Hi Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/roblox-hi-sound.mp3"
    },
    {
        "name": "Wet fart meme",
        "color": "rgb(109, 73, 20)",
        "mp3": "/media/sounds/wet-fart-meme.mp3"
    },
    {
        "name": "HUH? Cat meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/huh-cat-meme.mp3"
    },
    {
        "name": "фонк ребенок плачет",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fonk-rebenok-plachet.mp3"
    },
    {
        "name": "Naruto Sad Song",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/naruto-sad-music-instant.mp3"
    },
    {
        "name": "discord kitten",
        "color": "rgb(255, 66, 206)",
        "mp3": "/media/sounds/discord-kitten.mp3"
    },
    {
        "name": "roblox bye",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/roblox-bye.mp3"
    },
    {
        "name": "FEIN FEIN FEIN FEIN",
        "color": "rgb(255, 154, 220)",
        "mp3": "/media/sounds/fein-fein-fein-fein.mp3"
    },
    {
        "name": "Mogged",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mogged.mp3"
    },
    {
        "name": "Eagle Screech",
        "color": "rgb(43, 119, 50)",
        "mp3": "/media/sounds/eagle-screech.mp3"
    },
    {
        "name": "Thunder",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/thunder-sound-effect.mp3"
    },
    {
        "name": "yes king teach me",
        "color": "rgb(251, 255, 52)",
        "mp3": "/media/sounds/yes-king-teach-me.mp3"
    },
    {
        "name": "Понос.mp3",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ponos-mp3.mp3"
    },
    {
        "name": "Crazy Realistic Knocking Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/crazy-realistic-knocking-sound-troll-twitch-streamers_small_mYNcUdA.mp3"
    },
    {
        "name": "Why are you running?",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/why-are.mp3"
    },
    {
        "name": "SHUT UP MOM SILENCE FROM YOU",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/shut-up-mom-silence-from-you.mp3"
    },
    {
        "name": "The Nut Button",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/nut_ZKo5FA9.mp3"
    },
    {
        "name": "NO GOD! PLEASE NO!!! NOOOOOOOO",
        "color": "rgb(0, 0, 153)",
        "mp3": "/media/sounds/no-god-please-no-noooooooooo.mp3"
    },
    {
        "name": "Crazy Realistic Knocking Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/crazy-realistic-knocking-sound-troll-twitch-streamers_small_mYNcUdA.mp3"
    },
    {
        "name": "Eagle Screech",
        "color": "rgb(43, 119, 50)",
        "mp3": "/media/sounds/eagle-screech.mp3"
    },
    {
        "name": "Minecraft XP Sound",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/orb.mp3"
    },
    {
        "name": "TU TU TU DU MAX VERSTAPPEN",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/tu-tu-tu-du-max-verstappen.mp3"
    },
    {
        "name": "EAGLE RAHHH",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/eagle-rahhh.mp3"
    },
    {
        "name": "Fnaf meme Har Har",
        "color": "rgb(90, 62, 39)",
        "mp3": "/media/sounds/fnaf-meme-har-har.mp3"
    },
    {
        "name": "ДИМОН",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/pro-metei-dimon-www.mp3"
    },
    {
        "name": "Burnt peanut make peace with your god",
        "color": "rgb(31, 136, 40)",
        "mp3": "/media/sounds/burnt-peanut-make-peace-with-your-god.mp3"
    },
    {
        "name": "EXPLODED",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/exploded_zfp5Xgm.mp3"
    },
    {
        "name": "Пепе шнеле фа (folk version)",
        "color": "rgb(44, 255, 172)",
        "mp3": "/media/sounds/pepe-shnele-fa-folk-version.mp3"
    },
    {
        "name": "Say wallahi - ishowspeed",
        "color": "rgb(255, 37, 230)",
        "mp3": "/media/sounds/say-wallahi-ishowspeed.mp3"
    },
    {
        "name": "FIRE IN THE HOLE Geometry Dash",
        "color": "rgb(18, 255, 0)",
        "mp3": "/media/sounds/fire-in-the-hole-geometry-dash.mp3"
    },
    {
        "name": "discord cat scream",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/discord-cat-scream.mp3"
    },
    {
        "name": "magic fairy",
        "color": "rgb(136, 224, 255)",
        "mp3": "/media/sounds/magic-fairy.mp3"
    },
    {
        "name": "Fnaf 2 Hallway",
        "color": "rgb(94, 94, 94)",
        "mp3": "/media/sounds/hallway-ambiance-extended-five-nights-at-freddys-2-music.mp3"
    },
    {
        "name": "fnaf 2 scream",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/five-nights-at-freddys-2-full-scream-sound.mp3"
    },
    {
        "name": "WHAT DID HE SAY",
        "color": "rgb(68, 247, 255)",
        "mp3": "/media/sounds/5s_to_7s_what_did_he_say_tik_tok.mp3"
    },
    {
        "name": "Lightsaber ON",
        "color": "rgb(0, 153, 255)",
        "mp3": "/media/sounds/lightsaber_02.mp3"
    },
    {
        "name": "Thank You For Your Patronage",
        "color": "rgb(255, 217, 63)",
        "mp3": "/media/sounds/thank-you-for-your-patronage.mp3"
    },
    {
        "name": "Door Knocking (Very Realistic)",
        "color": "rgb(49, 85, 6)",
        "mp3": "/media/sounds/door-knocking-very-realistic.mp3"
    },
    {
        "name": "Glass Breaking",
        "color": "rgb(0, 51, 153)",
        "mp3": "/media/sounds/broken-glass-sound-effect-high-quality.mp3"
    },
    {
        "name": "Domer",
        "color": "rgb(66, 113, 255)",
        "mp3": "/media/sounds/domer_e4UYbjR.mp3"
    },
    {
        "name": "СЛЫШ 1",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/slysh-1.mp3"
    },
    {
        "name": "hehe boi ainsley harriott",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ainsley_harriott_and_his_spicy_meatconverttoaudio.mp3"
    },
    {
        "name": "SPONGEBOB 2000 YEARS LATER",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/spongebob-2000-years-later-2019-download-link.mp3"
    },
    {
        "name": "Dial Up Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/dial_up.mp3"
    },
    {
        "name": "Patrick Star Screaming",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/patrick_GojJ8l0.mp3"
    },
    {
        "name": "mr beast give me sum money",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mr-beast-give-me-sum-money.mp3"
    },
    {
        "name": "Charlie Charlie Kirky",
        "color": "rgb(56, 199, 255)",
        "mp3": "/media/sounds/charlie-charlie-kirky.mp3"
    },
    {
        "name": "Minecraft firework",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/minecraft-firework.mp3"
    },
    {
        "name": "I just get so nervy ~",
        "color": "rgb(0, 255, 4)",
        "mp3": "/media/sounds/i-just-get-so-nervy.mp3"
    },
    {
        "name": "Burnt Peanut - Desk slam",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/burnt-peanut-desk-slam.mp3"
    },
    {
        "name": "Cartel Song",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/cartel-song.mp3"
    },
    {
        "name": "Я пи я дор",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ia-pi-ia-dor.mp3"
    },
    {
        "name": "Gman toilet 3.0",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gman-toilet-3-0.mp3"
    },
    {
        "name": "Knuckles-Oh No",
        "color": "rgb(204, 51, 0)",
        "mp3": "/media/sounds/oh_no_1.mp3"
    },
    {
        "name": "FIRE IN THE HOLE Geometry Dash",
        "color": "rgb(18, 255, 0)",
        "mp3": "/media/sounds/fire-in-the-hole-geometry-dash.mp3"
    },
    {
        "name": "ishowspeed STFU",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ishowspeed-stfu.mp3"
    },
    {
        "name": "iPhone Screenshot",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/iphone-screenshot.mp3"
    },
    {
        "name": "ДИМОН",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/pro-metei-dimon-www.mp3"
    },
    {
        "name": "yoooooooooooo",
        "color": "rgb(26, 30, 255)",
        "mp3": "/media/sounds/yooooooooooooooooooooooooo_4_objp8XX.mp3"
    },
    {
        "name": "SHUT UP MOM SILENCE FROM YOU",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/shut-up-mom-silence-from-you.mp3"
    },
    {
        "name": "Among us",
        "color": "rgb(138, 255, 29)",
        "mp3": "/media/sounds/among.mp3"
    },
    {
        "name": "FEIN FEIN FEIN FEIN",
        "color": "rgb(255, 154, 220)",
        "mp3": "/media/sounds/fein-fein-fein-fein.mp3"
    },
    {
        "name": "McDonalds Beeping Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mcdonalds-beeping-sound.mp3"
    },
    {
        "name": "Disconnect discord",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/y2mate_VKI8qDn.mp3"
    },
    {
        "name": "Kaching Sound FX",
        "color": "rgb(255, 245, 49)",
        "mp3": "/media/sounds/kaching-sound-fx.mp3"
    },
    {
        "name": "Арматура",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/armatura_P29FH2w.mp3"
    },
    {
        "name": "Horse Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/horse-sound.mp3"
    },
    {
        "name": "Gemi 2 remix",
        "color": "rgb(255, 246, 227)",
        "mp3": "/media/sounds/gemi-2-remix.mp3"
    },
    {
        "name": "my name is anderdingus",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/my-name-is-anderdingus.mp3"
    },
    {
        "name": "人の心とかないんか?",
        "color": "rgb(175, 255, 63)",
        "mp3": "/media/sounds/ren-noxin-tokanainka_JVPTSaf.mp3"
    },
    {
        "name": "We Got Him Meme Song Loud",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ladies-and-gentlemen-we-got-him-song.mp3"
    },
    {
        "name": "Slumber That Brother Gone",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/slumber-that-brother-gone-meme_pXziXJ1.mp3"
    },
    {
        "name": "VERY LOUD AIRHORN",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/veryloudairhorn.mp3"
    },
    {
        "name": "Discord_Ping",
        "color": "rgb(68, 102, 255)",
        "mp3": "/media/sounds/y2mate_rQlfs1Y.mp3"
    },
    {
        "name": "Sonic.EXE laugh",
        "color": "rgb(17, 45, 255)",
        "mp3": "/media/sounds/sonic-exe-laugh.mp3"
    },
    {
        "name": "Oh brother this guy STINKS spongebob",
        "color": "rgb(44, 149, 255)",
        "mp3": "/media/sounds/oh-brother-this-guy-stinks_FFdigtm.mp3"
    },
    {
        "name": "TU TU TU DU MAX VERSTAPPEN",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/tu-tu-tu-du-max-verstappen.mp3"
    },
    {
        "name": "Fnaf meme Har Har",
        "color": "rgb(90, 62, 39)",
        "mp3": "/media/sounds/fnaf-meme-har-har.mp3"
    },
    {
        "name": "thank you thank you thank you",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/thank-you-thank-you-thank-you.mp3"
    },
    {
        "name": "knuckles i dont know",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/knuckles-i-dont-know.mp3"
    },
    {
        "name": "Пора вставать хозяин(аниме девочка)",
        "color": "rgb(179, 39, 104)",
        "mp3": "/media/sounds/pora-vstavat-khoziain-anime-devochka.mp3"
    },
    {
        "name": "СЛЫШ 1",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/slysh-1.mp3"
    },
    {
        "name": "voce nao tem aura",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/voce-nao-tem-aura.mp3"
    },
    {
        "name": "We are jeffrey epstein",
        "color": "rgb(132, 0, 0)",
        "mp3": "/media/sounds/we-are-jeffrey-epstein_01TxqQ0.mp3"
    },
    {
        "name": "F*ck This Sh*t I'm Out!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/f-ck-this-sh-t-im-out_TfWyqAI.mp3"
    },
    {
        "name": "Clown Horn",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/clown-horn-sound-effect_1.mp3"
    },
    {
        "name": "Thank You For Your Patronage",
        "color": "rgb(255, 217, 63)",
        "mp3": "/media/sounds/thank-you-for-your-patronage.mp3"
    },
    {
        "name": "Mouse Click",
        "color": "rgb(123, 57, 205)",
        "mp3": "/media/sounds/clicksoundeffect.mp3"
    },
    {
        "name": "Door Knocking (Very Realistic)",
        "color": "rgb(49, 85, 6)",
        "mp3": "/media/sounds/door-knocking-very-realistic.mp3"
    },
    {
        "name": "Censor Beep",
        "color": "rgb(153, 204, 0)",
        "mp3": "/media/sounds/censor-beep-7.mp3"
    },
    {
        "name": "discord cat scream",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/discord-cat-scream.mp3"
    },
    {
        "name": "Minecraft firework",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/minecraft-firework.mp3"
    },
    {
        "name": "yoshi tongue",
        "color": "rgb(0, 153, 0)",
        "mp3": "/media/sounds/yoshi-tongue.mp3"
    },
    {
        "name": "Squeak Toy",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/squeak_Q72c7Tg.mp3"
    },
    {
        "name": "SPONGEBOB 2000 YEARS LATER",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/spongebob-2000-years-later-2019-download-link.mp3"
    },
    {
        "name": "Undertaker's Gong",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/undertakers-bell.mp3"
    },
    {
        "name": "mr beast give me sum money",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mr-beast-give-me-sum-money.mp3"
    },
    {
        "name": "thank you thank you thank you",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/thank-you-thank-you-thank-you.mp3"
    },
    {
        "name": "NFL Draft Chime",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/nfl-draft-chime.mp3"
    },
    {
        "name": "Okay let’s go",
        "color": "rgb(14, 174, 255)",
        "mp3": "/media/sounds/meme-okay-lets-go.mp3"
    },
    {
        "name": "musica triste meme",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/tmpq7mpzzl9.mp3"
    },
    {
        "name": "Can We Get Much Higher-One Piece Meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/can-we-get-much-higher-one-piece-meme.mp3"
    },
    {
        "name": "HUH? Cat meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/huh-cat-meme.mp3"
    },
    {
        "name": "Kaching Sound FX",
        "color": "rgb(255, 245, 49)",
        "mp3": "/media/sounds/kaching-sound-fx.mp3"
    },
    {
        "name": "alarma saturada",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/alarma-saturada.mp3"
    },
    {
        "name": "Ki kore",
        "color": "rgb(255, 42, 42)",
        "mp3": "/media/sounds/ki-kore.mp3"
    },
    {
        "name": "Здравствуйте ничтожные нищие смертные",
        "color": "rgb(114, 79, 255)",
        "mp3": "/media/sounds/zdravstvuite-nichtozhnye-nishchie-smertnye.mp3"
    },
    {
        "name": "ЭЭЭ КУТАК БАШ",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/eee-kutak-bash.mp3"
    },
    {
        "name": "Сосать Америка",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sosat-amerika_UroO5KT.mp3"
    },
    {
        "name": "R2D2 SCREAM",
        "color": "rgb(0, 0, 204)",
        "mp3": "/media/sounds/r2d2_scream_converted.mp3"
    },
    {
        "name": "Oh Hell No",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ringtone_7.mp3"
    },
    {
        "name": "Get yo fat ass back here",
        "color": "rgb(45, 235, 240)",
        "mp3": "/media/sounds/get-yo-fat-ass-back-here.mp3"
    },
    {
        "name": "Munch (eating / biting)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/munch-sound-effect.mp3"
    },
    {
        "name": "Scary Tiktok Music",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/scary-tiktok-music.mp3"
    },
    {
        "name": "Yesss king",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/yesss-king.mp3"
    },
    {
        "name": "Meowl [Steal a Brainrot]",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/meowl-steal-a-brainrot.mp3"
    },
    {
        "name": "WHAT! OH HELL NO Grandpa",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/what-oh-hell-no-grandpa.mp3"
    },
    {
        "name": "idea (ding sound effect)",
        "color": "rgb(157, 0, 0)",
        "mp3": "/media/sounds/ding-sound-effect_2_bICB0mr.mp3"
    },
    {
        "name": "/",
        "color": "rgb(255, 50, 79)",
        "mp3": "/media/sounds/m_fixed_PLoG4ep.mp3"
    },
    {
        "name": "Cartoon elephant sound",
        "color": "rgb(118, 110, 92)",
        "mp3": "/media/sounds/cartoon-elephant-sound.mp3"
    },
    {
        "name": "Among us",
        "color": "rgb(138, 255, 29)",
        "mp3": "/media/sounds/among.mp3"
    },
    {
        "name": "He Needs Some Milk",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/he-needs-some-milk-vine.mp3"
    },
    {
        "name": "Pistol sound effect",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/pistol-sound-effect_zejYI9w.mp3"
    },
    {
        "name": "half life 2 stalker scream",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/half-life-2-stalker-scream.mp3"
    },
    {
        "name": "idea (ding sound effect)",
        "color": "rgb(157, 0, 0)",
        "mp3": "/media/sounds/ding-sound-effect_2_bICB0mr.mp3"
    },
    {
        "name": "1500 es hora y media",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/1500-es-hora-y-media.mp3"
    },
    {
        "name": "/",
        "color": "rgb(255, 50, 79)",
        "mp3": "/media/sounds/m_fixed_PLoG4ep.mp3"
    },
    {
        "name": "brain rot 67",
        "color": "rgb(0, 238, 255)",
        "mp3": "/media/sounds/brain-rot-67.mp3"
    },
    {
        "name": "Cartoon elephant sound",
        "color": "rgb(118, 110, 92)",
        "mp3": "/media/sounds/cartoon-elephant-sound.mp3"
    },
    {
        "name": "Among us",
        "color": "rgb(138, 255, 29)",
        "mp3": "/media/sounds/among.mp3"
    },
    {
        "name": "He Needs Some Milk",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/he-needs-some-milk-vine.mp3"
    },
    {
        "name": "hamburger",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hamburger-sound-effect.mp3"
    },
    {
        "name": "Was that the bite of 87",
        "color": "rgb(204, 228, 255)",
        "mp3": "/media/sounds/was-that-the-bite-of-87-markiplier-original-video-clip-sound-clip.mp3"
    },
    {
        "name": "Why do I hear boss music",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/why-do-i-hear-boss-music.mp3"
    },
    {
        "name": "McDonalds Beeping Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mcdonalds-beeping-sound.mp3"
    },
    {
        "name": "RAAAAH",
        "color": "rgb(255, 84, 84)",
        "mp3": "/media/sounds/raaaah.mp3"
    },
    {
        "name": "cha-ching money",
        "color": "rgb(47, 138, 79)",
        "mp3": "/media/sounds/cha-ching-money.mp3"
    },
    {
        "name": "HUE HUE HUE metal sonic plush",
        "color": "rgb(0, 16, 127)",
        "mp3": "/media/sounds/hue-hue-hue-metal-sonic-plush.mp3"
    },
    {
        "name": "Nokia Kick Ringtone",
        "color": "rgb(148, 193, 60)",
        "mp3": "/media/sounds/nokia-kick-ringtone.mp3"
    },
    {
        "name": "ГОЙДА!!!!",
        "color": "rgb(255, 106, 0)",
        "mp3": "/media/sounds/goida_hRZ6vDr.mp3"
    },
    {
        "name": "nworldeiqwjhfsa",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/nworldeiqwjhfsa.mp3"
    },
    {
        "name": "rainbow six siege ee-one-d (new)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/lion-drone-sound-effect-new.mp3"
    },
    {
        "name": "Mexican Hat Dance",
        "color": "rgb(102, 255, 0)",
        "mp3": "/media/sounds/mexican_hat_dance.mp3"
    },
    {
        "name": "Freddy beatbox",
        "color": "rgb(56, 30, 18)",
        "mp3": "/media/sounds/freddy-beatbox.mp3"
    },
    {
        "name": "Miau triste",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/miau-triste.mp3"
    },
    {
        "name": "Six seven",
        "color": "rgb(36, 61, 255)",
        "mp3": "/media/sounds/six-seven_okPwnRN.mp3"
    },
    {
        "name": "Trollface Phonk",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/trollface-phonk.mp3"
    },
    {
        "name": "Mambo (Matikanetannhauser)",
        "color": "rgb(255, 242, 0)",
        "mp3": "/media/sounds/mambo-matikanetannhauser.mp3"
    },
    {
        "name": "Burnt peanut hell yeah",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/burnt-peanut-hell-yeah.mp3"
    },
    {
        "name": "el monte everest no tiene nada en contra de mi",
        "color": "rgb(96, 255, 244)",
        "mp3": "/media/sounds/el-monte-everest-no-tiene-nada-en-contra-de-mi.mp3"
    },
    {
        "name": "My Name Is Jeff",
        "color": "rgb(0, 255, 255)",
        "mp3": "/media/sounds/ringtone_20.mp3"
    },
    {
        "name": "Discord_Ping",
        "color": "rgb(68, 102, 255)",
        "mp3": "/media/sounds/y2mate_rQlfs1Y.mp3"
    },
    {
        "name": "Uncle Ruckus",
        "color": "rgb(142, 235, 255)",
        "mp3": "/media/sounds/uncle-ruckus.mp3"
    },
    {
        "name": "Pizza Tower Taunt",
        "color": "rgb(255, 38, 0)",
        "mp3": "/media/sounds/sfx_taunt.mp3"
    },
    {
        "name": "Nani what!?",
        "color": "rgb(47, 255, 40)",
        "mp3": "/media/sounds/nani_-meme-sound-effect-su0k4q3yrfw-mp3cut.mp3"
    },
    {
        "name": "(mafioso) scream",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/mafioso-scream.mp3"
    },
    {
        "name": "Mario - Power Up",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/01-power-up-mario.mp3"
    },
    {
        "name": "Tom and jerry scream",
        "color": "rgb(145, 255, 126)",
        "mp3": "/media/sounds/ow2-online-audio-converter.mp3"
    },
    {
        "name": "Wrong Answer GameShow",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/wrong_5.mp3"
    },
    {
        "name": "Гимн твича (без цензуры)",
        "color": "rgb(47, 81, 159)",
        "mp3": "/media/sounds/gimn-tvicha-bez-tsenzury.mp3"
    },
    {
        "name": "Когда мне было 12 лет",
        "color": "rgb(104, 142, 255)",
        "mp3": "/media/sounds/kogda-mne-bylo-12-let.mp3"
    },
    {
        "name": "Himno Real Madrid 2",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/himno-real-madrid-2.mp3"
    },
    {
        "name": "WHAT ARE YOU DOING IN MY SWAMP",
        "color": "rgb(0, 153, 0)",
        "mp3": "/media/sounds/what-are-you-doing-in-my-swamp-.mp3"
    },
    {
        "name": "Nani FULL",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/nani-meme-sound-effect.mp3"
    },
    {
        "name": "VERY LOUD AIRHORN",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/veryloudairhorn.mp3"
    },
    {
        "name": "Discord Jebaiting",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mikejebait.mp3"
    },
    {
        "name": "Record scratch sound effect",
        "color": "rgb(255, 51, 0)",
        "mp3": "/media/sounds/record-scratch_1.mp3"
    },
    {
        "name": "Camera shutter",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/camera_zLdd1zp.mp3"
    },
    {
        "name": "Munch (eating / biting)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/munch-sound-effect.mp3"
    },
    {
        "name": "Chomp",
        "color": "rgb(255, 241, 49)",
        "mp3": "/media/sounds/chomp-1.mp3"
    },
    {
        "name": "“Mwahahaha”",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mwahahaha.mp3"
    },
    {
        "name": "What meme song",
        "color": "rgb(71, 0, 0)",
        "mp3": "/media/sounds/what-bottom-text-meme-sanctuary-guardian-sound-effect-hd_tdDIUTg.mp3"
    },
    {
        "name": "Slap! AHH!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/slap-ahh.mp3"
    },
    {
        "name": "family guy cutaway music",
        "color": "rgb(202, 157, 83)",
        "mp3": "/media/sounds/family-guy-cutaway-music.mp3"
    },
    {
        "name": "suspense build up",
        "color": "rgb(62, 62, 62)",
        "mp3": "/media/sounds/suspense-build-up.mp3"
    },
    {
        "name": "Я конченый бегите",
        "color": "rgb(2, 10, 255)",
        "mp3": "/media/sounds/ia-konchenyi-begite.mp3"
    },
    {
        "name": "voce nao tem aura",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/voce-nao-tem-aura.mp3"
    },
    {
        "name": "LET IT RIDEEEEEEE",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/let-it-rideeeeeee.mp3"
    },
    {
        "name": "Hell Naw Dog",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hell-naw-dog.mp3"
    },
    {
        "name": "BOMBASTIC SIDE EYE",
        "color": "rgb(156, 0, 0)",
        "mp3": "/media/sounds/bombastic-side-eye.mp3"
    },
    {
        "name": "two hours later",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/spongebob-two-hours-later-2019-download-link.mp3"
    },
    {
        "name": "dry fart",
        "color": "rgb(204, 102, 51)",
        "mp3": "/media/sounds/dry-fart_3.mp3"
    },
    {
        "name": "Windows XP ERROR Song",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/windows-xp-error-song-edited-by-dj-cobaltsteel-77.mp3"
    },
    {
        "name": "Brick hitting metal",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/brick-on-metal-sound-effect12.mp3"
    },
    {
        "name": "3.2.1. Go",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/3-2-1-go-green-screen-footage-2xoehcl8evq.mp3"
    },
    {
        "name": "Duolingo Correct",
        "color": "rgb(26, 255, 13)",
        "mp3": "/media/sounds/duolingo-correct.mp3"
    },
    {
        "name": "thank you thank you thank you",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/thank-you-thank-you-thank-you.mp3"
    },
    {
        "name": "Zombies are coming - PVZ",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/zombies.mp3"
    },
    {
        "name": "ААААААА ЖЕНЩИНА",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/aaaaaaa-zhenshchina.mp3"
    },
    {
        "name": "TOBOL",
        "color": "rgb(248, 218, 255)",
        "mp3": "/media/sounds/tobol.mp3"
    },
    {
        "name": "Mellstroy -Я помылся хахаха",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mellstroy-ia-pomylsia-khakhakha_2ovFyb8.mp3"
    },
    {
        "name": "Sonic drown",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sonic-1-music-drownings.mp3"
    },
    {
        "name": "police siren",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/11900601.mp3"
    },
    {
        "name": "Yippee meme sound effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/yippee-meme-sound-effect.mp3"
    },
    {
        "name": "L theme death note",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/00000000000000000.mp3"
    },
    {
        "name": "Laugh remix",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/laugh-remix.mp3"
    },
    {
        "name": "nworldeiqwjhfsa",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/nworldeiqwjhfsa.mp3"
    },
    {
        "name": "Звук домофона",
        "color": "rgb(138, 255, 176)",
        "mp3": "/media/sounds/zvuk-domofona.mp3"
    },
    {
        "name": "Iyot SFX",
        "color": "rgb(255, 38, 248)",
        "mp3": "/media/sounds/iyot-sfx.mp3"
    },
    {
        "name": "You stupid n-",
        "color": "rgb(255, 31, 204)",
        "mp3": "/media/sounds/you-stupid-n_5qa1o5s.mp3"
    },
    {
        "name": "Oh Hell No (Vine)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/oh-hell-no-sound-effect-free-download.mp3"
    },
    {
        "name": "hamburger",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hamburger-sound-effect.mp3"
    },
    {
        "name": "Biden SODA!",
        "color": "rgb(52, 21, 255)",
        "mp3": "/media/sounds/yt1s_qwrCPVf.mp3"
    },
    {
        "name": "Cartoon Hammer",
        "color": "rgb(235, 255, 71)",
        "mp3": "/media/sounds/cartoon-hammer.mp3"
    },
    {
        "name": "B SWORD WOOSH",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/woosh_s21KzKN.mp3"
    },
    {
        "name": "Correct sound effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/answer-correct.mp3"
    },
    {
        "name": "bass boost drop!",
        "color": "rgb(255, 169, 234)",
        "mp3": "/media/sounds/bass-boost-drop.mp3"
    },
    {
        "name": "Among us Imposter Reveal SE",
        "color": "rgb(221, 0, 0)",
        "mp3": "/media/sounds/among-us-imposter-reveal-se.mp3"
    },
    {
        "name": "Quick Ting",
        "color": "rgb(53, 255, 127)",
        "mp3": "/media/sounds/quick-ting.mp3"
    },
    {
        "name": "Дорогой дневник....",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/dorogoi-dnevnik.mp3"
    },
    {
        "name": "Buenas tardes grupo",
        "color": "rgb(163, 255, 184)",
        "mp3": "/media/sounds/buenas-tardes-grupo.mp3"
    },
    {
        "name": "rainbow six siege ee-one-d (new)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/lion-drone-sound-effect-new.mp3"
    },
    {
        "name": "Coffin Dance Meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/y2mate-mp3cut_sRzY6rh.mp3"
    },
    {
        "name": "DAMN SON, WHERE'D YA FIND THIS",
        "color": "rgb(0, 0, 204)",
        "mp3": "/media/sounds/damn-son-whered-you-find-this.mp3"
    },
    {
        "name": "roblox screaming kid",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/roblox-screaming-kid-140.mp3"
    },
    {
        "name": "the rock sound effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/the-rock-sound-effect.mp3"
    },
    {
        "name": "GTA SA Mission Passed",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gta-san-andreas-mission-complete-sound-hq.mp3"
    },
    {
        "name": "Cartoon Slip and Fall",
        "color": "rgb(204, 255, 51)",
        "mp3": "/media/sounds/slipandfall.mp3"
    },
    {
        "name": "Chomp",
        "color": "rgb(255, 241, 49)",
        "mp3": "/media/sounds/chomp-1.mp3"
    },
    {
        "name": "Ear Ringing",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ear-ringing.mp3"
    },
    {
        "name": "3 2 1 Go FNF",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/3-2-1-go-sound-effect.mp3"
    },
    {
        "name": "HUE HUE HUE metal sonic plush",
        "color": "rgb(0, 16, 127)",
        "mp3": "/media/sounds/hue-hue-hue-metal-sonic-plush.mp3"
    },
    {
        "name": "Groan Tube 1",
        "color": "rgb(0, 102, 255)",
        "mp3": "/media/sounds/groan-tube-1_kdDdtlv.mp3"
    },
    {
        "name": "Oooweee",
        "color": "rgb(141, 147, 255)",
        "mp3": "/media/sounds/oooweee.mp3"
    },
    {
        "name": "WHAT ARE YOU DOING IN MY SWAMP",
        "color": "rgb(0, 153, 0)",
        "mp3": "/media/sounds/what-are-you-doing-in-my-swamp-.mp3"
    },
    {
        "name": "Hell Naw Dog",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hell-naw-dog.mp3"
    },
    {
        "name": "Nani FULL",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/nani-meme-sound-effect.mp3"
    },
    {
        "name": "NFL theme song",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/nfl-theme-song-hq-mp3cut_yjEDUm1.mp3"
    },
    {
        "name": "Record scratch sound effect",
        "color": "rgb(255, 51, 0)",
        "mp3": "/media/sounds/record-scratch_1.mp3"
    },
    {
        "name": "Mario - Power Up",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/01-power-up-mario.mp3"
    },
    {
        "name": "Hell nah (dog)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hell-nah-dog_lU72pEf.mp3"
    },
    {
        "name": "dokkaebi hack",
        "color": "rgb(55, 55, 55)",
        "mp3": "/media/sounds/dokkaebi-hacking-sound-effect.mp3"
    },
    {
        "name": "You Are My Sunshine Lebron James",
        "color": "rgb(241, 255, 180)",
        "mp3": "/media/sounds/you-are-my-sunshine-lebron-james.mp3"
    },
    {
        "name": "Applause",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/applause-4.mp3"
    },
    {
        "name": "Doom Eternal",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/doom-eternal.mp3"
    },
    {
        "name": "Gong Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/asian-gong.mp3"
    },
    {
        "name": "Annihilation the alien",
        "color": "rgb(10, 27, 255)",
        "mp3": "/media/sounds/annihilation-the-alien.mp3"
    },
    {
        "name": "transponder snail",
        "color": "rgb(42, 84, 255)",
        "mp3": "/media/sounds/transponder_snail.mp3"
    },
    {
        "name": "gato riendo",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gato-riendo_6bOc2ur.mp3"
    },
    {
        "name": "Discord Jumpscare",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/discord-jumpscare.mp3"
    },
    {
        "name": "Trollface Phonk",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/trollface-phonk.mp3"
    },
    {
        "name": "Burnt peanut hell yeah",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/burnt-peanut-hell-yeah.mp3"
    },
    {
        "name": "Stop the Cap",
        "color": "rgb(79, 255, 211)",
        "mp3": "/media/sounds/zias-stop-the-cap_RjHQpxU.mp3"
    },
    {
        "name": "Censor Beep 2",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/censor-beep-2.mp3"
    },
    {
        "name": "Galaxy brain meme",
        "color": "rgb(168, 245, 255)",
        "mp3": "/media/sounds/galaxy-brain-meme.mp3"
    },
    {
        "name": "spongebob laugh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/spongebob-laughing-sound-effect.mp3"
    },
    {
        "name": "Som do Zap Zap estourado",
        "color": "rgb(3, 250, 63)",
        "mp3": "/media/sounds/som-do-zap-zap-estourado.mp3"
    },
    {
        "name": "Shotgun Reload",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/shotgun-reload-old_school-ra_the_sun_god-580332022.mp3"
    },
    {
        "name": "La vida es un carrusel",
        "color": "rgb(85, 0, 255)",
        "mp3": "/media/sounds/la-vida-es-un-carrusel.mp3"
    },
    {
        "name": "Quick Ting",
        "color": "rgb(53, 255, 127)",
        "mp3": "/media/sounds/quick-ting.mp3"
    },
    {
        "name": "man screaming",
        "color": "rgb(217, 255, 57)",
        "mp3": "/media/sounds/man-screaming.mp3"
    },
    {
        "name": "Мама, Я покакал",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mama-ia-pokakal.mp3"
    },
    {
        "name": "Mellstroy -Я помылся хахаха",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mellstroy-ia-pomylsia-khakhakha_2ovFyb8.mp3"
    },
    {
        "name": "OH SHIT! (echo)",
        "color": "rgb(255, 0, 255)",
        "mp3": "/media/sounds/oh-shit_4.mp3"
    },
    {
        "name": "Jeopardy",
        "color": "rgb(0, 153, 0)",
        "mp3": "/media/sounds/jeopardy.mp3"
    },
    {
        "name": "Big fart",
        "color": "rgb(153, 51, 0)",
        "mp3": "/media/sounds/faaaaaaaaaaaaaaaaaaaaaaaaaaaaaaart.mp3"
    },
    {
        "name": "Majora's mask bell",
        "color": "rgb(153, 0, 102)",
        "mp3": "/media/sounds/mm_clocktower_bell.mp3"
    },
    {
        "name": "Old Church Bell Meme",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/old-church-bell-meme.mp3"
    },
    {
        "name": "Oh No Meme (2020)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/oh-no-meme-2020_hX2n56J.mp3"
    },
    {
        "name": "Симпл матерится (s1mple)",
        "color": "rgb(117, 255, 117)",
        "mp3": "/media/sounds/simpl-materitsia-s1mple.mp3"
    },
    {
        "name": "MEGA KNIGHT CLASH ROYALE",
        "color": "rgb(255, 252, 252)",
        "mp3": "/media/sounds/mega-knight-clash-royale.mp3"
    },
    {
        "name": "Гимн твича (без цензуры)",
        "color": "rgb(47, 81, 159)",
        "mp3": "/media/sounds/gimn-tvicha-bez-tsenzury.mp3"
    },
    {
        "name": "Привет пупсик",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/privet-pupsik.mp3"
    },
    {
        "name": "t’es en caleçon ta la BARRE",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/tes-en-calecon-ta-la-barre.mp3"
    },
    {
        "name": "Sicko Mode Meme SFX",
        "color": "rgb(255, 170, 0)",
        "mp3": "/media/sounds/the-beginning-of-sicko-mode-sound-effect-for-memes_xAcUeuI.mp3"
    },
    {
        "name": "Record Scratch",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/record-scratch.mp3"
    },
    {
        "name": "Mr Beast Phonk Meme",
        "color": "rgb(53, 12, 255)",
        "mp3": "/media/sounds/mr-beast-phonk-meme.mp3"
    },
    {
        "name": "O veado apertou play",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/o-veado-apertou-play.mp3"
    },
    {
        "name": "YEET",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/yeet-sound-effect.mp3"
    },
    {
        "name": "SHADOW WIZARD MONEY GANG WE LOVE CASTING SPELLS",
        "color": "rgb(6, 6, 72)",
        "mp3": "/media/sounds/shadow-wizard-money-gang-we-love-casting-spells_3h95aGA.mp3"
    },
    {
        "name": "Jeopardy",
        "color": "rgb(0, 153, 0)",
        "mp3": "/media/sounds/jeopardy.mp3"
    },
    {
        "name": "[FNAF] 6 AM",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/five-nights-at-freddys-6-am.mp3"
    },
    {
        "name": "instant transmission",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/dragon_ball_z_tele.mp3"
    },
    {
        "name": "(mafioso) scream",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/mafioso-scream.mp3"
    },
    {
        "name": "Mario coin sound",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/mario_coin_sound.mp3"
    },
    {
        "name": "bfdi scream",
        "color": "rgb(103, 255, 141)",
        "mp3": "/media/sounds/the_bfdi_scream.mp3"
    },
    {
        "name": "ALL Goofy Sounds",
        "color": "rgb(0, 217, 255)",
        "mp3": "/media/sounds/all-goofy-sounds.mp3"
    },
    {
        "name": "meme violin (sad violin)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/meme-violin-sad-violin.mp3"
    },
    {
        "name": "Lego Batman Laugh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/lego-batman-laugh.mp3"
    },
    {
        "name": "Foi quando Gyro Finalmente Entendeu",
        "color": "rgb(55, 28, 137)",
        "mp3": "/media/sounds/foi-quando-gyro-finalmente-entendeu.mp3"
    },
    {
        "name": "Eyyyyyyy six seven",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/eyyyyyyy-six-seven.mp3"
    },
    {
        "name": "MEGA KNIGHT CLASH ROYALE",
        "color": "rgb(255, 252, 252)",
        "mp3": "/media/sounds/mega-knight-clash-royale.mp3"
    },
    {
        "name": "I LIKE FEMBOYS",
        "color": "rgb(115, 255, 255)",
        "mp3": "/media/sounds/i-like-femboys_6JHIoHH.mp3"
    },
    {
        "name": "fahh but louder very loud",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/fahh-but-louder-very-loud.mp3"
    },
    {
        "name": "Rimshot",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/badumtss.swf.mp3"
    },
    {
        "name": "Applause",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/applause-4.mp3"
    },
    {
        "name": "Galaxy brain meme",
        "color": "rgb(168, 245, 255)",
        "mp3": "/media/sounds/galaxy-brain-meme.mp3"
    },
    {
        "name": "Transformers (transforming)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/transforming-sound-from-the-transformers.mp3"
    },
    {
        "name": "Crying Baby",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/asdasd_xyorzJ8.mp3"
    },
    {
        "name": "Bad joke (drums)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bad-joke-drums.mp3"
    },
    {
        "name": "police siren",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/11900601.mp3"
    },
    {
        "name": "Minecraft Drop Item/Block Sound Effect",
        "color": "rgb(8, 255, 25)",
        "mp3": "/media/sounds/minecraft-drop-block-sound-effect.mp3"
    },
    {
        "name": "Joker Shitpost beatbox",
        "color": "rgb(22, 255, 46)",
        "mp3": "/media/sounds/joker-shitpost-beatbox.mp3"
    },
    {
        "name": "Удар от взгляда Скалы",
        "color": "rgb(95, 0, 0)",
        "mp3": "/media/sounds/udar-ot-vzgliada-skaly.mp3"
    },
    {
        "name": "Gotcha Bit** by Dave Chapelle",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/gotcha-bit-by-dave-chapelle.mp3"
    },
    {
        "name": "Miau triste",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/miau-triste.mp3"
    },
    {
        "name": "formula 1 box box",
        "color": "rgb(255, 81, 81)",
        "mp3": "/media/sounds/formula-1-box-box.mp3"
    },
    {
        "name": "transponder snail",
        "color": "rgb(42, 84, 255)",
        "mp3": "/media/sounds/transponder_snail.mp3"
    },
    {
        "name": "POU ESTOURADO",
        "color": "rgb(255, 210, 73)",
        "mp3": "/media/sounds/pou-estourado_zIWCpMy.mp3"
    },
    {
        "name": "Boing sound",
        "color": "rgb(77, 0, 255)",
        "mp3": "/media/sounds/boing-sound.mp3"
    },
    {
        "name": "family guy cutaway music",
        "color": "rgb(202, 157, 83)",
        "mp3": "/media/sounds/family-guy-cutaway-music.mp3"
    },
    {
        "name": "Sonic.exe 2011X laugh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sonic-exe-2011x-laugh.mp3"
    },
    {
        "name": "Skyrim NPC music - Harvest dawn",
        "color": "rgb(6, 40, 255)",
        "mp3": "/media/sounds/skyrim-npc-music-harvest-dawn.mp3"
    },
    {
        "name": "Netflix intro",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/nouveau-jingle-netflix.mp3"
    },
    {
        "name": "bfdi scream",
        "color": "rgb(103, 255, 141)",
        "mp3": "/media/sounds/the_bfdi_scream.mp3"
    },
    {
        "name": "Chick Fila HELP ME HELLLLP (just help)",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/chick-fila-help-me-hellllp-just-help.mp3"
    },
    {
        "name": "Download",
        "color": "rgb(251, 255, 110)",
        "mp3": "/media/sounds/download_CTlTO3X.mp3"
    },
    {
        "name": "Boing sound",
        "color": "rgb(77, 0, 255)",
        "mp3": "/media/sounds/boing-sound.mp3"
    },
    {
        "name": "suspense build up",
        "color": "rgb(62, 62, 62)",
        "mp3": "/media/sounds/suspense-build-up.mp3"
    },
    {
        "name": "Zeep Glorp (green alien cat meme)",
        "color": "rgb(121, 255, 38)",
        "mp3": "/media/sounds/zeep-glorp-green-alien-cat-meme.mp3"
    },
    {
        "name": "Foi quando Gyro Finalmente Entendeu",
        "color": "rgb(55, 28, 137)",
        "mp3": "/media/sounds/foi-quando-gyro-finalmente-entendeu.mp3"
    },
    {
        "name": "тунг тунг тунг саур татата саур",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/tung-tung-tung-saur-tatata-saur.mp3"
    },
    {
        "name": "I LIKE FEMBOYS",
        "color": "rgb(115, 255, 255)",
        "mp3": "/media/sounds/i-like-femboys_6JHIoHH.mp3"
    },
    {
        "name": "fahh but louder very loud",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/fahh-but-louder-very-loud.mp3"
    },
    {
        "name": "FNAF Balloon Boy Hi",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/echo1.mp3"
    },
    {
        "name": "instant transmission",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/dragon_ball_z_tele.mp3"
    },
    {
        "name": "fart 2",
        "color": "rgb(102, 51, 0)",
        "mp3": "/media/sounds/fart_1.mp3"
    },
    {
        "name": "ALL Goofy Sounds",
        "color": "rgb(0, 217, 255)",
        "mp3": "/media/sounds/all-goofy-sounds.mp3"
    },
    {
        "name": "meme violin (sad violin)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/meme-violin-sad-violin.mp3"
    },
    {
        "name": "Alexis Texas",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/alexis-texas.mp3"
    },
    {
        "name": "ААААААА ЖЕНЩИНА",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/aaaaaaa-zhenshchina.mp3"
    },
    {
        "name": "OMG IM COMING",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/omg-im-coming.mp3"
    },
    {
        "name": "Burnt Peanut Little Bit of Goop 2",
        "color": "rgb(255, 0, 230)",
        "mp3": "/media/sounds/burnt-peanut-little-bit-of-goop-2.mp3"
    },
    {
        "name": "I'M SENDING YOU... \"Arthur Morgan\"",
        "color": "rgb(115, 0, 0)",
        "mp3": "/media/sounds/im-sending-you-arthur-morgan.mp3"
    },
    {
        "name": "Alex Jones - Destroy the Child",
        "color": "rgb(255, 118, 199)",
        "mp3": "/media/sounds/destroy-the-child.mp3"
    },
    {
        "name": "Zelda Theme Tema",
        "color": "rgb(0, 153, 0)",
        "mp3": "/media/sounds/zelda_theme_snes-cut-mp3.mp3"
    },
    {
        "name": "O veado apertou play",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/o-veado-apertou-play.mp3"
    },
    {
        "name": "Roblox Death Sound Effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/roblox-death-sound-effect.mp3"
    },
    {
        "name": "hog rider",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hog-rider.mp3"
    },
    {
        "name": "SHADOW WIZARD MONEY GANG WE LOVE CASTING SPELLS",
        "color": "rgb(6, 6, 72)",
        "mp3": "/media/sounds/shadow-wizard-money-gang-we-love-casting-spells_3h95aGA.mp3"
    },
    {
        "name": "Bye have a great time!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bye-have-a-great-time.mp3"
    },
    {
        "name": "BOMBASTIC SIDE EYE",
        "color": "rgb(156, 0, 0)",
        "mp3": "/media/sounds/bombastic-side-eye.mp3"
    },
    {
        "name": "Transformers (transforming)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/transforming-sound-from-the-transformers.mp3"
    },
    {
        "name": "Tornado Siren",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/tornado_siren-ringtone-1516007.mp3"
    },
    {
        "name": "scout scream",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/screaming-scout.mp3"
    },
    {
        "name": "Gotcha Bit** by Dave Chapelle",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/gotcha-bit-by-dave-chapelle.mp3"
    },
    {
        "name": "Old Church Bell Meme",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/old-church-bell-meme.mp3"
    },
    {
        "name": "frieza says hello",
        "color": "rgb(247, 26, 255)",
        "mp3": "/media/sounds/frieza-says-hello.mp3"
    },
    {
        "name": "Sonic.exe 2011X laugh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sonic-exe-2011x-laugh.mp3"
    },
    {
        "name": "Hell nah (dog)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hell-nah-dog_lU72pEf.mp3"
    },
    {
        "name": "20th Century Fox Fanfare",
        "color": "rgb(255, 211, 0)",
        "mp3": "/media/sounds/20th-century-fox-fanfare.mp3"
    },
    {
        "name": "AHHHHHHHHHHHHHHHHHHH",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ahhhhhhhhhhhhhhhh_8axRFzx.mp3"
    },
    {
        "name": "frieza says hello",
        "color": "rgb(247, 26, 255)",
        "mp3": "/media/sounds/frieza-says-hello.mp3"
    },
    {
        "name": "Alexis Texas",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/alexis-texas.mp3"
    },
    {
        "name": "RAAAAAHHH ‼️‼️‼️",
        "color": "rgb(47, 255, 0)",
        "mp3": "/media/sounds/raaaaahhh.mp3"
    },
    {
        "name": "415-й я база ответьте",
        "color": "rgb(63, 255, 150)",
        "mp3": "/media/sounds/415-i-ia-baza-otvette.mp3"
    },
    {
        "name": "OMG IM COMING",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/omg-im-coming.mp3"
    },
    {
        "name": "Windows Error Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/windows-error-sound_9PcNR0C.mp3"
    },
    {
        "name": "Sleeping",
        "color": "rgb(67, 0, 255)",
        "mp3": "/media/sounds/sleeping_HwTkaox.mp3"
    },
    {
        "name": "Eagle",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sounds_eng-00381.mp3"
    },
    {
        "name": "Bye have a great time!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bye-have-a-great-time.mp3"
    },
    {
        "name": "Galaxy brain meme",
        "color": "rgb(168, 245, 255)",
        "mp3": "/media/sounds/galaxy-brain-meme.mp3"
    },
    {
        "name": "BOMBASTIC SIDE EYE",
        "color": "rgb(156, 0, 0)",
        "mp3": "/media/sounds/bombastic-side-eye.mp3"
    },
    {
        "name": "Cash Register",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/audiojoiner120623175716.mp3"
    },
    {
        "name": "Scary Maze Game Scream Sound",
        "color": "rgb(0, 255, 247)",
        "mp3": "/media/sounds/final_60108db6919bc200b087a3a2_239343.mp3"
    },
    {
        "name": "Man Screaming Meme",
        "color": "rgb(111, 214, 255)",
        "mp3": "/media/sounds/man-screaming-memes-sound-effect-2020-for-pro-content-creators_HU6teNC.mp3"
    },
    {
        "name": "ROBLOX bass sound effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bass_vCrw3wU.mp3"
    },
    {
        "name": "Chick Fila HELP ME HELLLLP (just help)",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/chick-fila-help-me-hellllp-just-help.mp3"
    },
    {
        "name": "Download",
        "color": "rgb(251, 255, 110)",
        "mp3": "/media/sounds/download_CTlTO3X.mp3"
    },
    {
        "name": "formula 1 box box",
        "color": "rgb(255, 81, 81)",
        "mp3": "/media/sounds/formula-1-box-box.mp3"
    },
    {
        "name": "cat iphone ringtone",
        "color": "rgb(224, 252, 255)",
        "mp3": "/media/sounds/cat-iphone-ringtone.mp3"
    },
    {
        "name": "Foi quando Gyro Finalmente Entendeu",
        "color": "rgb(55, 28, 137)",
        "mp3": "/media/sounds/foi-quando-gyro-finalmente-entendeu.mp3"
    },
    {
        "name": "santa goo goo ga ga",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/santa-goo-goo-ga-ga.mp3"
    },
    {
        "name": "Oooweee",
        "color": "rgb(141, 147, 255)",
        "mp3": "/media/sounds/oooweee.mp3"
    },
    {
        "name": "kim jong un is the master of goon",
        "color": "rgb(255, 231, 4)",
        "mp3": "/media/sounds/kim-jong-un-is-the-master-of-goon.mp3"
    },
    {
        "name": "Roblox Death Sound Effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/roblox-death-sound-effect.mp3"
    },
    {
        "name": "Hyper-Reallistic Knocking",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/crazy-realistic-knocking-sound-trim.mp3"
    },
    {
        "name": "Hell Naw Dog",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hell-naw-dog.mp3"
    },
    {
        "name": "omae wa mou shindeiru NANI",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/nani_Pmxf5n3.mp3"
    },
    {
        "name": "hog rider",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hog-rider.mp3"
    },
    {
        "name": "SHADOW WIZARD MONEY GANG WE LOVE CASTING SPELLS",
        "color": "rgb(6, 6, 72)",
        "mp3": "/media/sounds/shadow-wizard-money-gang-we-love-casting-spells_3h95aGA.mp3"
    },
    {
        "name": "TF2 - Frying Pan",
        "color": "rgb(51, 51, 51)",
        "mp3": "/media/sounds/melee_frying_pan_01.mp3"
    },
    {
        "name": "Spongebob - Grass Skirt Chase",
        "color": "rgb(255, 244, 43)",
        "mp3": "/media/sounds/spongebob-music_-grass-skirt-chase-1.mp3"
    },
    {
        "name": "Mario Star Power",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/super-mario-bros-nes-music-star-theme-cut-mp3.mp3"
    },
    {
        "name": "talking benn yes",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/talking-benn-yes.mp3"
    },
    {
        "name": "John pork is calling moooort",
        "color": "rgb(255, 93, 214)",
        "mp3": "/media/sounds/john-pork-is-calling-moooort.mp3"
    },
    {
        "name": "Zeep Glorp (green alien cat meme)",
        "color": "rgb(121, 255, 38)",
        "mp3": "/media/sounds/zeep-glorp-green-alien-cat-meme.mp3"
    },
    {
        "name": "67 sound",
        "color": "rgb(2, 255, 217)",
        "mp3": "/media/sounds/67-sound.mp3"
    },
    {
        "name": "Iyot SFX",
        "color": "rgb(255, 38, 248)",
        "mp3": "/media/sounds/iyot-sfx.mp3"
    },
    {
        "name": "Sleeping",
        "color": "rgb(67, 0, 255)",
        "mp3": "/media/sounds/sleeping_HwTkaox.mp3"
    },
    {
        "name": "SHADOW WIZARD MONEY GANG WE LOVE CASTING SPELLS",
        "color": "rgb(6, 6, 72)",
        "mp3": "/media/sounds/shadow-wizard-money-gang-we-love-casting-spells_3h95aGA.mp3"
    },
    {
        "name": "BOMBASTIC SIDE EYE",
        "color": "rgb(156, 0, 0)",
        "mp3": "/media/sounds/bombastic-side-eye.mp3"
    },
    {
        "name": "Round One Fight",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mortal-kombat-9-sound-drop-round-1-fight.mp3"
    },
    {
        "name": "lets go gambling",
        "color": "rgb(30, 0, 255)",
        "mp3": "/media/sounds/lets-go-gambling.mp3"
    },
    {
        "name": "dry fart",
        "color": "rgb(204, 102, 51)",
        "mp3": "/media/sounds/dry-fart_3.mp3"
    },
    {
        "name": "Cash Register",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/audiojoiner120623175716.mp3"
    },
    {
        "name": "Hell nah (dog)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hell-nah-dog_lU72pEf.mp3"
    },
    {
        "name": "Man Screaming Meme",
        "color": "rgb(111, 214, 255)",
        "mp3": "/media/sounds/man-screaming-memes-sound-effect-2020-for-pro-content-creators_HU6teNC.mp3"
    },
    {
        "name": "Sonic - You're Too Slow",
        "color": "rgb(255, 102, 0)",
        "mp3": "/media/sounds/sonic-youre-too-slow.mp3"
    },
    {
        "name": "Domain Expansion - Sukuna",
        "color": "rgb(95, 0, 0)",
        "mp3": "/media/sounds/domain-expansion-sukuna.mp3"
    },
    {
        "name": "Download",
        "color": "rgb(251, 255, 110)",
        "mp3": "/media/sounds/download_CTlTO3X.mp3"
    },
    {
        "name": "Sonic.exe 2011X laugh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sonic-exe-2011x-laugh.mp3"
    },
    {
        "name": "family guy transition",
        "color": "rgb(255, 133, 237)",
        "mp3": "/media/sounds/family-guy-transition.mp3"
    },
    {
        "name": "Weiii - Daitaku Helios",
        "color": "rgb(38, 96, 255)",
        "mp3": "/media/sounds/weiii-daitaku-helios.mp3"
    },
    {
        "name": "415-й я база ответьте",
        "color": "rgb(63, 255, 150)",
        "mp3": "/media/sounds/415-i-ia-baza-otvette.mp3"
    },
    {
        "name": "santa goo goo ga ga",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/santa-goo-goo-ga-ga.mp3"
    },
    {
        "name": "Windows Error Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/windows-error-sound_9PcNR0C.mp3"
    },
    {
        "name": "Roblox Death Sound Effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/roblox-death-sound-effect.mp3"
    },
    {
        "name": "Hyper-Reallistic Knocking",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/crazy-realistic-knocking-sound-trim.mp3"
    },
    {
        "name": "Hell Naw Dog",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hell-naw-dog.mp3"
    },
    {
        "name": "omae wa mou shindeiru NANI",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/nani_Pmxf5n3.mp3"
    },
    {
        "name": "Bye have a great time!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bye-have-a-great-time.mp3"
    },
    {
        "name": "Wah wah wah waaaaaaaahhh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/wah-wah-sound-effect.mp3"
    },
    {
        "name": "Spongebob - Grass Skirt Chase",
        "color": "rgb(255, 244, 43)",
        "mp3": "/media/sounds/spongebob-music_-grass-skirt-chase-1.mp3"
    },
    {
        "name": "Mario Star Power",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/super-mario-bros-nes-music-star-theme-cut-mp3.mp3"
    },
    {
        "name": "JOJO SONG",
        "color": "rgb(255, 252, 90)",
        "mp3": "/media/sounds/jojos-golden-wind_kL2WElB.mp3"
    },
    {
        "name": "fart 2",
        "color": "rgb(102, 51, 0)",
        "mp3": "/media/sounds/fart_1.mp3"
    },
    {
        "name": "FNAF Balloon Boy Laugh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/echo4b.mp3"
    },
    {
        "name": "Z Z Z Z Z Z",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/z-z-z-z-z-z.mp3"
    },
    {
        "name": "School Bell",
        "color": "rgb(0, 204, 0)",
        "mp3": "/media/sounds/school-bell-ringing-sound-effect.mp3"
    },
    {
        "name": "scout scream",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/screaming-scout.mp3"
    },
    {
        "name": "Kaboom Kablaow",
        "color": "rgb(96, 255, 71)",
        "mp3": "/media/sounds/kaboom-kablaow.mp3"
    },
    {
        "name": "Inception Button",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/inceptionbutton.mp3"
    },
    {
        "name": "Creeper Hiss",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/creeper.mp3"
    },
    {
        "name": "You Stupid",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ustoopid.mp3"
    },
    {
        "name": "You Are My Sunshine Lebron James",
        "color": "rgb(241, 255, 180)",
        "mp3": "/media/sounds/you-are-my-sunshine-lebron-james.mp3"
    },
    {
        "name": "World's Smallest Violin",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/worlds-smallest-violin.mp3"
    },
    {
        "name": "Spongebob - Grass Skirt Chase",
        "color": "rgb(255, 244, 43)",
        "mp3": "/media/sounds/spongebob-music_-grass-skirt-chase-1.mp3"
    },
    {
        "name": "Mario Star Power",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/super-mario-bros-nes-music-star-theme-cut-mp3.mp3"
    },
    {
        "name": "tom da tank meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/loud-version_7n1qEm2.mp3"
    },
    {
        "name": "(mafioso) scream",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/mafioso-scream.mp3"
    },
    {
        "name": "Joker Shitpost beatbox",
        "color": "rgb(22, 255, 46)",
        "mp3": "/media/sounds/joker-shitpost-beatbox.mp3"
    },
    {
        "name": "goofy scream",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/goofy-yell_LvAybRd.mp3"
    },
    {
        "name": "Miau triste",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/miau-triste.mp3"
    },
    {
        "name": "FAHHHHHH",
        "color": "rgb(255, 63, 201)",
        "mp3": "/media/sounds/fahhhhhh.mp3"
    },
    {
        "name": "James Doakes",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/james-doakes.mp3"
    },
    {
        "name": "round ending gorilla tag",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/round-ending-gorilla-tag.mp3"
    },
    {
        "name": "Charlie Charlie Kirky",
        "color": "rgb(56, 199, 255)",
        "mp3": "/media/sounds/charlie-charlie-kirky.mp3"
    },
    {
        "name": "Zeep Glorp (green alien cat meme)",
        "color": "rgb(121, 255, 38)",
        "mp3": "/media/sounds/zeep-glorp-green-alien-cat-meme.mp3"
    },
    {
        "name": "Stagger LIMBUS COMPANY",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/stagger-limbus-company.mp3"
    },
    {
        "name": "sus clapping4",
        "color": "rgb(252, 255, 102)",
        "mp3": "/media/sounds/sus-clapping4.mp3"
    },
    {
        "name": "Meow ghop ghop ghop",
        "color": "rgb(255, 52, 251)",
        "mp3": "/media/sounds/meow-ghop-ghop-ghop.mp3"
    },
    {
        "name": "Привет пупсик",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/privet-pupsik.mp3"
    },
    {
        "name": "Baby boo",
        "color": "rgb(59, 255, 59)",
        "mp3": "/media/sounds/baby-boo_GQh7SML.mp3"
    },
    {
        "name": "YEET",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/yeet-sound-effect.mp3"
    },
    {
        "name": "bye bye mewing",
        "color": "rgb(35, 26, 255)",
        "mp3": "/media/sounds/bye-bye-mewing_fMVssQz.mp3"
    },
    {
        "name": "Record Scratch",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/record-scratch.mp3"
    },
    {
        "name": "Galaxy brain meme",
        "color": "rgb(168, 245, 255)",
        "mp3": "/media/sounds/galaxy-brain-meme.mp3"
    },
    {
        "name": "undertale - megalovania",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/megalovania.mp3"
    },
    {
        "name": "Valorant spike plant",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/valorant-spike-plant.mp3"
    },
    {
        "name": "Tyler1 Help",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ayhelp.mp3"
    },
    {
        "name": "Doom Eternal",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/doom-eternal.mp3"
    },
    {
        "name": "rizzzzzzzzing",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/rizzzzzzzzing.mp3"
    },
    {
        "name": "Netflix intro",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/nouveau-jingle-netflix.mp3"
    },
    {
        "name": "THE LOUDEST NOISE EVER!",
        "color": "rgb(255, 247, 246)",
        "mp3": "/media/sounds/the-loudest-noise-ever.mp3"
    },
    {
        "name": "toilet sounds",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/video0_czt1xZo.mp3"
    },
    {
        "name": "Fire Whoosh",
        "color": "rgb(238, 228, 23)",
        "mp3": "/media/sounds/fire-whoosh.mp3"
    },
    {
        "name": "FAHHH SOUND EFFECT",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fahhh-sound-effect.mp3"
    },
    {
        "name": "Стипка228про",
        "color": "rgb(88, 255, 241)",
        "mp3": "/media/sounds/stipka228pro.mp3"
    },
    {
        "name": "Leeroy Jenkins",
        "color": "rgb(0, 102, 204)",
        "mp3": "/media/sounds/leroy.swf.mp3"
    },
    {
        "name": "GET OUT Tuco",
        "color": "rgb(162, 69, 255)",
        "mp3": "/media/sounds/get-out-tuco.mp3"
    },
    {
        "name": "peter griffin laugh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/laugh-3_9wVKqU7.mp3"
    },
    {
        "name": "Animal Crossing Isabelle Voice",
        "color": "rgb(243, 255, 75)",
        "mp3": "/media/sounds/animal-crossing-isabelle-voice-clips-no-background-music-youtubemp3free.mp3"
    },
    {
        "name": "Curb Your Enthusiasm",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/curb-your-enthusiasm.mp3"
    },
    {
        "name": "Round One Fight",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mortal-kombat-9-sound-drop-round-1-fight.mp3"
    },
    {
        "name": "iCarly Cheers",
        "color": "rgb(39, 248, 255)",
        "mp3": "/media/sounds/icarly-cheers.mp3"
    },
    {
        "name": "rizzzzzzzzing",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/rizzzzzzzzing.mp3"
    },
    {
        "name": "Crickets Chirping",
        "color": "rgb(0, 153, 0)",
        "mp3": "/media/sounds/crickets-chirping.mp3"
    },
    {
        "name": "adrian explain our friend group",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/adrian-explain-our-friend-group.mp3"
    },
    {
        "name": "Miss!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/miss_2G4oN9I.mp3"
    },
    {
        "name": "spongebob oh yeah",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/32323232322.mp3"
    },
    {
        "name": "extremely loud correct buzzer",
        "color": "rgb(33, 255, 29)",
        "mp3": "/media/sounds/extremely-loud-correct-buzzer.mp3"
    },
    {
        "name": "Noot Noot - Pingu",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/noot_p0CPOIz.mp3"
    },
    {
        "name": "LET ME TELL YOU SOMETHING",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/let-me-tell-you-something.mp3"
    },
    {
        "name": "Dragon Ball Z Heavy Punch",
        "color": "rgb(38, 190, 255)",
        "mp3": "/media/sounds/dragon-ball-z-heavy-punch.mp3"
    },
    {
        "name": "Kim Possible Sitch",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/kim-possible-ringtone.mp3"
    },
    {
        "name": "MAHORAGA, HELP ME!",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/mahoraga-help-me.mp3"
    },
    {
        "name": "oh my god bro ah hell nah",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/oh-my-god-bro-ah-hell-nah.mp3"
    },
    {
        "name": "cat iphone ringtone",
        "color": "rgb(224, 252, 255)",
        "mp3": "/media/sounds/cat-iphone-ringtone.mp3"
    },
    {
        "name": "MLP Squee",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mlp-squee.mp3"
    },
    {
        "name": "yo phone ringing -chino",
        "color": "rgb(255, 218, 83)",
        "mp3": "/media/sounds/yo-phone-ringing-chino.mp3"
    },
    {
        "name": "Standoff 2 звук бомбы",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/standoff-2-zvuk-bomby.mp3"
    },
    {
        "name": "BurntPeanut-ueheuehuehuehaeu",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/burntpeanut-ueheuehuehuehaeu.mp3"
    },
    {
        "name": "PARTY AT THE BEACH",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/party-at-the-beach.mp3"
    },
    {
        "name": "loudest alarm ever made",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/loudest-alarm-ever-made.mp3"
    },
    {
        "name": "Open the noor!",
        "color": "rgb(109, 255, 37)",
        "mp3": "/media/sounds/open-the-noor.mp3"
    },
    {
        "name": "Goose HONK!",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/honk-sound.mp3"
    },
    {
        "name": "im in danger",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fma6waln.mp3"
    },
    {
        "name": "LOUD Taco Bell Bong",
        "color": "rgb(255, 245, 176)",
        "mp3": "/media/sounds/taco-bell.mp3"
    },
    {
        "name": "Wah wah wah waaaaaaaahhh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/wah-wah-sound-effect.mp3"
    },
    {
        "name": "Old Minecraft Zombie Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/old-sound-of-zombie-in-minecraft.mp3"
    },
    {
        "name": "WHAT THE HELLLLLLLLLLLL",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/what-the-hellllllllllll.mp3"
    },
    {
        "name": "Dr. Livesey",
        "color": "rgb(11, 57, 3)",
        "mp3": "/media/sounds/dr-livesey.mp3"
    },
    {
        "name": "BurntPeanut-ueheuehuehuehaeu",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/burntpeanut-ueheuehuehuehaeu.mp3"
    },
    {
        "name": "Open the noor!",
        "color": "rgb(109, 255, 37)",
        "mp3": "/media/sounds/open-the-noor.mp3"
    },
    {
        "name": "Goose HONK!",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/honk-sound.mp3"
    },
    {
        "name": "Its A Me, Mario",
        "color": "rgb(204, 51, 0)",
        "mp3": "/media/sounds/its-me-mario.mp3"
    },
    {
        "name": "im in danger",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fma6waln.mp3"
    },
    {
        "name": "LOUD Taco Bell Bong",
        "color": "rgb(255, 245, 176)",
        "mp3": "/media/sounds/taco-bell.mp3"
    },
    {
        "name": "World's Smallest Violin",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/worlds-smallest-violin.mp3"
    },
    {
        "name": "Wah wah wah waaaaaaaahhh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/wah-wah-sound-effect.mp3"
    },
    {
        "name": "Old Minecraft Zombie Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/old-sound-of-zombie-in-minecraft.mp3"
    },
    {
        "name": "Mario kart start race",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mariostart.mp3"
    },
    {
        "name": "tung tung tung tung sahur",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/tung-tung-tung-tung-sahur.mp3"
    },
    {
        "name": "WHAT THE HELLLLLLLLLLLL",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/what-the-hellllllllllll.mp3"
    },
    {
        "name": "Dr. Livesey",
        "color": "rgb(11, 57, 3)",
        "mp3": "/media/sounds/dr-livesey.mp3"
    },
    {
        "name": "blink",
        "color": "rgb(220, 255, 219)",
        "mp3": "/media/sounds/blink_FNZ3zVv.mp3"
    },
    {
        "name": "Avocados from Mexico",
        "color": "rgb(12, 3, 255)",
        "mp3": "/media/sounds/avocados-from-mexico.mp3"
    },
    {
        "name": "concrete scraping",
        "color": "rgb(66, 116, 255)",
        "mp3": "/media/sounds/concrete-scraping.mp3"
    },
    {
        "name": "Car Brake and Crash",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/car-brake-and-crash.mp3"
    },
    {
        "name": "BFDI gasp",
        "color": "rgb(15, 255, 115)",
        "mp3": "/media/sounds/bfdi-gasp.mp3"
    },
    {
        "name": "Cute Girl Laughing Sound Effect",
        "color": "rgb(255, 165, 232)",
        "mp3": "/media/sounds/cute-girl-laughing-sound-effect.mp3"
    },
    {
        "name": "Surprise mother f'er",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/surprise-mother-fer.mp3"
    },
    {
        "name": "anime .ah",
        "color": "rgb(255, 227, 170)",
        "mp3": "/media/sounds/anime-ah_4UL8Jae.mp3"
    },
    {
        "name": "And his name is John Cena",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/and-his-name-is-john-cena.mp3"
    },
    {
        "name": "ОХ ЗРЯ Я ТУДА ПОЛЕЗ",
        "color": "rgb(184, 255, 170)",
        "mp3": "/media/sounds/okh-zria-ia-tuda-polez.mp3"
    },
    {
        "name": "Казахстан угрожает бомбордировкой",
        "color": "rgb(2, 255, 199)",
        "mp3": "/media/sounds/kazakhstan-ugrozhaet-bombordirovkoi.mp3"
    },
    {
        "name": "WTF BOOM!",
        "color": "rgb(255, 153, 204)",
        "mp3": "/media/sounds/wtf_boom.mp3"
    },
    {
        "name": "Sicko Mode Meme SFX",
        "color": "rgb(255, 170, 0)",
        "mp3": "/media/sounds/the-beginning-of-sicko-mode-sound-effect-for-memes_xAcUeuI.mp3"
    },
    {
        "name": "You Stupid",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ustoopid.mp3"
    },
    {
        "name": "You Are My Sunshine Lebron James",
        "color": "rgb(241, 255, 180)",
        "mp3": "/media/sounds/you-are-my-sunshine-lebron-james.mp3"
    },
    {
        "name": "I am Steve",
        "color": "rgb(48, 169, 255)",
        "mp3": "/media/sounds/i-am-steve.mp3"
    },
    {
        "name": "Cartoon Chase",
        "color": "rgb(24, 255, 32)",
        "mp3": "/media/sounds/chase_QnUxJTk.mp3"
    },
    {
        "name": "Kissing Sound",
        "color": "rgb(255, 0, 204)",
        "mp3": "/media/sounds/smoochykiss.mp3"
    },
    {
        "name": "Dune Scream",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/dune-scream.mp3"
    },
    {
        "name": "atumalaca hahahahaha",
        "color": "rgb(255, 131, 186)",
        "mp3": "/media/sounds/risada-do-peludao-atumalaca.mp3"
    },
    {
        "name": "moai",
        "color": "rgb(145, 145, 145)",
        "mp3": "/media/sounds/moai.mp3"
    },
    {
        "name": "Home Improvement Huh",
        "color": "rgb(67, 112, 255)",
        "mp3": "/media/sounds/home-improvement-huh.mp3"
    },
    {
        "name": "what the hell (speed up)",
        "color": "rgb(108, 28, 132)",
        "mp3": "/media/sounds/what-the-hell-speed-up.mp3"
    },
    {
        "name": "atumalaca hahahahaha",
        "color": "rgb(255, 131, 186)",
        "mp3": "/media/sounds/risada-do-peludao-atumalaca.mp3"
    },
    {
        "name": "moai",
        "color": "rgb(145, 145, 145)",
        "mp3": "/media/sounds/moai.mp3"
    },
    {
        "name": "what the hell (speed up)",
        "color": "rgb(108, 28, 132)",
        "mp3": "/media/sounds/what-the-hell-speed-up.mp3"
    },
    {
        "name": "Rosa De Guadalupe Suspense",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/untitled-4319-10.mp3"
    },
    {
        "name": "Low Health / Critical Health Pokémon",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/low-health-critical-health-pokemon.mp3"
    },
    {
        "name": "Domain Expansion - Sukuna",
        "color": "rgb(95, 0, 0)",
        "mp3": "/media/sounds/domain-expansion-sukuna.mp3"
    },
    {
        "name": "TF2 Notification Sound",
        "color": "rgb(157, 157, 157)",
        "mp3": "/media/sounds/tf2-notification-sound.mp3"
    },
    {
        "name": "bowser fart",
        "color": "rgb(255, 212, 112)",
        "mp3": "/media/sounds/bowser-fart.mp3"
    },
    {
        "name": "sad music indian",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/tmpauxfo4ff.mp3"
    },
    {
        "name": "Maltigi",
        "color": "rgb(77, 234, 31)",
        "mp3": "/media/sounds/maltigi.mp3"
    },
    {
        "name": "Old Church Bells - Death",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/old-church-bells-death.mp3"
    },
    {
        "name": "Hola tururururururururururu",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hola-tururururururururururu.mp3"
    },
    {
        "name": "Yamate Kudesai",
        "color": "rgb(206, 254, 255)",
        "mp3": "/media/sounds/yamate-kudesai.mp3"
    },
    {
        "name": "Koun hai re",
        "color": "rgb(79, 184, 255)",
        "mp3": "/media/sounds/koun-hai-re_8ep4nAR.mp3"
    },
    {
        "name": "Lion King - Circle of Life",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/rey_leon.mp3"
    },
    {
        "name": "Рингтон Франклина ГТА 5",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/rington-franklina-gta-5.mp3"
    },
    {
        "name": "Sexy back ZRT4",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/sexy-back-zrt4.mp3"
    },
    {
        "name": "Original fah",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/original-fah.mp3"
    },
    {
        "name": "We'll be right back",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/well-be-right-back.mp3"
    },
    {
        "name": "Final Fantasy Victory Fanfare",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/final-fantasy-vii-victory-fanfare-1.mp3"
    },
    {
        "name": "Emotional_Damage",
        "color": "rgb(255, 8, 38)",
        "mp3": "/media/sounds/emotional-damage_svaNMfN.mp3"
    },
    {
        "name": "Rap Battle OOOHHHH!",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/the-rap-battle-parody-oh.mp3"
    },
    {
        "name": "Tyler1 Help",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ayhelp.mp3"
    },
    {
        "name": "AMONGUS",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/among_us_trap_remix_bass_boosted_leonz_8455886905626474145-mp3cut.mp3"
    },
    {
        "name": "PACKING LOUDEST",
        "color": "rgb(94, 0, 0)",
        "mp3": "/media/sounds/packing-loudest.mp3"
    },
    {
        "name": "GMod ragdoll impact sounds",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/tmpl0bxqky_.mp3"
    },
    {
        "name": "Perfect Street Fighter",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/perfect-street-fighter-sound-effect.mp3"
    },
    {
        "name": "rust c4",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/rust-c4.mp3"
    },
    {
        "name": "Talking Ben No",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/talking-ben-no.mp3"
    },
    {
        "name": "THE LOUDEST NOISE EVER!",
        "color": "rgb(255, 247, 246)",
        "mp3": "/media/sounds/the-loudest-noise-ever.mp3"
    },
    {
        "name": "Thanks for the follow!",
        "color": "rgb(255, 65, 198)",
        "mp3": "/media/sounds/follow_vrIWkAR.mp3"
    },
    {
        "name": "Subway Surfers",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/subway-surfers.mp3"
    },
    {
        "name": "Cashh Money",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/para-sesi-efekti_PaUswM1.mp3"
    },
    {
        "name": "the price is right winner sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/thepriceisrightextendedtheme128kmusic.mp3"
    },
    {
        "name": "lion king funny",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/lion-king-funny.mp3"
    },
    {
        "name": "'What'meme",
        "color": "rgb(112, 237, 205)",
        "mp3": "/media/sounds/what_JOcN7Y8.mp3"
    },
    {
        "name": "round ending gorilla tag",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/round-ending-gorilla-tag.mp3"
    },
    {
        "name": "question mark",
        "color": "rgb(12, 89, 255)",
        "mp3": "/media/sounds/question-mark.mp3"
    },
    {
        "name": "тунг тунг тунг саур татата саур",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/tung-tung-tung-saur-tatata-saur.mp3"
    },
    {
        "name": "Allahu akbaar",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/allahu-akbaar.mp3"
    },
    {
        "name": "Doutor Nefário (música)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/doutor-nefario-musica.mp3"
    },
    {
        "name": "Bongo Feet",
        "color": "rgb(51, 0, 153)",
        "mp3": "/media/sounds/bongo-feet.mp3"
    },
    {
        "name": "PACKING LOUDEST",
        "color": "rgb(94, 0, 0)",
        "mp3": "/media/sounds/packing-loudest.mp3"
    },
    {
        "name": "Don't push the red button!",
        "color": "rgb(102, 0, 0)",
        "mp3": "/media/sounds/explosion-sound-effect.mp3"
    },
    {
        "name": "Kissing Sound",
        "color": "rgb(255, 0, 204)",
        "mp3": "/media/sounds/smoochykiss.mp3"
    },
    {
        "name": "Slash undertale",
        "color": "rgb(100, 0, 0)",
        "mp3": "/media/sounds/undertale-attack-slash-green-screen.mp3"
    },
    {
        "name": "Boing Boing",
        "color": "rgb(255, 0, 153)",
        "mp3": "/media/sounds/japan-oppai-sound.mp3"
    },
    {
        "name": "Price is Right Failure",
        "color": "rgb(51, 153, 0)",
        "mp3": "/media/sounds/priceisrightfail_1.mp3"
    },
    {
        "name": "Poop sound effect",
        "color": "rgb(84, 255, 223)",
        "mp3": "/media/sounds/poop-sound-effect.mp3"
    },
    {
        "name": "Law and Order",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/dun-dun.mp3"
    },
    {
        "name": "musica romantica",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/musica-romantica.mp3"
    },
    {
        "name": "Grilled cheese Obama sandwich",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/grilled-cheese-obama-sandwich.mp3"
    },
    {
        "name": "6 77",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/6-77.mp3"
    },
    {
        "name": "stupid ni-",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/stupid-ni_fP74ILk.mp3"
    },
    {
        "name": "Chainsawman Power i hate ga",
        "color": "rgb(255, 41, 41)",
        "mp3": "/media/sounds/chainsawman-power-i-hate-ga.mp3"
    },
    {
        "name": "LOUD Taco Bell Bong",
        "color": "rgb(255, 245, 176)",
        "mp3": "/media/sounds/taco-bell.mp3"
    },
    {
        "name": "Nintendo Switch Click",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/switch-sound.mp3"
    },
    {
        "name": "Old Minecraft Zombie Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/old-sound-of-zombie-in-minecraft.mp3"
    },
    {
        "name": "Mina Mexicana™ Fart",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mina-mexicanatm-fart.mp3"
    },
    {
        "name": "fortnite pump shotgun",
        "color": "rgb(81, 255, 41)",
        "mp3": "/media/sounds/fortnite-pump-shotgun.mp3"
    },
    {
        "name": "'What'meme",
        "color": "rgb(112, 237, 205)",
        "mp3": "/media/sounds/what_JOcN7Y8.mp3"
    },
    {
        "name": "Blood Splatter 44101",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/blood-splatter-44101_jogObWJ.mp3"
    },
    {
        "name": "ayooooooo",
        "color": "rgb(66, 252, 255)",
        "mp3": "/media/sounds/ayooooooo_R0QLGMG.mp3"
    },
    {
        "name": "Lego Batman Laugh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/lego-batman-laugh.mp3"
    },
    {
        "name": "Roblox ahh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/roblox-ahh.mp3"
    },
    {
        "name": "21",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/best-vines-u-stoopid.mp3"
    },
    {
        "name": "Burger did he say that his last name is burger",
        "color": "rgb(80, 122, 255)",
        "mp3": "/media/sounds/burger-did-he-say-that-his-last-name-is-burger.mp3"
    },
    {
        "name": "rip granny",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/rip-granny.mp3"
    },
    {
        "name": "MK11 Fatality",
        "color": "rgb(120, 0, 0)",
        "mp3": "/media/sounds/mk11-fatality.mp3"
    },
    {
        "name": "Inception Button",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/inceptionbutton.mp3"
    },
    {
        "name": "lord have mercy i'm about to bust",
        "color": "rgb(82, 220, 255)",
        "mp3": "/media/sounds/lord-have-mercy-im-bout-to-bust.mp3"
    },
    {
        "name": "Sad violin (14sec)",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/export_4.mp3"
    },
    {
        "name": "cat iphone ringtone",
        "color": "rgb(224, 252, 255)",
        "mp3": "/media/sounds/cat-iphone-ringtone.mp3"
    },
    {
        "name": "ak47 loud",
        "color": "rgb(45, 58, 255)",
        "mp3": "/media/sounds/ak47-loud.mp3"
    },
    {
        "name": "fighting sound effect",
        "color": "rgb(40, 83, 255)",
        "mp3": "/media/sounds/fighting-sound-effect.mp3"
    },
    {
        "name": "Baby launghing bass boosted",
        "color": "rgb(160, 249, 255)",
        "mp3": "/media/sounds/baby-launghing-bass-boosted.mp3"
    },
    {
        "name": "Tmkc Mahavirwa wala",
        "color": "rgb(255, 40, 0)",
        "mp3": "/media/sounds/tmkc-mahavirwa-wala.mp3"
    },
    {
        "name": "Да ты че",
        "color": "rgb(211, 255, 141)",
        "mp3": "/media/sounds/da-ty-che.mp3"
    },
    {
        "name": "You Should Kill Yourself NOW!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/you-should-kill-yourself-now_kw2zfGg.mp3"
    },
    {
        "name": "loudest alarm ever made",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/loudest-alarm-ever-made.mp3"
    },
    {
        "name": "I can smell you",
        "color": "rgb(51, 0, 153)",
        "mp3": "/media/sounds/morgan-smell.mp3"
    },
    {
        "name": "Teleport sound",
        "color": "rgb(102, 204, 255)",
        "mp3": "/media/sounds/dbz-teleport.mp3"
    },
    {
        "name": "Windows 10 Error Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/windows-10-error-sound.mp3"
    },
    {
        "name": "mr krabs walking",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/mr-krabs-walking.mp3"
    },
    {
        "name": "Cash Register",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/audiojoiner120623175716.mp3"
    },
    {
        "name": "Fnaf 6 Jumpscare Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fnaf-6-jumpscare-sound-effect.mp3"
    },
    {
        "name": "Zelda chest opening",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/zelda-chest-opening-and-item-catch.mp3"
    },
    {
        "name": "Undertale - Omega Flowey Laugh",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/00002a5b.mp3"
    },
    {
        "name": "SEND THEM TO THE SLAUGHTERHOUSE REEEEEEEEEEEEEEE",
        "color": "rgb(217, 0, 0)",
        "mp3": "/media/sounds/send-them-to-the-slaughterhouse-reeeeeeeeeeeeeee.mp3"
    },
    {
        "name": "Gaster Vanish",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/gaster-vanish.mp3"
    },
    {
        "name": "\"Hey\" Female Voice Sound Effect",
        "color": "rgb(20, 156, 255)",
        "mp3": "/media/sounds/hey-female-voice-sound-effect.mp3"
    },
    {
        "name": "Caught a Pokemon!",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/06-caught-a-pokemon.mp3"
    },
    {
        "name": "Slendytubbies Tinky Winky",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/slendy1.mp3"
    },
    {
        "name": "Dr. Livesey",
        "color": "rgb(11, 57, 3)",
        "mp3": "/media/sounds/dr-livesey.mp3"
    },
    {
        "name": "Door Knocking SFX",
        "color": "rgb(255, 222, 55)",
        "mp3": "/media/sounds/door-knocking.mp3"
    },
    {
        "name": "gigachad theme music",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gigachad-theme-music.mp3"
    },
    {
        "name": "formula 1 radio notification",
        "color": "rgb(126, 255, 107)",
        "mp3": "/media/sounds/formula-1-radio-notification.mp3"
    },
    {
        "name": "OKAY LETS  GO",
        "color": "rgb(203, 52, 255)",
        "mp3": "/media/sounds/okay-lets-go_buBmJye.mp3"
    },
    {
        "name": "musica romantica",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/musica-romantica.mp3"
    },
    {
        "name": "bass boost drop!",
        "color": "rgb(255, 169, 234)",
        "mp3": "/media/sounds/bass-boost-drop.mp3"
    },
    {
        "name": "IHIHIHIHI HAHAHAHA - Starcasm Nyx Yandere Laugh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/starcasm-nyx-yandere-laugh_RTnF27y.mp3"
    },
    {
        "name": "vsauce",
        "color": "rgb(57, 255, 136)",
        "mp3": "/media/sounds/jake-chudnow-edited_y1t8j5q.mp3"
    },
    {
        "name": "Invisible - Duran",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/invisible-duran.mp3"
    },
    {
        "name": "Yowai Mo (Gojo)",
        "color": "rgb(0, 28, 255)",
        "mp3": "/media/sounds/yowai-mo-gojo_EIhp35V.mp3"
    },
    {
        "name": "Transition (whoosh)",
        "color": "rgb(48, 227, 255)",
        "mp3": "/media/sounds/transition-whoosh.mp3"
    },
    {
        "name": "Jet Set Radio - Success",
        "color": "rgb(50, 255, 0)",
        "mp3": "/media/sounds/jet-set-radio-success.mp3"
    },
    {
        "name": "jet set radio spray 2",
        "color": "rgb(221, 255, 0)",
        "mp3": "/media/sounds/jet-set-radio-spray-2_pITyzB4.mp3"
    },
    {
        "name": "goopa gotta goop",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/goopa-gotta-goop.mp3"
    },
    {
        "name": "musica romantica",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/musica-romantica.mp3"
    },
    {
        "name": "'What'meme",
        "color": "rgb(112, 237, 205)",
        "mp3": "/media/sounds/what_JOcN7Y8.mp3"
    },
    {
        "name": "Popular Riser",
        "color": "rgb(0, 213, 255)",
        "mp3": "/media/sounds/popular-riser.mp3"
    },
    {
        "name": "Oh Hell Nononoo",
        "color": "rgb(55, 255, 227)",
        "mp3": "/media/sounds/oh-hell-no_aQX7VTp.mp3"
    },
    {
        "name": "I got a glock in my rori",
        "color": "rgb(255, 51, 204)",
        "mp3": "/media/sounds/fetty_wap_679_feat_2.mp3"
    },
    {
        "name": "round ending gorilla tag",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/round-ending-gorilla-tag.mp3"
    },
    {
        "name": "WINNERS",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/winners_W9Cpenj.mp3"
    },
    {
        "name": "Stagger LIMBUS COMPANY",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/stagger-limbus-company.mp3"
    },
    {
        "name": "Hood Irony Subscribe Bell",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/hood-irony-subscribe-bell.mp3"
    },
    {
        "name": "do you wanna play minigames",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/do-you-wanna-play-minigames.mp3"
    },
    {
        "name": "2 3 years dagestan",
        "color": "rgb(117, 126, 255)",
        "mp3": "/media/sounds/2-3-years-dagestan.mp3"
    },
    {
        "name": "Push tf out yes king",
        "color": "rgb(255, 151, 230)",
        "mp3": "/media/sounds/push-tf-out-yes-king.mp3"
    },
    {
        "name": "Jurassic Park III Satellite Phone",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/jurassic-park-iii-satellite-phone.mp3"
    },
    {
        "name": "ENNNNRIIIIQQQQUEEEEEEEE",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ennnnriiiiqqqqueeeeeeee.mp3"
    },
    {
        "name": "FLASH BANG SFX",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/flash-bang-sfx.mp3"
    },
    {
        "name": "Lula: VAI TODO MINDO SE FDR!!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/lula-vai-todo-mindo-se-fdr.mp3"
    },
    {
        "name": "malunggay pandesal",
        "color": "rgb(0, 255, 94)",
        "mp3": "/media/sounds/malunggay-pandesal.mp3"
    },
    {
        "name": "i want you crying for me (roblox SFX)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/i-want-you-crying-for-me-roblox-sfx.mp3"
    },
    {
        "name": "Hellcat whine",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hellcat-whine.mp3"
    },
    {
        "name": "Kim Jong Un (brainrot)",
        "color": "rgb(43, 35, 68)",
        "mp3": "/media/sounds/kim-jong-un-brainrot.mp3"
    },
    {
        "name": "Allahu akbaar",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/allahu-akbaar.mp3"
    },
    {
        "name": "ayoko malupiton",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ayoko-malupiton.mp3"
    },
    {
        "name": "фотка",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fotka.mp3"
    },
    {
        "name": "Goooooaall",
        "color": "rgb(181, 188, 255)",
        "mp3": "/media/sounds/goooooaall.mp3"
    },
    {
        "name": "Woman Laughing",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/woman-laughing.mp3"
    },
    {
        "name": "Cotton Eye Joe",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/rednex-cotton-eye-joe-official-music-video-hd-rednexmusic-com.mp3"
    },
    {
        "name": "The Simpsons - Nelson's HA-HA!",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/the-simpsons-nelsons-haha.mp3"
    },
    {
        "name": "Cash Register",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/audiojoiner120623175716.mp3"
    },
    {
        "name": "LOUD ALARM",
        "color": "rgb(255, 11, 11)",
        "mp3": "/media/sounds/video0_k03U0Iy.mp3"
    },
    {
        "name": "Rust Headshot",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/eaolwpzhgsba.mp3"
    },
    {
        "name": "Hornet SHAW",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hollow-knight-hornet-voice-11.mp3"
    },
    {
        "name": "Party Horn thing",
        "color": "rgb(255, 51, 51)",
        "mp3": "/media/sounds/partyblower.mp3"
    },
    {
        "name": "spongebob walk",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/spongebob-walk.mp3"
    },
    {
        "name": "Bomb",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/explosion_1.mp3"
    },
    {
        "name": "fortnite pump shotgun",
        "color": "rgb(81, 255, 41)",
        "mp3": "/media/sounds/fortnite-pump-shotgun.mp3"
    },
    {
        "name": "Funny Laugh Track",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/laugh-track-2-mp3cut.mp3"
    },
    {
        "name": "Breaking Bad Intro",
        "color": "rgb(0, 102, 0)",
        "mp3": "/media/sounds/breaking-bad-intro.mp3"
    },
    {
        "name": "Party Horn thing",
        "color": "rgb(255, 51, 51)",
        "mp3": "/media/sounds/partyblower.mp3"
    },
    {
        "name": "Cotton eye joe (nuggets)",
        "color": "rgb(255, 116, 29)",
        "mp3": "/media/sounds/cotton-eye-joe-nuggets.mp3"
    },
    {
        "name": "HI HI HI HA clash royale",
        "color": "rgb(255, 250, 76)",
        "mp3": "/media/sounds/hi-hi-hi-ha-clash-royale.mp3"
    },
    {
        "name": "Cartoon slide whistle",
        "color": "rgb(73, 38, 255)",
        "mp3": "/media/sounds/cartoon-slide.mp3"
    },
    {
        "name": "Squidward Walking",
        "color": "rgb(184, 223, 211)",
        "mp3": "/media/sounds/squidward-walking.mp3"
    },
    {
        "name": "funny laugh sound",
        "color": "rgb(126, 135, 255)",
        "mp3": "/media/sounds/funny-laugh-sound-effect.mp3"
    },
    {
        "name": "E o pix? Nada ainda?",
        "color": "rgb(243, 255, 79)",
        "mp3": "/media/sounds/e-o-pix-nada-ainda.mp3"
    },
    {
        "name": "Minecraft Totem Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/minecraft-totem-sound.mp3"
    },
    {
        "name": "Dreaming Harp",
        "color": "rgb(140, 255, 195)",
        "mp3": "/media/sounds/dreaming-harp-sound-effect.mp3"
    },
    {
        "name": "question mark",
        "color": "rgb(12, 89, 255)",
        "mp3": "/media/sounds/question-mark.mp3"
    },
    {
        "name": "Минута пошла",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/minuta-poshla_LeSDguC.mp3"
    },
    {
        "name": "Greetings Emote Animal Crossing",
        "color": "rgb(165, 132, 255)",
        "mp3": "/media/sounds/greetings-emote-animal-crossing.mp3"
    },
    {
        "name": "Evil Cat Laugh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/evil-cat-laugh.mp3"
    },
    {
        "name": "i got this fahh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/i-got-this-fahh.mp3"
    },
    {
        "name": "No I'm Not Playin On Ma Phone",
        "color": "rgb(39, 32, 27)",
        "mp3": "/media/sounds/no-im-not-playin-on-ma-phone.mp3"
    },
    {
        "name": "Lock in (fast) burnt peanut",
        "color": "rgb(53, 255, 26)",
        "mp3": "/media/sounds/lock-in-fast-burnt-peanut.mp3"
    },
    {
        "name": "packgod 2",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/packgod-2.mp3"
    },
    {
        "name": "Welcome Home from Jarvis",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/welcome-home-from-jarvis.mp3"
    },
    {
        "name": "That was easy",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/that_was_easy.mp3"
    },
    {
        "name": "Giorno's Theme normal",
        "color": "rgb(255, 250, 114)",
        "mp3": "/media/sounds/giornos-theme-but-only-the-best-part-is-in_vwd15lya_lyb0-online-audio-converter.mp3"
    },
    {
        "name": "Teleport sound",
        "color": "rgb(102, 204, 255)",
        "mp3": "/media/sounds/dbz-teleport.mp3"
    },
    {
        "name": "Gojo I Stroke My Pickle",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gojo-i-stroke-my-pickle.mp3"
    },
    {
        "name": "Stone Sliding",
        "color": "rgb(115, 114, 118)",
        "mp3": "/media/sounds/stone-sliding.mp3"
    },
    {
        "name": "Tokyo Drift Alert",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/untitled_zd2ts4l-audiotrimmer.mp3"
    },
    {
        "name": "I Want To Be Ninja",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/i-want-to-be-ninja.mp3"
    },
    {
        "name": "RIGHT FOOT CREEP",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/right-foot-creep.mp3"
    },
    {
        "name": "troll face laugh meme oh no no no",
        "color": "rgb(68, 255, 162)",
        "mp3": "/media/sounds/oh-no-no-no-no-laugh_sejx5Bk.mp3"
    },
    {
        "name": "Smack!",
        "color": "rgb(107, 165, 179)",
        "mp3": "/media/sounds/sharp-punch-soundbible.mp3"
    },
    {
        "name": "Godzilla Atomic Breath - Fast Charge",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/dragon-breath.mp3"
    },
    {
        "name": "R6 Lion",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/r6-lion-sound-effect.mp3"
    },
    {
        "name": "oohh chinese man",
        "color": "rgb(31, 188, 255)",
        "mp3": "/media/sounds/oohh_chinese_man_sound_.mp3"
    },
    {
        "name": "DJ Stop",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/dj-stop.mp3"
    },
    {
        "name": "prowler sound (extended)",
        "color": "rgb(164, 34, 255)",
        "mp3": "/media/sounds/prowler-sound-extended.mp3"
    },
    {
        "name": "Giorno Orchestra",
        "color": "rgb(226, 255, 0)",
        "mp3": "/media/sounds/orchastra-cut2.mp3"
    },
    {
        "name": "risa rana",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/risa-rana.mp3"
    },
    {
        "name": "Minecraft - Glass Break",
        "color": "rgb(94, 248, 255)",
        "mp3": "/media/sounds/minecraft-glass-break.mp3"
    },
    {
        "name": "ak47 loud",
        "color": "rgb(45, 58, 255)",
        "mp3": "/media/sounds/ak47-loud.mp3"
    },
    {
        "name": "fighting sound effect",
        "color": "rgb(40, 83, 255)",
        "mp3": "/media/sounds/fighting-sound-effect.mp3"
    },
    {
        "name": "Long brain fart earrape",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/long-brain-fart-earrape.mp3"
    },
    {
        "name": "iphone apple store sound",
        "color": "rgb(255, 10, 10)",
        "mp3": "/media/sounds/iphone-apple-store-sound.mp3"
    },
    {
        "name": "MM2 Killing (stab)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mm2-killing-stab.mp3"
    },
    {
        "name": "Airbus Stall",
        "color": "rgb(9, 111, 255)",
        "mp3": "/media/sounds/airbus-stall.mp3"
    },
    {
        "name": "jet set radio 1 2 3 4",
        "color": "rgb(158, 117, 255)",
        "mp3": "/media/sounds/jet-set-radio-1-2-3-4.mp3"
    },
    {
        "name": "Grappige Djern",
        "color": "rgb(153, 0, 0)",
        "mp3": "/media/sounds/whatsapp-audio-2016-09-16-at-23.mp3"
    },
    {
        "name": "Burnt Peanut Little Bit of Goop",
        "color": "rgb(255, 2, 230)",
        "mp3": "/media/sounds/burnt-peanut-little-bit-of-goop.mp3"
    },
    {
        "name": "Wrong Answer",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/wrong-answer-sound-fx.mp3"
    },
    {
        "name": "Rugrat-yapping",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/rugrat-yapping.mp3"
    },
    {
        "name": "BDYJTB NAOYA",
        "color": "rgb(143, 139, 122)",
        "mp3": "/media/sounds/bdyjtb-naoya.mp3"
    },
    {
        "name": "Баба Чай",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/baba-chai.mp3"
    },
    {
        "name": "Counter Strike - Bomb Has Been Planted !",
        "color": "rgb(255, 117, 48)",
        "mp3": "/media/sounds/bomb-has-been-planted-sound-effect-csgo.mp3"
    },
    {
        "name": "skibidi toilet",
        "color": "rgb(226, 247, 255)",
        "mp3": "/media/sounds/skibidi-toilet.mp3"
    },
    {
        "name": "illuminati Confirmed",
        "color": "rgb(0, 153, 0)",
        "mp3": "/media/sounds/x-files-theme-song-copy.mp3"
    },
    {
        "name": "spongebob Hi How Are Ya?",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/spongebob-hi-how-are-ya-.mp3"
    },
    {
        "name": "Classic Batman Transition",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/batman-transition-download-sound-link.mp3"
    },
    {
        "name": "Old Spice Whistle = MattHQ",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/old-spice-whistle-hq.mp3"
    },
    {
        "name": "i believe i can fly",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/untitled2.mp3"
    },
    {
        "name": "Fnaf Ambient Noise",
        "color": "rgb(157, 20, 134)",
        "mp3": "/media/sounds/fnaf-ambience-extended_trim.mp3"
    },
    {
        "name": "Explosion",
        "color": "rgb(255, 51, 0)",
        "mp3": "/media/sounds/barrel-exploding-soundbible.mp3"
    },
    {
        "name": "Nokia Arabic Ringstone",
        "color": "rgb(144, 251, 255)",
        "mp3": "/media/sounds/nokia-ringtone-arabic.mp3"
    },
    {
        "name": "Ambatukam",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ambatukam.mp3"
    },
    {
        "name": "Zelda chest opening",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/zelda-chest-opening-and-item-catch.mp3"
    },
    {
        "name": "scooby doo laugh sped up",
        "color": "rgb(148, 71, 26)",
        "mp3": "/media/sounds/scooby-doo-laugh-sped-up.mp3"
    },
    {
        "name": "The long and winded road fart",
        "color": "rgb(0, 153, 0)",
        "mp3": "/media/sounds/the-long-and-winded-road-fart-sounds-for-ringtones1.mp3"
    },
    {
        "name": "Giggity",
        "color": "rgb(153, 255, 0)",
        "mp3": "/media/sounds/quagmire-giggity-giggity-giggity.mp3"
    },
    {
        "name": "NUH UH MEME",
        "color": "rgb(56, 122, 0)",
        "mp3": "/media/sounds/nuh-uh-meme.mp3"
    },
    {
        "name": "fortnite pump shotgun",
        "color": "rgb(81, 255, 41)",
        "mp3": "/media/sounds/fortnite-pump-shotgun.mp3"
    },
    {
        "name": "Sad Hamster",
        "color": "rgb(15, 80, 206)",
        "mp3": "/media/sounds/sad-hamster.mp3"
    },
    {
        "name": "gigachad theme music",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gigachad-theme-music.mp3"
    },
    {
        "name": "formula 1 radio notification",
        "color": "rgb(126, 255, 107)",
        "mp3": "/media/sounds/formula-1-radio-notification.mp3"
    },
    {
        "name": "angry birds theme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/angry-birds-theme-song-audiotrimmer.mp3"
    },
    {
        "name": "OKAY LETS  GO",
        "color": "rgb(203, 52, 255)",
        "mp3": "/media/sounds/okay-lets-go_buBmJye.mp3"
    },
    {
        "name": "alexis texas important news",
        "color": "rgb(255, 184, 234)",
        "mp3": "/media/sounds/alexis-texas-important-news.mp3"
    },
    {
        "name": "Jew jew jew jew jew jew jew jew",
        "color": "rgb(0, 77, 255)",
        "mp3": "/media/sounds/jew-jew-jew-jew-jew-jew-jew-jew.mp3"
    },
    {
        "name": "OOOH MY GOD",
        "color": "rgb(12, 255, 44)",
        "mp3": "/media/sounds/oooh-my-god-vine-mp3cut.mp3"
    },
    {
        "name": "Among us Roundstart",
        "color": "rgb(220, 10, 255)",
        "mp3": "/media/sounds/among-us-roundstart.mp3"
    },
    {
        "name": "GMod ragdoll impact sounds",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/tmpl0bxqky_.mp3"
    },
    {
        "name": "Meme omgs",
        "color": "rgb(255, 217, 27)",
        "mp3": "/media/sounds/meme_lgkJmX6.mp3"
    },
    {
        "name": "tung tung tung tung sahur",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/tung-tung-tung-tung-sahur.mp3"
    },
    {
        "name": "pizza roblox",
        "color": "rgb(211, 255, 108)",
        "mp3": "/media/sounds/trim_7tpktqR.mp3"
    },
    {
        "name": "spongebob oh yeah",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/32323232322.mp3"
    },
    {
        "name": "Minecraft Villager Death",
        "color": "rgb(0, 4, 255)",
        "mp3": "/media/sounds/villager.mp3"
    },
    {
        "name": "Dr. Livesey",
        "color": "rgb(11, 57, 3)",
        "mp3": "/media/sounds/dr-livesey.mp3"
    },
    {
        "name": "Horse Neigh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/horse-neighing-sound-effect.mp3"
    },
    {
        "name": "SCARY INTENSE KNOCKING",
        "color": "rgb(175, 0, 0)",
        "mp3": "/media/sounds/konkonse.mp3"
    },
    {
        "name": "gigachad theme music",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gigachad-theme-music.mp3"
    },
    {
        "name": "Ewww (Crowd Effect)",
        "color": "rgb(248, 255, 49)",
        "mp3": "/media/sounds/ewww.mp3"
    },
    {
        "name": "chattering teeth",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/chattering-teeth.mp3"
    },
    {
        "name": "Crying Black Dude MEME",
        "color": "rgb(62, 255, 201)",
        "mp3": "/media/sounds/crying-black-dude-meme.mp3"
    },
    {
        "name": "Minecraft Dog Bark",
        "color": "rgb(210, 210, 210)",
        "mp3": "/media/sounds/minecraft-dog-bark.mp3"
    },
    {
        "name": "Super Mario Beedoo (Normalized)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/super-mario-beedoo-normalized.mp3"
    },
    {
        "name": "Maltigi",
        "color": "rgb(77, 234, 31)",
        "mp3": "/media/sounds/maltigi.mp3"
    },
    {
        "name": "Yes King You Digging In",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/yes-king-you-digging-in.mp3"
    },
    {
        "name": "teto.wav",
        "color": "rgb(255, 41, 84)",
        "mp3": "/media/sounds/teto-wav.mp3"
    },
    {
        "name": "Enrique (sped up)",
        "color": "rgb(0, 255, 42)",
        "mp3": "/media/sounds/enrique-sped-up.mp3"
    },
    {
        "name": "dear basketball",
        "color": "rgb(255, 157, 0)",
        "mp3": "/media/sounds/dear-basketball.mp3"
    },
    {
        "name": "Standoff 2 звук бомбы",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/standoff-2-zvuk-bomby.mp3"
    },
    {
        "name": "Стипка228про",
        "color": "rgb(88, 255, 241)",
        "mp3": "/media/sounds/stipka228pro.mp3"
    },
    {
        "name": "TUN TUN FORRÓ",
        "color": "rgb(255, 37, 84)",
        "mp3": "/media/sounds/tun-tun-forro.mp3"
    },
    {
        "name": "Tyrannosaurus rex Roar 2",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/tyrannosaurus-rex-roar-2.mp3"
    },
    {
        "name": "Za Warudo - Anime's Time Stop",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/za-warudo-stop-time-sound.mp3"
    },
    {
        "name": "bomb has been planted",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bomb-has-been-planted-sound-effect-cs-go.mp3"
    },
    {
        "name": "I am Steve",
        "color": "rgb(48, 169, 255)",
        "mp3": "/media/sounds/i-am-steve.mp3"
    },
    {
        "name": "Vine - Dramatic Boom Sound Eff",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/vine-dramatic-boom-sound-effect.mp3"
    },
    {
        "name": "Drake embarrassing",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/drake-embarrassing_Ts9wkE9.mp3"
    },
    {
        "name": "Sonic spindash",
        "color": "rgb(19, 113, 255)",
        "mp3": "/media/sounds/sonic-spindash.mp3"
    },
    {
        "name": "Rust Headshot",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/eaolwpzhgsba.mp3"
    },
    {
        "name": "Undertale Gaster blaster",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gaster_blaster_sound_effect_1.mp3"
    },
    {
        "name": "Explosion",
        "color": "rgb(255, 51, 0)",
        "mp3": "/media/sounds/barrel-exploding-soundbible.mp3"
    },
    {
        "name": "Ambatukam",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ambatukam.mp3"
    },
    {
        "name": "scooby doo laugh sped up",
        "color": "rgb(148, 71, 26)",
        "mp3": "/media/sounds/scooby-doo-laugh-sped-up.mp3"
    },
    {
        "name": "Giggity",
        "color": "rgb(153, 255, 0)",
        "mp3": "/media/sounds/quagmire-giggity-giggity-giggity.mp3"
    },
    {
        "name": "NUH UH MEME",
        "color": "rgb(56, 122, 0)",
        "mp3": "/media/sounds/nuh-uh-meme.mp3"
    },
    {
        "name": "Sad Hamster",
        "color": "rgb(15, 80, 206)",
        "mp3": "/media/sounds/sad-hamster.mp3"
    },
    {
        "name": "Doorbell",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/door-bell-sound-effect.mp3"
    },
    {
        "name": "YEAHOO",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/yeahoo.mp3"
    },
    {
        "name": "romantic",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/45_0HW2p0x.mp3"
    },
    {
        "name": "subspace tripmine",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/subspace-tripmine.mp3"
    },
    {
        "name": "Mouse Click 1",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mouse-click_gt1reD8.mp3"
    },
    {
        "name": "suspense pan",
        "color": "rgb(255, 37, 37)",
        "mp3": "/media/sounds/suspense-1_bLEXV6f.mp3"
    },
    {
        "name": "Death Splat",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/death-splat.mp3"
    },
    {
        "name": "ring doorbell",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ring-doorbell-sound.mp3"
    },
    {
        "name": "formula 1 radio notification",
        "color": "rgb(126, 255, 107)",
        "mp3": "/media/sounds/formula-1-radio-notification.mp3"
    },
    {
        "name": "angry birds theme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/angry-birds-theme-song-audiotrimmer.mp3"
    },
    {
        "name": "Godzilla Roar 2",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/godzilla_2.mp3"
    },
    {
        "name": "Discord Calling",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/discord-call-sound_tvxg95l.mp3"
    },
    {
        "name": "Jerkmate",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/jerkmate_zg37Y8g.mp3"
    },
    {
        "name": "Pokémon plink",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/tmpq91k5v_6.mp3"
    },
    {
        "name": "Its raining Tacos",
        "color": "rgb(64, 255, 77)",
        "mp3": "/media/sounds/vlc-record-2020-04-05-08h19m15s-parry-gripp-boonebum-.mp3"
    },
    {
        "name": "Minecraft Hit Sound",
        "color": "rgb(236, 255, 154)",
        "mp3": "/media/sounds/y2mate_XL9ozUG.mp3"
    },
    {
        "name": "TheBurntPeanut Lets ride",
        "color": "rgb(194, 146, 50)",
        "mp3": "/media/sounds/theburntpeanut-lets-ride.mp3"
    },
    {
        "name": "Minecraft - Glass Break",
        "color": "rgb(94, 248, 255)",
        "mp3": "/media/sounds/minecraft-glass-break.mp3"
    },
    {
        "name": "Jet Set Radio - Success",
        "color": "rgb(50, 255, 0)",
        "mp3": "/media/sounds/jet-set-radio-success.mp3"
    },
    {
        "name": "Long brain fart earrape",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/long-brain-fart-earrape.mp3"
    },
    {
        "name": "67 Meme",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/67-meme_cdLcL5q.mp3"
    },
    {
        "name": "My name is John Marston",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/my-name-is-john-marston.mp3"
    },
    {
        "name": "teto.wav",
        "color": "rgb(255, 41, 84)",
        "mp3": "/media/sounds/teto-wav.mp3"
    },
    {
        "name": "explosion sound",
        "color": "rgb(77, 76, 255)",
        "mp3": "/media/sounds/explosion-sound.mp3"
    },
    {
        "name": "Grappige Djern",
        "color": "rgb(153, 0, 0)",
        "mp3": "/media/sounds/whatsapp-audio-2016-09-16-at-23.mp3"
    },
    {
        "name": "Burnt Peanut Little Bit of Goop",
        "color": "rgb(255, 2, 230)",
        "mp3": "/media/sounds/burnt-peanut-little-bit-of-goop.mp3"
    },
    {
        "name": "Burger did he say that his last name is burger",
        "color": "rgb(80, 122, 255)",
        "mp3": "/media/sounds/burger-did-he-say-that-his-last-name-is-burger.mp3"
    },
    {
        "name": "HEY ANTEK ANTEK ASING - Prabowo",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hey-antek-antek-asing-prabowo.mp3"
    },
    {
        "name": "Wrong Answer",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/wrong-answer-sound-fx.mp3"
    },
    {
        "name": "Rugrat-yapping",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/rugrat-yapping.mp3"
    },
    {
        "name": "Som do Zap Zap estourado",
        "color": "rgb(3, 250, 63)",
        "mp3": "/media/sounds/som-do-zap-zap-estourado.mp3"
    },
    {
        "name": "Mina Mexicana™ Fart",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mina-mexicanatm-fart.mp3"
    },
    {
        "name": "Fnaf Freddy’s laugh",
        "color": "rgb(105, 37, 37)",
        "mp3": "/media/sounds/fnaf-freddys-laugh.mp3"
    },
    {
        "name": "FNAF 3 Death Scream",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/five-nights-at-freddys-3-springtraps-jumpscare-brightened.mp3"
    },
    {
        "name": "Jutsu Activation",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/katon.mp3"
    },
    {
        "name": "Splat Sound",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/splat-sound-effect-free-download.mp3"
    },
    {
        "name": "Tobu - Candyland",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/candyland-cat-meme.mp3"
    },
    {
        "name": "Family Feud NO Buzzer",
        "color": "rgb(0, 163, 3)",
        "mp3": "/media/sounds/neg-portal2buzzer_2DIuFda.mp3"
    },
    {
        "name": "fortnite pump shotgun",
        "color": "rgb(81, 255, 41)",
        "mp3": "/media/sounds/fortnite-pump-shotgun.mp3"
    },
    {
        "name": "Movie Fart!",
        "color": "rgb(15, 59, 3)",
        "mp3": "/media/sounds/fart-sound-effect_C1IXpeL.mp3"
    },
    {
        "name": "machine gun gunshot",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/y2mate_aRsvz4g.mp3"
    },
    {
        "name": "Hello!!! Meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hello-meme.mp3"
    },
    {
        "name": "Ewww (Crowd Effect)",
        "color": "rgb(248, 255, 49)",
        "mp3": "/media/sounds/ewww.mp3"
    },
    {
        "name": "Harry potter flute",
        "color": "rgb(49, 35, 255)",
        "mp3": "/media/sounds/harry-potter-themesong-fail-recorder-cover-1.mp3"
    },
    {
        "name": "Noob music",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/scheming-weasel-faster-1-mp3cutn-mp3cut.mp3"
    },
    {
        "name": "Risadinha de ladrão",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sabe-porque-as-meninas-dao-maior-valor-na-risada-de-ladrao-mp3cut.mp3"
    },
    {
        "name": "Price Is Right Theme",
        "color": "rgb(255, 102, 204)",
        "mp3": "/media/sounds/the-price-is-right-theme-song-lq.mp3"
    },
    {
        "name": "spiderman meme song 2.0",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/spiderman-meme-song-2-0.mp3"
    },
    {
        "name": "transponder snail",
        "color": "rgb(42, 84, 255)",
        "mp3": "/media/sounds/transponder_snail.mp3"
    },
    {
        "name": "screaming emoji meme",
        "color": "rgb(255, 179, 44)",
        "mp3": "/media/sounds/screaming-emoji-meme.mp3"
    },
    {
        "name": "cat meow sound effect",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/meow_jEHtSyd.mp3"
    },
    {
        "name": "Streets Rizz",
        "color": "rgb(128, 0, 0)",
        "mp3": "/media/sounds/streets-rizz.mp3"
    },
    {
        "name": "funny laugh sound",
        "color": "rgb(126, 135, 255)",
        "mp3": "/media/sounds/funny-laugh-sound-effect.mp3"
    },
    {
        "name": "'What'meme",
        "color": "rgb(112, 237, 205)",
        "mp3": "/media/sounds/what_JOcN7Y8.mp3"
    },
    {
        "name": "Minecraft Totem Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/minecraft-totem-sound.mp3"
    },
    {
        "name": "cartoon snoring sound effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/cartoon-snoring-sound-effect.mp3"
    },
    {
        "name": "Danger Siren Alarm",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/danger-siren-alarm_BfknMds.mp3"
    },
    {
        "name": "Uncle Ruckus Got the rope",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/uncle-ruckus-i-got-the-rope_eH5EBBM.mp3"
    },
    {
        "name": "Coryxkenshin \"Yeager\" slap sound effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/coryxkenshin-yeager-slap-sound-effect.mp3"
    },
    {
        "name": "theburntpeanut mhmm mhmm",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/theburntpeanut-mhmm-mhmm.mp3"
    },
    {
        "name": "Kai Cenat Suspense",
        "color": "rgb(76, 61, 77)",
        "mp3": "/media/sounds/kai-cenat-suspense.mp3"
    },
    {
        "name": "distorted trumpets hl2",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/distorted-trumpets-hl2.mp3"
    },
    {
        "name": "Fish meme sfx",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fish-meme-sfx.mp3"
    },
    {
        "name": "family guy transition",
        "color": "rgb(255, 133, 237)",
        "mp3": "/media/sounds/family-guy-transition.mp3"
    },
    {
        "name": "Ganda Mo Intro",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/ganda_mo_intro-mp3cut.mp3"
    },
    {
        "name": "Arc Raiders Probe",
        "color": "rgb(92, 92, 92)",
        "mp3": "/media/sounds/arc-raiders-probe.mp3"
    },
    {
        "name": "mommy asmr",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mommy-asmr.mp3"
    },
    {
        "name": "P*rn hub intro extreme loud ()çok yüksek ses",
        "color": "rgb(255, 144, 0)",
        "mp3": "/media/sounds/p-rn-hub-intro-extreme-loud-cok-yuksek-ses.mp3"
    },
    {
        "name": "packgod 2",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/packgod-2.mp3"
    },
    {
        "name": "you phone lingin",
        "color": "rgb(255, 159, 41)",
        "mp3": "/media/sounds/you-phone-lingin.mp3"
    },
    {
        "name": "Welcome Home from Jarvis",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/welcome-home-from-jarvis.mp3"
    },
    {
        "name": "Kids Cheering YAY",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/kids-cheering-sound-effect.mp3"
    },
    {
        "name": "spongebob Hi How Are Ya?",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/spongebob-hi-how-are-ya-.mp3"
    },
    {
        "name": "Drake embarrassing",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/drake-embarrassing_Ts9wkE9.mp3"
    },
    {
        "name": "scooby doo laugh sped up",
        "color": "rgb(148, 71, 26)",
        "mp3": "/media/sounds/scooby-doo-laugh-sped-up.mp3"
    },
    {
        "name": "TF2 Scout Metal Bat",
        "color": "rgb(0, 221, 255)",
        "mp3": "/media/sounds/bat_hit.mp3"
    },
    {
        "name": "Xue Hua piao piao bei feng Xiao xiao",
        "color": "rgb(255, 44, 44)",
        "mp3": "/media/sounds/xue-hua-piao-piao.mp3"
    },
    {
        "name": "scream",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/scream.mp3"
    },
    {
        "name": "Mortal Kombat - Round Two",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/round-2-fight-mortal-kombat-sound-effect.mp3"
    },
    {
        "name": "Eye Of Rah sound effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/eye-of-rah-sound-effect.mp3"
    },
    {
        "name": "troll face laugh meme oh no no no",
        "color": "rgb(68, 255, 162)",
        "mp3": "/media/sounds/oh-no-no-no-no-laugh_sejx5Bk.mp3"
    },
    {
        "name": "Sad Hamster",
        "color": "rgb(15, 80, 206)",
        "mp3": "/media/sounds/sad-hamster.mp3"
    },
    {
        "name": "YEAHOO",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/yeahoo.mp3"
    },
    {
        "name": "Wega Jumpscare",
        "color": "rgb(103, 1, 161)",
        "mp3": "/media/sounds/wega-jumpscare.mp3"
    },
    {
        "name": "samsung notification 234223243",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/yt1s_nijLeKo.mp3"
    },
    {
        "name": "Regular Show Intro",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/regular-show-intro_GiLyViP.mp3"
    },
    {
        "name": "ring doorbell",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ring-doorbell-sound.mp3"
    },
    {
        "name": "Sad Musicccccc",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sad-music.mp3"
    },
    {
        "name": "Are you serious right neow bro",
        "color": "rgb(138, 61, 61)",
        "mp3": "/media/sounds/are-you-serious-right-neow-bro.mp3"
    },
    {
        "name": "Godzilla Roar 2",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/godzilla_2.mp3"
    },
    {
        "name": "screaming emoji meme",
        "color": "rgb(255, 179, 44)",
        "mp3": "/media/sounds/screaming-emoji-meme.mp3"
    },
    {
        "name": "E o pix? Nada ainda?",
        "color": "rgb(243, 255, 79)",
        "mp3": "/media/sounds/e-o-pix-nada-ainda.mp3"
    },
    {
        "name": "Soda Pop - Kpop Demon Hunters - Saja Boys",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/soda-pop-kpop-demon-hunters-saja-boys-mp3.mp3"
    },
    {
        "name": "botao do whatsapp",
        "color": "rgb(28, 255, 0)",
        "mp3": "/media/sounds/botao-do-whatsapp.mp3"
    },
    {
        "name": "Invisible - Duran",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/invisible-duran.mp3"
    },
    {
        "name": "TheBurntPeanut Lets ride",
        "color": "rgb(194, 146, 50)",
        "mp3": "/media/sounds/theburntpeanut-lets-ride.mp3"
    },
    {
        "name": "Awwwwwwwwww",
        "color": "rgb(153, 153, 255)",
        "mp3": "/media/sounds/aww-sound-effect_OII2eTh.mp3"
    },
    {
        "name": "Helldivers Drop",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/helldivers-drop.mp3"
    },
    {
        "name": "sensor beep",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sensor-beep.mp3"
    },
    {
        "name": "I got this dahhhh",
        "color": "rgb(255, 122, 122)",
        "mp3": "/media/sounds/i-got-this-dahhhh.mp3"
    },
    {
        "name": "Prowler Theme Full",
        "color": "rgb(106, 4, 108)",
        "mp3": "/media/sounds/prowler-theme-full.mp3"
    },
    {
        "name": "gigachad phonk house",
        "color": "rgb(173, 143, 255)",
        "mp3": "/media/sounds/gigachad-phonk-house.mp3"
    },
    {
        "name": "Get Out [MEMES}",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/get-out-memes.mp3"
    },
    {
        "name": "Nick/Disney Suprise Laugh Track “oooh “",
        "color": "rgb(255, 157, 10)",
        "mp3": "/media/sounds/nick-disney-suprise-laugh-track-oooh.mp3"
    },
    {
        "name": "Sneaky Golem",
        "color": "rgb(69, 11, 120)",
        "mp3": "/media/sounds/sneaky-golem.mp3"
    },
    {
        "name": "Kai Cenat Suspense",
        "color": "rgb(76, 61, 77)",
        "mp3": "/media/sounds/kai-cenat-suspense.mp3"
    },
    {
        "name": "Screaming Bird",
        "color": "rgb(158, 166, 153)",
        "mp3": "/media/sounds/screaming-bird.mp3"
    },
    {
        "name": "VA A JUGAR O QUE",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/va-jugar-o-que.mp3"
    },
    {
        "name": "Swish",
        "color": "rgb(132, 71, 255)",
        "mp3": "/media/sounds/swish.mp3"
    },
    {
        "name": "fire alarm!!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fire-alarm_frlER9H.mp3"
    },
    {
        "name": "kyrie death note",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/kyrie-death-note.mp3"
    },
    {
        "name": "Style Points",
        "color": "rgb(227, 165, 255)",
        "mp3": "/media/sounds/style-points_TW2LQSU.mp3"
    },
    {
        "name": "dokkaebi hack",
        "color": "rgb(55, 55, 55)",
        "mp3": "/media/sounds/dokkaebi-hacking-sound-effect.mp3"
    },
    {
        "name": "We are Charlie Kirkkkkkk",
        "color": "rgb(229, 255, 0)",
        "mp3": "/media/sounds/we-are-charlie-kirkkkkkk.mp3"
    },
    {
        "name": "Allah akbar sound",
        "color": "rgb(62, 73, 255)",
        "mp3": "/media/sounds/allah-akbar-sound.mp3"
    },
    {
        "name": "can someone grab bomb",
        "color": "rgb(224, 150, 255)",
        "mp3": "/media/sounds/can-someone-grab-bomb.mp3"
    },
    {
        "name": "Un forastero",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/z38-un-forastero-mp3.mp3"
    },
    {
        "name": "yamede kudasai",
        "color": "rgb(49, 255, 127)",
        "mp3": "/media/sounds/yamede-kudasai.mp3"
    },
    {
        "name": "YO PHONE IS RINGING",
        "color": "rgb(105, 74, 255)",
        "mp3": "/media/sounds/yo-phone-is-ringing.mp3"
    },
    {
        "name": "Kim Jong Un (brainrot)",
        "color": "rgb(43, 35, 68)",
        "mp3": "/media/sounds/kim-jong-un-brainrot.mp3"
    },
    {
        "name": "Allahu akbaar",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/allahu-akbaar.mp3"
    },
    {
        "name": "zizi fesse",
        "color": "rgb(163, 129, 255)",
        "mp3": "/media/sounds/zizi-fesse.mp3"
    },
    {
        "name": "Воздушная сирена",
        "color": "rgb(0, 255, 13)",
        "mp3": "/media/sounds/vozdushnaia-sirena.mp3"
    },
    {
        "name": "Fuera Depresión OR",
        "color": "rgb(255, 142, 0)",
        "mp3": "/media/sounds/fuera-depresion-or.mp3"
    },
    {
        "name": "Presiden Goblok",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/presiden-goblok.mp3"
    },
    {
        "name": "Law & Gavel",
        "color": "rgb(208, 194, 101)",
        "mp3": "/media/sounds/dun_dun_1_cxwHL4B.mp3"
    },
    {
        "name": "077- morning routine",
        "color": "rgb(211, 168, 255)",
        "mp3": "/media/sounds/077-morning-routine.mp3"
    },
    {
        "name": "Stayin' Alive, baby!",
        "color": "rgb(255, 58, 143)",
        "mp3": "/media/sounds/stayin-alive.mp3"
    },
    {
        "name": "BLYYAAAAAAAAAAAAT",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/blyyaaaaaaaaaaaat.mp3"
    },
    {
        "name": "Chicken Jockey",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/chicken-jockey.mp3"
    },
    {
        "name": "Goku Yelling",
        "color": "rgb(255, 102, 0)",
        "mp3": "/media/sounds/gokuyelling.mp3"
    },
    {
        "name": "Vine - Dramatic Boom Sound Eff",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/vine-dramatic-boom-sound-effect.mp3"
    },
    {
        "name": "Sad violin (14sec)",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/export_4.mp3"
    },
    {
        "name": "Tobu - Candyland",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/candyland-cat-meme.mp3"
    },
    {
        "name": "Eye Of Rah sound effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/eye-of-rah-sound-effect.mp3"
    },
    {
        "name": "Freebird",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/freebird.mp3"
    },
    {
        "name": "Homer Simpson - D'OH",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/doh_r4RZcVw.mp3"
    },
    {
        "name": "let him cook now",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/let-him-cook-now.mp3"
    },
    {
        "name": "Domer - The Simpsons",
        "color": "rgb(255, 219, 73)",
        "mp3": "/media/sounds/domer-the-simpsons.mp3"
    },
    {
        "name": "Tmkc Mahavirwa wala",
        "color": "rgb(255, 40, 0)",
        "mp3": "/media/sounds/tmkc-mahavirwa-wala.mp3"
    },
    {
        "name": "Bom dia magnata",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bom-dia-magnata.mp3"
    },
    {
        "name": "Esdeekid \"Okay\"",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/esdeekid-okay.mp3"
    },
    {
        "name": "Wheres everyone going, bingo?",
        "color": "rgb(133, 0, 0)",
        "mp3": "/media/sounds/wheres-everyone-going-bingo.mp3"
    },
    {
        "name": "Сливыыы мелстрой",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/slivyyy-melstroi.mp3"
    },
    {
        "name": "Birdmaster86",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/birdmaster86.mp3"
    },
    {
        "name": "Да ты че",
        "color": "rgb(211, 255, 141)",
        "mp3": "/media/sounds/da-ty-che.mp3"
    },
    {
        "name": "yamede kudasai",
        "color": "rgb(49, 255, 127)",
        "mp3": "/media/sounds/yamede-kudasai.mp3"
    },
    {
        "name": "Jhinka chika jhinka chika",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/jhinka-chika-jhinka-chika.mp3"
    },
    {
        "name": "Cat Lizard",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/cat-lizard.mp3"
    },
    {
        "name": "Additional Pylons",
        "color": "rgb(51, 255, 0)",
        "mp3": "/media/sounds/null-you_must_construct_additional_pylons.mp3"
    },
    {
        "name": "67 фонк",
        "color": "rgb(174, 240, 255)",
        "mp3": "/media/sounds/67-fonk.mp3"
    },
    {
        "name": "woof.                        0",
        "color": "rgb(51, 0, 0)",
        "mp3": "/media/sounds/woof_2.mp3"
    },
    {
        "name": "Mission Failed",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/dank-meme-compilation-volume-17_cutted.mp3"
    },
    {
        "name": "BADUM TSS",
        "color": "rgb(0, 153, 255)",
        "mp3": "/media/sounds/joke_drum_effect.mp3"
    },
    {
        "name": "Fortnite Default Dance Music",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fortnite-dance-moves-emote-music-tv9iv8cxmo0-1.mp3"
    },
    {
        "name": "Thick of it",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/thick-of-it.mp3"
    },
    {
        "name": "Hell's Kitchen",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hells-kitchen-sfx.mp3"
    },
    {
        "name": "Speedrun music",
        "color": "rgb(56, 255, 34)",
        "mp3": "/media/sounds/dreamrunning_trim-1.mp3"
    },
    {
        "name": "Fail Horn",
        "color": "rgb(102, 255, 51)",
        "mp3": "/media/sounds/thepriceisright-loserhorns.mp3"
    },
    {
        "name": "ding dong eat it up",
        "color": "rgb(255, 159, 33)",
        "mp3": "/media/sounds/ding-dong-eat-it-up.mp3"
    },
    {
        "name": "Among Us Emergency Meeting",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/emergency-meeting-sound-among-us.mp3"
    },
    {
        "name": "Siren head",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/siren-head-sounds-new.mp3"
    },
    {
        "name": "NARUTO BATTLE",
        "color": "rgb(255, 156, 53)",
        "mp3": "/media/sounds/naruto-the-raising-fighting-spirit-extended-audiotrimmer_7wvXRts.mp3"
    },
    {
        "name": "Woo, Yeah Baby!",
        "color": "rgb(255, 0, 238)",
        "mp3": "/media/sounds/moistcr1tikal-woooh-yeah-baby-meme-360p.mp3"
    },
    {
        "name": "FBI open UP. (with explosion)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fbi-open-up-explosion.mp3"
    },
    {
        "name": "Splat Sound",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/splat-sound-effect-free-download.mp3"
    },
    {
        "name": "Windows 3.1 startup (tada)",
        "color": "rgb(51, 255, 0)",
        "mp3": "/media/sounds/win31.mp3"
    },
    {
        "name": "Hello! Mine Turtle",
        "color": "rgb(0, 153, 255)",
        "mp3": "/media/sounds/hello-trailer_01.mp3"
    },
    {
        "name": "Slendytubbies Tinky Winky",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/slendy1.mp3"
    },
    {
        "name": "Homer Simpson - D'OH",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/doh_r4RZcVw.mp3"
    },
    {
        "name": "Door Knocking SFX",
        "color": "rgb(255, 222, 55)",
        "mp3": "/media/sounds/door-knocking.mp3"
    },
    {
        "name": "Screech Car Crash",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/237375__squareal__car-crash.mp3"
    },
    {
        "name": "Funny Laughing",
        "color": "rgb(0, 204, 0)",
        "mp3": "/media/sounds/hahahaha_7.mp3"
    },
    {
        "name": "Spongebob Dolphin censor",
        "color": "rgb(255, 145, 239)",
        "mp3": "/media/sounds/spongebob-dolphin-censor_JoDuvPV.mp3"
    },
    {
        "name": "Windows 7 Startup",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/windows-7-startup.mp3"
    },
    {
        "name": "1_dog sniff",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/outro_2.mp3"
    },
    {
        "name": "OHH SHIT",
        "color": "rgb(4, 255, 231)",
        "mp3": "/media/sounds/tourettes-guy-oh-shit.mp3"
    },
    {
        "name": "FNAF Hooray!!!!",
        "color": "rgb(12, 255, 0)",
        "mp3": "/media/sounds/fnaf-hooray.mp3"
    },
    {
        "name": "vsauce",
        "color": "rgb(57, 255, 136)",
        "mp3": "/media/sounds/jake-chudnow-edited_y1t8j5q.mp3"
    },
    {
        "name": "cry banana cat",
        "color": "rgb(255, 207, 76)",
        "mp3": "/media/sounds/cry-banana-cat.mp3"
    },
    {
        "name": "piano dross",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/y2mate_Ajp9shj.mp3"
    },
    {
        "name": "Yowai Mo (Gojo)",
        "color": "rgb(0, 28, 255)",
        "mp3": "/media/sounds/yowai-mo-gojo_EIhp35V.mp3"
    },
    {
        "name": "Cartoon tip toe",
        "color": "rgb(0, 255, 8)",
        "mp3": "/media/sounds/cartoon-tip-toe.mp3"
    },
    {
        "name": "Ultrakill Explosion",
        "color": "rgb(0, 61, 255)",
        "mp3": "/media/sounds/ultrakill-explosion.mp3"
    },
    {
        "name": "EAS Alert (USA)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/eas-alert-sound-fx.mp3"
    },
    {
        "name": "DO NOT REDEEM",
        "color": "rgb(101, 26, 26)",
        "mp3": "/media/sounds/do-not-redeem_z7RLKwV.mp3"
    },
    {
        "name": "china rap",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/export_ofoct_Cy3m7NF.mp3"
    },
    {
        "name": "Phonk tun tun",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/phonk-tun-tun.mp3"
    },
    {
        "name": "goopa gotta goop",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/goopa-gotta-goop.mp3"
    },
    {
        "name": "Baby launghing bass boosted",
        "color": "rgb(160, 249, 255)",
        "mp3": "/media/sounds/baby-launghing-bass-boosted.mp3"
    },
    {
        "name": "teto.wav",
        "color": "rgb(255, 41, 84)",
        "mp3": "/media/sounds/teto-wav.mp3"
    },
    {
        "name": "Airbus Stall",
        "color": "rgb(9, 111, 255)",
        "mp3": "/media/sounds/airbus-stall.mp3"
    },
    {
        "name": "ЫЫЫ Стандоф 2 говно",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/yyy-standof-2-govno.mp3"
    },
    {
        "name": "Female Giggle",
        "color": "rgb(255, 186, 186)",
        "mp3": "/media/sounds/female-giggle.mp3"
    },
    {
        "name": "HELLO MOTO ESTOURADO",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/hello-moto-estourado.mp3"
    },
    {
        "name": "Широкий путин",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/shirokii-putin.mp3"
    },
    {
        "name": "Burnt Peanut Little Bit of Goop",
        "color": "rgb(255, 2, 230)",
        "mp3": "/media/sounds/burnt-peanut-little-bit-of-goop.mp3"
    },
    {
        "name": "Ahooga Sound In Many Cartoons",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ahooga-sound-in-many-cartoons.mp3"
    },
    {
        "name": "CEDDIN DEDEN",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ceddin-deden.mp3"
    },
    {
        "name": "Mka ladle meow gop.",
        "color": "rgb(99, 154, 135)",
        "mp3": "/media/sounds/mka-ladle-meow-gop.mp3"
    },
    {
        "name": "Саша Таня смешной звук",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/sasha-tania-smeshnoi-zvuk.mp3"
    },
    {
        "name": "LEGO Star Wars Transition Sound",
        "color": "rgb(0, 13, 255)",
        "mp3": "/media/sounds/lego-star-wars-transition-sound.mp3"
    },
    {
        "name": "Counter Strike - Bomb Has Been Planted !",
        "color": "rgb(255, 117, 48)",
        "mp3": "/media/sounds/bomb-has-been-planted-sound-effect-csgo.mp3"
    },
    {
        "name": "sans voice",
        "color": "rgb(0, 255, 255)",
        "mp3": "/media/sounds/voice_sans.mp3"
    },
    {
        "name": "bass boost",
        "color": "rgb(102, 0, 51)",
        "mp3": "/media/sounds/bass-boost.mp3"
    },
    {
        "name": "Goku Yelling",
        "color": "rgb(255, 102, 0)",
        "mp3": "/media/sounds/gokuyelling.mp3"
    },
    {
        "name": "Speedrun music",
        "color": "rgb(56, 255, 34)",
        "mp3": "/media/sounds/dreamrunning_trim-1.mp3"
    },
    {
        "name": "Siren head",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/siren-head-sounds-new.mp3"
    },
    {
        "name": "Snake death scream",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/metal-gear-solid-snake-death-scream-sound-effect_fR1Ryqk.mp3"
    },
    {
        "name": "PS2 Startup",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ps2_start_up.mp3"
    },
    {
        "name": "FBI open UP. (with explosion)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fbi-open-up-explosion.mp3"
    },
    {
        "name": "what the hell is even that",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/whatthehell_qrePvEr.mp3"
    },
    {
        "name": "Splat Sound",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/splat-sound-effect-free-download.mp3"
    },
    {
        "name": "Slendytubbies Tinky Winky",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/slendy1.mp3"
    },
    {
        "name": "flightreacts screaming",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/flightreacts-screaming-green-screen.mp3"
    },
    {
        "name": "VINE BOOM BASS BOOSTED MAN",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/vine-boom-bass-boosted-man.mp3"
    },
    {
        "name": "Half Life 2 Death Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/half-life-2-death-sound.mp3"
    },
    {
        "name": "Pitbull Fireball HD",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/a1-0001_pitbull-fireball-edited00086400-online-audio-converter.mp3"
    },
    {
        "name": "Risadinha de ladrão",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sabe-porque-as-meninas-dao-maior-valor-na-risada-de-ladrao-mp3cut.mp3"
    },
    {
        "name": "OKAY LETS  GO",
        "color": "rgb(203, 52, 255)",
        "mp3": "/media/sounds/okay-lets-go_buBmJye.mp3"
    },
    {
        "name": "Target Acquired Meme",
        "color": "rgb(58, 19, 255)",
        "mp3": "/media/sounds/target-acquired-meme.mp3"
    },
    {
        "name": "AK-47 Gunshot",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/new-movie-1.mp3"
    },
    {
        "name": "tenna talking",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/tenna-talking.mp3"
    },
    {
        "name": "horror scream high quality",
        "color": "rgb(15, 147, 255)",
        "mp3": "/media/sounds/horror-scream-high-quality.mp3"
    },
    {
        "name": "It's Pikachu (short)",
        "color": "rgb(255, 231, 82)",
        "mp3": "/media/sounds/its-pikachu-short.mp3"
    },
    {
        "name": "jet set radio spray 2",
        "color": "rgb(221, 255, 0)",
        "mp3": "/media/sounds/jet-set-radio-spray-2_pITyzB4.mp3"
    },
    {
        "name": "aye bruh you got a phone call",
        "color": "rgb(113, 73, 3)",
        "mp3": "/media/sounds/aye-bruh-you-got-a-phone-call.mp3"
    },
    {
        "name": "большой жесткий пердеж",
        "color": "rgb(62, 57, 34)",
        "mp3": "/media/sounds/bolshoi-zhestkii-perdezh.mp3"
    },
    {
        "name": "Shah Rukh Khan",
        "color": "rgb(255, 180, 5)",
        "mp3": "/media/sounds/shah-rukh-khan.mp3"
    },
    {
        "name": "2k GREEN",
        "color": "rgb(0, 255, 11)",
        "mp3": "/media/sounds/2k-green.mp3"
    },
    {
        "name": "Kira Laugh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/kira_s-laugh-death-note-ringtone-by-death-note_light-kira.mp3"
    },
    {
        "name": "Esdeekid \"Okay\"",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/esdeekid-okay.mp3"
    },
    {
        "name": "wtf is kilometer",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/wtf-is-kilometer.mp3"
    },
    {
        "name": "Grappige Djern",
        "color": "rgb(153, 0, 0)",
        "mp3": "/media/sounds/whatsapp-audio-2016-09-16-at-23.mp3"
    },
    {
        "name": "TUN TUN FORRÓ",
        "color": "rgb(255, 37, 84)",
        "mp3": "/media/sounds/tun-tun-forro.mp3"
    },
    {
        "name": "yamede kudasai",
        "color": "rgb(49, 255, 127)",
        "mp3": "/media/sounds/yamede-kudasai.mp3"
    },
    {
        "name": "Wrong Answer",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/wrong-answer-sound-fx.mp3"
    },
    {
        "name": "Rugrat-yapping",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/rugrat-yapping.mp3"
    },
    {
        "name": "Стон 250",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ston-250.mp3"
    },
    {
        "name": "stupid-jew-eric-cartman",
        "color": "rgb(34, 2, 2)",
        "mp3": "/media/sounds/stupid-jew-eric-cartman_SwhcQNS.mp3"
    },
    {
        "name": "Baby boo Phonk",
        "color": "rgb(48, 38, 238)",
        "mp3": "/media/sounds/baby-boo-phonk.mp3"
    },
    {
        "name": "Cat Lizard",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/cat-lizard.mp3"
    },
    {
        "name": "New Follower - @Aymplify",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/newf.mp3"
    },
    {
        "name": "Баба Чай",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/baba-chai.mp3"
    },
    {
        "name": "doutor nefario fica de quatro e rebola",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/doutor-nefario-fica-de-quatro-e-rebola.mp3"
    },
    {
        "name": "Baba Booey",
        "color": "rgb(51, 102, 204)",
        "mp3": "/media/sounds/bababooey-sound-effect.mp3"
    },
    {
        "name": "Dancehall Horn",
        "color": "rgb(51, 0, 255)",
        "mp3": "/media/sounds/air-horn-club-sample.mp3"
    },
    {
        "name": "Сливыыы мелстрой",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/slivyyy-melstroi.mp3"
    },
    {
        "name": "kim jong un is the master of goon",
        "color": "rgb(255, 231, 4)",
        "mp3": "/media/sounds/kim-jong-un-is-the-master-of-goon.mp3"
    },
    {
        "name": "stupid ni-",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/stupid-ni_fP74ILk.mp3"
    },
    {
        "name": "буба матерится",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/buba-materitsia.mp3"
    },
    {
        "name": "frogan uhhh BASED",
        "color": "rgb(0, 6, 255)",
        "mp3": "/media/sounds/frogan-uhhh-based_neyfz6Q.mp3"
    },
    {
        "name": "PEGUE NA MINHA POMBAAAAAAAAAAAA ESTOURADO",
        "color": "rgb(57, 230, 190)",
        "mp3": "/media/sounds/pegue-na-minha-pombaaaaaaaaaaaa-estourado.mp3"
    },
    {
        "name": "Benny Hill Chase",
        "color": "rgb(155, 165, 255)",
        "mp3": "/media/sounds/benny-hill-chase_PewVC8I.mp3"
    },
    {
        "name": "arthur ruins everything crying",
        "color": "rgb(243, 255, 12)",
        "mp3": "/media/sounds/arthur-ruins-everything-crying.mp3"
    },
    {
        "name": "Sirene alarme bom para acordar",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sirene-alarme-bom-para-acordar.mp3"
    },
    {
        "name": "AUGHHHHH... AUGHHHHH",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/aughhhhh-aughhhhh.mp3"
    },
    {
        "name": "erm what the sigma",
        "color": "rgb(117, 187, 255)",
        "mp3": "/media/sounds/erm-what-the-sigma_su7GnzC.mp3"
    },
    {
        "name": "Bongo Feet",
        "color": "rgb(51, 0, 153)",
        "mp3": "/media/sounds/bongo-feet.mp3"
    },
    {
        "name": "Victory Screech - Spongebob",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/victoryscreech.mp3"
    },
    {
        "name": "Fail Horn",
        "color": "rgb(102, 255, 51)",
        "mp3": "/media/sounds/thepriceisright-loserhorns.mp3"
    },
    {
        "name": "Bass Distortion / Dab Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/dab-distortion.mp3"
    },
    {
        "name": "bomboclat",
        "color": "rgb(88, 255, 14)",
        "mp3": "/media/sounds/bomboclat.mp3"
    },
    {
        "name": "mario",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/untitled_3.mp3"
    },
    {
        "name": "CELEBRATION",
        "color": "rgb(153, 0, 0)",
        "mp3": "/media/sounds/celebration.mp3"
    },
    {
        "name": "Siren head",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/siren-head-sounds-new.mp3"
    },
    {
        "name": "Talkingg Benn Laughh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/talkingg-benn-laughh.mp3"
    },
    {
        "name": "Lebron James Kid",
        "color": "rgb(0, 255, 153)",
        "mp3": "/media/sounds/lebron-james.mp3"
    },
    {
        "name": "Chris Smoove Splash",
        "color": "rgb(0, 51, 255)",
        "mp3": "/media/sounds/chris_smoove_autotune_splash_6qks4-viduu_hi.mp3"
    },
    {
        "name": "\"Heartbeat | Stress\" Phasmophobia",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/phasmophobia-sound-board-effects-07-sound-effects-heartbeat-stress_ohtStgP.mp3"
    },
    {
        "name": "Flight reacts laugh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/flightreacts-dolphin-laugh_fW4DqCL.mp3"
    },
    {
        "name": "scooby doo laugh sped up",
        "color": "rgb(148, 71, 26)",
        "mp3": "/media/sounds/scooby-doo-laugh-sped-up.mp3"
    },
    {
        "name": "sonic spring",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/sonic-spring.mp3"
    },
    {
        "name": "Fortnite Victory Royale",
        "color": "rgb(17, 72, 255)",
        "mp3": "/media/sounds/victory-royale.mp3"
    },
    {
        "name": "Minecraft skeleton",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/skeleton-sounds-2.mp3"
    },
    {
        "name": "Tokyo Drift Alert",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/untitled_zd2ts4l-audiotrimmer.mp3"
    },
    {
        "name": "Suspense strike",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sound-effect-suspense-strike.mp3"
    },
    {
        "name": "Aye Yo WTF",
        "color": "rgb(4, 255, 96)",
        "mp3": "/media/sounds/aye-yo.mp3"
    },
    {
        "name": "OHHHHHHH",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/rap.mp3"
    },
    {
        "name": "Whisper Song",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/barney-the-whisper-song.mp3"
    },
    {
        "name": "sonic jump",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/jump.mp3"
    },
    {
        "name": "Ralsei Splat",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/ralsei-splat.mp3"
    },
    {
        "name": "Welcome Home from Jarvis",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/welcome-home-from-jarvis.mp3"
    },
    {
        "name": "Kids Cheering YAY",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/kids-cheering-sound-effect.mp3"
    },
    {
        "name": "It's Britney B*TCH!",
        "color": "rgb(153, 0, 204)",
        "mp3": "/media/sounds/itsbritney.mp3"
    },
    {
        "name": "Ha Got EEM",
        "color": "rgb(255, 255, 51)",
        "mp3": "/media/sounds/ha-got-eeem.mp3"
    },
    {
        "name": "Thick of it",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/thick-of-it.mp3"
    },
    {
        "name": "Goku Yelling",
        "color": "rgb(255, 102, 0)",
        "mp3": "/media/sounds/gokuyelling.mp3"
    },
    {
        "name": "Nokia Arabic Ringstone",
        "color": "rgb(144, 251, 255)",
        "mp3": "/media/sounds/nokia-ringtone-arabic.mp3"
    },
    {
        "name": "Siren head",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/siren-head-sounds-new.mp3"
    },
    {
        "name": "booing",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/booing.mp3"
    },
    {
        "name": "NARUTO BATTLE",
        "color": "rgb(255, 156, 53)",
        "mp3": "/media/sounds/naruto-the-raising-fighting-spirit-extended-audiotrimmer_7wvXRts.mp3"
    },
    {
        "name": "Woo, Yeah Baby!",
        "color": "rgb(255, 0, 238)",
        "mp3": "/media/sounds/moistcr1tikal-woooh-yeah-baby-meme-360p.mp3"
    },
    {
        "name": "can i pet that dog",
        "color": "rgb(73, 255, 79)",
        "mp3": "/media/sounds/can-i-pet-dat-dog-mp3.mp3"
    },
    {
        "name": "Xue Hua piao piao bei feng Xiao xiao",
        "color": "rgb(255, 44, 44)",
        "mp3": "/media/sounds/xue-hua-piao-piao.mp3"
    },
    {
        "name": "COD Zombies Evil Laugh",
        "color": "rgb(0, 108, 13)",
        "mp3": "/media/sounds/cod-zombies-evil-laugh.mp3"
    },
    {
        "name": "Mockingjay Whistle",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/the-hunger-games-rues-whistle.mp3"
    },
    {
        "name": "Black ops - Fetch me theirsoul",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/black_ops_hell_hounds_fetch_me_their_souls.mp3"
    },
    {
        "name": "Mission Impossible",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/m3.mp3"
    },
    {
        "name": "RIGHT FOOT CREEP",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/right-foot-creep.mp3"
    },
    {
        "name": "Mouse Click 1",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mouse-click_gt1reD8.mp3"
    },
    {
        "name": "1_dog sniff",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/outro_2.mp3"
    },
    {
        "name": "samsung notification 234223243",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/yt1s_nijLeKo.mp3"
    },
    {
        "name": "Free Bird Solo",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/free-bird-solo.mp3"
    },
    {
        "name": "OHH SHIT",
        "color": "rgb(4, 255, 231)",
        "mp3": "/media/sounds/tourettes-guy-oh-shit.mp3"
    },
    {
        "name": "UGH EWW",
        "color": "rgb(151, 82, 255)",
        "mp3": "/media/sounds/ew-dude-wtf.mp3"
    },
    {
        "name": "FNAF Hooray!!!!",
        "color": "rgb(12, 255, 0)",
        "mp3": "/media/sounds/fnaf-hooray.mp3"
    },
    {
        "name": "E o pix? Nada ainda?",
        "color": "rgb(243, 255, 79)",
        "mp3": "/media/sounds/e-o-pix-nada-ainda.mp3"
    },
    {
        "name": "Super Mario World Coin",
        "color": "rgb(255, 247, 0)",
        "mp3": "/media/sounds/mario-coin-sound-effect.mp3"
    },
    {
        "name": "Spongebob - Bald",
        "color": "rgb(255, 236, 22)",
        "mp3": "/media/sounds/spongebob-bald.mp3"
    },
    {
        "name": "Invisible - Duran",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/invisible-duran.mp3"
    },
    {
        "name": "Back to the Future - Tinkle",
        "color": "rgb(255, 236, 65)",
        "mp3": "/media/sounds/back-to-the-future-twinkle-ringtone_7oVbUv8.mp3"
    },
    {
        "name": "piano dross",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/y2mate_Ajp9shj.mp3"
    },
    {
        "name": "DO NOT REDEEM",
        "color": "rgb(101, 26, 26)",
        "mp3": "/media/sounds/do-not-redeem_z7RLKwV.mp3"
    },
    {
        "name": "Helldivers Drop",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/helldivers-drop.mp3"
    },
    {
        "name": "slow motion slow to fast",
        "color": "rgb(255, 94, 212)",
        "mp3": "/media/sounds/slow-motion-slow-to-fast.mp3"
    },
    {
        "name": "goopa gotta goop",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/goopa-gotta-goop.mp3"
    },
    {
        "name": "sensor beep",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sensor-beep.mp3"
    },
    {
        "name": "cartoon snoring sound effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/cartoon-snoring-sound-effect.mp3"
    },
    {
        "name": "ayooooooo",
        "color": "rgb(66, 252, 255)",
        "mp3": "/media/sounds/ayooooooo_R0QLGMG.mp3"
    },
    {
        "name": "Ghostly sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ghostly-sound.mp3"
    },
    {
        "name": "Dota - rampage",
        "color": "rgb(102, 0, 102)",
        "mp3": "/media/sounds/announcer_kill_rampage_01.mp3"
    },
    {
        "name": "Coryxkenshin \"Yeager\" slap sound effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/coryxkenshin-yeager-slap-sound-effect.mp3"
    },
    {
        "name": "Fish meme sfx",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fish-meme-sfx.mp3"
    },
    {
        "name": "Do You Have Any Ibuprofen",
        "color": "rgb(237, 43, 255)",
        "mp3": "/media/sounds/do-you-have-any-ibuprofen.mp3"
    },
    {
        "name": "Steam Achievement",
        "color": "rgb(48, 215, 255)",
        "mp3": "/media/sounds/steam-achievement.mp3"
    },
    {
        "name": "SopranosPaulieOooh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/oooooooh.mp3"
    },
    {
        "name": "DJ rewind",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/produce-online-audio-converter.mp3"
    },
    {
        "name": "Ganda Mo Intro",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/ganda_mo_intro-mp3cut.mp3"
    },
    {
        "name": "Arc Raiders Probe",
        "color": "rgb(92, 92, 92)",
        "mp3": "/media/sounds/arc-raiders-probe.mp3"
    },
    {
        "name": "INDIAN SONG LONG",
        "color": "rgb(255, 166, 0)",
        "mp3": "/media/sounds/indian-song-long.mp3"
    },
    {
        "name": "Meri jung Emotional",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/meri-jung-emotional.mp3"
    },
    {
        "name": "Tecnologia Meme",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/tecnologia-meme.mp3"
    },
    {
        "name": "we are charlie kirk funk (slowed+reverb)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/we-are-charlie-kirk-funk-slowed-reverb.mp3"
    },
    {
        "name": "Abe Sale",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/abe-sale.mp3"
    },
    {
        "name": "[1] Camera Click",
        "color": "rgb(66, 66, 66)",
        "mp3": "/media/sounds/1-camera-click.mp3"
    },
    {
        "name": "efrnahadirted",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/efrnahadirted.mp3"
    },
    {
        "name": "Nombre chapulín MM",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/nombre-chapulin-mm.mp3"
    },
    {
        "name": "ам ам ам",
        "color": "rgb(38, 255, 45)",
        "mp3": "/media/sounds/am-am-am.mp3"
    },
    {
        "name": "I farted in my grandpas breathing machine",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/i-farted-in-my-grandpas-breathing-machine.mp3"
    },
    {
        "name": "Иди naxyu мелстрой",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/idi-naxyu-melstroi.mp3"
    },
    {
        "name": "кто-то мне задонатил",
        "color": "rgb(255, 202, 234)",
        "mp3": "/media/sounds/kto-to-mne-zadonatil.mp3"
    },
    {
        "name": "Sorry Boss",
        "color": "rgb(176, 134, 70)",
        "mp3": "/media/sounds/sorry-boss.mp3"
    },
    {
        "name": "TU É UM BETA",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/tu-e-um-beta.mp3"
    },
    {
        "name": "BABY BOO NURSERY",
        "color": "rgb(172, 255, 192)",
        "mp3": "/media/sounds/baby-boo-nursery.mp3"
    },
    {
        "name": "Tyrannosaurus rex Roar 2",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/tyrannosaurus-rex-roar-2.mp3"
    },
    {
        "name": "Меня снайпнули в полёте",
        "color": "rgb(32, 56, 134)",
        "mp3": "/media/sounds/menia-snaipnuli-v-poliote.mp3"
    },
    {
        "name": "Paldooooooo",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/paldooooooo.mp3"
    },
    {
        "name": "Charlie Kurk funk",
        "color": "rgb(111, 227, 255)",
        "mp3": "/media/sounds/charlie-kurk-funk.mp3"
    },
    {
        "name": "Mama ooooh",
        "color": "rgb(21, 56, 255)",
        "mp3": "/media/sounds/mama-uwu-1-1.mp3"
    },
    {
        "name": "doakes meme song",
        "color": "rgb(242, 67, 255)",
        "mp3": "/media/sounds/doakes-meme-song.mp3"
    },
    {
        "name": "erm what the sigma",
        "color": "rgb(117, 187, 255)",
        "mp3": "/media/sounds/erm-what-the-sigma_su7GnzC.mp3"
    },
    {
        "name": "Chewbacca",
        "color": "rgb(102, 51, 0)",
        "mp3": "/media/sounds/chewbacca.swf.mp3"
    },
    {
        "name": "Bongo Feet",
        "color": "rgb(51, 0, 153)",
        "mp3": "/media/sounds/bongo-feet.mp3"
    },
    {
        "name": "desk slamming",
        "color": "rgb(255, 65, 224)",
        "mp3": "/media/sounds/desk-slamming.mp3"
    },
    {
        "name": "Sisyphus meme music",
        "color": "rgb(77, 255, 176)",
        "mp3": "/media/sounds/sisyphus-meme-music.mp3"
    },
    {
        "name": "Jboolin feel me",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/jboolin-feel-me.mp3"
    },
    {
        "name": "Мощний отрижка",
        "color": "rgb(102, 255, 0)",
        "mp3": "/media/sounds/moshchnii-otrizhka.mp3"
    },
    {
        "name": "Dancehall Horn",
        "color": "rgb(51, 0, 255)",
        "mp3": "/media/sounds/air-horn-club-sample.mp3"
    },
    {
        "name": "Сливыыы мелстрой",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/slivyyy-melstroi.mp3"
    },
    {
        "name": "ESPN Update",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/the-espn-sound.mp3"
    },
    {
        "name": "stupid ni-",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/stupid-ni_fP74ILk.mp3"
    },
    {
        "name": "Why is everyone so f***ing stupid?",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/why-is-everyone-so-f-ing-stupid.mp3"
    },
    {
        "name": "jokowi - dulu saya diam",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/jokowi-dulu-saya-diam.mp3"
    },
    {
        "name": "PEGUE NA MINHA POMBAAAAAAAAAAAA ESTOURADO",
        "color": "rgb(57, 230, 190)",
        "mp3": "/media/sounds/pegue-na-minha-pombaaaaaaaaaaaa-estourado.mp3"
    },
    {
        "name": "Benny Hill Chase",
        "color": "rgb(155, 165, 255)",
        "mp3": "/media/sounds/benny-hill-chase_PewVC8I.mp3"
    },
    {
        "name": "Tarantadoooo",
        "color": "rgb(255, 251, 5)",
        "mp3": "/media/sounds/tarantadoooo.mp3"
    },
    {
        "name": "Баба Чай",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/baba-chai.mp3"
    },
    {
        "name": "arthur ruins everything crying",
        "color": "rgb(243, 255, 12)",
        "mp3": "/media/sounds/arthur-ruins-everything-crying.mp3"
    },
    {
        "name": "Sirene alarme bom para acordar",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sirene-alarme-bom-para-acordar.mp3"
    },
    {
        "name": "illuminati Confirmed",
        "color": "rgb(0, 153, 0)",
        "mp3": "/media/sounds/x-files-theme-song-copy.mp3"
    },
    {
        "name": "Victory!",
        "color": "rgb(102, 255, 204)",
        "mp3": "/media/sounds/victoryff.swf.mp3"
    },
    {
        "name": "Fail Horn",
        "color": "rgb(102, 255, 51)",
        "mp3": "/media/sounds/thepriceisright-loserhorns.mp3"
    },
    {
        "name": "i believe i can fly",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/untitled2.mp3"
    },
    {
        "name": "bomboclat",
        "color": "rgb(88, 255, 14)",
        "mp3": "/media/sounds/bomboclat.mp3"
    },
    {
        "name": "CELEBRATION",
        "color": "rgb(153, 0, 0)",
        "mp3": "/media/sounds/celebration.mp3"
    },
    {
        "name": "Talkingg Benn Laughh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/talkingg-benn-laughh.mp3"
    },
    {
        "name": "SPONGEBOB ONE HOUR LATER",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/one-hour-later-spongebob-time-card-96.mp3"
    },
    {
        "name": "Lebron James Kid",
        "color": "rgb(0, 255, 153)",
        "mp3": "/media/sounds/lebron-james.mp3"
    },
    {
        "name": "Chris Smoove Splash",
        "color": "rgb(0, 51, 255)",
        "mp3": "/media/sounds/chris_smoove_autotune_splash_6qks4-viduu_hi.mp3"
    },
    {
        "name": "Flight reacts laugh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/flightreacts-dolphin-laugh_fW4DqCL.mp3"
    },
    {
        "name": "Police radio beep",
        "color": "rgb(91, 0, 0)",
        "mp3": "/media/sounds/police-beep.mp3"
    },
    {
        "name": "scooby doo laugh sped up",
        "color": "rgb(148, 71, 26)",
        "mp3": "/media/sounds/scooby-doo-laugh-sped-up.mp3"
    },
    {
        "name": "Minecraft skeleton",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/skeleton-sounds-2.mp3"
    },
    {
        "name": "Dodgeball Hit",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/dodgeball.mp3"
    },
    {
        "name": "Tokyo Drift Alert",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/untitled_zd2ts4l-audiotrimmer.mp3"
    },
    {
        "name": "Aye Yo WTF",
        "color": "rgb(4, 255, 96)",
        "mp3": "/media/sounds/aye-yo.mp3"
    },
    {
        "name": "Whisper Song",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/barney-the-whisper-song.mp3"
    },
    {
        "name": "sonic jump",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/jump.mp3"
    },
    {
        "name": "Ralsei Splat",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/ralsei-splat.mp3"
    },
    {
        "name": "Police radio beep",
        "color": "rgb(91, 0, 0)",
        "mp3": "/media/sounds/police-beep.mp3"
    },
    {
        "name": "æ meme",
        "color": "rgb(182, 0, 0)",
        "mp3": "/media/sounds/ae-meme.mp3"
    },
    {
        "name": "Dodgeball Hit",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/dodgeball.mp3"
    },
    {
        "name": "FNAF Balloon Boy Laugh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/echo4b.mp3"
    },
    {
        "name": "Nice shot! Wii Sports",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/nice-shot-wii-sports_DJJ0VOz.mp3"
    },
    {
        "name": "Dun dun duuun",
        "color": "rgb(204, 0, 0)",
        "mp3": "/media/sounds/dun_dun_dun.mp3"
    },
    {
        "name": "Legend of Zelda - Rupee",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/rupee-collect.mp3"
    },
    {
        "name": "Doorbell",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/door-bell-sound-effect.mp3"
    },
    {
        "name": "Mouse Click 1",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mouse-click_gt1reD8.mp3"
    },
    {
        "name": "skedaddle",
        "color": "rgb(7, 62, 78)",
        "mp3": "/media/sounds/skedaddle.mp3"
    },
    {
        "name": "FNaF Open Camera Sound",
        "color": "rgb(156, 156, 156)",
        "mp3": "/media/sounds/fnaf-open-camera-sound.mp3"
    },
    {
        "name": "5X30",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/5x30.mp3"
    },
    {
        "name": "Goofy Ahh Ringtone",
        "color": "rgb(50, 192, 255)",
        "mp3": "/media/sounds/goofy-ahh-ringtone.mp3"
    },
    {
        "name": "family feud buzzer",
        "color": "rgb(193, 255, 0)",
        "mp3": "/media/sounds/family-feud-strike-sfx_kN6Z99k.mp3"
    },
    {
        "name": "Are you serious right neow bro",
        "color": "rgb(138, 61, 61)",
        "mp3": "/media/sounds/are-you-serious-right-neow-bro.mp3"
    },
    {
        "name": "Discord Calling",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/discord-call-sound_tvxg95l.mp3"
    },
    {
        "name": "Kid Screaming Meme meme",
        "color": "rgb(255, 100, 254)",
        "mp3": "/media/sounds/kid-screaming-meme-meme.mp3"
    },
    {
        "name": "goofy ahh laugh meme",
        "color": "rgb(240, 255, 0)",
        "mp3": "/media/sounds/goofy-ahh-laugh-meme.mp3"
    },
    {
        "name": "Crying Black Dude MEME",
        "color": "rgb(62, 255, 201)",
        "mp3": "/media/sounds/crying-black-dude-meme.mp3"
    },
    {
        "name": "\"Ah\" Cute Anime Voice Sound Effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ah-cute-anime-voice-sound-effect.mp3"
    },
    {
        "name": "Random fart button",
        "color": "rgb(221, 255, 232)",
        "mp3": "/media/sounds/fart9.mp3"
    },
    {
        "name": "Arkh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/arkh.mp3"
    },
    {
        "name": "Super Mario World Coin",
        "color": "rgb(255, 247, 0)",
        "mp3": "/media/sounds/mario-coin-sound-effect.mp3"
    },
    {
        "name": "bongo hit",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bongo-hit.mp3"
    },
    {
        "name": "Deltarune Dark Fountain Open",
        "color": "rgb(29, 14, 65)",
        "mp3": "/media/sounds/deltarune-dark-fountain-open.mp3"
    },
    {
        "name": "GUGUGUGU",
        "color": "rgb(146, 255, 13)",
        "mp3": "/media/sounds/gugugugu.mp3"
    },
    {
        "name": "It should've been me! Not him!",
        "color": "rgb(97, 27, 96)",
        "mp3": "/media/sounds/it-shouldve-been-me-not-him.mp3"
    },
    {
        "name": "Howl",
        "color": "rgb(82, 14, 149)",
        "mp3": "/media/sounds/wolf-howling.mp3"
    },
    {
        "name": "piuw",
        "color": "rgb(247, 255, 20)",
        "mp3": "/media/sounds/piuw.mp3"
    },
    {
        "name": "Sonic Boosting sound",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/tmp_v0ettio.mp3"
    },
    {
        "name": "Sniper Lourd + HeadShot (Fortnite)",
        "color": "rgb(255, 211, 15)",
        "mp3": "/media/sounds/sniper-lourd-headshot-fortnite.mp3"
    },
    {
        "name": "Minecraft End Portal Opening/Activation",
        "color": "rgb(0, 96, 71)",
        "mp3": "/media/sounds/end_portal_activation.mp3"
    },
    {
        "name": "ford chime",
        "color": "rgb(206, 71, 255)",
        "mp3": "/media/sounds/ford-chime.mp3"
    },
    {
        "name": "KaChow",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/kachow_r22ZKsu.mp3"
    },
    {
        "name": "gn",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/noteg.mp3"
    },
    {
        "name": "Por fin apareciste Malnacido -Picoro-",
        "color": "rgb(45, 127, 35)",
        "mp3": "/media/sounds/por-fin-apareciste-malnacido-picoro.mp3"
    },
    {
        "name": "FAAAAAAAAAAAAAAAAAAh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/faaaaaaaaaaaaaaaaaah.mp3"
    },
    {
        "name": "evan burger",
        "color": "rgb(255, 148, 237)",
        "mp3": "/media/sounds/evan-burger.mp3"
    },
    {
        "name": "Lord Of The Rings LOTR",
        "color": "rgb(204, 153, 0)",
        "mp3": "/media/sounds/lotr-theme-cut-mp3.mp3"
    },
    {
        "name": "F@#$ING DINOSAURS!!!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/dinosaurs_1.mp3"
    },
    {
        "name": "USSR!!!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ussr.mp3"
    },
    {
        "name": "Ba't nilalabas mo tite mo",
        "color": "rgb(70, 57, 170)",
        "mp3": "/media/sounds/bat-nilalabas-mo-tite-mo.mp3"
    },
    {
        "name": "Thank you seller",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/z40-thank-you-mp3.mp3"
    },
    {
        "name": "Pinoy yapping",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/pinoy-yapping.mp3"
    },
    {
        "name": "Гимн Р.Ф.",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gimn-r-f.mp3"
    },
    {
        "name": "reaverkill1",
        "color": "rgb(37, 0, 105)",
        "mp3": "/media/sounds/reaverkill1.mp3"
    },
    {
        "name": "Ấn Độ Mixi",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/an-do-mixi.mp3"
    },
    {
        "name": "Bark Fart Combo",
        "color": "rgb(74, 51, 38)",
        "mp3": "/media/sounds/bark-fart-combo.mp3"
    },
    {
        "name": "Como dijo Vladimir",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/como-dijo-vladimir.mp3"
    },
    {
        "name": "Tyrannosaurus rex Roar 2",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/tyrannosaurus-rex-roar-2.mp3"
    },
    {
        "name": "trabalha nego",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/trabalha-nego_NZpQoJ9.mp3"
    },
    {
        "name": "Ness Okay",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/okey.mp3"
    },
    {
        "name": "WATCH OUT RKO!!!",
        "color": "rgb(200, 2, 255)",
        "mp3": "/media/sounds/rko_a4imkAl.mp3"
    },
    {
        "name": "rip my granny she got hit by a bazooka:(",
        "color": "rgb(32, 28, 255)",
        "mp3": "/media/sounds/rip-my-granny-she-got-hit-by-a-bazooka_EQHZmeL.mp3"
    },
    {
        "name": "Ninja YOURE TRASH KID",
        "color": "rgb(255, 9, 9)",
        "mp3": "/media/sounds/ninja-your-trash-kid.mp3"
    },
    {
        "name": "Bhosdike madarchod been k loray - roadies",
        "color": "rgb(255, 210, 243)",
        "mp3": "/media/sounds/bhosdike-madarchod-been-k-loray-roadies.mp3"
    },
    {
        "name": "Jew jew jew jew jew jew jew jew",
        "color": "rgb(0, 77, 255)",
        "mp3": "/media/sounds/jew-jew-jew-jew-jew-jew-jew-jew.mp3"
    },
    {
        "name": "Richard Watterson - Laughing",
        "color": "rgb(255, 161, 202)",
        "mp3": "/media/sounds/richard-watterson-laughing_CwvHwq6.mp3"
    },
    {
        "name": "It's Britney B*TCH!",
        "color": "rgb(153, 0, 204)",
        "mp3": "/media/sounds/itsbritney.mp3"
    },
    {
        "name": "Ric Flair Wooo",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/woo.mp3"
    },
    {
        "name": "Ultra instinct Goku",
        "color": "rgb(12, 206, 255)",
        "mp3": "/media/sounds/ultra-instinct-theme-official-version-audiotrimmer.mp3"
    },
    {
        "name": "FNAF 4 Jumpscare",
        "color": "rgb(0, 153, 204)",
        "mp3": "/media/sounds/jumpscare-sound-fnaf-4.mp3"
    },
    {
        "name": "Mina Mexicana™ Fart",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mina-mexicanatm-fart.mp3"
    },
    {
        "name": "Chris Smoove Splash",
        "color": "rgb(0, 51, 255)",
        "mp3": "/media/sounds/chris_smoove_autotune_splash_6qks4-viduu_hi.mp3"
    },
    {
        "name": "FNAF 3 Death Scream",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/five-nights-at-freddys-3-springtraps-jumpscare-brightened.mp3"
    },
    {
        "name": "Delivery - Lethal Company",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/delivery-lethal-company.mp3"
    },
    {
        "name": "Tobu - Candyland",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/candyland-cat-meme.mp3"
    },
    {
        "name": "HOOYAH",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hooyahh.mp3"
    },
    {
        "name": "General Lee HORN",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/general-lee-horn.mp3"
    },
    {
        "name": "Crow Sound Caw",
        "color": "rgb(33, 41, 159)",
        "mp3": "/media/sounds/raven-caw-caw.mp3"
    },
    {
        "name": "machine gun gunshot",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/y2mate_aRsvz4g.mp3"
    },
    {
        "name": "GET THIS SHIT OFF ME",
        "color": "rgb(255, 14, 231)",
        "mp3": "/media/sounds/y2mate_ZEoatLB.mp3"
    }
]