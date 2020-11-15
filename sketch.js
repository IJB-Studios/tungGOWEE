
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new Bob(250, 500, 80)
	bob2 = new Bob(325, 500, 80)
	bob3 = new Bob(400, 500, 80)
	bob4 = new Bob(475, 500, 80)
	bob5 = new Bob(550, 500, 80)
	roof1 = new Roof(400, 150, 400, 100)
	rope1 = new Rope(bob1.body, roof1.body, -150, 15)
	rope2 = new Rope(bob2.body, roof1.body, -75, 15)
	rope3 = new Rope(bob3.body, roof1.body, 0, 15)
	rope4 = new Rope(bob4.body, roof1.body, 75, 15)
	rope5 = new Rope(bob5.body, roof1.body, 150, 15)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()
  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()
  roof1.display()

  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Body.applyForce(bob1.body, bob1.body.position,{x:-500, y:-500})
	}
}



