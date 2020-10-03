var speed,weight,car, wall;

function setup() {
  
  speed = random(55,90);
  weight = random(400,1500);
  createCanvas(1800,400);
  car = createSprite(50, 200, 50, 50);
  wall = createSprite(1500,200,60,height/2);
  wall.shapeColor = "grey";
  car.velocityX = speed;
}

function draw() {
  background("blue");
  text(deformation,900,200);
  if(wall.x - car.x < (car.width + wall.width)/2){
car.velocityX=0;
var deformation = 0.5 * weight * speed * speed / 22500;
textSize(20);
text(deformation,700,200);
if(deformation > 180){
  car.shapeColor = "red";
}
if(deformation < 100){
  car.shapeColor = "green";
}
if(deformation < 180 && deformation > 100){
  car.shapeColor = "yellow";
}
  }
  drawSprites();
}


 