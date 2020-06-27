const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World=  Matter.World;

var engine, world, ground;

var r1,r2, r3

var c;
var l;
var p;
function preload()
{

p=loadImage("paper.png")

l= loadImage("dustbingreen.png")

}


function setup()
{

	createCanvas(1200, 800);
  engine = Engine.create();
  world = engine.world;


 var is_static = { isStatic: true}

 var options = {

isStatic: false,
restitution: 0.3,
friction:0.5,
density:1.2

 }

 ground = Bodies.rectangle(600, 800, 1200, 20, is_static)
World.add(world, ground)

  c = Bodies.circle(200, 700, 20, options)
  World.add(world, c);


  r1 =  Bodies.rectangle(800 , 700 , 20, 120, is_static)
  World.add(world, r1);

  r2 = Bodies.rectangle(1000 , 700 , 20, 120, is_static);
  World.add(world, r2);

  r3 = Bodies.rectangle(900 , 765 , 200, 20, is_static);
   World.add(world, r3);

  c.restitution = 0.3




}


function draw()
{


   background("black");



   Engine.update(engine);




  rectMode(CENTER);

  rect(ground.position.x, ground.position.y, 1200, 60);

  rect(r1.position.x, r1.position.y, 20, 120);

  rect(r2.position.x, r2.position.y, 20, 120);

  rect(r3.position.x, r3.position.y, 220, 10);

    ellipse(c.position.x, c.position.y, 40,40);
 imageMode(CENTER);

image(p, c.position.x, c.position.y, 70, 70);

 image(l, 900, 700, 240, 200);




}

function keyPressed()
{

if(keyCode === UP_ARROW)
{

 Matter.Body.applyForce(c, c.position,{x:70, y:-70});

}

}
