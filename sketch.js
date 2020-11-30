const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Ground(400,200,320,20)
	bob1 = new Bob(300,350)
	bob2 = new Bob(350,350)
	bob3 = new Bob(400,350)
	bob4 = new Bob(450,350)
	bob5 = new Bob(500,350)

	rope1 = new Rope(bob1.body, {x:300, y:200})
	rope2 = new Rope(bob2.body, {x:350, y:200})
	rope3 = new Rope(bob3.body, {x:400, y:200})
	rope4 = new Rope(bob4.body, {x:450, y:200})
	rope5 = new Rope(bob5.body, {x:500, y:200})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("pink");
  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()
  roof.display()
  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bob1.body, bob1.body.position, {x:-200 ,y:-200 })
	}
}

