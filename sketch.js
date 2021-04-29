
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
  
var engine,world;
var paper ;
var paperpos
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(225)

redline=createSprite(650,648,130,20)
redline2=createSprite(725,633,20,50)
redline3=createSprite(575,633,20,50)
paper= new Paper(200,300);
}


function draw() {
  rectMode(CENTER);
  background(0);
 paper.display();

  drawSprites();
 
}
function keypressed()
{
if(keyCode===UP_ARROW){
	matter.Body.applyForce(paper.body,paper.body.position ,{x:85,y:85})
}
}



