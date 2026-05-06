package
{
   import flash.display.MovieClip;
   
   [Embed(source="/_assets/assets.swf", symbol="symbol461")]
   public dynamic class fireflyTrace extends MovieClip
   {
      
      public function fireflyTrace()
      {
         super();
         addFrameScript(10,this.frame11);
      }
      
      internal function frame11() : *
      {
         stop();
         this.parent.removeChild(this);
      }
   }
}

