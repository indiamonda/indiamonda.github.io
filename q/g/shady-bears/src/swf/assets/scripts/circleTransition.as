package
{
   import flash.display.MovieClip;
   
   [Embed(source="/_assets/assets.swf", symbol="symbol478")]
   public dynamic class circleTransition extends MovieClip
   {
      
      public function circleTransition()
      {
         super();
         addFrameScript(30,this.frame31);
      }
      
      internal function frame31() : *
      {
         stop();
         parent.removeChild(this);
      }
   }
}

