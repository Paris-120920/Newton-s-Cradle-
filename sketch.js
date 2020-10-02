
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
 
var bob1, bob2, bob3, bob4, bob5;
var roof1;
var world;


function setup() {
	createCanvas(1600, 500);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	bob1=new Bob(645,450,40);
	bob2=new Bob(644,450,40);
	bob3=new Bob(643,450,40);
	bob4=new Bob(646,450,40);
	bob5=new Bob(647,450,40);
	ground1 =new ground(width/2,670,width,20);
	roof1 =new roof(650, 500, 300, 20);
	roof1 =new roof(650, 300, 300, 20);	

	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
	});

	Engine.run(engine);
	Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
 
  dustbinObj.display();
  paperObject.display();
  groundObject.display();
  
 
  
  
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(bob5Object.body,bob5Object.body.position,{x:85,y:-85});
    
  	}
}





