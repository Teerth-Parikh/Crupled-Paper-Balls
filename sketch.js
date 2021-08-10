var ball;
var groundObj;
var radius = 30;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1500, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	


	groundObj =new Ground(width/2,670,width,20);
	leftSide =new Ground(1100,600,20,120);
	rightSide =new Ground(1200,600,20,120);

	var ball_options={
		isStatic: false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	ball = Bodies.circle(200,190,radius/2,ball_options);
  World.add(world,ball);
  
  
  rectMode(CENTER);
  ellipseMode(RADIUS);

  

	Engine.update(engine);
  
}


  
function draw() {
  rectMode(CENTER);
  background(0);
  


	fill("yellow");
	ellipse(ball.position.x,ball.position.y,radius,radius);
	  //ellipse(ball.position.x,ball.position.y,30);

	groundObj.display();
	leftSide.display();
	rightSide.display();

	//var pos = this.body.position;
    //push();
    //translate(pos.x, pos.y);
    fill("brown");
    rectMode(CENTER);
    //rect(0, 0, this.width, this.height);
    //pop();

	Engine.update(engine);

  //drawSprites();
 
}


function keyPressed() 
{
	if (keyCode === UP_ARROW) 
	{

		Matter.Body.applyForce(ball,ball.position,{x:45,y:-45});

	}





}
