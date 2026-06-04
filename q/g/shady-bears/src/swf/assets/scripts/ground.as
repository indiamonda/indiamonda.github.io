package
{
   import flash.display.MovieClip;
   
   [Embed(source="/_assets/assets.swf", symbol="symbol72")]
   public class ground extends MovieClip
   {
      
      public var heroPosP1:pos;
      
      public var heroPosP2:pos;
      
      public var heroPosSolo:pos;
      
      public var heroPos:pos;
      
      public var map:MovieClip;
      
      public var pickUpPos1:pos;
      
      public var pickUpPos11:pos;
      
      public var pickUpPos12:pos;
      
      public var pickUpPos13:pos;
      
      public var pickUpPos14:pos;
      
      public var pickUpPos15:pos;
      
      public var pickUpPos18:pos;
      
      public var pickUpPos19:pos;
      
      public var pickUpPos20:pos;
      
      public var pickUpPos21:pos;
      
      public var pickUpPos22:pos;
      
      public var pickUpPos3:pos;
      
      public var pickUpPos8:pos;
      
      public var pickUpPos9:pos;
      
      public function ground()
      {
         addFrameScript(0,this.frame1,1,this.frame2);
         super();
      }
      
      internal function frame1() : *
      {
         stop();
      }
      
      internal function frame2() : *
      {
         stop();
      }
   }
}

