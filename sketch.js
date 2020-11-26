var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,obstacle1,obstacle2,obstacle3
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 200, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	engine = Engine.create();
	world = engine.world;
	
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	//obstacle1 = new Obstacle (900,650,70,70);
	obstacle1 = createSprite (410,669,300,20);
	obstacle1.shapeColor=color("red");

	obstacle2 = createSprite (250,605,20,150);
	obstacle2.shapeColor=color("red");

	obstacle3= createSprite (570,605,20,150);
	obstacle3.shapeColor=color("red");

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
    World.add(world, packageBody);
	
	obstacle1 = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, obstacle1);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
		
	//Matter.Body.setStatic(body,false);

	//Engine.run(engine);
  
}


function draw() {
	background(0);

	Engine.update(engine);
  rectMode(CENTER);
 
  //obstacle1.display();

  drawSprites();
 
} 


function keyPressed() {
	if (keyCode === DOWN_ARROW) {

		Matter.Body.setStatic (packageBody,false);
	   // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
   packageSprite.x = packageBody.position.x;
   packageSprite.y = packageBody.position.y;
   
	 }
   }


