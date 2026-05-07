package
{
   import flash.display.MovieClip;
   
   [Embed(source="/_assets/assets.swf", symbol="symbol111")]
   public dynamic class heroTrace extends MovieClip
   {
      
      public function heroTrace()
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

