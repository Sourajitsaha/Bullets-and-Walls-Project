var bullet,wall,speed,weight;
var damage,thickness;
function setup() {
  createCanvas(1600,400);
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,38);
  bullet=createSprite(50, 200, 50, 20);
  bullet.shapeColor=color(80,80,80);
  bullet.velocityX=speed;
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);
  }

function draw() {
  background(255,255,255);  
  
  if(hasCollided(bullet,wall))
  {
bullet.velocityX=0;
  damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
if (damage>10)
{
wall.shapeColor=color(255,0,0);
}
if(damage<50)
{
  wall.shapeColor=color(0,255,0);
}
}
  drawSprites();
}
function hasCollided(lbullet,lwall)
{
  bulletRightEdge=lbullet.x+lbullet.width/2;
  wallLeftEdge=lwall.x-lwall.width/2;
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true
  }
  return false;
}