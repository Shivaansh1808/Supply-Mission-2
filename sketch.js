var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;

var rightBoxSprite,bottomBoxSprite,leftBoxSprite;
var rightBoxBody, bottomBoxBody, leftBoxBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);

	leftBoxBody = Bodies.rectangle(300, 610, 20, 100, {isStatic:true});
	World.add(world, leftBoxBody);

	bottomBoxBody = Bodies.rectangle(width/2, 635, 200, 20, {isStatic:true});
	World.add(world, bottomBoxBody);

	rightBoxBody = Bodies.rectangle(500, 610, 20, 100, {isStatic:true});
	World.add(world, rightBoxBody);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	 packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	leftBoxSprite = createSprite(leftBoxBody.position.x, leftBoxBody.position.y, 20, 100);
	leftBoxSprite.shapeColor = rgb(250,0,0);
	
	bottomBoxSprite = createSprite(width/2, 650, 200, 20);
	bottomBoxSprite.shapeColor = rgb(250,0,0);
	
	rightBoxSprite = createSprite(rightBoxBody.position.x, rightBoxBody.position.y, 20, 100);
	rightBoxSprite.shapeColor = rgb(250,0,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x = packageBody.position.x;
  packageSprite.y = packageBody.position.y;
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
    Matter.Body.setStatic(packageBody, false);
  }
}