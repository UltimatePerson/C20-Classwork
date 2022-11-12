const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine;
var world;

var ground;
var wedge; 
var ball;

function setup(){
  createCanvas(600,600);

  //create and initialize engine(space)
  engine = Engine.create();
  world = engine.world;

  var option = {
    isStatic: true
  }
  //Bodies.rectangle - Matter.js
  ground = Bodies.rectangle(0,590,600,10, option);
  World.add(world, ground); //World.add(name of the planet, name of the body)

  wedge = Bodies.rectangle(50,150,100,10,option);
  World.add(world, wedge);

  var ballOption = {
    restitution: 1.3,
    density: 2.5,
    friction: 0.05
  }

  ball = Bodies.circle(300,150,50, ballOption);
  World.add(world, ball);
}


function draw() {
  background(200);
  
  Engine.update(engine);

  //p5 library - rect, ellipse,square
  fill("brown");
  rect(ground.position.x, ground.position.y, 600,10);

  fill("black");
  rect(wedge.position.x, wedge.position.y, 100,10);

  fill("red");
  ellipse(ball.position.x, ball.position.y, 50,50);
}

