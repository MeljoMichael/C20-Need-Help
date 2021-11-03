let issImg;
let astronaut;
let bath,brush,drink;
let eat,gym1,gym2,move,sleep;

function preload(){
  issImg = loadImage("iss.png");
  sleep = loadAnimation("sleep.png");
  bath = loadAnimation("bath1.png","bath2.png");
  brush = loadAnimation("brush.png");
  drink = loadAnimation("drink1.png","drink2.png");
  eat = loadAnimation("eat1.png","eat2.png");
  gym1 = loadAnimation("gym1.png","gym2.png");
  gym2 = loadAnimation("gym11.png","gym12.png");
  move = loadAnimation("move.png","move1.png");
}

function setup() {
  createCanvas(1900,975);

 astronaut = createSprite(970,550);
 astronaut.addAnimation("Sleep",sleep);
 astronaut.addAnimation("brushing",brush);
 astronaut.changeAnimation("Sleep");
 astronaut.scale = 0.1;

 if (keyDown("UP_ARROW")) {
   astronaut.changeAnimation("brushing");
   astronaut.y = 350;
   astronaut.velocityX = 0;
   astronaut.velocityY = 0;
 }

}

function draw() {
  background(issImg);  


  drawSprites();
}