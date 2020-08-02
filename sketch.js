var bullet, wall, thickness;

var speed, weight;


function setup() {
  createCanvas(1600,400);

  speed=random(223,321);
  weight=random(30,52);

  bullet=createSprite(50,200,60,20);
  bullet.velocityX=speed;
  bullet.shapeColor=(255,255,255);

  wall=createSprite(900,200,thickness,height/2);
  
  thickness=random(22,83);


}

function draw() {
  background(0,0,0); 
 

  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var deformation=(0.5*weight*speed*speed)/(thickness*thickness*thickness);

    if(deformation>180){
      bullet.shapeColor=color(255,0,0);
    }

    if(deformation<10 && deformation>0 ){
      bullet.shapeColor=color(0,255,0);
    }

    if(deformation>10){
      bullet.shapeColor=color(255,0,0);
    }


  }
  
  drawSprites();
}

function hasCollided(bullet,wall){

  bulletRightEdge = bullet.x + bullet.width;
   
  wallLeftEdge = wall.x;

  if(bulletRightEdge>=wallLeftEdge){

      return true

  } return false;
}

