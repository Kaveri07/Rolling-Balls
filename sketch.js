const Bodies = Matter.Bodies;
const Engine = Matter.Engine;
const World = Matter.World;

var engine, world, doneForMe;
var shelf1, shelf2, shelf3, shelf4, shelf5;
var balls = [];

function preload() {
    doneForMe = loadSound("Done For Me.mp3");
}

function setup() {
    engine = Engine.create();
    world = engine.world;
    createCanvas(windowWidth,windowHeight);

    doneForMe.play();

    shelf1 = new Shelf(windowWidth/7, windowHeight/6, windowWidth/1.5, windowHeight/70, PI/10);
    shelf2 = new Shelf(windowWidth/7, windowHeight/2, windowWidth/1.5, windowHeight/70, PI/10);
    shelf3 = new Shelf((windowWidth/10)*8, windowHeight/1.5, windowWidth/1.5, windowHeight/70, -PI/10);
    shelf4 = new Shelf((windowWidth/10)*8, windowHeight/3, windowWidth/1.5, windowHeight/70, -PI/10);
    shelf5 = new Shelf((windowWidth/10)*8, windowHeight/200, windowWidth/1.5, windowHeight/70, -PI/10);
}

function draw() {
    Engine.update(engine);
    background(color(mouseX,mouseY,150));

    if(frameCount%2===0) {
        balls.push(new Ball(random((windowWidth/10)*4,(windowWidth/10)*6),-50, windowHeight/80));
    }

    for(var i = 0; i < balls.length; i++) {
        balls[i].display();
    }

    shelf1.display();
    shelf2.display();
    shelf3.display();
    shelf4.display();
    shelf5.display();
}