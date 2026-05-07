package medvedi_fla
{
   import flash.display.MovieClip;
   
   [Embed(source="/_assets/assets.swf", symbol="symbol365")]
   public dynamic class reviveHeart_75 extends MovieClip
   {
      
      public function reviveHeart_75()
      {
         super();
         addFrameScript(24,this.frame25);
      }
      
      internal function frame25() : *
      {
         SoundManager.playSound(SoundManager.heartBeat);
      }
   }
}

