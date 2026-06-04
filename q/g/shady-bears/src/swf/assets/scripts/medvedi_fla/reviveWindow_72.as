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
   
   [Embed(source="/_assets/assets.swf", symbol="symbol371")]
   public dynamic class reviveWindow_72 extends MovieClip
   {
      
      public var heartMC:MovieClip;
      
      public var noReviveBtn:SimpleButton;
      
      public var reviveBtn:SimpleButton;
      
      public var revives0:MovieClip;
      
      public var revives1:MovieClip;
      
      public var revives2:MovieClip;
      
      public var i:*;
      
      public function reviveWindow_72()
      {
         super();
         addFrameScript(0,this.frame1);
      }
      
      public function onRevive(param1:*) : *
      {
         if(this.lock)
         {
            return;
         }
         this.heartMC.stop();
         this.lock = true;
         gameLogic.revive();
         var _loc2_:* = 0;
         while(_loc2_ < 3)
         {
            if(_loc2_ <= gameLogic.revived + 1)
            {
               this["revives" + _loc2_].gotoAndStop(2);
            }
            _loc2_++;
         }
      }
      
      public function onNoRevive(param1:*) : *
      {
         if(this.lock)
         {
            return;
         }
         this.heartMC.stop();
         this.lock = true;
         gameLogic.instance.updateLast3Scores();
         screen.transition("end");
      }
      
      internal function frame1() : *
      {
         this.lock = false;
         this.i = 0;
         while(this.i < 3)
         {
            if(this.i <= gameLogic.revived)
            {
               this["revives" + this.i].gotoAndStop(2);
            }
            ++this.i;
         }
         screen.addButtonToList(this.reviveBtn,this.onRevive);
         screen.addButtonToList(this.noReviveBtn,this.onNoRevive);
      }
   }
}

