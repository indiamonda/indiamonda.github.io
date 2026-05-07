package
{
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.text.TextField;
   
   [Embed(source="/_assets/assets.swf", symbol="symbol120")]
   public class honey extends MovieClip
   {
      
      public var timer:MovieClip;
      
      public var txt:TextField;
      
      public var status:*;
      
      private var fr:*;
      
      private var appearDur:*;
      
      private var disappearDur:*;
      
      private var timerDur:*;
      
      private var removeDur:*;
      
      private var maxRotation:*;
      
      public function honey()
      {
         var _loc1_:* = undefined;
         super();
         this.status = "appear";
         this.fr = 0;
         this.appearDur = 15;
         this.removeDur = 5;
         this.maxRotation = 10;
         this.disappearDur = 60;
         this.timerDur = 240;
         this.timer.gotoAndStop(this.timer.totalFrames);
         addEventListener(Event.ENTER_FRAME,this.move);
         scaleX = scaleY = 0;
      }
      
      private function move(param1:Event) : *
      {
         var ts:Number = gameLogic.tickScale;
         if(gameLogic.pause || gameLogic.gameOver)
         {
            return;
         }
         if(this.status == "appear")
         {
            if(this.fr > this.appearDur)
            {
               this.fr = 0;
               this.status = "idle";
               return;
            }
            scaleX = scaleY = tweens.elasticTween(this.fr,0,1,this.appearDur);
            this.fr += ts;
         }
         if(this.status == "remove")
         {
            if(this.fr > this.removeDur)
            {
               this.fr = 0;
               this.status = "appear";
               effects.explode(parent,x - 30,y,15173898,10);
               effects.explode(parent,x,y,15173898,10);
               effects.explode(parent,x + 30,y,15173898,10);
               this.destroy();
               return;
            }
            scaleX = scaleY = tweens.noTween(this.fr,1,-1,this.removeDur);
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
            rotation = Math.sin(this.fr / 3) * this.maxRotation;
            this.fr += ts;
            this.timer.gotoAndStop(Math.round((this.timerDur - this.fr) * 100 / this.timerDur));
            if(this.fr >= this.timerDur)
            {
               this.disappear();
            }
         }
      }
      
      public function pick() : *
      {
         this.fr = 0;
         this.status = "remove";
         SoundManager.playSound(SoundManager.honey);
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

