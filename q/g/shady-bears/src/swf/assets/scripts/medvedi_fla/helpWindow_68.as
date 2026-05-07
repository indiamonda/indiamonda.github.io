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
   
   [Embed(source="/_assets/assets.swf", symbol="symbol349")]
   public dynamic class helpWindow_68 extends MovieClip
   {
      
      public var backBtn:SimpleButton;
      
      public var honey:honeycopy;
      
      public function helpWindow_68()
      {
         super();
         addFrameScript(0,this.frame1);
      }
      
      public function onBack(param1:*) : *
      {
         if(this.lock)
         {
            return;
         }
         this.lock = true;
         screen.goBack();
      }
      
      internal function frame1() : *
      {
         this.lock = false;
         this.honey.timer.gotoAndStop(60);
         screen.addButtonToList(this.backBtn,this.onBack);
      }
   }
}

