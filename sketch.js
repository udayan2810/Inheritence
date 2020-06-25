
var obstaclesGroup,obstacleimage;
function preload () {
  obstacleimage = loadImage("drop.png")
}
function setup() {
  var canvas = createCanvas(1200,400);
  
  cloudsGroup = new Group();
  obstaclesGroup = new Group();
 
}
function draw() {
  background("Cyan");  
  
  spawnObstacles();
  obstaclesGroup.setVelocityXEach(0);
  drawSprites();
}
function spawnObstacles() {
  if(frameCount % 20 === 0) {
  var obstacle = createSprite(600,165,50,100);
  obstacle.addImage(obstacleimage);
 obstacle.x=random(1170,40);
  obstacle.velocityY= 4;   
  //generate random obstacles
console.log(obstacle.x)
  
  //assign scale and lifetime to the obstacle           
obstacle.scale = 0.4
  obstacle.lifetime = 300;
  //add each obstacle to the group
  obstaclesGroup.add(obstacle);
}
}