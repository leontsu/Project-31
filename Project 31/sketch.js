const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var division1, division2, division3, division4, division5, division6, division7;
var divisions;

//first floor plinkos
var plinko1, plinko2, plinko3, plinko4, plinko5, plinko6, plinko7, plinko8, plinko9, plinko10;

//second floor plinkos
var p1,p2,p3,p4,p5,p6,p7,p8,p9,p10;

//third floor plinkos
var t1,t2,t3,t4,t5,t6,t7,t8,t9,t10;

//fourth floor plinkos
var f1,f2,f3,f4,f5,f6,f7,f8,f9,f10;


//arrays
var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240,800,displayWidth,25);

  /*for (var k = 0; k <= width; k=k+80)
  {
    divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight))
  }
  */

  division1 = new Division(0,665,15,250);
  division2 = new Division(68,665,10,250);
  division3 = new Division(136,665,10,250);
  division4 = new Division(225,665,10,250);
  division5 = new Division(308,665,10,250)
  division6 = new Division(376,665,10,250);
  division7 = new Division(475,665,15,250);

 /* for(var j = 40; j <= width; j=j+50)
  {
    plinkos.push(new Plinko(j,75));
  }

  for (var j=15; j <= width-10; j=j+50)
  {
    plinkos.push(new Plinko(j,175));
  }
  */

  //first floor plinkos
  var x = 10;

  plinko1 = new Plinko(x,100,10);
  x = x + 50;

  plinko2 = new Plinko(x,100,10);
  x = x + 50

  plinko3 = new Plinko(x,100,10);
  x = x + 50

  plinko4 = new Plinko(x,100,10);
  x = x + 50

  plinko5 = new Plinko(x,100,10);
  x = x + 50

  plinko6 = new Plinko(x,100,10);
  x = x + 50;

  plinko7 = new Plinko(x,100,10);
  x = x + 50

  plinko8 = new Plinko(x,100,10);
  x = x + 50

  plinko9 = new Plinko(x,100,10);
  x = x + 50

  plinko10 = new Plinko(x,100,10);
  x = x + 50


  //second floor plinkos
  var x1 = 0;

  p1 = new Plinko(x1,200,10);
  x1 = x1 + 50;

  p2 = new Plinko(x1,200,10);
  x1 = x1 + 50;

  p3 = new Plinko(x1,200,10);
  x1 = x1 + 50;

  p4 = new Plinko(x1,200,10);
  x1 = x1 + 50;

  p5 = new Plinko(x1,200,10);
  x1 = x1 + 50;

  p6 = new Plinko(x1,200,10);
  x1 = x1 + 50;

  p7 = new Plinko(x1,200,10);
  x1 = x1 + 50;

  p8 = new Plinko(x1,200,10);
  x1 = x1 + 50;

  p9 = new Plinko(x1,200,10);
  x1 = x1 + 50;

  p10 = new Plinko(x1,200,10);
  x1 = x1 + 50;


  //third floor plinkos
  var x2 = 10;

  t1 = new Plinko(x2,300,10);
  x2 = x2 + 50;

  t2 = new Plinko(x2,300,10);
  x2 = x2 + 50;

  t3 = new Plinko(x2,300,10);
  x2 = x2 + 50;

  t4 = new Plinko(x2,300,10);
  x2 = x2 + 50;

  t5 = new Plinko(x2,300,10);
  x2 = x2 + 50;

  t6 = new Plinko(x2,300,10);
  x2 = x2 + 50;

  t7 = new Plinko(x2,300,10);
  x2 = x2 + 50;

  t8 = new Plinko(x2,300,10);
  x2 = x2 + 50;

  t9 = new Plinko(x2,300,10);
  x2 = x2 + 50;

  t10 = new Plinko(x2,300,10);
  x2 = x2 + 50;


  //level 4 plinkos
  var x3 = 0;

  f1 = new Plinko(x3,400,10);
  x3 = x3 + 50;

  f2 = new Plinko(x3,400,10);
  x3 = x3 + 50;

  f3 = new Plinko(x3,400,10);
  x3 = x3 + 50;

  f4 = new Plinko(x3,400,10);
  x3 = x3 + 50;

  f5 = new Plinko(x3,400,10);
  x3 = x3 + 50;

  f6 = new Plinko(x3,400,10);
  x3 = x3 + 50;

  f7 = new Plinko(x3,400,10);
  x3 = x3 + 50;

  f8 = new Plinko(x3,400,10);
  x3 = x3 + 50;

  f9 = new Plinko(x3,400,10);
  x3 = x3 + 50;

  f10 = new Plinko(x3,400,10);
  x3 = x3 + 50;

 
}

function draw() {
  background(0);

  ground.display();

  division1.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();
  division6.display();
  division7.display();

  //first floor plinkos
  plinko1.display();
  plinko2.display();
  plinko3.display();
  plinko4.display();
  plinko5.display();
  plinko6.display();
  plinko7.display();
  plinko8.display();
  plinko9.display();
  plinko10.display();

  //second floor plinkos
  p1.display();
  p2.display();
  p3.display();
  p4.display();
  p5.display();
  p6.display();
  p7.display();
  p8.display();
  p9.display();
  p10.display();

  //third floor plinkos
  t1.display();
  t2.display();
  t3.display();
  t4.display();
  t5.display();
  t6.display();
  t7.display();
  t8.display();
  t9.display();
  t10.display();

  //fourth floor plinkos
  f1.display();
  f2.display();
  f3.display();
  f4.display();
  f5.display();
  f6.display();
  f7.display();
  f8.display();
  f9.display();
  f10.display();

  if(frameCount%90===0)
  {
    particles.push(new Particle(random(width/2-10,width/2+10),10,10))
  }

  for (var j = 0; j < particles.length; j++)
  {
    particles[j].display();
  }
  for (var k = 0; k < divisions.length; k++)
  {
    divisions[k].display();
  }

  Engine.update(engine);
  drawSprites();
}