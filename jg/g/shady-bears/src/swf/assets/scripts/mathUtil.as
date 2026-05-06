package
{
   import flash.display.Stage;
   
   public class mathUtil
   {
      
      public function mathUtil()
      {
         super();
      }
      
      public static function distance(param1:*, param2:*, param3:*, param4:*) : *
      {
         return Math.sqrt((param1 - param3) * (param1 - param3) + (param2 - param4) * (param2 - param4));
      }
      
      public static function shuffleArray(param1:*) : *
      {
         var _loc2_:* = undefined;
         var _loc3_:* = undefined;
         var _loc4_:* = param1.length;
         var _loc5_:* = 0;
         while(_loc5_ < _loc4_)
         {
            _loc2_ = Math.floor(Math.random() * _loc4_);
            _loc3_ = param1[_loc2_];
            param1[_loc2_] = param1[_loc5_];
            param1[_loc5_] = _loc3_;
            _loc5_++;
         }
      }
      
      public static function angle(param1:*, param2:*) : *
      {
         return Math.atan2(param1,-param2) * 180 / Math.PI;
      }
      
      public static function isOnScreen(param1:Stage, param2:*) : *
      {
         if(param2.x > param1.stageWidth || param2.x < 0 || param2.y > param1.stageHeight || param2.y < 0)
         {
            return false;
         }
         return true;
      }
   }
}

