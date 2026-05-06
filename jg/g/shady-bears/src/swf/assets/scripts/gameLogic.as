package
{
   import flash.events.Event;
   import flash.events.KeyboardEvent;
   import flash.external.ExternalInterface;
   import flash.net.SharedObject;
   import flash.system.System;
   import flash.ui.Keyboard;
   import flash.utils.clearTimeout;
   import flash.utils.getTimer;
   import flash.utils.setTimeout;
   
   public class gameLogic
   {
      
      public static var instance:*;
      
      public static var mainStage:*;
      
      public static var mainTimeline:*;
      
      public static var score:*;
      
      public static var numOfShadows:*;
      
      public static var endScreen:*;
      
      public static var startScreen:*;
      
      public static var pauseScreen:*;
      
      public static var firstPlay:*;
      
      public static var gameOver:*;
      
      public static var multiplier:*;
      
      public static var pause:*;
      
      public static var numOfJars:*;
      
      public static var numOfFireflies:*;
      
      public static var numOfWraps:*;
      
      private static var quality:*;
      
      public static var wrapPointer1:*;
      
      public static var wrapPointer2:*;
      
      public static var last3Scores:*;
      
      public static var leaderboard:*;
      
      public static var sharedhighScore_1P:SharedObject;
      
      public static var sharedhighScore_2P:SharedObject;
      
      public static var sharedEquipped:SharedObject;
      
      public static var highScore:*;
      
      public static var newHighScore:Boolean;
      
      public static const MODES:Object = {
         "P1":1,
         "P2_COOP":2,
         "P2_VS":3
      };
      
      public static var gameMode:* = MODES.P1;
      
      private static var gcTime:* = 150;
      
      private static var fr:* = 0;
      
      private static var upIsUp:* = new Array();
      
      private static var lastPause:* = 0;
      
      private static var pauseTO:* = 0;
      
      public static var levelScale:* = 1;
      
      public static var tickScale:Number = 0.5;
      
      public static var revived:* = 0;
      
      public static var maxRevives:* = 2;
      
      private static var last3Scores_1P:* = new Array(0,0,0);
      
      private static var last3Scores_2P:* = new Array(0,0,0);
      
      private static var equipped:* = new Array(-1,-1,-1);
      
      public static var leaderboard_1P:Array = new Array({
         "score":987,
         "name":"Sonya"
      },{
         "score":610,
         "name":"Justin"
      },{
         "score":377,
         "name":"Carlie"
      },{
         "score":233,
         "name":"Johnny"
      },{
         "score":144,
         "name":"Emile"
      },{
         "score":89,
         "name":"Duke"
      },{
         "score":55,
         "name":"Micheal"
      },{
         "score":34,
         "name":"Trudy"
      },{
         "score":21,
         "name":"Donny"
      },{
         "score":13,
         "name":"Rolland"
      });
      
      public static var leaderboard_2P:Array = new Array({
         "score":610,
         "name":"Mishka & Urso"
      },{
         "score":377,
         "name":"Dana & Kameron"
      },{
         "score":233,
         "name":"Kurt & Korey"
      },{
         "score":144,
         "name":"Johnny & Hugh"
      },{
         "score":89,
         "name":"Trish & Zed"
      },{
         "score":55,
         "name":"Cathy & Asia"
      },{
         "score":34,
         "name":"Kev & Bobby"
      },{
         "score":21,
         "name":"Owen & Parry"
      },{
         "score":13,
         "name":"Jamie & Brett"
      },{
         "score":8,
         "name":"Kenny & Sophy"
      });
      
      public static var highScore_1P:Number = 0;
      
      public static var highScore_2P:Number = 0;
      
      private var firstAcorn:*;
      
      public var platform:*;
      
      public var bears:*;
      
      public var shadows:*;
      
      public var pickup:*;
      
      public var honeyJar:*;
      
      public var magnets:*;
      
      public var swarms:Array;
      
      private var keyIsDown:*;
      
      public var numOfAcorns:*;
      
      private var lastJar:*;
      
      public function gameLogic(param1:*, param2:*)
      {
         var _loc5_:* = undefined;
         this.bears = new Array();
         var _loc3_:* = undefined;
         super();
         mainStage = param1;
         mainTimeline = param2;
         gameOver = false;
         pause = false;
         if(firstPlay == undefined)
         {
            firstPlay = true;
            this.updatehighScore();
            this.updateEquipped();
         }
         else
         {
            firstPlay = false;
         }
         score = 0;
         numOfJars = 0;
         numOfFireflies = 0;
         numOfWraps = 0;
         revived = 0;
         this.swarms = new Array();
         this.platform = new ground();
         this.platform.x = mainStage.stageWidth / 2;
         this.platform.y = mainStage.stageHeight;
         if(mainTimeline.isTouchDevice)
         {
            this.platform.gotoAndStop("mobile");
            levelScale = 0.8;
         }
         mainTimeline.addChild(this.platform);
         this.magnets = [];
         multiplier = 1;
         if(SoundManager.musicChannel.position == 0)
         {
            SoundManager.playMusic(SoundManager.mainMusic);
         }
         SoundManager.zzzChannel.stop();
         SoundManager.soundFade(SoundManager.zzzChannel,1,0.1);
         this.pickup = new acorn();
         var _loc4_:* = 0;
         while(_loc4_ < 30)
         {
            try
            {
               _loc3_ = new Object();
               _loc3_.x = this.platform["pickUpPos" + _loc4_].x + this.platform.x;
               _loc3_.y = this.platform["pickUpPos" + _loc4_].y + this.platform.y;
               this.platform.removeChild(this.platform["pickUpPos" + _loc4_]);
               this.pickup.positions.push(_loc3_);
            }
            catch(error:Error)
            {
            }
            _loc4_++;
         }
         mainTimeline.addChild(this.pickup);
         upIsUp = [true,true];
         this.shadows = new Array();
         this.shadows[0] = new Array();
         if(gameLogic.gameMode == gameLogic.MODES.P1)
         {
            this.bears[0] = new hero(this.platform,levelScale,"P1",true,equipped[0]);
            this.bears[0].x = this.platform.heroPosSolo.x + this.platform.x;
            this.bears[0].y = this.platform.heroPosSolo.y + this.platform.y;
            mainTimeline.addChild(this.bears[0]);
            leaderboard = leaderboard_1P;
            this.firstAcorn = 0;
            mainTimeline.setMedals(1);
            last3Scores = last3Scores_1P;
         }
         else
         {
            this.bears[0] = new hero(this.platform,levelScale,"P1",false,equipped[1]);
            this.bears[0].x = this.platform.heroPosP1.x + this.platform.x;
            this.bears[0].y = this.platform.heroPosP1.y + this.platform.y;
            mainTimeline.addChild(this.bears[0]);
            this.bears[1] = new hero(this.platform,levelScale,"P2",false,equipped[2]);
            this.bears[1].x = this.platform.heroPosP2.x + this.platform.x;
            this.bears[1].y = this.platform.heroPosP2.y + this.platform.y;
            this.bears[1].scaleX *= -1;
            if(this.bears[1].controlsCloud)
            {
               this.bears[1].controlsCloud.scaleX *= -1;
            }
            mainTimeline.addChild(this.bears[1]);
            this.shadows[1] = new Array();
            leaderboard = leaderboard_2P;
            this.firstAcorn = Math.floor(Math.random() * 2);
            mainTimeline.setMedals(2);
            last3Scores = last3Scores_2P;
         }
         this.platform.removeChild(this.platform.heroPosSolo);
         this.platform.removeChild(this.platform.heroPosP1);
         this.platform.removeChild(this.platform.heroPosP2);
         this.pickup.heroIndex = this.firstAcorn;
         this.pickup.newFrame = this.firstAcorn * 2 + 1;
         this.pickup.relocate();
         numOfShadows = 0;
         this.numOfAcorns = 0;
         this.lastJar = -200;
         this.keyIsDown = new Array();
         mainStage.addEventListener(Event.ENTER_FRAME,this.eFrame);
         mainStage.addEventListener(KeyboardEvent.KEY_DOWN,this.keyDown);
         mainStage.addEventListener(KeyboardEvent.KEY_UP,this.keyUp);
         if(firstPlay)
         {
            wrapPointer1 = new wrapPointer();
            wrapPointer2 = new wrapPointer();
            wrapPointer1.x = mainStage.stageWidth - 215 / 2;
            wrapPointer2.x = -215 / 2;
            wrapPointer1.y = wrapPointer2.y = mainStage.stageHeight * levelScale / 2;
            wrapPointer1.scaleY = wrapPointer2.scaleY = levelScale;
            wrapPointer1.scaleX = wrapPointer2.scaleX = levelScale;
            mainTimeline.addChild(wrapPointer1);
            mainTimeline.addChild(wrapPointer2);
            startScreen = new screen("start",mainTimeline.isTouchDevice);
            startScreen.x = mainStage.stageWidth / 2;
            startScreen.y = mainStage.stageHeight / 2;
            mainTimeline.addChild(startScreen);
            _loc5_ = new circleTransition();
            _loc5_.x = mainStage.stageWidth / 2;
            _loc5_.y = mainStage.stageHeight / 2;
            mainTimeline.addChild(_loc5_);
            SoundManager.changeVolume(SoundManager.musicChannel,0.2);
            quality = 2;
            pause = true;
         }
         instance = this;
         if(screen.currentScreen)
         {
            mainTimeline.setChildIndex(screen.currentScreen,mainTimeline.numChildren - 1);
         }
      }
      
      public static function pauseUnpause(param1:* = null) : *
      {
         var e:* = param1;
         if(!gameOver)
         {
            if(getTimer() - lastPause < 1000)
            {
               clearTimeout(pauseTO);
               pauseTO = setTimeout(pauseUnpause,500,e);
               return;
            }
            lastPause = getTimer();
            SoundManager.playSound(SoundManager.pause);
            if(!pause)
            {
               pauseScreen = new screen("pause",mainTimeline.isTouchDevice);
               pauseScreen.x = mainStage.stageWidth / 2;
               pauseScreen.y = mainStage.stageHeight / 2;
               mainTimeline.addChild(pauseScreen);
               SoundManager.soundFade(SoundManager.musicChannel,0.2,-0.1);
               if(instance.swarms.length > 0)
               {
                  SoundManager.soundFade(SoundManager.zzzChannel,0.2,-0.1);
               }
               ExternalInterface.call("adsExternalCall","gameplayStop");
               pause = true;
            }
            else
            {
               screen.close();
               SoundManager.soundFade(SoundManager.musicChannel,1,0.1);
               if(instance.swarms.length > 0)
               {
                  SoundManager.soundFade(SoundManager.zzzChannel,1,0.1);
               }
               ExternalInterface.call("adsExternalCall","gameplayStart");
               setTimeout(function():*
               {
                  pause = false;
               },500);
            }
         }
      }
      
      public static function startGame(param1:*) : *
      {
         var _loc2_:* = undefined;
         gameLogic.gameMode = param1;
         if(mainTimeline.isTouchDevice)
         {
            _loc2_ = 1;
            if(param1 != MODES.P1)
            {
               _loc2_ = 2;
            }
            ExternalInterface.call("gamepadExternalCall","setNumOfPlayers",_loc2_);
         }
         if(firstPlay)
         {
            gameLogic.playAgain(false);
            pause = false;
            gameOver = false;
            SoundManager.soundFade(SoundManager.musicChannel,1,0.05);
            ExternalInterface.call("adsExternalCall","gameplayStart");
            firstPlay = false;
         }
         else
         {
            gameLogic.playAgain();
         }
      }
      
      public static function playAgain(param1:* = true) : *
      {
         instance.gotoGameOver();
         screen.close();
         endScreen = null;
         startScreen = null;
         if(param1)
         {
            ExternalInterface.call("adsExternalCall","showAd");
         }
         if(gameLogic.gameMode === MODES.P1)
         {
            ExternalInterface.call("analyticsExternalCall","Game started: 1P");
         }
         else
         {
            ExternalInterface.call("analyticsExternalCall","Game started: 2P");
         }
      }
      
      public static function rewardPlayer(param1:*) : *
      {
         var _loc2_:* = undefined;
         if(param1)
         {
            ExternalInterface.call("analyticsExternalCall","Revived");
            screen.close();
            gameOver = false;
            ++revived;
            _loc2_ = 0;
            while(_loc2_ < instance.bears.length)
            {
               instance.bears[_loc2_].alpha = 1;
               instance.bears[_loc2_].revive();
               setTimeout(instance.herosOnTop,500);
               _loc2_++;
            }
         }
         else
         {
            screen.currentScreen.window.mc.lock = false;
         }
      }
      
      public static function revive() : *
      {
         ExternalInterface.call("adsExternalCall","showRewardedVideo");
      }
      
      public static function getEquipped(param1:* = 0) : *
      {
         return equipped[param1];
      }
      
      public static function setEquipped(param1:*, param2:* = 0) : *
      {
         equipped[param2] = param1;
         sharedEquipped.data.sb_equipped = equipped;
      }
      
      private function eFrame(param1:Event) : *
      {
         var _loc4_:* = undefined;
         var _loc5_:* = undefined;
         var _loc6_:* = undefined;
         var _loc7_:* = undefined;
         var _loc8_:* = undefined;
         var _loc9_:* = undefined;
         var _loc10_:* = undefined;
         var _loc2_:* = undefined;
         ++fr;
         if(fr % gcTime == 0)
         {
            System.gc();
         }
         if(gameOver)
         {
            return;
         }
         if(pause)
         {
            return;
         }
         var _loc3_:* = 0;
         while(_loc3_ < this.bears.length)
         {
            _loc4_ = mathUtil.distance(this.bears[_loc3_].x,this.bears[_loc3_].y,this.pickup.x,this.pickup.y);
            if(this.pickup.heroIndex == _loc3_ && _loc4_ < this.bears[_loc3_].halfWidth * 2.5 && this.pickup.status != "remove")
            {
               ++this.numOfAcorns;
               mainTimeline.scoreTxt.text = score;
               _loc7_ = 0;
               if(gameMode == MODES.P2_COOP)
               {
                  _loc7_ = (this.firstAcorn + this.numOfAcorns) % 2;
               }
               if(this.numOfAcorns % 7 == 1 && numOfShadows < 12)
               {
                  this.pickup.pick(2,_loc7_);
               }
               else
               {
                  this.pickup.pick(1,_loc7_);
               }
               if(this.numOfAcorns % 7 == 2 && numOfShadows < 12)
               {
                  this.addShadow(_loc3_);
               }
               if(this.numOfAcorns % 8 == 0 && numOfShadows > 3)
               {
                  _loc8_ = 1;
                  this.addMagnet(_loc8_);
                  if(this.numOfAcorns % 40 == 0)
                  {
                     this.addMagnet(_loc8_ * 0.66);
                  }
                  if(this.numOfAcorns % 80 == 0)
                  {
                     this.addMagnet(_loc8_ * 0.5);
                  }
               }
               if(this.numOfAcorns % 15 == 12)
               {
                  _loc2_ = Math.random();
                  this.addHoneyJar();
               }
               if(this.numOfAcorns == this.lastJar + 5)
               {
                  this.removeBees();
               }
               this.updateScore(multiplier,this.pickup.x,this.pickup.y);
            }
            _loc5_ = 0;
            while(_loc5_ < this.bears.length)
            {
               _loc9_ = 0;
               while(_loc9_ < this.shadows[_loc5_].length)
               {
                  if(this.shadows[_loc5_][_loc9_].alpha >= 1)
                  {
                     if(mathUtil.distance(this.bears[_loc3_].x,this.bears[_loc3_].y,this.shadows[_loc5_][_loc9_].x,this.shadows[_loc5_][_loc9_].y) < this.bears[_loc3_].halfHeight * 2)
                     {
                        if(this.bears[_loc3_].reviving == 0)
                        {
                           this.endGame(_loc3_);
                        }
                     }
                  }
                  _loc9_++;
               }
               _loc5_++;
            }
            _loc6_ = 0;
            while(_loc6_ < this.swarms.length)
            {
               if(mathUtil.distance(this.bears[_loc3_].x,this.bears[_loc3_].y,this.swarms[_loc6_].x,this.swarms[_loc6_].y) < this.swarms[_loc6_].hitDistance)
               {
                  if(this.bears[_loc3_].reviving == 0)
                  {
                     this.endGame(_loc3_);
                  }
               }
               _loc6_++;
            }
            if(this.honeyJar && Boolean(this.honeyJar.status))
            {
               if(mathUtil.distance(this.bears[_loc3_].x,this.bears[_loc3_].y,this.honeyJar.x,this.honeyJar.y) < this.bears[_loc3_].halfWidth * 2 && this.honeyJar.status != "remove")
               {
                  ++numOfJars;
                  this.updateMultiplier(1,this.honeyJar.x,this.honeyJar.y);
                  this.honeyJar.pick();
                  this.honeyJar = null;
                  this.lastJar = this.numOfAcorns;
                  mainTimeline.scoreTxt.text = score;
                  _loc10_ = numOfJars % 11 == 0;
                  if(numOfJars % 2 == 0)
                  {
                     this.addBees(this.bears[_loc3_],_loc10_);
                  }
                  else
                  {
                     this.addBees(null,_loc10_);
                  }
                  if(numOfJars % 3 == 0)
                  {
                     this.addBees(null,_loc10_);
                  }
                  if(numOfJars % 5 == 0)
                  {
                     this.addBees(null,_loc10_);
                  }
                  if(numOfJars % 7 == 0)
                  {
                     if(numOfJars % 2 == 0)
                     {
                        this.addBees(this.shadows[_loc3_][0],_loc10_);
                     }
                     else
                     {
                        this.addBees(this.bears[_loc3_],_loc10_);
                     }
                  }
               }
            }
            _loc6_ = this.magnets.length - 1;
            while(_loc6_ >= 0)
            {
               if(Boolean(this.magnets[_loc6_]) && Boolean(this.magnets[_loc6_].status))
               {
                  if(mathUtil.distance(this.bears[_loc3_].x,this.bears[_loc3_].y,this.magnets[_loc6_].x,this.magnets[_loc6_].y) < this.bears[_loc3_].halfWidth * 2.5 && this.magnets[_loc6_].status != "remove" && this.magnets[_loc6_].target == null)
                  {
                     this.magnets[_loc6_].pick(this.removeShadow());
                     this.magnets[_loc6_] = null;
                     this.magnets.splice(_loc6_,1);
                     ++numOfFireflies;
                     SoundManager.playSound(SoundManager.firefly);
                     mainTimeline.checkMedals();
                  }
               }
               _loc6_--;
            }
            _loc3_++;
         }
         if(numOfWraps > 0 && wrapPointer1)
         {
            wrapPointer1.alpha -= 0.15;
            wrapPointer2.alpha -= 0.15;
            if(wrapPointer1.alpha <= 0)
            {
               mainTimeline.removeChild(wrapPointer1);
               mainTimeline.removeChild(wrapPointer2);
               wrapPointer1 = null;
               wrapPointer2 = null;
            }
         }
      }
      
      public function endGame(param1:*) : *
      {
         var i:* = undefined;
         var bi:* = param1;
         var o:* = undefined;
         if(gameOver)
         {
            return;
         }
         if(this.bears.length == 1)
         {
            if(highScore_1P < score)
            {
               highScore_1P = score;
               sharedhighScore_1P.data.sb_1p_hs = score;
               newHighScore = true;
            }
            else
            {
               newHighScore = false;
            }
            highScore = highScore_1P;
         }
         else
         {
            if(highScore_2P < score)
            {
               highScore_2P = score;
               sharedhighScore_2P.data.sb_2p_hs = score;
               newHighScore = true;
            }
            else
            {
               newHighScore = false;
            }
            highScore = highScore_2P;
            ExternalInterface.call("analyticsExternalCall","Score 2P",score);
         }
         setTimeout(function():*
         {
            if(revived < maxRevives && highScore >= 5)
            {
               endScreen = new screen("revive",mainTimeline.isTouchDevice);
            }
            else
            {
               updateLast3Scores();
               endScreen = new screen("end",mainTimeline.isTouchDevice);
            }
            endScreen.x = mainStage.stageWidth / 2;
            endScreen.y = mainStage.stageHeight / 2;
            mainTimeline.addChild(endScreen);
         },1000);
         SoundManager.soundFade(SoundManager.musicChannel,0.1,-0.05);
         SoundManager.playSound(SoundManager.gameOver);
         this.bears[bi].alpha = 0;
         effects.explode(mainTimeline,this.bears[bi].x,this.bears[bi].y,this.bears[bi].color,30,70);
         this.removeBees();
         gameOver = true;
         ExternalInterface.call("adsExternalCall","gameplayStop");
      }
      
      public function updateLast3Scores() : *
      {
         last3Scores[2] = last3Scores[1];
         last3Scores[1] = last3Scores[0];
         last3Scores[0] = score;
         if(this.bears.length == 1)
         {
            ExternalInterface.call("analyticsExternalCall","Score 1P",score);
         }
         else
         {
            ExternalInterface.call("analyticsExternalCall","Score 2P",score);
         }
      }
      
      public function keyUp(param1:*) : *
      {
         this.keyIsDown[param1.keyCode] = false;
         if(external.adIsPlaying)
         {
            return;
         }
         if(screen.currentScreen)
         {
            screen.onKeyUp(param1.keyCode);
            return;
         }
         if(param1.keyCode == Keyboard.ESCAPE)
         {
            pauseUnpause();
            return;
         }
         if(!this.keyIsDown[Keyboard.LEFT])
         {
            if(!this.keyIsDown[Keyboard.RIGHT])
            {
               this.leftUp(0);
            }
            else
            {
               this.rightDown(0);
            }
         }
         if(!this.keyIsDown[Keyboard.RIGHT])
         {
            if(!this.keyIsDown[Keyboard.LEFT])
            {
               this.rightUp(0);
            }
            else
            {
               this.leftDown(0);
            }
         }
         if(param1.keyCode == Keyboard.UP)
         {
            this.jumpUp(0);
         }
         if(param1.keyCode == Keyboard.SPACE)
         {
            this.jumpUp(0);
         }
         if(gameMode != MODES.P1)
         {
            if(!this.keyIsDown[Keyboard.A] && !this.keyIsDown[Keyboard.Q])
            {
               if(!this.keyIsDown[Keyboard.D])
               {
                  this.leftUp(1);
               }
               else
               {
                  this.rightDown(1);
               }
            }
            if(!this.keyIsDown[Keyboard.D])
            {
               if(!this.keyIsDown[Keyboard.A] && !this.keyIsDown[Keyboard.Q])
               {
                  this.rightUp(1);
               }
               else
               {
                  this.leftDown(1);
               }
            }
            if(param1.keyCode == Keyboard.W || param1.keyCode == Keyboard.Z)
            {
               this.jumpUp(1);
            }
         }
      }
      
      public function keyDown(param1:*) : *
      {
         if(external.adIsPlaying)
         {
            return;
         }
         this.keyIsDown[param1.keyCode] = true;
         if(pause)
         {
            if(param1.keyCode == Keyboard.R && Boolean(this.keyIsDown[Keyboard.TAB]))
            {
               SoundManager.playSound(SoundManager.pause);
               this.resethighScores();
               return;
            }
         }
         if(pause || gameOver)
         {
            return;
         }
         if(param1.keyCode == Keyboard.LEFT)
         {
            this.leftDown(0);
         }
         if(param1.keyCode == Keyboard.RIGHT)
         {
            this.rightDown(0);
         }
         if(param1.keyCode == Keyboard.UP && Boolean(upIsUp[0]))
         {
            this.jumpDown(0);
         }
         if(param1.keyCode == Keyboard.SPACE && Boolean(upIsUp[0]))
         {
            this.jumpDown(0);
         }
         if(gameMode != MODES.P1)
         {
            if(param1.keyCode == Keyboard.A || param1.keyCode == Keyboard.Q)
            {
               this.leftDown(1);
            }
            if(param1.keyCode == Keyboard.D)
            {
               this.rightDown(1);
            }
            if((param1.keyCode == Keyboard.W || param1.keyCode == Keyboard.Z) && Boolean(upIsUp[1]))
            {
               this.jumpDown(1);
            }
         }
      }
      
      private function leftDown(param1:*) : *
      {
         this.bears[param1].dir = -1;
      }
      
      private function leftUp(param1:*) : *
      {
         this.bears[param1].dir = 0;
      }
      
      private function rightDown(param1:*) : *
      {
         this.bears[param1].dir = 1;
      }
      
      private function rightUp(param1:*) : *
      {
         this.bears[param1].dir = 0;
      }
      
      private function jumpDown(param1:*) : *
      {
         this.bears[param1].jump();
         upIsUp[param1] = false;
      }
      
      private function jumpUp(param1:*) : *
      {
         upIsUp[param1] = true;
      }
      
      public function gotoGameOver() : *
      {
         var _loc2_:* = undefined;
         mainStage.removeEventListener(Event.ENTER_FRAME,this.eFrame);
         mainStage.removeEventListener(KeyboardEvent.KEY_DOWN,this.keyDown);
         mainStage.removeEventListener(KeyboardEvent.KEY_UP,this.keyUp);
         SoundManager.zzzChannel.stop();
         this.bears[0].destroy();
         if(this.bears[1])
         {
            this.bears[1].destroy();
         }
         this.pickup.destroy();
         mainTimeline.removeChild(this.platform);
         var _loc1_:* = 0;
         while(_loc1_ < this.bears.length)
         {
            _loc2_ = 0;
            while(_loc2_ < this.shadows[_loc1_].length)
            {
               this.shadows[_loc1_][_loc2_].destroy();
               _loc2_++;
            }
            _loc1_++;
         }
         this.removeBees();
         this.removeHoneyJar();
         this.removeMagnets();
         System.gc();
         mainTimeline.gotoAndStop("reset");
      }
      
      private function herosOnTop() : *
      {
         var _loc1_:* = 0;
         while(_loc1_ < this.bears.length)
         {
            mainTimeline.setChildIndex(this.bears[_loc1_],mainTimeline.numChildren - 1 - _loc1_);
            _loc1_++;
         }
      }
      
      public function updateScore(param1:*, param2:*, param3:*) : *
      {
         score += param1;
         mainTimeline.scoreTxt.text = score;
         effects.addMsg(mainTimeline,"+" + param1,param2,param3,0,new msg());
         mainTimeline.checkMedals();
      }
      
      public function updateMultiplier(param1:*, param2:*, param3:*) : *
      {
         multiplier += param1;
         mainTimeline.multiplierTxt.text = multiplier;
         effects.addMsg(mainTimeline,multiplier,param2,param3,0,new multiplierMsg());
         mainTimeline.checkMedals();
      }
      
      public function resethighScores() : *
      {
         sharedhighScore_1P = SharedObject.getLocal("sb_1p_hs","/");
         sharedhighScore_1P.data.sb_1p_hs = 0;
         sharedhighScore_1P.flush();
         sharedhighScore_2P = SharedObject.getLocal("sb_2p_hs","/");
         sharedhighScore_2P.data.sb_2p_hs = 0;
         sharedhighScore_2P.flush();
      }
      
      public function updatehighScore() : *
      {
         sharedhighScore_1P = SharedObject.getLocal("sb_1p_hs","/");
         if(sharedhighScore_1P.data.sb_1p_hs == undefined)
         {
            sharedhighScore_1P.data.sb_1p_hs = 0;
         }
         else
         {
            highScore_1P = sharedhighScore_1P.data.sb_1p_hs;
         }
         sharedhighScore_1P.flush();
         sharedhighScore_2P = SharedObject.getLocal("sb_2p_hs","/");
         if(sharedhighScore_2P.data.sb_2p_hs == undefined)
         {
            sharedhighScore_2P.data.sb_2p_hs = 0;
         }
         else
         {
            highScore_2P = sharedhighScore_2P.data.sb_2p_hs;
         }
         sharedhighScore_2P.flush();
      }
      
      public function updateEquipped() : *
      {
         sharedEquipped = SharedObject.getLocal("sb_equipped","/");
         if(sharedEquipped.data.sb_equipped == undefined)
         {
            sharedEquipped.data.sb_equipped = equipped;
         }
         else
         {
            equipped = sharedEquipped.data.sb_equipped;
            if(equipped.length == 2)
            {
               equipped[2] = equipped[1];
            }
         }
         sharedEquipped.flush();
      }
      
      public function addShadow(param1:*) : *
      {
         var _loc2_:* = this.shadows[param1].length;
         if(_loc2_ == 0)
         {
            this.shadows[param1][_loc2_] = new shadow(this.bears[param1],Math.round(30 / tickScale));
         }
         else if(this.bears.length == 1)
         {
            this.shadows[param1][_loc2_] = new shadow(this.shadows[param1][_loc2_ - 1],Math.round(15 / tickScale));
         }
         else
         {
            this.shadows[param1][_loc2_] = new shadow(this.shadows[param1][_loc2_ - 1],Math.round(10 / tickScale));
         }
         mainTimeline.addChild(this.shadows[param1][_loc2_]);
         ++numOfShadows;
         SoundManager.playSound(SoundManager.shadow);
      }
      
      public function addHoneyJar() : *
      {
         this.honeyJar = new honey();
         this.honeyJar.x = mainStage.stageWidth / 2;
         this.honeyJar.y = 50 * levelScale;
         mainTimeline.addChild(this.honeyJar);
      }
      
      public function removeHoneyJar() : *
      {
         if(this.honeyJar && Boolean(this.honeyJar.status))
         {
            this.honeyJar.destroy();
            this.honeyJar = null;
         }
      }
      
      public function addMagnet(param1:*) : *
      {
         var _loc3_:* = undefined;
         var _loc2_:* = Math.floor(Math.random() * 2);
         if(_loc2_ == 0)
         {
            _loc3_ = new magnet(-param1);
            _loc3_.x = mainStage.stageWidth + 100;
         }
         else
         {
            _loc3_ = new magnet(param1);
            _loc3_.x = -100;
         }
         _loc3_.y = 30 + Math.floor(Math.random() * 4) * 100 * levelScale;
         mainTimeline.addChild(_loc3_);
         this.magnets.push(_loc3_);
      }
      
      public function removeMagnets() : *
      {
         var _loc1_:* = 0;
         while(_loc1_ < this.magnets.length)
         {
            if(Boolean(this.magnets[_loc1_]) && Boolean(this.magnets[_loc1_].status))
            {
               this.magnets[_loc1_].destroy();
               this.magnets[_loc1_] = null;
            }
            _loc1_++;
         }
         this.magnets = [];
      }
      
      public function removeShadow() : *
      {
         --numOfShadows;
         SoundManager.playSound(SoundManager.removeShadow);
         var _loc1_:* = 0;
         trace(_loc1_);
         if(this.bears.length == 2)
         {
            if(this.shadows[1].length > this.shadows[0].length)
            {
               _loc1_ = 1;
            }
            if(this.shadows[1].length == this.shadows[0].length)
            {
               _loc1_ = Math.floor(Math.random() * 2);
            }
         }
         trace(_loc1_);
         return this.shadows[_loc1_].pop();
      }
      
      public function addBees(param1:* = null, param2:* = false) : *
      {
         var _loc3_:* = this.swarms.length;
         this.swarms.push(new bees(param1,param2,levelScale));
         this.swarms[_loc3_].x = mainStage.stageWidth / 2 + 3;
         this.swarms[_loc3_].y = 128 + 90 * levelScale;
         if(param2)
         {
            this.swarms[_loc3_].y = 190 + 75 * levelScale;
            this.swarms[_loc3_].x += 4;
         }
         mainTimeline.addChild(this.swarms[_loc3_]);
         if(_loc3_ == 0)
         {
            SoundManager.playZZZ(SoundManager.zzz,999999);
         }
      }
      
      public function removeBees() : *
      {
         var _loc1_:* = 0;
         while(_loc1_ < this.swarms.length)
         {
            if(this.swarms[_loc1_])
            {
               this.swarms[_loc1_].disappear();
               this.swarms[_loc1_] = null;
            }
            _loc1_++;
         }
         this.swarms = new Array();
      }
   }
}

