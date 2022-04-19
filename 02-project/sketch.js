//Declare two variables that will be used as class instances
let myBall = [];
let arraySize = 100;

function setup() {
  let canvas = createCanvas(windowWidth, 400);
  noStroke();

  for (let i=0; i<arraySize; i++){
    myBall[i] = new Ball( width/2, height/2, random(255), random(2,100) );
  }
}

function draw() {
  background(200, 10, 255);

  for (let i=0; i<arraySize; i++){
    myBall[i].move();
    myBall[i].display();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, 400);
  for (let i=0; i<arraySize; i++){
    myBall[i] = new Ball( width/2, height/2, random(255), random(2,30) );
  }
}

class Ball {
  //The constructor helps us to define the main properties of the class
  //It accepts arguments each time a new object is initialized
  constructor(x, y, col, size) {
    this.xi = x;
    this.yi = y;
    this.speedXi = random(-5, 5);
    this.speedYi = random(-5, 5);
    this.fillcol = col;
    this.size = size;
  }

  move() {
    //Motion system - current position and speed
    this.xi = this.xi + this.speedXi;
    this.yi = this.yi + this.speedYi;

    //Based on boundaries collision, reverse direction for x and y
    if (this.xi > width - this.size / 2 || this.xi < this.size / 2) {
      this.speedXi *= -1;
    }
    if (this.yi > height - this.size / 2 || this.yi < this.size / 2) {
      this.speedYi *= -1;
    }
  }

  display() {
    //Display settings for the object
    noStroke();
    fill(this.fillcol);
    ellipse(this.xi, this.yi, this.size, this.size);
  }
}
