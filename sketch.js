const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin1, dustbin2, dustbin3, dustbinImage;
var ground;
var paper;

function preload() {
	dustbinImage = loadImage("images/dustbingreen.png")
}

function setup() {
	
	createCanvas(1400,600);

	engine = Engine.create();
	world = engine.world;

	paper = new Paper (100,100,70);
	ground = new Ground (700,600,1400,10);
	dustbin1 = new Dustbin (1020,520,20,140);
	dustbin2 = new Dustbin (1090,590,155,20)
	dustbin3 = new Dustbin (1170,520,20,140);

	Engine.run(engine);
  
}

function draw() {
  
  background("gray");

  ground.display();
  
  dustbin1.display();
  dustbin3.display();
  dustbin2.display();
  
  imageMode(CENTER);
  image(dustbinImage,1090,525,195,160);

  textSize(35);
  fill("white");
  stroke("black");
  strokeWeight(6);
  text("Press Up arrow to make the paper fall into the dustbin", 300,80)

  paper.display();
 
}

function keyPressed(){

	if (keyCode === UP_ARROW){

		Matter.Body.applyForce(paper.body,paper.body.position,{x:160,y:-115})
	}
}
