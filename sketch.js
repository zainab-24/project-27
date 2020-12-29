
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball,ball1,ball2,ball3,ball4,roof;
var rope,rope1,rope2,rope3,rope4;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	rope =new Rope(ball.body,roof.body,-180,0);
	rope1 =new Rope(ball1.body,roof.body,90,0);
	rope2 =new Rope(ball2.body,roof.body,0,0);
	rope3 =new Rope(ball3.body,roof.body,90,0);
	rope4 =new Rope(ball4.body,roof.body,180,0);
	roof = new Roof(380,500,200,20);
	ball =new Bob(200,550,45);
	ball1 = new Bob(290,550,45);
	ball2 = new Bob(380,550,45);
	ball3 = new Bob(470,550,45);
	ball4 = new Bob(560,550,45);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 ball.display();
 ball1.display();
 ball2.display();
 ball3.display();
 ball4.display();
 roof.display();
 rope.display();
 rope1.display();
 rope2.display();
 rope3.display();
 rope4.display();
  drawSprites();
 
}



