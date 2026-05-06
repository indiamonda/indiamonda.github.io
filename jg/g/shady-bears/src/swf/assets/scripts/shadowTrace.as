package
{
   import flash.display.MovieClip;
   
   [Embed(source="/_assets/assets.swf", symbol="symbol404")]
   public dynamic class shadowTrace extends MovieClip
   {
      
      public function shadowTrace()
      {
         addFrameScript(14,this.frame15);
         super();
      }
      
      internal function frame15() : *
      {
         this.stop();
         this.parent.removeChild(this);
      }
   }
}

