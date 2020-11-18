var fixedRect , movingRect , saksham1 ,saksham2,saksham3,saksham4;


function setup() {
  createCanvas(800,400);

  fixedRect = createSprite(200, 200, 50, 100);
  fixedRect.shapeColor = "green";
  movingRect = createSprite(400, 200, 30, 80);
  movingRect.shapeColor = "green";
  saksham1 = createSprite(10,10,2000,10);
  saksham1.shapeColor = "yellow";
  saksham2 = createSprite(790,10,10,1000);
  saksham2.shapeColor = "yellow";
  saksham3 = createSprite(790,390,2000,10);
  saksham3.shapeColor = "yellow";
  saksham4 = createSprite(10,390,10,1000);
  saksham4.shapeColor = "yellow";

  movingRect.velocityY = -3;
  fixedRect.velocityY = 3;
}

function draw() {
  background(0); 
  
  
 bounceOff( movingRect , saksham1);
 bounceOff( movingRect , saksham2);
 bounceOff( movingRect , saksham3);
 bounceOff( movingRect , saksham4);

 bounceOff( fixedRect , saksham1);
 bounceOff( fixedRect , saksham2);
 bounceOff( fixedRect , saksham3);
 bounceOff( fixedRect , saksham4);
  drawSprites();
}


