const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);
var ball_options = {
    restitution:1
}
  ball = Bodies.circle(210,210,40,ball_options);
  World.add(world,ball);

}

function draw(){
    background(0);
    Engine.update(engine);
    fill("red");
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
fill("purple");
    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,40,40);
}