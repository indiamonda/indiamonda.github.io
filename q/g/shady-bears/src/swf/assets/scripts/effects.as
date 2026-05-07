package
{
   import fl.motion.Color;
   import flash.display.MovieClip;
   import flash.events.Event;
   
   public class effects
   {
      
      public function effects()
      {
         super();
      }
      
      public static function shakeScreen(param1:Object, param2:Number, param3:Number) : *
      {
         var _loc4_:* = undefined;
         _loc4_ = new MovieClip();
         _loc4_.pow = Math.round(param2);
         _loc4_.dur = Math.round(param3);
         _loc4_.obj = param1;
         _loc4_.fr = 0;
         _loc4_.addEventListener(Event.ENTER_FRAME,moveScreen);
      }
      
      public static function addTrace(param1:*, param2:*, param3:*, param4:*, param5:* = 0, param6:* = 1, param7:* = false) : *
      {
         param4.x = param2;
         param4.y = param3;
         param4.scaleX = param4.scaleY = param6;
         param4.rotation = param5;
         if(!param7)
         {
            param1.addChildAt(param4,2);
         }
         else
         {
            param1.addChild(param4);
         }
      }
      
      public static function addMsg(param1:*, param2:*, param3:*, param4:*, param5:*, param6:*) : *
      {
         if(param6.txt)
         {
            param6.txt.text = param2;
         }
         param6.x = param3;
         param6.y = param4;
         param6.inDur = 20;
         param6.outDur = 20;
         param6.dur = param5;
         param6.fr = 0;
         param6.scaleX = param6.scaleY = 0;
         param1.addChild(param6);
         param6.addEventListener(Event.ENTER_FRAME,effects.moveMsg);
      }
      
      public static function explode(param1:Object, param2:Number, param3:Number, param4:Number = 0, param5:Number = 8, param6:Number = 50) : void
      {
         var _loc9_:* = undefined;
         var _loc7_:* = undefined;
         var _loc8_:* = 0;
         _loc9_ = new Color();
         _loc9_.setTint(param4,1);
         var _loc10_:* = 0;
         while(_loc10_ < param5)
         {
            _loc7_ = new particle();
            param1.addChildAt(_loc7_,2);
            _loc7_.gotoAndStop(Math.round(Math.random() * _loc7_.totalFrames) + 1);
            _loc7_.x = param2;
            _loc7_.y = param3;
            _loc7_.stX = param2;
            _loc7_.stY = param3;
            _loc7_.transform.colorTransform = _loc9_;
            _loc8_ = Math.random() * 360;
            _loc7_.rotation = _loc8_ + 90;
            _loc7_.endX = param2 + Math.cos(_loc8_ * Math.PI / 180) * param6;
            _loc7_.endY = param3 + Math.sin(_loc8_ * Math.PI / 180) * param6;
            _loc7_.fr = 0;
            _loc7_.dur = 30;
            _loc7_.addEventListener(Event.ENTER_FRAME,effects.moveParticle);
            _loc10_++;
         }
      }
      
      public static function implosion(param1:Object, param2:*, param3:Number = 3, param4:Number = 50) : void
      {
         var _loc5_:* = undefined;
         var _loc6_:* = 0;
         var _loc7_:* = 0;
         while(_loc7_ < param3)
         {
            _loc5_ = new implosionParticle();
            param1.addChildAt(_loc5_,1);
            _loc5_.gotoAndStop(Math.round(Math.random() * _loc5_.totalFrames) + 1);
            _loc5_.leader = param2;
            _loc5_.endX = param2.x;
            _loc5_.endY = param2.y;
            _loc6_ = Math.random() * 360;
            _loc5_.rotation = _loc6_ + 90;
            _loc5_.stX = param2.x + Math.cos(_loc6_ * Math.PI / 180) * param4;
            _loc5_.stY = param2.y + Math.sin(_loc6_ * Math.PI / 180) * param4;
            _loc5_.fr = 0;
            _loc5_.dur = 30;
            _loc5_.addEventListener(Event.ENTER_FRAME,effects.moveParticle);
            _loc7_++;
         }
      }
      
      private static function moveParticle(param1:Event) : void
      {
         var ts:Number = gameLogic.tickScale;
         var _loc2_:* = param1.currentTarget;
         if(_loc2_.leader)
         {
            _loc2_.endX = _loc2_.leader.x;
            _loc2_.endY = _loc2_.leader.y;
         }
         if(_loc2_.fr <= _loc2_.dur)
         {
            _loc2_.x = tweens.outTween(_loc2_.fr,_loc2_.stX,_loc2_.endX - _loc2_.stX,_loc2_.dur);
            _loc2_.y = tweens.outTween(_loc2_.fr,_loc2_.stY,_loc2_.endY - _loc2_.stY,_loc2_.dur);
            _loc2_.scaleX = tweens.outTween(_loc2_.fr,1,-1,_loc2_.dur);
            _loc2_.scaleY = tweens.outTween(_loc2_.fr,1,-1,_loc2_.dur);
         }
         else
         {
            _loc2_.removeEventListener(Event.ENTER_FRAME,effects.moveParticle);
            _loc2_.parent.removeChild(_loc2_);
         }
         _loc2_.fr += ts;
      }
      
      private static function moveMsg(param1:Event) : void
      {
         var ts:Number = gameLogic.tickScale;
         var _loc2_:* = param1.currentTarget;
         if(_loc2_.fr <= _loc2_.inDur)
         {
            _loc2_.scaleX = _loc2_.scaleY = tweens.elasticTween(_loc2_.fr,0,1,_loc2_.inDur);
         }
         if(_loc2_.fr > _loc2_.inDur + _loc2_.dur)
         {
            _loc2_.scaleX = _loc2_.scaleY = tweens.inElasticTween(_loc2_.fr - _loc2_.inDur - _loc2_.dur,1,-1,_loc2_.outDur);
         }
         if(_loc2_.fr > _loc2_.inDur + _loc2_.dur + _loc2_.outDur)
         {
            _loc2_.removeEventListener(Event.ENTER_FRAME,effects.moveMsg);
            _loc2_.parent.removeChild(_loc2_);
         }
         _loc2_.fr += ts;
      }
      
      private static function moveScreen(param1:Event) : void
      {
         var ts:Number = gameLogic.tickScale;
         var _loc2_:* = param1.currentTarget;
         if(_loc2_.fr < _loc2_.dur)
         {
            _loc2_.obj.x = (Math.floor(Math.random() * 3) - 1) * _loc2_.pow;
            _loc2_.obj.y = (Math.floor(Math.random() * 3) - 1) * _loc2_.pow;
            _loc2_.fr += ts;
         }
         else
         {
            _loc2_.obj.x = 0;
            _loc2_.obj.y = 0;
            _loc2_.removeEventListener(Event.ENTER_FRAME,moveScreen);
            _loc2_ = null;
         }
      }
   }
}

