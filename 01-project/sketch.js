let img;

function setup() {
 let canvas = createCanvas(600, 600);
 img = loadImage('XJS81C.jpg');
 canvas.id("p5-canvas");
}


function draw() {
  background(220);
  image (img,0,0);
  drawCreature(mouseX, mouseY);
  drawCreature2(mouseX,mouseY);
  drawCreature3(mouseX,mouseY);
}
function drawCreature3(x,y){
  push();
  translate(x, y);
  drawBody(-10, 10, 0, 1.0);
  drawWing(-70, 15, PI*1.2 , 1.0);
  drawWing(70, 15, PI*1.8, 1.0);
  draweyes(-10,10,0,1.0)
  drawEar(-10,10,0,1.0)
  pop();
}
function drawCreature2(x,y){
  push();
  translate(x, y);
  drawBody(10, 10, 0, 1.0);
  drawWing(-70, 15, PI*1.2 , 1.0);
  drawWing(70, 15, PI*1.8, 1.0);
  draweyes(10,10,0,1.0)
  drawEar(10,10,0,1.0)
  pop();
  
}
function drawCreature(x, y) {
  push();
  translate(x, y);
  drawBody(0, 0, 0, 1.0);
  drawWing(-60, 5, PI*1.2 , 1.0);
  drawWing(60, 5, PI*1.8, 1.0);
  draweyes(0,0,0,1.0)
  drawEar(0,0,0,1.0)
  pop();
}

function drawBody(x, y, a, s) {
  push();
  translate(x, y);
  rotate(a);
  scale(s);
  fill('#333333')
  ellipse(0, 0, 50, 100);
  pop();
}
function draweyes(x,y,a,s){
  push();
  translate(x,y);
  rotate(a);
  scale(s);
  fill('#ae0001')
  ellipse(0,0,20,40)
  fill('#0e1111')
  ellipse(0,0,7,15)
  pop();
  
}
function drawWing(x, y, a, s) {
  push();
  translate(x, y);
  rotate(a);
  scale(s);
  fill('#a7adba')
  ellipse(40, 0, 100, 20);
  
  fill('#65737e')
  ellipse(160,0,50,10)
  pop();
}

function drawEar(x,y,a,s){
  push();
  translate(x,y);
  rotate(a);
  scale(s);
  fill('#ffc100')
  noStroke();
  ellipse(0,-80,100,20)
  
}
