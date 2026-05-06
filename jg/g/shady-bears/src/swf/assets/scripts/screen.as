package
{
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.text.TextField;
   import flash.ui.Keyboard;
   
   [Embed(source="/_assets/assets.swf", symbol="symbol373")]
   public class screen extends MovieClip
   {
      
      public static var currentScreen:MovieClip;
      
      public static var prevFrameName:String;
      
      public static var currentFrameName:String;
      
      private static var selectedButton:Number;
      
      private static var hotKeys:Array = new Array();
      
      private static var buttonList:Array = new Array();
      
      public var instruction:MovieClip;
      
      public var medal0:MovieClip;
      
      public var medal1:MovieClip;
      
      public var medal2:MovieClip;
      
      public var medal3:MovieClip;
      
      public var medal4:MovieClip;
      
      public var medal5:MovieClip;
      
      public var name0:TextField;
      
      public var name1:TextField;
      
      public var name2:TextField;
      
      public var name3:TextField;
      
      public var name4:TextField;
      
      public var name5:TextField;
      
      public var name6:TextField;
      
      public var name7:TextField;
      
      public var name8:TextField;
      
      public var name9:TextField;
      
      public var score0:TextField;
      
      public var score1:TextField;
      
      public var score2:TextField;
      
      public var score3:TextField;
      
      public var score4:TextField;
      
      public var score5:TextField;
      
      public var score6:TextField;
      
      public var score7:TextField;
      
      public var score8:TextField;
      
      public var score9:TextField;
      
      public var scoreTxt:TextField;
      
      public var index:*;
      
      public var scoreSaved:*;
      
      public var overlay:MovieClip;
      
      public var window:MovieClip;
      
      public var indicator:MovieClip;
      
      public var i:*;
      
      public var j:*;
      
      private var duration:*;
      
      private var windowDelay:*;
      
      private var overlayDelay:*;
      
      private var animDir:*;
      
      private var fr:*;
      
      private var isTouchDevice:Boolean;
      
      private var animEnded:*;
      
      public var saveScore:*;
      
      public function screen(param1:String, param2:Boolean)
      {
         super();
         this.duration = 15;
         this.windowDelay = 10;
         this.overlayDelay = 0;
         this.animDir = 1;
         this.fr = 0;
         this.animEnded = false;
         this.overlay.alpha = 0;
         this.window.scaleY = 0;
         this.window.gotoAndStop(param1);
         this.overlay.credits.visible = param1 == "start";
         this.indicator = new indicatorMC();
         this.indicator.visible = false;
         this.indicator.alpha = 0;
         this.addChild(this.indicator);
         this.isTouchDevice = param2;
         currentScreen = this;
         currentFrameName = param1;
         selectedButton = 0;
         addEventListener(Event.ENTER_FRAME,this.eFrame);
         SoundManager.playSound(SoundManager.openPopup);
      }
      
      public static function resetHotKeys() : *
      {
         hotKeys = new Array();
      }
      
      public static function resetButtonList() : *
      {
         buttonList = new Array();
      }
      
      public static function addButtonToList(param1:*, param2:*) : *
      {
         var _loc3_:* = new Object();
         _loc3_.mc = param1;
         _loc3_.callback = param2;
         _loc3_.mc.addEventListener(MouseEvent.CLICK,getOnBtnClick(buttonList.length));
         _loc3_.mc.addEventListener(MouseEvent.MOUSE_OVER,getOnBtnMouseOver(buttonList.length));
         buttonList.push(_loc3_);
      }
      
      private static function getOnBtnClick(param1:Number) : Function
      {
         var i:Number = param1;
         return function(param1:*):*
         {
            if(Boolean(buttonList[i]) && Boolean(buttonList[i].callback))
            {
               SoundManager.playSound(SoundManager.click);
               buttonList[i].callback(null);
            }
         };
      }
      
      private static function getOnBtnMouseOver(param1:Number) : Function
      {
         var i:Number = param1;
         return function(param1:*):*
         {
            selectedButton = i;
         };
      }
      
      public static function setHotKey(param1:Number, param2:Function) : *
      {
         hotKeys[param1] = param2;
      }
      
      public static function onKeyUp(param1:Number) : *
      {
         if(currentScreen.fr < currentScreen.duration)
         {
            return;
         }
         if(hotKeys[param1])
         {
            hotKeys[param1](null);
         }
         if(param1 == Keyboard.UP)
         {
            selectedButton = Math.max(selectedButton - 1,0);
            SoundManager.playSound(SoundManager.uiSelect);
         }
         if(param1 == Keyboard.DOWN)
         {
            selectedButton = Math.min(selectedButton + 1,buttonList.length - 1);
            SoundManager.playSound(SoundManager.uiSelect);
         }
         if(param1 == Keyboard.SPACE || param1 == Keyboard.ENTER)
         {
            SoundManager.playSound(SoundManager.click);
            buttonList[selectedButton].callback(null);
         }
      }
      
      public static function close() : *
      {
         if(Boolean(currentScreen) && currentScreen.animDir > -1)
         {
            currentScreen.animDir = -1;
            currentScreen.fr = 0;
            currentScreen.overlayDelay = currentScreen.windowDelay;
            currentScreen.windowDelay = 0;
            currentScreen = null;
            resetHotKeys();
            resetButtonList();
            selectedButton = 0;
            SoundManager.playSound(SoundManager.openPopup);
         }
      }
      
      public static function transition(param1:String) : *
      {
         prevFrameName = currentFrameName;
         currentFrameName = param1;
         currentScreen.animDir = 0;
         currentScreen.fr = 0;
         currentScreen.animEnded = false;
         currentScreen.indicator.alpha = 0;
         resetHotKeys();
         resetButtonList();
         selectedButton = 0;
         SoundManager.playSound(SoundManager.transitionPopup);
      }
      
      public static function goBack() : *
      {
         transition(prevFrameName);
      }
      
      public function eFrame(param1:Event) : *
      {
         var _loc2_:* = undefined;
         var ts:Number = gameLogic.tickScale;
         if(this.animDir != 0)
         {
            if(this.fr > this.windowDelay && this.fr <= this.duration + this.windowDelay)
            {
               if(this.animDir > 0)
               {
                  this.window.scaleY = tweens.backOutTween(this.fr - this.windowDelay,0,1,this.duration);
                  this.window.alpha = this.window.scaleY;
               }
               else
               {
                  this.window.scaleY = tweens.backInTween(this.fr - this.windowDelay,1,-1,this.duration);
                  this.window.alpha = this.window.scaleY;
               }
            }
            if(this.fr <= this.duration + this.windowDelay)
            {
               this.animEnded = true;
            }
            if(this.fr > this.overlayDelay && this.fr <= this.duration + this.overlayDelay)
            {
               this.overlay.alpha += this.animDir / this.duration * ts;
            }
            if(this.animDir < 0 && this.fr > this.duration + this.overlayDelay)
            {
               removeEventListener(Event.ENTER_FRAME,this.eFrame);
               parent.removeChild(this);
            }
         }
         else
         {
            if(this.fr <= this.duration / 2)
            {
               this.window.scaleY = tweens.backInTween(this.fr,1,-1,this.duration / 2);
               this.window.alpha = this.window.scaleY;
            }
            if(this.fr > this.duration / 2 && this.fr <= this.duration)
            {
               this.window.gotoAndStop(currentFrameName);
               this.window.scaleY = tweens.backOutTween(this.fr - this.duration / 2,0,1,this.duration / 2);
               this.window.alpha = this.window.scaleY;
            }
         }
         this.indicator.visible = !this.isTouchDevice && this.fr > this.duration + 10 && buttonList.length > 0;
         if(buttonList[selectedButton])
         {
            _loc2_ = buttonList[selectedButton].mc.y + buttonList[selectedButton].mc.height / 2;
            this.indicator.y += (_loc2_ - this.indicator.y) * 0.5 * ts;
            if(this.indicator.visible)
            {
               this.indicator.alpha += (1 - this.indicator.alpha) * 0.2 * ts;
            }
         }
         this.fr += ts;
      }
   }
}

