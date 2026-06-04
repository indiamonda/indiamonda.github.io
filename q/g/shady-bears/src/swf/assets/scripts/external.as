package
{
   import flash.external.ExternalInterface;
   
   public class external
   {
      
      public static var gLogic:*;
      
      public static var adIsPlaying:Boolean = false;
      
      public function external()
      {
         super();
      }
      
      public static function addCallbacks(param1:*) : *
      {
         ExternalInterface.addCallback("onAdStarted",external.onAdStarted);
         ExternalInterface.addCallback("onAdEnded",external.onAdEnded);
         ExternalInterface.addCallback("onRewardedAdStarted",external.onRewardedAdStarted);
         ExternalInterface.addCallback("onRewardedAdEnded",external.onRewardedAdEnded);
         ExternalInterface.addCallback("onKeyDown",external.onKeyDown);
         ExternalInterface.addCallback("onKeyUp",external.onKeyUp);
         external.gLogic = param1;
      }
      
      public static function onAdStarted() : *
      {
         adIsPlaying = true;
      }
      
      public static function onAdEnded() : *
      {
         SoundManager.soundFade(SoundManager.musicChannel,1,0.05);
         adIsPlaying = false;
      }
      
      public static function onRewardedAdStarted() : *
      {
         adIsPlaying = true;
      }
      
      public static function onRewardedAdEnded(param1:*) : *
      {
         adIsPlaying = false;
         gameLogic.rewardPlayer(param1);
         if(param1)
         {
            SoundManager.soundFade(SoundManager.musicChannel,1,0.05);
         }
      }
      
      public static function onKeyDown(param1:*) : *
      {
         var _loc2_:* = new Object();
         _loc2_.keyCode = param1;
         gLogic.keyDown(_loc2_);
      }
      
      public static function onKeyUp(param1:*) : *
      {
         var _loc2_:* = new Object();
         _loc2_.keyCode = param1;
         gLogic.keyUp(_loc2_);
      }
   }
}

