package
{
   import fl.motion.Color;
   import flash.display.MovieClip;
   import flash.events.Event;
   
   [Embed(source="/_assets/assets.swf", symbol="symbol49")]
   public class bees extends MovieClip
   {
      
      public var maskMc:MovieClip;
      
      public var mc:MovieClip;
      
      private var leader:*;
      
      private var speed:*;
      
      private var xSpeed:*;
      
      private var ySpeed:*;
      
      public var hitDistance:*;
      
      private const LOOP_START:* = 38;
      
      private const LOOP_END:* = 38;
      
      private var stoped:*;
      
      private var aimless:*;
      
      private var lvlScale:*;
      
      public function bees(param1:* = null, param2:* = false, param3:* = 1)
      {
         var _loc5_:Color = null;
         addFrameScript(54,this.frame55);
         super();
         this.leader = param1;
         this.stoped = false;
         this.aimless = false;
         this.lvlScale = param3;
         var _loc4_:* = 1;
         if(param2)
         {
            _loc4_ = 2;
         }
         if(this.leader)
         {
            this.speed = 7;
            this.scaleX = 0.95 * _loc4_;
            this.scaleY = 0.95 * _loc4_;
         }
         else
         {
            this.speed = 7.5;
            _loc5_ = new Color();
            _loc5_.setTint(0,1);
            this.transform.colorTransform = _loc5_;
            this.scaleX = 1 * _loc4_;
            this.scaleY = 1 * _loc4_;
         }
         this.hitDistance = width / 2;
         addEventListener(Event.ENTER_FRAME,this.move);
      }
      
      private function move(param1:Event) : *
      {
         var ts:Number = gameLogic.tickScale;
         if(gameLogic.pause)
         {
            this.stop();
            this.mc.stop();
            try
            {
               this.maskMc.stop();
            }
            catch(e:Error)
            {
            }
            this.stoped = true;
            return;
         }
         if(this.stoped)
         {
            this.gotoAndPlay(this.currentFrame - 1);
            try
            {
               this.maskMc.play();
            }
            catch(e:Error)
            {
            }
            this.mc.play();
            this.stoped = false;
         }
         if(currentFrame < this.LOOP_START)
         {
            return;
         }
         if(currentFrame == totalFrames)
         {
            this.destroy();
            return;
         }
         if(!this.leader)
         {
            this.aimless = true;
            this.leader = new Object();
            this.leader.angle = Math.random() * 2 * Math.PI;
            this.leader.speed = Math.random() * 0.01 + 0.015;
            if(Math.random() < 0.5)
            {
               this.leader.speed *= -1;
            }
            this.leader.xMult = Math.random() + 1;
            this.leader.yMult = 1;
         }
         if(this.aimless)
         {
            this.leader.x = stage.stageWidth * (0.5 + 0.5 * Math.sin(this.leader.angle * this.leader.xMult));
            this.leader.y = stage.stageHeight * this.lvlScale * (0.5 + 0.5 * Math.cos(this.leader.angle * this.leader.yMult));
            this.leader.angle += this.leader.speed * ts;
         }
         var _loc2_:* = Math.abs(this.leader.x - x) + Math.abs(this.leader.y - y);
         this.xSpeed = this.speed * (this.leader.x - x) / _loc2_;
         this.ySpeed = this.speed * (this.leader.y - y) / _loc2_;
         x += this.xSpeed * ts;
         y += this.ySpeed * ts;
         var _loc3_:* = mathUtil.angle(this.xSpeed,this.ySpeed);
         if(_loc3_ - rotation > 180)
         {
            _loc3_ -= 360;
         }
         else if(_loc3_ - rotation < -180)
         {
            _loc3_ += 360;
         }
         rotation += (_loc3_ - rotation) * 0.1 * ts;
      }
      
      public function disappear() : *
      {
         gotoAndPlay("disappear");
         SoundManager.zzzChannel.stop();
      }
      
      public function destroy() : *
      {
         removeEventListener(Event.ENTER_FRAME,this.move);
         parent.removeChild(this);
      }
      
      internal function frame55() : *
      {
         gotoAndPlay("loop");
      }
   }
}

