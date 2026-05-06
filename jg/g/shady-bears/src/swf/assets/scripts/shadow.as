package
{
   import fl.motion.Color;
   import flash.display.MovieClip;
   import flash.events.Event;
   
   [Embed(source="/_assets/assets.swf", symbol="symbol400")]
   public class shadow extends MovieClip
   {
      
      public var mc:MovieClip;
      
      private var leader:*;
      
      public var delay:*;
      
      private var frames:*;
      
      private var frCount:*;
      
      private var halfHeight:*;
      
      public var alive:*;
      
      private var col:*;
      
      private var hatMC:*;
      
      public function shadow(param1:*, param2:*)
      {
         addFrameScript(0,this.frame1,3,this.frame4);
         super();
         this.leader = param1;
         this.delay = param2;
         this.frCount = 0;
         this.col = null;
         this.alive = true;
         this.halfHeight = height / 2;
         this.frames = new Array();
         var _loc3_:* = 0;
         while(_loc3_ < this.delay)
         {
            this.frames[_loc3_] = new Object();
            _loc3_++;
         }
         alpha = 0;
         addEventListener(Event.ENTER_FRAME,this.move);
         this.hatMC = new hat();
         this.hatMC.gotoAndStop(this.leader.hatMC.currentFrame);
         if(this.hatMC.mc)
         {
            this.hatMC.mc.gotoAndStop(this.leader.hatMC.mc.currentFrame);
            this.hatMC.mc.cacheAsBitmap = true;
         }
         this.hatMC.x = this.leader.hatMC.x;
         this.hatMC.y = this.leader.hatMC.y;
         var _loc4_:* = new Color();
         _loc4_.setTint(2561053,1);
         this.hatMC.transform.colorTransform = _loc4_;
         this.addChild(this.hatMC);
      }
      
      public function move(param1:Event) : *
      {
         var ts:Number = gameLogic.tickScale;
         if(gameLogic.pause || gameLogic.gameOver)
         {
            return;
         }
         if(this.frames[this.frCount].x != undefined)
         {
            x = this.frames[this.frCount].x;
            y = this.frames[this.frCount].y;
            this.hatMC.x = this.frames[this.frCount].hatX;
            this.hatMC.y = this.frames[this.frCount].hatY;
            scaleX = this.frames[this.frCount].scaleX;
            gotoAndStop(this.frames[this.frCount].currentFrame);
            this.mc.gotoAndStop(this.frames[this.frCount].mcCurrentFrame);
            if(Math.random() < 0.1 && alpha >= 1)
            {
               effects.addTrace(this.parent,x + Math.random() * 10 - 5,y + this.halfHeight + Math.random() * 10 - 5,new shadowTrace(),Math.random() * 360);
            }
            if(alpha < 1 && this.alive)
            {
               alpha += 0.02 * ts;
            }
            if(alpha > 0 && !this.alive)
            {
               if(this.col == null)
               {
                  this.col = new Color();
                  this.col.setTint(16777215,1);
                  this.transform.colorTransform = this.col;
               }
               alpha -= 0.02 * ts;
               scaleX *= 1 + 0.01 * ts;
               scaleY *= 1 + 0.01 * ts;
               if(alpha <= 0.02 * ts)
               {
                  this.destroy();
               }
               return;
            }
         }
         else
         {
            alpha = 0;
         }
         this.frames[this.frCount].x = this.leader.x;
         this.frames[this.frCount].y = this.leader.y;
         this.frames[this.frCount].scaleX = this.leader.scaleX;
         this.frames[this.frCount].currentFrame = this.leader.currentFrame;
         this.frames[this.frCount].mcCurrentFrame = this.leader.mc.currentFrame;
         this.frames[this.frCount].hatX = this.leader.hatMC.x;
         this.frames[this.frCount].hatY = this.leader.hatMC.y;
         this.frCount = (this.frCount + 1) % this.delay;
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

