const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var stand1,stand2;
var box1,box2,box3,box4,box5,box6,box7;
var box8,box9,box10,box11,box12;
var box13,box14,box15;
var box16;
var box17,box18,box19,box20,box21;
var box22,box23,box24;
var box25;
var slingShot;
var polygon,polyImg;
var gameState = "onSling";

function preload(){

  polyImg = loadImage("hexagon.png");

}

function setup() {
  createCanvas(1000,500);

  engine = Engine.create();
  world = engine.world;

  polygon = Bodies.circle(50,150,20);
  World.add(world,polygon);

  slingShot = new SlingShot(this.polygon,{x:100,y:200}); 
  
  ground = new Ground(500,480,1000,20);
  
  stand1 = new Ground(410,380,280,10);
  stand2 = new Ground(720,200,220,10);

  box1 = new BoxColor1(340,360);
  box2 = new BoxColor1(360,360);
  box3 = new BoxColor1(380,360); 
  box4 = new BoxColor1(400,360);
  box5 = new BoxColor1(420,360);
  box6 = new BoxColor1(440,360);
  box7 = new BoxColor1(460,360);
 
  box8 = new BoxColor2(360,340);
  box9 = new BoxColor2(380,340);
  box10 = new BoxColor2(400,340);
  box11 = new BoxColor2(420,340);
  box12 = new BoxColor2(440,340);

  box13 = new BoxColor3(380,320);
  box14 = new BoxColor3(400,320);
  box15 = new BoxColor3(420,320);

  box16 = new BoxColor4(400,300);

  box17 = new BoxColor1(640,170);
  box18 = new BoxColor1(670,170);
  box19 = new BoxColor1(700,170);
  box20 = new BoxColor1(730,170);
  box21 = new BoxColor1(760,170);

  box22 = new BoxColor2(670,140);
  box23 = new BoxColor2(700,140);
  box24 = new BoxColor2(730,140);

  box25 = new BoxColor3(700,110);
}

function draw() {
  background("#2D232B");
  Engine.update(engine);
  
  ground.display();

  stand1.display();
  stand2.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();

  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();

  box13.display();
  box14.display();
  box15.display();

  box16.display();

  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  
  box22.display();
  box23.display();
  box24.display();

  box25.display();

  slingShot.display();

  imageMode(CENTER);
  image(polyImg,polygon.position.x,polygon.position.y,40,40);

}

function mouseDragged(){
  if(gameState !== "launch"){
  Matter.Body.setPosition(polygon, {x:mouseX , y:mouseY});
  }
}

function mouseReleased(){
  slingShot.Fly();
  gameState = "launch";
}