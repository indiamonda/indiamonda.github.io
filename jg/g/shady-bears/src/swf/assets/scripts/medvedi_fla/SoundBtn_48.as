package medvedi_fla
{
   import flash.display.MovieClip;
   
   [Embed(source="/_assets/assets.swf", symbol="symbol222")]
   public dynamic class SoundBtn_48 extends MovieClip
   {
      
      public function SoundBtn_48()
      {
         super();
         addFrameScript(0,this.frame1,1,this.frame2);
      }
      
      internal function frame1() : *
      {
         stop();
         if(!SoundManager.soundOn)
         {
            gotoAndStop("off");
         }
      }
      
      internal function frame2() : *
      {
         stop();
         if(SoundManager.soundOn)
         {
            gotoAndStop("on");
         }
      }
   }
}

