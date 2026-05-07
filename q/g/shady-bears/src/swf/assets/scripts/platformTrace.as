package
{
   import flash.display.MovieClip;
   
   [Embed(source="/_assets/assets.swf", symbol="symbol161")]
   public dynamic class platformTrace extends MovieClip
   {
      
      public function platformTrace()
      {
         addFrameScript(0,this.frame1,22,this.frame23);
         super();
      }
      
      internal function frame1() : *
      {
         gotoAndPlay(Math.floor(Math.random() * 5) + 1);
      }
      
      internal function frame23() : *
      {
         this.stop();
         this.parent.removeChild(this);
      }
   }
}

