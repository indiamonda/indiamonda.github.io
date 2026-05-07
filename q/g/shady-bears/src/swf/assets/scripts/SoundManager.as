package
{
   import flash.media.Sound;
   import flash.media.SoundChannel;
   import flash.media.SoundTransform;
   import flash.utils.setTimeout;
   
   public class SoundManager
   {
      
      public static var soundOn:Boolean = true;
      
      public static var musicOn:Boolean = true;
      
      public static var soundChannel:SoundChannel = new SoundChannel();
      
      public static var musicChannel:SoundChannel = new SoundChannel();
      
      public static var prevVolume:Number = 1;
      
      public static var zzzChannel:SoundChannel = new SoundChannel();
      
      public static var mainMusic:Sound = new bgm();
      
      public static var gameOver:Sound = new gameOverS();
      
      public static var acorn:Sound = new acornS();
      
      public static var fall:Sound = new fallS();
      
      public static var honey:Sound = new honeyS();
      
      public static var jump:Sound = new jumpS();
      
      public static var zzz:Sound = new zzzS();
      
      public static var shadow:Sound = new shadowS();
      
      public static var pause:Sound = new pauseS();
      
      public static var firefly:Sound = new fireflyS();
      
      public static var removeShadow:Sound = new removeShadowS();
      
      public static var heartBeat:Sound = new heartBeatS();
      
      public static var medal:Sound = new medalS();
      
      public static var click:Sound = new clickS();
      
      public static var uiSelect:Sound = new uiSelectS();
      
      public static var scoreCount:Sound = new scoreCountS();
      
      public static var leaderboard:Sound = new leaderboardS();
      
      public static var achievementSlide:Sound = new achievementSlideS();
      
      public static var openPopup:Sound = new openPopupS();
      
      public static var transitionPopup:Sound = new transitionPopupS();
      
      public function SoundManager()
      {
         super();
      }
      
      public static function playZZZ(param1:*, param2:* = 1) : *
      {
         if(soundOn)
         {
            zzzChannel = param1.play(0,param2);
         }
      }
      
      public static function playSound(param1:*, param2:* = 1) : *
      {
         if(soundOn)
         {
            soundChannel = param1.play(0,param2);
         }
      }
      
      public static function playMusic(param1:Sound) : void
      {
         if(musicOn)
         {
            musicChannel = param1.play(0,999999);
            changeVolume(musicChannel,prevVolume);
         }
      }
      
      public static function soundFade(param1:SoundChannel, param2:Number, param3:Number) : *
      {
         var _loc4_:* = param1.soundTransform.volume;
         var _loc5_:Number = 20;
         var _loc6_:* = 50;
         if(param3 > 0)
         {
            while(_loc4_ < param2)
            {
               _loc4_ += param3;
               setTimeout(changeVolume,_loc5_,param1,_loc4_);
               _loc5_ += _loc6_;
            }
         }
         else
         {
            while(_loc4_ > param2)
            {
               _loc4_ += param3;
               setTimeout(changeVolume,_loc5_,param1,_loc4_);
               _loc5_ += _loc6_;
            }
         }
      }
      
      public static function changeVolume(param1:SoundChannel, param2:Number) : *
      {
         var _loc3_:SoundTransform = null;
         _loc3_ = new SoundTransform(param2);
         param1.soundTransform = _loc3_;
         prevVolume = param2;
      }
   }
}

