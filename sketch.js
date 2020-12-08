
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	bobObject1 = new Bob(200,200);
	bobObject2 = new Bob(200,200);
	bobObject3 = new Bob(200,200);
	bobObject4 = new Bob(200,200);
	bobObject5 = new Bob(200,200);

	rapel = new Rope(bobObject.roofObject.body,*bobOianeter*2,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  


  drawSprites();
}



