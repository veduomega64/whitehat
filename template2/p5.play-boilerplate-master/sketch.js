var car, wall;

var speed, weight
function setup() {
  createCanvas(1600,400);
  speed = random(55,90);
  weight = random(400,1500)

  car = createSprite(50,200,50,50)
  car.velocityX = speed;
  car.shapeColor = (255);

  wall = createSprite(1500,200,60,height/2);
  wall.shapeColor = (255)
}

function draw() {
  background(0); 
 
  var deformation = 0.5*speed*weight*speed/22509
  if(deformation>180){
    car.shapeColor = (255,0,0)
  } 

  if(deformation<180&&deformation>100){
    car.shapeColor = (230,230,0)
  } 

  if(deformation<100){
    car.shapeColor = (0,255,0)
  } 
  drawSprites();
}