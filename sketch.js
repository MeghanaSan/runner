var path,runner;
var pathImg,runnerImg;

function preload(){
  //pre-load images
  pathImg=loadImage("path.png");
  runnerImg=loadAnimation("path.png");
  runnerImg=loadAnimation("Runner-1.png","Runner-2.png");  
}

function setup(){
  createCanvas(400,400);
  background("blue");
  //create sprites here
  path=createSprite(130,200);
  path.addImage(pathImg);
  path.scale=0.2

  runner=createSprite(130,120,30,30);
  runner.addImage("runner",runnerImg);
  runner.scale=0.3;
}

function draw() {
  background(0);

  path.velocityY=-3;

drawSprites();
}













































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































