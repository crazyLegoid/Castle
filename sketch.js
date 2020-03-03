const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var pillar1, pillar2;
var ground;
var drawb;
var pillaru1, pillaru2;
var pillard1, pillard2;
var pillarum;
var cover1,cover2, cover3, cover4;
var pillars1, pillars2;
var finalp;


function setup(){
    var canvas = createCanvas(400,600);
    engine = Engine.create();
    world = engine.world;
    pillar1 = new Box(150, 300, 20, 100)
    pillar2 = new Box(250, 300, 20, 100)
    ground = new Ground(200, 550, 400, 100);
    drawb = new Box(200, 100, 125, 20)
    pillaru1 = new Box(90, 300, 50, 200);
    pillaru2 = new Box(310, 300, 50, 200);
    pillard1 = new Box(180, -10, 30, 100);  
    pillard2 = new Box(220, -10, 30, 100);
    pillarum = new Box(200, -100, 100, 20);
    cover1 = new Box(90, -20, 70, 20);
    cover2 = new Box(310, -20, 70, 20);
    pillarim = new Box(200, -200, 50, 100);
    pillarumm = new Box(200, -150, 90, 20);
    pillars1 = new Box(90, -300, 30, 100);
    pillars2 = new Box(310, -300, 30, 100);
    cover3 = new Box(90, -400, 50, 10);
    cover4 = new Box(310, -400, 50, 10);
    finalp = new Box(192, -600, 10, 100);
}

function draw(){
    background("blue");
    Engine.update(engine);
    pillar1.display();
    ground.display();
    pillar2.display();
    drawb.display();
    pillaru1.display();
    pillaru2.display();
    pillard1.display();
    pillard2.display();
    pillarum.display();
    cover1.display();
    cover2.display();
    pillarumm.display();
    pillarim.display();
    pillars1.display();
    pillars2.display();
    cover3.display();
    cover4.display();
    finalp.display();
}
