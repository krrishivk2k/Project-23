const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,ground1;

function setup(){
    var canvas = createCanvas(800,800);
    engine = Engine.create();
    world = engine.world;

    ground1 = new Ground(200,370,400,10,"red");

    box1 = new Box(200,300,50,50);
    box2 = new Box(240,100,30,100);
    box3 = new Box(170,100,40,60);
}

function draw(){
    background(0);
    Engine.update(engine);

    ground1.display();
    box1.display();
    box2.display();
    box3.display();
}