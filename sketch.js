
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var tree1,ground,stone,boyImg,boy,mango1,mango2,mango3,mango4,mango5,mango6,sling

function preload(){
	boyImg=loadImage("Plucking mangoes/boy.png");
}
function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	tree1=new Tree(600,450,400,400);
	ground=new Ground(400,650,800,20);
	boy=createSprite(200,590,50,100);
	boy.addImage("boyImg",boyImg);
	boy.scale=0.09;
	stone=new Stone(155,545,50);
	mango1=new Mango(550,350);
	mango2=new Mango(600,400);
	mango3=new Mango(650,400);
	mango4=new Mango(630,350);
	mango5=new Mango(550,400);
	mango6=new Mango(580,380);
	//sling=new Sling(stone.body,{x:155,y:545});
}


function draw() {
  rectMode(CENTER);
  background("white");
  drawSprites();
  tree1.display();
  ground.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  //sling.display();
}



