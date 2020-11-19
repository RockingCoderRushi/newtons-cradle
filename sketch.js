
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob1,bob2,bob3,bob4,bob5;
var roof1;
var rope1;
function preload()
{
	
}

function setup() {
	createCanvas(1000, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new Bob(400,300,50)
	bob2 = new Bob(450,300,50)
	bob3 = new Bob(500,300,50)
	bob4 = new Bob(550,300,50)
	bob5 = new Bob(600,300,50)

	roof1 = new Roof(490,100,450,40)

	rope1 = new Rope(bob1.body,roof1.body,-bobDiameter*2,0)
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()

  roof1.display()

  rope1.display()
 
}



