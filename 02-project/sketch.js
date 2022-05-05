let WIDTH = 700;
let HEIGHT = 600;
// new eyes appearing
let delayCreateEye = 1;
var countTimeAddEye = 0;
// eye blinking
let durationBlinkEye = 0.2;
let minimumDelayBlinkEye = 3;
let maximumDelayBlinkEye = 10;
var delayBlinkEye;
var countTimeBlinkEye = 0;
// eyes moving
let minimumEyeSpeed = 0.5;
let maximumEyeSpeed = 2;
// size of eyes
let minimumEyeSize = 0.2;
let maximumEyeSize = 0.8;
// color
let colorIris = [0, 0, 0];
let colorPupil = [255, 0, 0];
var eyeList = [];
var eyeBg;
// color of big eye
let colorEyeLidBg = [255, 0, 0];
let colorScleraBg = [255, 255, 255];
let colorIrisBg = [0, 0, 0];
let colorPupilBg = [255, 0, 0];
// size of big eye
let sizeEyeBg = 0.7;
var blinkEye = false;
var eyeLidAngle;

function setup() {
 let canvas = createCanvas(WIDTH, HEIGHT);
  delayBlinkEye = floor(random(minimumDelayBlinkEye, maximumDelayBlinkEye));
  eyeLidAngle = PI;
  canvas.id("p5-canvas");
}


function draw() {
  background(210,210,210);
  drawH (mouseX,mouseY)
  countTimeAddEye += deltaTime;
  countTimeBlinkEye += deltaTime;
  eyeBg = new EyeBackground(
    WIDTH / 2,
    HEIGHT / 2,
    WIDTH * sizeEyeBg,
    2.5,
    255,
    255,
    255
  );
  eyeBg.update();
  eyeBg.display();

  // blink duration stop
  if (blinkEye && countTimeBlinkEye > durationBlinkEye * 1000) {
    eyeLidAngle = PI;
    blinkEye = false;
    countTimeBlinkEye = 0;
  }
  //   if the eye blink
  else if (countTimeBlinkEye > delayBlinkEye * 1000) {
    eyeLidAngle = 0;
    blinkEye = true;
    countTimeBlinkEye = 0;
    delayBlinkEye = floor(random(5, 10));
  }

  showEyeLid();
  //   adding appearing of eye every sec
  if (countTimeAddEye > delayCreateEye * 1000) {
    countTimeAddEye = 0;
  }

  eyeList.map((eye) => {
    eye.update();
    eye.display();
    eye.move();
  });

  deleteEyeFromEyeList();
}
function drawH (x,y){
  push();
  translate(x,y);
  circleB (10,10,0,1.0);
  pop();
}

function circleB(x, y, a, s) {
  push();
  translate(x, y);
  rotate(a);
  scale(s);
  fill('#F27289')
  textSize(20)
  text ('food!',10,10)
  fill('#A60303')
  ellipse(0, 0,10, 10);
  
  pop();
}

function deleteEyeFromEyeList() {
  eyeList = eyeList.filter((eye) => eye.x > 0 - eye.size / 4);
}


function showEyeLid() {
  strokeWeight(10);
  fill(colorEyeLidBg);
  arc(
    WIDTH / 2,
    HEIGHT / 2,
    WIDTH * 0.7 - 10,
    WIDTH * 0.7,
    eyeLidAngle,
    radians(360),
    CHORD
  );
}

class EyeBackground {
  constructor(x, y, size, distanceEyeFromCenter, r, g, b) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.distanceEyeFromCenter = distanceEyeFromCenter;
    this.r = r;
    this.g = g;
    this.b = b;
    this.blink = false;
    this.angle = PI;
  }

  update() {
    //     x of inner eye
    this.eyeX = (mouseX - this.x) / this.distanceEyeFromCenter;
    //     y of inner eye
    this.eyeY = (mouseY - this.y) / this.distanceEyeFromCenter;

    if (this.eyeY / 4 + this.y < this.y) {
      this.eyeY = 0;
    }

    if (mouseX > WIDTH) {
      this.eyeX = (WIDTH - this.x) / this.distanceEyeFromCenter;
    }
  }

  display() {
    strokeWeight(10);
    // Sclera
    fill(colorScleraBg);
    ellipse(this.x, this.y, this.size - 10, this.size - 10);
    // Iris
    fill(colorIrisBg);
    ellipse(this.eyeX + this.x, this.y, this.size / 3, this.size / 3);
    // Pupil
    strokeWeight(0);
    fill(colorPupilBg);
    ellipse(
      this.eyeX / 0.75 + this.x,
      this.eyeY / 4 + this.y,
      this.size / 10,
      this.size / 10
    );
  }
}

class Eye {
  constructor(x, y, size, speed, distanceEyeFromCenter, r, g, b, a) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.speed = speed;
    this.distanceEyeFromCenter = distanceEyeFromCenter;
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;
  }

  move() {
    this.x -= this.speed;
  }

  update() {
    //     x of inner eye
    this.eyeX = (mouseX - this.x) / this.distanceEyeFromCenter;
    //     y of inner eye
    this.eyeY = (mouseY - this.y) / this.distanceEyeFromCenter;

    if (mouseX > WIDTH) {
      this.eyeX = (WIDTH - this.x) / this.distanceEyeFromCenter;
    }
  }

  display() {
    strokeWeight(0);

    //  Sclera
    fill(this.r, this.g, this.b, this.a);
    ellipse(this.x, this.y, this.size / 4 - 10, this.size / 4 - 5);
    //   Iris
    fill(colorIris, this.a);
    ellipse(
      this.eyeX + this.x,
      this.eyeY + this.y,
      this.size / 10,
      this.size / 10
    );
    //  Pupil
    fill(colorPupil, this.a);
    ellipse(
      this.eyeX + this.x,
      this.eyeY + this.y,
      this.size / 30,
      this.size / 30
    );
  }
}

function fake(){
  $(".instruction").style.display = "block"
}

