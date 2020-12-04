
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = matter.Render;

var dustbin1;
var paper1;
var ground;
var world; 

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;
    dustbin1 = new Dustbin(1200,600);
	paper1 = new Paper(200,450,40);
	ground1 = new Ground(width/2,670,width,20);

	//Create the Bodies Here.

	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
			width:1200,
			height: 700,
			wireframes: false
		}
	});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  dustbin1.display();
  paper1.display();
  ground1.display();

  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body, paper1.body.position,{x:85,y:-85});
		
	}
}