var iss, spacecraft;
var bg, issimg, scimg;
var space;

function preload(){
  bg= loadImage("space.jpg");
  issimg = loadImage("iss.png");
  scimg = loadImage("spacecraft1.png");
  scimg1 = loadImage("spacecraft2.png");
  scimg2= loadImage("spacecraft3.png");
  scimg3= loadImage("spacecraft4.png");
}
function setup() {
  createCanvas(1600,800);
  space=createSprite(750,500,1600,800);
  space.scale=2.5;
  spacecraft=createSprite(500,550,10,10);
  spacecraft.scale=0.4;
  iss=createSprite(550,250,10,10);
  iss.scale=0.4;

  space.addImage(bg);
  iss.addImage(issimg);
  spacecraft.addImage(scimg);
}
function draw() {
  if(keyWentDown("left")){
    spacecraft.addImage(scimg2);
    spacecraft.velocityX=-3; 
  }
  if(keyWentUp("left")){
    spacecraft.addImage(scimg);
    spacecraft.velocityX=0; 
  }
  if(keyWentDown("right")){
    spacecraft.addImage(scimg3);
    spacecraft.velocityX=3; 
  }
  if(keyWentUp("right")){
    spacecraft.addImage(scimg);
    spacecraft.velocityX=0; 
  }
  if(keyWentDown("up")){
    spacecraft.addImage(scimg1);
    spacecraft.velocityY=-3; 
  }
  if(keyWentUp("up")){
    spacecraft.addImage(scimg);
    spacecraft.velocityY=0; 
  }
  if(keyWentDown("down")){
    spacecraft.addImage(scimg);
    spacecraft.velocityY=3; 
  }

  if(keyWentUp("down")){
    spacecraft.addImage(scimg);
    spacecraft.velocityY=0; 
  }

  drawSprites();
  if(spacecraft.x>450 && spacecraft.x<540 && spacecraft.y>220 && spacecraft.y<410){
    textSize(30);
    fill(random(0,255),random(0,255),random(0,255));
    text("MISSION SUCCESSFUL",350,600);
  }
}