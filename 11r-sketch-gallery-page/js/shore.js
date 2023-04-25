let particles = [];
let particles2 = [];

function setup() {
  let canvas = createCanvas(800, 400);
  canvas.parent(one);
  let numOfp = width + 50;
  for (let i = 0; i < numOfp + 100; i++) {
    particles[i] = new WaveParticle(random(width), random(height * 0.8));
  }

  for (let j = 0; j < numOfp; j += 5) {
    for (let m = 0; m < height * 0.5; m += 15) {
      particles2.push(new WaveParticle(j, m));
    }
  }
}

function draw() {
  let c1 = color(255);
  let c2 = color(255, 242, 148);

  for (let y = 0; y < height; y++) {
    let n = map(y, 0, height, 0, 1);
    let newc = lerpColor(c1, c2, n);
    stroke(newc);
    line(0, y, width, y);
  }

  for (let i = 0; i < particles.length; i++) {
    let p = particles[i];
    p.show();
    p.move();
    p.update();
  }

  for (let i = 0; i < particles2.length; i++) {
    let p2 = particles2[i];
    p2.show();
    p2.moveInPlace();
  }

  for (let i = 0; i < particles.length; i++) {
    if (mouseIsPressed) {
      if (mouseY > height * 0.4) {
        particles[i].update(mouseX, mouseY);
      }
      if (mouseY > height * 0.75) {
        step();
      }
    }
    if (particles[i].over()) {
      particles.splice(i, 1);
    }
    if (keyIsPressed) {
      if (key == "s") {
        particles[i].slowDown();
      }
      if (key == "r") {
        particles[i].speedUp();
      }
    }
  }
  for (let j = 0; j < particles2.length; j++) {
    if (mouseIsPressed) {
      if (mouseY > height * 0.4) {
        particles2[j].update(mouseX, mouseY);
      }
    }
    if (particles2[j].over()) {
      particles2.splice(j, 1);
    }
  }
}

function step() {
  noStroke();
  fill(116, 114, 83);
  ellipse(mouseX, mouseY, 50, 70);
}

class WaveParticle {
  constructor(x, y, c) {
    this.x = x;
    this.y = y;
    this.s = random(10, 35);
    this.opacity = random(20, 128);
    this.opacity2 = random(80, 150);
    this.speedY = 3;
    this.shoreline = height * 0.75;
    this.threshhold = 40;
    this.mDist = 150;
    this.oldX = x;
    this.oldY = y;
    this.r = random(20, 30);
    (this.g = random(40, 140)), (this.b = random(180, 240));
  }

  show() {
    push();
    if (this.opacity <= 0) {
      return;
    }
    noStroke();
    if (this.y > height * 0.6) {
      fill(255, this.opacity2);
    } else {
      fill(this.r, this.g, this.b, this.opacity);
    }
    translate(this.x, this.y);
    circle(0, 0, this.s);
    pop();
  }
  move() {
    this.x += random(-1, 1);

    if (this.y > this.shoreline || this.y < 0) {
      this.speedY = -this.speedY;
    }
    this.y += this.speedY;
  }
  slowDown() {
    this.speedY = this.speedY * 0.9;
  }

  speedUp() {
    this.speedY = this.speedY * 1.5;
  }
  moveInPlace() {
    this.x += random(-2, 2);
    this.y += random(-2, 2);
  }

  //moves away
  update(targetX, targetY) {
    let mouseDistance = dist(this.x, this.y, targetX, targetY);
    if (mouseDistance <= this.threshhold) {
      this.x += random(-this.mDist, this.mDist);
      this.y += random(-this.mDist, this.mDist);
    }
  }

  over() {
    if (this.y > height * 0.8) {
      return true;
    }
    else{
      return false;
    }
  }
}
