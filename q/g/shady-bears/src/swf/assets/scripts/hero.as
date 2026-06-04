package
{
   import flash.display.MovieClip;
   import flash.events.Event;
   
   [Embed(source="/_assets/assets.swf", symbol="symbol107")]
   public class hero extends MovieClip
   {
      
      private static const colors:Object = {
         "P1":10634575,
         "P2":11759360
      };
      
      public var mc:MovieClip;
      
      private var platform:*;
      
      private var xSpeed:*;
      
      private var ySpeed:*;
      
      private var maxYSpeed:*;
      
      public var dir:*;
      
      private var jumpHeight:*;
      
      private var ga:*;
      
      public var halfHeight:*;
      
      public var halfWidth:*;
      
      public var halfDia:*;
      
      private var status:*;
      
      private var jumping:*;
      
      public var magnetRange:*;
      
      private var stopped:*;
      
      private var inAir:*;
      
      private var coyoteTime:*;
      
      private var jumpBuffer:*;
      
      private var prevJump:*;
      
      public var reviving:*;
      
      private var reviveDur:*;
      
      private var idleCounter:*;
      
      public var controlsCloud:*;
      
      private var player:*;
      
      public var color:*;
      
      public var hatMC:*;
      
      public function hero(param1:ground, param2:*, param3:*, param4:*, param5:*)
      {
         addFrameScript(0,this.frame1,3,this.frame4);
         super();
         this.platform = param1;
         this.player = param3;
         this.xSpeed = 13;
         this.ySpeed = 0;
         this.maxYSpeed = 45 * param2;
         this.dir = 0;
         this.jumpHeight = 23 * param2;
         this.ga = 2.5 * param2;
         this.reviveDur = 30 * 10;
         this.reviving = 0;
         this.halfHeight = height / 2;
         this.halfWidth = width / 2;
         this.halfDia = this.halfHeight * Math.SQRT2;
         this.jumping = false;
         this.status = "idle";
         this.gotoAndStop("idle" + param3);
         this.idleCounter = 0;
         this.magnetRange = 0;
         this.stopped = 0;
         this.inAir = 0;
         this.coyoteTime = 3;
         this.jumpBuffer = 3;
         this.prevJump = this.jumpBuffer + 1;
         this.color = colors[param3];
         this.hatMC = new hat();
         this.hatMC.x = this.mc.top.x;
         this.hatMC.y = this.mc.top.y;
         this.hatMC.gotoAndStop(param5 + 2);
         if(this.hatMC.mc)
         {
            this.hatMC.mc.gotoAndStop(param3);
            this.hatMC.mc.cacheAsBitmap = true;
         }
         this.addChild(this.hatMC);
         addEventListener(Event.ENTER_FRAME,this.move);
         if(param2 == 1)
         {
            this.controlsCloud = new controlsCloudMC();
            if(param4)
            {
               this.controlsCloud.gotoAndStop("solo");
            }
            else
            {
               this.controlsCloud.gotoAndStop(param3);
            }
            this.controlsCloud.y = -height * 0.5;
            this.controlsCloud.endY = -height * 0.75;
            this.controlsCloud.stY = this.controlsCloud.y;
            this.controlsCloud.scaleY = 0;
            this.controlsCloud.alpha = 0;
            this.addChild(this.controlsCloud);
         }
      }
      
      private function move(param1:Event) : *
      {
         var _loc2_:* = undefined;
         var ts:Number = gameLogic.tickScale;
         if(gameLogic.pause)
         {
            this.stop();
            this.mc.stop();
            this.stopped = true;
            return;
         }
         if(gameLogic.gameOver)
         {
            this.dir = 0;
            if(this.ySpeed < 0)
            {
               this.ySpeed = 0;
            }
            this.stop();
            this.mc.stop();
            this.stopped = true;
            return;
         }
         if(this.stopped)
         {
            this.mc.play();
            this.stopped = false;
         }
         if(this.dir != 0 && this.status != "run" && this.ySpeed == 0)
         {
            gotoAndStop("run" + this.player);
            this.status = "run";
         }
         if(this.status != "fall" && this.ySpeed > 0 && this.status != "jump")
         {
            gotoAndStop("jump" + this.player);
            this.status = "fall";
         }
         if(this.dir == 0 && this.status != "idle" && this.ySpeed == 0)
         {
            gotoAndStop("idle" + this.player);
            this.status = "idle";
         }
         if(this.reviving > 0)
         {
            this.reviving -= ts;
            this.mc.alpha = 1 - Math.abs(Math.cos(this.reviving / 3)) * 0.5;
         }
         else
         {
            this.mc.alpha = 1;
         }
         if(this.controlsCloud)
         {
            if(this.status == "idle")
            {
               this.idleCounter += ts;
               if(this.idleCounter > 30 * 3)
               {
                  this.controlsCloud.alpha += (1 - this.controlsCloud.alpha) * 0.5 * ts;
                  this.controlsCloud.y += (this.controlsCloud.endY - this.controlsCloud.y) * 0.5 * ts;
                  this.controlsCloud.scaleY += (1 - this.controlsCloud.scaleY) * 0.5 * ts;
                  if(this.controlsCloud.mc)
                  {
                     this.controlsCloud.mc.play();
                  }
               }
               else if(this.controlsCloud.alpha > 0.01)
               {
                  this.controlsCloud.alpha -= 0.2 * ts;
               }
               else
               {
                  this.controlsCloud.y = this.controlsCloud.stY;
                  this.controlsCloud.scaleY = 0;
                  if(this.controlsCloud.mc)
                  {
                     this.controlsCloud.mc.gotoAndStop(1);
                  }
               }
            }
            else
            {
               this.idleCounter = 0;
               if(this.controlsCloud.alpha > 0.01)
               {
                  this.controlsCloud.alpha -= 0.2 * ts;
               }
            }
         }
         if(this.dir != 0)
         {
            scaleX = -this.dir;
            if(this.controlsCloud)
            {
               this.controlsCloud.scaleX = -this.dir;
            }
         }
         if(!this.platform.map.hitTestPoint(x + (this.halfWidth + this.xSpeed * ts) * this.dir,y + this.halfHeight - 3,true) && !this.platform.map.hitTestPoint(x + (this.halfWidth + this.xSpeed * ts) * this.dir,y - this.halfHeight + 3,true))
         {
            x += this.xSpeed * this.dir * ts;
            if(x < -this.halfWidth)
            {
               x = 1067 + this.halfWidth;
               ++gameLogic.numOfWraps;
            }
            if(x > 1067 + this.halfWidth)
            {
               x = -this.halfWidth;
               ++gameLogic.numOfWraps;
            }
         }
         else
         {
            while(!this.platform.map.hitTestPoint(x + this.halfWidth * this.dir,y + this.halfHeight - 1,true) && !this.platform.map.hitTestPoint(x + this.halfWidth * this.dir,y - this.halfHeight + 1,true))
            {
               x += 0.5 * this.dir;
            }
         }
         if(this.ySpeed < 0)
         {
            if(!this.platform.map.hitTestPoint(x + this.halfWidth - 1,y - this.halfHeight + this.ySpeed * ts,true) && !this.platform.map.hitTestPoint(x - this.halfWidth + 1,y - this.halfHeight + this.ySpeed * ts,true))
            {
               y += this.ySpeed * ts;
               this.ySpeed += this.ga * ts;
               this.ySpeed = Math.min(this.ySpeed,this.maxYSpeed);
               this.inAir += ts;
               this.prevJump += ts;
            }
            else
            {
               while(!this.platform.map.hitTestPoint(x + this.halfWidth - 1,y - this.halfHeight,true) && !this.platform.map.hitTestPoint(x - this.halfWidth + 1,y - this.halfHeight,true))
               {
                  y -= 0.5;
               }
               this.ySpeed = Math.abs(this.ySpeed) / 2;
               this.inAir = 0;
            }
         }
         else if(!this.platform.map.hitTestPoint(x + this.halfWidth - 1,y + this.halfHeight + this.ySpeed * ts,true) && !this.platform.map.hitTestPoint(x - this.halfWidth + 1,y + this.halfHeight + this.ySpeed * ts,true))
         {
            y += this.ySpeed * ts;
            this.ySpeed += this.ga * ts;
            this.ySpeed = Math.min(this.ySpeed,this.maxYSpeed);
            this.inAir += ts;
            this.prevJump += ts;
         }
         else
         {
            while(!this.platform.map.hitTestPoint(x + this.halfWidth - 1,y + this.halfHeight,true) && !this.platform.map.hitTestPoint(x - this.halfWidth + 1,y + this.halfHeight,true))
            {
               y += 0.5;
            }
            if(this.ySpeed > 0)
            {
               effects.shakeScreen(parent,this.ySpeed / 15,this.ySpeed / 15);
               _loc2_ = 0;
               while(_loc2_ < this.ySpeed / 10)
               {
                  effects.addTrace(this.parent,x + Math.random() * 30 - 15,y + 30 + Math.random() * 10,new platformTrace(),0);
                  _loc2_++;
               }
               SoundManager.playSound(SoundManager.fall);
            }
            this.ySpeed = 0;
            this.jumping = false;
            this.inAir = 0;
            if(this.prevJump <= this.jumpBuffer)
            {
               this.jump();
            }
         }
         if(this.ySpeed == 0 && this.dir != 0)
         {
            if(Math.random() < 0.5)
            {
               effects.addTrace(this.parent,x + Math.random() * 10 - 5,y + this.halfHeight + Math.random() * 10 - 5,new heroTrace(),Math.random() * 360);
            }
         }
         if(this.magnetRange > 0)
         {
            effects.implosion(parent,this,Math.ceil(this.magnetRange / 30),this.magnetRange);
         }
         this.hatMC.x = this.mc.top.x;
         this.hatMC.y = this.mc.top.y;
         if(this.ySpeed > 0 && !this.hatMC.tight[this.player])
         {
            this.hatMC.y -= this.ySpeed * ts;
         }
         this.setChildIndex(this.hatMC,this.numChildren - 1);
      }
      
      public function jump() : *
      {
         if(!this.jumping && this.inAir <= this.coyoteTime)
         {
            this.ySpeed = -this.jumpHeight;
            this.jumping = true;
            this.prevJump = this.jumpBuffer + 1;
            this.status = "jump";
            SoundManager.playSound(SoundManager.jump);
            gotoAndStop("jump" + this.player);
         }
         else
         {
            this.prevJump = 0;
         }
      }
      
      public function revive() : *
      {
         this.reviving = this.reviveDur;
      }
      
      public function destroy() : *
      {
         removeEventListener(Event.ENTER_FRAME,this.move);
         parent.removeChild(this);
      }
      
      internal function frame1() : *
      {
         stop();
      }
      
      internal function frame4() : *
      {
         stop();
      }
   }
}

