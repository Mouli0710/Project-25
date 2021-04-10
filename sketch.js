var ground;
var engine , world;
var dg

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
 dg = loadImage("dustbingreen.png"); 	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
     
	ground = new Ground(400,670,800,25);

	paper1 = new Paper(100,665,40);

	box1 = new Dustbin(580,580,20,150);
	box2 = new Dustbin(665,650,150,20);
	box3 = new Dustbin(750,580,20,150);
	
    

	

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  background("lightblue");
  ground.display();
  
  box1.display();
  box2.display();
  box3.display();
  imageMode(CENTER);
  image(dg,665,580,150,150);
  paper1.display();  
 
}

function keyPressed(){
 if(keyCode===UP_ARROW){
	 Matter.Body.applyForce(paper1.body,paper1.body.position,{x:200, y:-250});
 }
}

 

