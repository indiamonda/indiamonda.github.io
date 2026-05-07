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
   
   [Embed(source="/_assets/assets.swf", symbol="symbol229")]
   public dynamic class startWindow_41 extends MovieClip
   {
      
      public var helpBtn:SimpleButton;
      
      public var muteBtn:MovieClip;
      
      public var p1Btn:SimpleButton;
      
      public var p2CoopBtn:SimpleButton;
      
      public var playBtn:SimpleButton;
      
      public var separator:MovieClip;
      
      public function startWindow_41()
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
         this.lock = true;
         screen.transition("help");
      }
      
      public function onP1(param1:*) : *
      {
         if(this.lock)
         {
            return;
         }
         this.lock = true;
         gameLogic.startGame(gameLogic.MODES.P1);
      }
      
      public function onP2Coop(param1:*) : *
      {
         if(this.lock)
         {
            return;
         }
         this.lock = true;
         gameLogic.startGame(gameLogic.MODES.P2_COOP);
      }
      
      public function onP2Vs(param1:*) : *
      {
         if(this.lock)
         {
            return;
         }
         this.lock = true;
         gameLogic.startGame(gameLogic.MODES.P2_VS);
      }
      
      internal function frame1() : *
      {
         this.lock = false;
         this.muteBtn.addEventListener(MouseEvent.CLICK,this.onMute);
         this.helpBtn.addEventListener(MouseEvent.CLICK,this.onHelp);
         screen.addButtonToList(this.p1Btn,this.onP1);
         screen.addButtonToList(this.p2CoopBtn,this.onP2Coop);
         this.playBtn.visible = false;
         this.separator.visible = true;
      }
   }
}

