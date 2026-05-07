package
{
   public class tweens
   {
      
      public function tweens()
      {
         super();
      }
      
      public static function outTween(param1:Number, param2:Number, param3:Number, param4:Number) : Number
      {
         var _loc5_:Number = NaN;
         param1 = param1 / param4;
         _loc5_ = param1 * param1;
         var _loc6_:Number = _loc5_ * param1;
         return param2 + param3 * (_loc6_ * _loc5_ + -5 * _loc5_ * _loc5_ + 10 * _loc6_ + -10 * _loc5_ + 5 * param1);
      }
      
      public static function inTween(param1:Number, param2:Number, param3:Number, param4:Number) : Number
      {
         var _loc5_:Number = NaN;
         param1 = param1 / param4;
         _loc5_ = param1 * param1;
         var _loc6_:Number = _loc5_ * param1;
         return param2 + param3 * (_loc6_ * _loc5_);
      }
      
      public static function bounceTween(param1:Number, param2:Number, param3:Number, param4:Number) : Number
      {
         param1 = param1 / param4;
         if(param1 < 1 / 2.75)
         {
            return param3 * (7.5625 * param1 * param1) + param2;
         }
         if(param1 < 2 / 2.75)
         {
            return param3 * (7.5625 * (param1 = param1 - 1.5 / 2.75) * param1 + 0.75) + param2;
         }
         if(param1 < 2.5 / 2.75)
         {
            return param3 * (7.5625 * (param1 = param1 - 2.25 / 2.75) * param1 + 0.9375) + param2;
         }
         return param3 * (7.5625 * (param1 = param1 - 2.625 / 2.75) * param1 + 0.984375) + param2;
      }
      
      public static function inOutTween(param1:Number, param2:Number, param3:Number, param4:Number) : Number
      {
         var _loc5_:Number = NaN;
         param1 = param1 / param4;
         _loc5_ = param1 * param1;
         var _loc6_:Number = _loc5_ * param1;
         return param2 + param3 * (6 * _loc6_ * _loc5_ + -15 * _loc5_ * _loc5_ + 10 * _loc6_);
      }
      
      public static function outInTween(param1:Number, param2:Number, param3:Number, param4:Number) : Number
      {
         var _loc5_:Number = NaN;
         param1 = param1 / param4;
         _loc5_ = param1 * param1;
         var _loc6_:Number = _loc5_ * param1;
         return param2 + param3 * (4 * _loc6_ + -6 * _loc5_ + 3 * param1);
      }
      
      public static function elasticTween(param1:Number, param2:Number, param3:Number, param4:Number) : Number
      {
         var _loc5_:Number = NaN;
         param1 = param1 / param4;
         _loc5_ = param1 * param1;
         var _loc6_:Number = _loc5_ * param1;
         return param2 + param3 * (31.9475 * _loc6_ * _loc5_ + -103.7425 * _loc5_ * _loc5_ + 124.795 * _loc6_ + -67 * _loc5_ + 15 * param1);
      }
      
      public static function inElasticTween(param1:Number, param2:Number, param3:Number, param4:Number) : Number
      {
         var _loc5_:Number = NaN;
         param1 = param1 / param4;
         _loc5_ = param1 * param1;
         var _loc6_:Number = _loc5_ * param1;
         return param2 + param3 * (36.895 * _loc6_ * _loc5_ + -69.89 * _loc5_ * _loc5_ + 41.795 * _loc6_ + -7.8 * _loc5_);
      }
      
      public static function backInTween(param1:Number, param2:Number, param3:Number, param4:Number) : Number
      {
         var _loc5_:Number = NaN;
         param1 = param1 / param4;
         _loc5_ = param1 * param1;
         var _loc6_:Number = _loc5_ * param1;
         return param2 + param3 * (-3.8 * _loc6_ * _loc5_ + 11.4 * _loc5_ * _loc5_ + -7.4 * _loc6_ + 0.8 * _loc5_);
      }
      
      public static function backOutTween(param1:Number, param2:Number, param3:Number, param4:Number) : Number
      {
         var _loc5_:Number = NaN;
         param1 = param1 / param4;
         _loc5_ = param1 * param1;
         var _loc6_:Number = _loc5_ * param1;
         return param2 + param3 * (6.6 * _loc6_ * _loc5_ + -19.8 * _loc5_ * _loc5_ + 23.8 * _loc6_ + -15.6 * _loc5_ + 6 * param1);
      }
      
      public static function noTween(param1:Number, param2:Number, param3:Number, param4:Number) : Number
      {
         param1 /= param4;
         return param2 + param3 * param1;
      }
   }
}

