package
{
   import flash.display.MovieClip;
   import flash.events.Event;
   
   [Embed(source="/_assets/assets.swf", symbol="symbol24")]
   public class acorn extends MovieClip
   {
      
      public var oldX:*;
      
      public var oldY:*;
      
      public var positions:*;
      
      private var posIndex:*;
      
      public var status:*;
      
      private var fr:*;
      
      private var appearDur:*;
      
      private var removeDur:*;
      
      private var maxRotation:*;
      
      public var newFrame:*;
      
      public var heroIndex:*;
      
      public function acorn()
      {
         addFrameScript(0,this.frame1,2,this.frame3);
         super();
         this.status = "appear";
         this.newFrame = 1;
         this.fr = 0;
         this.appearDur = 15;
         this.removeDur = 5;
         this.maxRotation = 10;
         this.positions = new Array();
         this.posIndex = 0;
         this.heroIndex = 0;
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
            this.gotoAndStop(this.newFrame);
            this.fr += ts;
         }
         if(this.status == "remove")
         {
            if(this.fr > this.removeDur)
            {
               this.fr = 0;
               this.status = "appear";
               effects.explode(parent,x,y,16777215,10);
               this.relocate();
               rotation = 0;
               return;
            }
            scaleX = scaleY = tweens.noTween(this.fr,1,-1,this.removeDur);
            this.fr += ts;
         }
         if(this.status == "idle")
         {
            rotation = Math.sin(this.fr / 3) * this.maxRotation;
            this.fr += ts;
         }
      }
      
      public function pick(param1:*, param2:*) : *
      {
         this.fr = 0;
         this.heroIndex = param2;
         this.newFrame = param1 + param2 * 2;
         this.status = "remove";
         SoundManager.playSound(SoundManager.acorn);
      }
      
      public function relocate() : *
      {
         var _loc1_:* = undefined;
         if(this.posIndex == 0)
         {
            _loc1_ = this.positions[this.positions.length - 1];
            do
            {
               mathUtil.shuffleArray(this.positions);
            }
            while(_loc1_ == this.positions[0]);
            
         }
         x = this.positions[this.posIndex].x;
         y = this.positions[this.posIndex].y;
         this.posIndex = (this.posIndex + 1) % this.positions.length;
         this.gotoAndStop(this.newFrame);
      }
      
      public function destroy() : *
      {
         removeEventListener(Event.ENTER_FRAME,this.move);
         parent.removeChild(this);
      }
      
      internal function frame1() : *
      {
      }
      
      internal function frame3() : *
      {
      }
   }
}

