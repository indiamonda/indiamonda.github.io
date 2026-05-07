package
{
   import flash.display.MovieClip;
   import flash.events.Event;
   
   [Embed(source="/_assets/assets.swf", symbol="symbol133")]
   public class magnet extends MovieClip
   {
      
      public var bulb:MovieClip;
      
      public var status:*;
      
      private var fr:*;
      
      private var appearDur:*;
      
      private var disappearDur:*;
      
      private var removeDur:*;
      
      private var maxRotation:*;
      
      private var maxYOffset:*;
      
      private var xSpeed:*;
      
      private var pickedSpeed:*;
      
      private var dir:*;
      
      public var target:*;
      
      private var stopped:*;
      
      public function magnet(param1:*)
      {
         super();
         this.status = "appear";
         this.fr = 0;
         this.dir = param1;
         this.xSpeed = param1 * 7.5;
         this.pickedSpeed = 10;
         this.appearDur = 15;
         this.removeDur = 5;
         this.maxRotation = 10;
         this.maxYOffset = 0.5;
         this.target = null;
         this.stopped = false;
         addEventListener(Event.ENTER_FRAME,this.move);
         scaleX = -Math.abs(param1) / param1;
      }
      
      private function move(param1:Event) : *
      {
         var _loc2_:* = undefined;
         var _loc3_:* = undefined;
         var _loc4_:* = undefined;
         var _loc5_:* = undefined;
         var _loc6_:* = undefined;
         var _loc7_:* = undefined;
         var ts:Number = gameLogic.tickScale;
         if(gameLogic.pause || gameLogic.gameOver)
         {
            this.stop();
            this.bulb.stop();
            this.stopped = true;
            return;
         }
         if(this.stopped)
         {
            this.stopped = false;
            this.play();
            this.bulb.play();
         }
         if(this.status == "appear")
         {
            if(this.fr > this.appearDur)
            {
               this.fr = 0;
               this.status = "idle";
               return;
            }
            this.fr += ts;
         }
         if(this.status == "remove")
         {
            if(this.fr > this.removeDur)
            {
               this.fr = 0;
               this.status = "appear";
               effects.explode(parent,x,y,16777215,10);
               this.destroy();
               return;
            }
            scaleX = tweens.noTween(this.fr,-1 * this.dir,1 * this.dir,this.removeDur);
            scaleY = tweens.noTween(this.fr,1,-1,this.removeDur);
            this.fr += ts;
         }
         if(this.status == "disappear")
         {
            if(this.disappearDur > 0)
            {
               rotation = Math.sin(this.fr / 3) * this.maxRotation;
               alpha = Math.abs(Math.sin(this.disappearDur / 3));
               this.fr += ts;
               this.disappearDur -= ts;
            }
            else
            {
               this.destroy();
            }
         }
         if(this.status == "idle")
         {
            if(this.target == null)
            {
               rotation = Math.sin(this.fr / 5) * this.maxRotation;
               y += Math.sin(this.fr / 10) * this.maxYOffset * ts;
               x += this.xSpeed * ts;
            }
            else
            {
               _loc2_ = new fireflyTrace();
               _loc2_.x = x;
               _loc2_.y = y;
               this.parent.addChild(_loc2_);
               _loc3_ = Math.abs(this.target.x - x) + Math.abs(this.target.y - y);
               _loc4_ = mathUtil.distance(this.target.x,this.target.y,x,y);
               _loc5_ = 5 - Math.min(_loc4_,1000) / 250;
               _loc6_ = this.pickedSpeed * _loc5_ * (this.target.x - x) / _loc3_;
               _loc7_ = this.pickedSpeed * _loc5_ * (this.target.y - y) / _loc3_;
               x += _loc6_ * ts;
               y += _loc7_ * ts;
               scaleX = -Math.abs(_loc6_) / _loc6_;
               if(_loc4_ < 30)
               {
                  this.target.alive = false;
                  this.status = "remove";
               }
            }
            this.fr += ts;
            if(x < -200 || x > 1267)
            {
               this.destroy();
            }
         }
      }
      
      public function pick(param1:*) : *
      {
         this.fr = 0;
         this.target = param1;
         effects.explode(parent,x,y,16777215,10);
      }
      
      public function disappear() : *
      {
         this.status = "disappear";
         this.disappearDur = 90;
      }
      
      public function destroy() : *
      {
         this.status = null;
         removeEventListener(Event.ENTER_FRAME,this.move);
         parent.removeChild(this);
      }
   }
}

