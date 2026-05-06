package medvedi_fla
{
   import adobe.utils.*;
   import flash.accessibility.*;
   import flash.desktop.*;
   import flash.display.*;
   import flash.errors.*;
   import flash.events.*;
   import flash.external.*;
   import flash.filters.*;
   import flash.geom.*;
   import flash.globalization.*;
   import flash.media.*;
   import flash.net.*;
   import flash.net.drm.*;
   import flash.printing.*;
   import flash.profiler.*;
   import flash.sampler.*;
   import flash.sensors.*;
   import flash.system.*;
   import flash.text.*;
   import flash.text.engine.*;
   import flash.text.ime.*;
   import flash.ui.*;
   import flash.utils.*;
   import flash.xml.*;
   
   [Embed(source="/_assets/assets.swf", symbol="symbol325")]
   public dynamic class gameOverWindow_56 extends MovieClip
   {
      
      public var helpBtn:SimpleButton;
      
      public var medal0:MovieClip;
      
      public var medal1:MovieClip;
      
      public var medal10:MovieClip;
      
      public var medal11:MovieClip;
      
      public var medal2:MovieClip;
      
      public var medal3:MovieClip;
      
      public var medal4:MovieClip;
      
      public var medal5:MovieClip;
      
      public var medal6:MovieClip;
      
      public var medal7:MovieClip;
      
      public var medal8:MovieClip;
      
      public var medal9:MovieClip;
      
      public var muteBtn:MovieClip;
      
      public var name0:TextField;
      
      public var name1:TextField;
      
      public var name2:TextField;
      
      public var name3:TextField;
      
      public var name4:TextField;
      
      public var name5:TextField;
      
      public var name6:TextField;
      
      public var name7:TextField;
      
      public var name8:TextField;
      
      public var name9:TextField;
      
      public var ord0:TextField;
      
      public var ord1:TextField;
      
      public var ord2:TextField;
      
      public var ord3:TextField;
      
      public var ord4:TextField;
      
      public var ord5:TextField;
      
      public var ord6:TextField;
      
      public var ord7:TextField;
      
      public var ord8:TextField;
      
      public var ord9:TextField;
      
      public var playAgainBtn:SimpleButton;
      
      public var playBtn:SimpleButton;
      
      public var quitBtn:SimpleButton;
      
      public var score0:TextField;
      
      public var score1:TextField;
      
      public var score2:TextField;
      
      public var score3:TextField;
      
      public var score4:TextField;
      
      public var score5:TextField;
      
      public var score6:TextField;
      
      public var score7:TextField;
      
      public var score8:TextField;
      
      public var score9:TextField;
      
      public var scoreLabel:MovieClip;
      
      public var scoreMc:MovieClip;
      
      public var separator:MovieClip;
      
      public var fr:*;
      
      public var tempScore:*;
      
      public const delay1:* = 30;
      
      public const countDur:* = 15;
      
      public const fullCountDur:* = 45;
      
      public const delay2:* = 15;
      
      public const slideDur:* = 15;
      
      public const leaderboardDur:* = 5;
      
      public const fullLBDur:* = 75;
      
      public const delay3:* = 15;
      
      public const medalsDur:* = 45;
      
      public const fullAnimDur:* = 135;
      
      public var unlockAllHats:*;
      
      public var ind:*;
      
      public function gameOverWindow_56()
      {
         super();
         addFrameScript(0,this.frame1);
      }
      
      public function onMute(param1:*) : *
      {
         if(this.lock)
         {
            return;
         }
         SoundManager.musicOn = !SoundManager.musicOn;
         SoundManager.soundOn = SoundManager.musicOn;
         if(!SoundManager.soundOn)
         {
            SoundManager.musicChannel.stop();
            SoundManager.zzzChannel.stop();
            this.muteBtn.gotoAndStop("off");
         }
         else
         {
            SoundManager.playMusic(SoundManager.mainMusic);
            this.muteBtn.gotoAndStop("on");
         }
      }
      
      public function onHelp(param1:*) : *
      {
         if(this.lock)
         {
            return;
         }
         this.removeEventListener(Event.ENTER_FRAME,this.scoreCounter);
         this.lock = true;
         screen.transition("help");
      }
      
      public function onPlayAgain(param1:*) : *
      {
         if(this.lock)
         {
            return;
         }
         this.removeEventListener(Event.ENTER_FRAME,this.scoreCounter);
         this.lock = true;
         gameLogic.playAgain();
      }
      
      public function onQuit(param1:*) : *
      {
         if(this.lock)
         {
            return;
         }
         this.removeEventListener(Event.ENTER_FRAME,this.scoreCounter);
         this.lock = true;
         screen.transition("start");
      }
      
      public function scoreCounter(param1:*) : *
      {
         var _loc2_:* = undefined;
         var _loc3_:* = undefined;
         var _loc4_:* = undefined;
         var _loc5_:* = undefined;
         var _loc6_:* = undefined;
         var _loc7_:* = undefined;
         var ts:Number = gameLogic.tickScale;
         if(this.fr > this.delay1 && this.fr <= this.fullCountDur)
         {
            _loc2_ = Math.round(gameLogic.score * ((this.fr - this.delay1) / this.countDur));
            if(_loc2_ > this.tempScore)
            {
               this.tempScore = _loc2_;
               this.scoreMc.scoreTxt.text = this.tempScore;
               SoundManager.playSound(SoundManager.scoreCount);
            }
         }
         if(this.fr > this.fullCountDur + this.delay2 && this.fr <= this.fullLBDur)
         {
            _loc3_ = this.fr - (this.fullCountDur + this.delay2);
            if(_loc3_ <= ts && _loc3_ > 0)
            {
               SoundManager.playSound(SoundManager.leaderboard);
            }
            this.scoreLabel.alpha = tweens.noTween(_loc3_,0,1,this.slideDur);
            this.scoreLabel.y = tweens.inOutTween(_loc3_,this.scoreLabel.stY,this.scoreLabel.endY - this.scoreLabel.stY,this.slideDur);
            this.separator.alpha = tweens.noTween(_loc3_,0,1,this.slideDur);
            this.separator.y = tweens.inOutTween(_loc3_,this.separator.stY,this.separator.endY - this.separator.stY,this.slideDur);
            this.scoreMc.scaleX = tweens.inOutTween(_loc3_,this.scoreMc.stScale,this.scoreMc.endScale - this.scoreMc.stScale,this.slideDur);
            this.scoreMc.scaleY = this.scoreMc.scaleX;
            this.scoreMc.y = tweens.inOutTween(_loc3_,this.scoreMc.stY,this.scoreMc.endY - this.scoreMc.stY,this.slideDur);
            _loc4_ = 0;
            while(_loc4_ < 10)
            {
               _loc5_ = _loc3_ - 10 + _loc4_;
               if(_loc5_ > 0 && _loc5_ <= this.leaderboardDur)
               {
                  this["ord" + _loc4_].alpha = tweens.noTween(_loc5_,0,1,this.leaderboardDur);
                  this["name" + _loc4_].alpha = tweens.noTween(_loc5_,0,1,this.leaderboardDur);
                  this["score" + _loc4_].alpha = tweens.noTween(_loc5_,0,1,this.leaderboardDur);
                  this["ord" + _loc4_].y = tweens.inOutTween(_loc5_,this.textsStY[_loc4_],this.textsEndY[_loc4_] - this.textsStY[_loc4_],this.leaderboardDur);
                  this["name" + _loc4_].y = tweens.inOutTween(_loc5_,this.textsStY[_loc4_],this.textsEndY[_loc4_] - this.textsStY[_loc4_],this.leaderboardDur);
                  this["score" + _loc4_].y = tweens.inOutTween(_loc5_,this.textsStY[_loc4_],this.textsEndY[_loc4_] - this.textsStY[_loc4_],this.leaderboardDur);
               }
               _loc4_++;
            }
         }
         if(this.fr > this.fullLBDur + this.delay3 && this.fr <= this.fullAnimDur)
         {
            _loc6_ = this.fr - (this.fullLBDur + this.delay3);
            if(_loc6_ <= ts && _loc6_ > 0)
            {
               SoundManager.playSound(SoundManager.achievementSlide);
            }
            _loc4_ = 0;
            while(_loc4_ < 12)
            {
               _loc7_ = _loc6_ - Math.floor(_loc4_ / 2) * 2;
               if(_loc7_ > 0 && _loc7_ <= this.medalsDur / 3)
               {
                  this["medal" + _loc4_].x = tweens.backOutTween(_loc7_,this["medal" + _loc4_].stX,this["medal" + _loc4_].endX - this["medal" + _loc4_].stX,this.medalsDur / 3);
                  this["medal" + _loc4_].alpha = tweens.noTween(_loc7_,0,1,this.medalsDur / 3);
               }
               _loc4_++;
            }
         }
         if(this.fr > this.fullAnimDur)
         {
            this.removeEventListener(Event.ENTER_FRAME,this.scoreCounter);
         }
         this.fr += ts;
      }
      
      public function onEquip(param1:*, param2:*, param3:*) : *
      {
         var mc:* = param1;
         var val:* = param2;
         var ind:* = param3;
         if(ind == 0)
         {
            return function(param1:*):*
            {
               var _loc2_:* = gameLogic.getEquipped(ind);
               if(_loc2_ == val)
               {
                  mc["medal" + val].gotoAndStop("unlocked_1p");
                  gameLogic.setEquipped(-1,ind);
               }
               else
               {
                  if(_loc2_ > -1)
                  {
                     mc["medal" + _loc2_].gotoAndStop("unlocked_1p");
                  }
                  gameLogic.setEquipped(val,ind);
                  mc["medal" + val].gotoAndStop("equipped_1p");
               }
               SoundManager.playSound(SoundManager.click);
            };
         }
         return function(param1:*):*
         {
            var _loc2_:* = gameLogic.getEquipped(ind);
            if(_loc2_ == val)
            {
               if(val == gameLogic.getEquipped(3 - ind))
               {
                  mc["medal" + val].gotoAndStop("equipped_2p_" + (3 - ind));
               }
               else
               {
                  mc["medal" + val].gotoAndStop("unlocked_2p");
               }
               gameLogic.setEquipped(-1,ind);
            }
            else
            {
               if(_loc2_ > -1)
               {
                  if(_loc2_ == gameLogic.getEquipped(3 - ind))
                  {
                     mc["medal" + _loc2_].gotoAndStop("equipped_2p_" + (3 - ind));
                  }
                  else
                  {
                     mc["medal" + _loc2_].gotoAndStop("unlocked_2p");
                  }
               }
               gameLogic.setEquipped(val,ind);
               if(val == gameLogic.getEquipped(3 - ind))
               {
                  mc["medal" + val].gotoAndStop("equipped_2p_12");
               }
               else
               {
                  mc["medal" + val].gotoAndStop("equipped_2p_" + ind);
               }
            }
            SoundManager.playSound(SoundManager.click);
         };
      }
      
      internal function frame1() : *
      {
         this.lock = false;
         this.muteBtn.addEventListener(MouseEvent.CLICK,this.onMute);
         this.helpBtn.addEventListener(MouseEvent.CLICK,this.onHelp);
         screen.addButtonToList(this.playAgainBtn,this.onPlayAgain);
         screen.addButtonToList(this.quitBtn,this.onQuit);
         screen.setHotKey(Keyboard.ESCAPE,this.onPlayAgain);
         this.playBtn.visible = false;
         this.addEventListener(Event.ENTER_FRAME,this.scoreCounter);
         this.fr = 0;
         this.tempScore = 0;
         this.unlockAllHats = false;
         this.index = -1;
         this.i = 0;
         this.textsStY = new Array();
         this.textsEndY = new Array();
         this.scoreMc.scoreTxt.text = 0;
         this.scoreMc.endY = this.scoreMc.y;
         this.scoreMc.endScale = this.scoreMc.scaleX;
         this.scoreMc.scaleX = this.scoreMc.scaleY = 2;
         this.scoreMc.stScale = this.scoreMc.scaleX;
         this.scoreMc.y = 0;
         this.scoreMc.stY = this.scoreMc.y;
         this.scoreLabel.endY = this.scoreLabel.y;
         this.scoreLabel.y = this.scoreMc.y - (this.scoreMc.height + this.scoreLabel.height) / 2.25;
         this.scoreLabel.stY = this.scoreLabel.y;
         this.scoreLabel.alpha = 0;
         this.separator.endY = this.separator.y;
         this.separator.y *= -1;
         this.separator.stY = this.separator.y;
         this.separator.alpha = 0;
         if(gameLogic.newHighScore)
         {
            this.scoreLabel.scoreText = "new record";
            this.scoreLabel.blink = true;
         }
         else
         {
            this.scoreLabel.scoreText = "score";
            this.scoreLabel.blink = false;
         }
         this.playerPos = -1;
         while(this.i < 10)
         {
            this["ord" + this.i].alpha = 0;
            this["name" + this.i].alpha = 0;
            this["score" + this.i].alpha = 0;
            this.textsEndY[this.i] = this["ord" + this.i].y;
            this.textsStY[this.i] = this["ord" + this.i].y + 20;
            this.index = this.i;
            if(gameLogic.leaderboard[this.i].score < gameLogic.highScore)
            {
               this.index = this.i + 1;
               if(this.playerPos == -1)
               {
                  this.playerPos = this.i;
               }
            }
            if(this.index == 10)
            {
               break;
            }
            if(gameLogic.leaderboard[this.index].name.length <= 20)
            {
               this["name" + this.index].text = gameLogic.leaderboard[this.i].name;
            }
            else
            {
               this["name" + this.index].text = gameLogic.leaderboard[this.i].name.substr(0,20) + "...";
            }
            this["score" + this.index].text = gameLogic.leaderboard[this.i].score;
            ++this.i;
         }
         if(this.playerPos > -1)
         {
            this["ord" + this.playerPos].textColor = 16737660;
            this["name" + this.playerPos].textColor = 15289187;
            this["name" + this.playerPos].text = "You";
            this["score" + this.playerPos].textColor = 15289187;
            this["score" + this.playerPos].text = gameLogic.highScore;
         }
         this.i = 0;
         while(this.i < gameLogic.mainTimeline.unlockedMedals.length / 2)
         {
            this.ind = this.i + gameLogic.mainTimeline.medalsStart;
            if(gameLogic.mainTimeline.medalsStart == 0)
            {
               if(Boolean(gameLogic.mainTimeline.unlockedMedals[this.ind]) || this.unlockAllHats)
               {
                  if(this.i == gameLogic.getEquipped())
                  {
                     this["medal" + this.i].gotoAndStop("equipped_1p");
                  }
                  else
                  {
                     this["medal" + this.i].gotoAndStop("unlocked_1p");
                  }
                  this["medal" + this.i].btn.addEventListener(MouseEvent.CLICK,this.onEquip(this,this.i,0));
                  this["medal" + this.i].btn.buttonMode = true;
                  this["medal" + this.i].hatMC.gotoAndStop(this.i + 2);
               }
               else
               {
                  this["medal" + this.i].gotoAndStop("locked");
                  this["medal" + this.i].txt.text = gameLogic.mainTimeline.medals[this.ind].name;
               }
               this["medal" + this.i].alpha = 0;
               this["medal" + this.i].endX = this["medal" + this.i].x;
               this["medal" + this.i].x = -63;
               this["medal" + this.i].stX = this["medal" + this.i].x;
               this.j = 0;
               while(this.j < 3)
               {
                  if(gameLogic.mainTimeline.medals[this.ind].type == "scoreX3" && !gameLogic.mainTimeline.unlockedMedals[this.ind])
                  {
                     if(gameLogic.last3Scores[this.j] < gameLogic.mainTimeline.medals[this.ind].value)
                     {
                        break;
                     }
                     this["medal" + this.i]["c" + this.j].gotoAndStop(2);
                  }
                  else
                  {
                     this["medal" + this.i]["c" + this.j].visible = false;
                  }
                  ++this.j;
               }
               ++this.i;
            }
            else
            {
               if(Boolean(gameLogic.mainTimeline.unlockedMedals[this.ind]) || this.unlockAllHats)
               {
                  if(this.i != gameLogic.getEquipped(1) && this.i != gameLogic.getEquipped(2))
                  {
                     this["medal" + this.i].gotoAndStop("unlocked_2p");
                  }
                  else if(this.i == gameLogic.getEquipped(1) && this.i != gameLogic.getEquipped(2))
                  {
                     this["medal" + this.i].gotoAndStop("equipped_2p_1");
                  }
                  else if(this.i != gameLogic.getEquipped(1) && this.i == gameLogic.getEquipped(2))
                  {
                     this["medal" + this.i].gotoAndStop("equipped_2p_2");
                  }
                  else if(this.i == gameLogic.getEquipped(1) && this.i == gameLogic.getEquipped(2))
                  {
                     this["medal" + this.i].gotoAndStop("equipped_2p_12");
                  }
                  this["medal" + this.i].btn_p1.addEventListener(MouseEvent.CLICK,this.onEquip(this,this.i,1));
                  this["medal" + this.i].btn_p2.addEventListener(MouseEvent.CLICK,this.onEquip(this,this.i,2));
                  this["medal" + this.i].btn_p1.buttonMode = true;
                  this["medal" + this.i].btn_p2.buttonMode = true;
                  this["medal" + this.i].hatMC_p1.gotoAndStop(this.i + 2);
                  this["medal" + this.i].hatMC_p2.gotoAndStop(this.i + 2 + 20);
               }
               else
               {
                  this["medal" + this.i].gotoAndStop("locked");
                  this["medal" + this.i].txt.text = gameLogic.mainTimeline.medals[this.ind].name;
               }
               this["medal" + this.i].alpha = 0;
               this["medal" + this.i].endX = this["medal" + this.i].x;
               this["medal" + this.i].x = -63;
               this["medal" + this.i].stX = this["medal" + this.i].x;
               this.j = 0;
               while(this.j < 3)
               {
                  if(gameLogic.mainTimeline.medals[this.ind].type == "scoreX3" && !gameLogic.mainTimeline.unlockedMedals[this.ind])
                  {
                     if(gameLogic.last3Scores[this.j] < gameLogic.mainTimeline.medals[this.ind].value)
                     {
                        break;
                     }
                     this["medal" + this.i]["c" + this.j].gotoAndStop(2);
                  }
                  else
                  {
                     this["medal" + this.i]["c" + this.j].visible = false;
                  }
                  ++this.j;
               }
               ++this.i;
            }
         }
      }
   }
}

