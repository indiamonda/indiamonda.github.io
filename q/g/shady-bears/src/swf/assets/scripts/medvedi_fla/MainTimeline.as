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
   
   public dynamic class MainTimeline extends MovieClip
   {
      
      public var multiplierTxt:TextField;
      
      public var pauseBtn:SimpleButton;
      
      public var startTime:Number;
      
      public var numOfFrames:Number;
      
      public var fps:TextField;
      
      public var params:*;
      
      public var scoreTxt:TextField;
      
      public var i:*;
      
      public var sharedUnlockedMedals:SharedObject;
      
      public var gLogic:*;
      
      public function MainTimeline()
      {
         addFrameScript(0,this.frame1,1,this.frame2,2,this.frame3);
         super();
      }
      
      public function fpsCounter() : void
      {
         this.fps = new TextField();
         this.startTime = getTimer();
         addChild(this.fps);
         addEventListener(Event.ENTER_FRAME,this.checkFPS);
      }
      
      public function checkFPS(param1:Event) : void
      {
         var _loc2_:Number = (getTimer() - this.startTime) / 1000;
         ++this.numOfFrames;
         if(_loc2_ >= 1)
         {
            this.fps.text = "" + Math.round(this.numOfFrames / _loc2_);
            this.startTime = getTimer();
            this.numOfFrames = 0;
         }
      }
      
      public function testSiteLock() : Boolean
      {
         return true;
      }
      
      internal function frame1() : *
      {
         this.numOfFrames = 0;
         stage.addEventListener(MouseEvent.RIGHT_CLICK,function(param1:*):void
         {
            param1.preventDefault();
         });
         stage.addEventListener(KeyboardEvent.KEY_DOWN,function(param1:*):void
         {
            param1.preventDefault();
         });
         this.isTouchDevice = false;
         this.params = LoaderInfo(this.root.loaderInfo).parameters;
         if(this.params)
         {
            this.isTouchDevice = this.params.isTouchDevice == "true";
            if(this.params.tickScale)
            {
               var ts:Number = parseFloat(this.params.tickScale);
               if(ts > 0 && ts <= 1)
               {
                  gameLogic.tickScale = ts;
               }
            }
         }
         this.unlockMedal = function(param1:*):*
         {
            this.unlockedMedals[param1] = true;
            this.updateUnlockedMedals();
            SoundManager.playSound(SoundManager.medal);
            var _loc2_:* = new medalMsg();
            effects.addMsg(this,this.medals[param1].name,stage.stageWidth - 5,5,60,_loc2_);
            _loc2_.hatMC.gotoAndStop(param1 % (this.medals.length / 2) + 2);
            ExternalInterface.call("analyticsExternalCall","Achievement: " + this.medals[param1].name);
         };
         this.setMedals = function(param1:*):*
         {
            this.medalsStart = (param1 - 1) * this.medals.length / 2;
         };
         this.medals = new Array({
            "name":"Get on the leaderboard",
            "type":"score",
            "value":14
         },{
            "name":"Beat Sonya’s score on the leaderboard",
            "type":"score",
            "value":988
         },{
            "name":"Catch a firefly",
            "type":"firefly",
            "value":1
         },{
            "name":"Catch 10 fireflies in one game",
            "type":"firefly",
            "value":10
         },{
            "name":"Collect a honey jar",
            "type":"honey",
            "value":1
         },{
            "name":"Collect 10 honey jars in one game",
            "type":"honey",
            "value":10
         },{
            "name":"Accumulate 5 shadows in one game",
            "type":"shadow",
            "value":5
         },{
            "name":"Accumulate 10 shadows in one game",
            "type":"shadow",
            "value":10
         },{
            "name":"Get 30 points without wraping around",
            "type":"nowrap",
            "value":30
         },{
            "name":"Get 100 points without wraping around",
            "type":"nowrap",
            "value":100
         },{
            "name":"Get 30 points 3 times in a row",
            "type":"scoreX3",
            "value":30
         },{
            "name":"Get 100 points 3 times in a row",
            "type":"scoreX3",
            "value":100
         },{
            "name":"Get on the leaderboard",
            "type":"score",
            "value":9
         },{
            "name":"Get on the top of the leaderboard",
            "type":"score",
            "value":611
         },{
            "name":"Catch a firefly",
            "type":"firefly",
            "value":1
         },{
            "name":"Catch 5 fireflies in one game",
            "type":"firefly",
            "value":5
         },{
            "name":"Collect a honey jar",
            "type":"honey",
            "value":1
         },{
            "name":"Collect 5 honey jars in one game",
            "type":"honey",
            "value":5
         },{
            "name":"Accumulate 5 shadows in one game",
            "type":"shadow",
            "value":5
         },{
            "name":"Accumulate 10 shadows in one game",
            "type":"shadow",
            "value":10
         },{
            "name":"Get 20 points without wraping around",
            "type":"nowrap",
            "value":20
         },{
            "name":"Get 60 points without wraping around",
            "type":"nowrap",
            "value":60
         },{
            "name":"Get 20 points 3 times in a row",
            "type":"scoreX3",
            "value":20
         },{
            "name":"Get 60 points 3 times in a row",
            "type":"scoreX3",
            "value":60
         });
         this.unlockedMedals = new Array();
         this.i = 0;
         while(this.i < this.medals.length)
         {
            this.unlockedMedals[this.i] = false;
            ++this.i;
         }
         this.updateUnlockedMedals = function():*
         {
            this.sharedUnlockedMedals = SharedObject.getLocal("medmed","/");
            if(this.sharedUnlockedMedals.data.medmed == undefined || this.sharedUnlockedMedals.data.medmed.length != this.unlockedMedals.length)
            {
               this.sharedUnlockedMedals.data.medmed = this.unlockedMedals;
            }
            else
            {
               this.unlockedMedals = this.sharedUnlockedMedals.data.medmed;
            }
            this.sharedUnlockedMedals.flush();
         };
         this.updateUnlockedMedals();
         this.checkMedals = function():*
         {
            var _loc6_:* = undefined;
            var _loc1_:* = undefined;
            var _loc2_:* = undefined;
            var _loc3_:* = undefined;
            var _loc4_:* = this.medals.length / 2;
            var _loc5_:* = 0;
            while(_loc5_ < _loc4_)
            {
               _loc6_ = _loc5_ + this.medalsStart;
               _loc1_ = this.medals[_loc6_];
               if(!this.unlockedMedals[_loc6_])
               {
                  if(_loc1_.type == "score")
                  {
                     if(gameLogic.score >= _loc1_.value)
                     {
                        this.unlockMedal(_loc6_);
                     }
                  }
                  else if(_loc1_.type == "honey")
                  {
                     if(gameLogic.numOfJars >= _loc1_.value)
                     {
                        this.unlockMedal(_loc6_);
                     }
                  }
                  else if(_loc1_.type == "nowrap")
                  {
                     if(gameLogic.score >= _loc1_.value && gameLogic.numOfWraps == 0)
                     {
                        this.unlockMedal(_loc6_);
                     }
                  }
                  else if(_loc1_.type == "firefly")
                  {
                     if(gameLogic.numOfFireflies >= _loc1_.value)
                     {
                        this.unlockMedal(_loc6_);
                     }
                  }
                  else if(_loc1_.type == "shadow")
                  {
                     if(gameLogic.numOfShadows >= _loc1_.value)
                     {
                        this.unlockMedal(_loc6_);
                     }
                  }
                  else if(_loc1_.type == "scoreX3")
                  {
                     _loc2_ = true;
                     _loc3_ = 0;
                     while(_loc3_ < gameLogic.last3Scores.length - 1)
                     {
                        if(gameLogic.last3Scores[_loc3_] < _loc1_.value)
                        {
                           _loc2_ = false;
                        }
                        _loc3_++;
                     }
                     if(_loc2_ && gameLogic.score >= _loc1_.value)
                     {
                        this.unlockMedal(_loc6_);
                     }
                  }
               }
               _loc5_++;
            }
         };
      }
      
      internal function frame2() : *
      {
         stop();
         this.gLogic = new gameLogic(stage,root);
         stage.focus = null;
         external.addCallbacks(this.gLogic);
         this.pauseBtn.addEventListener(MouseEvent.CLICK,gameLogic.pauseUnpause);
         if(this.isTouchDevice)
         {
            this.pauseBtn.visible = false;
         }
      }
      
      internal function frame3() : *
      {
         this.gotoAndStop("start");
      }
   }
}

