const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint= Matter.Constraint;
var engine,world,ground,box1,box2,box3,box4;

function setup(){
    createCanvas(3000,800)
    engine=Engine.create();
    world=engine.world
    ground=new Ground(1500,600,3000,20);
    ball= new Ball(200,200,80,80);
    box1=new Box(900,100,70,70);
    box2=new Box(800,100,70,70);
    box3=new Box(700,100,70,70);
    box4=new Box(600,100,70,70);
    rope=new Rope(ball.body,{x:500,y:250})
    
}


function draw(){
    background(180)
    Engine.update(engine);
    ground.display();
    ball.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    rope.display();


}

function mouseDragged(){
   Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}
