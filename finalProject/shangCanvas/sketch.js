let img1;
let img2;
let img3;
let img4;
let pics = [];
let counter = 0;

function setup() {
  let c = createCanvas(400, 400);
  c.parent("canvasContainer");

  pics[0] = img1 = new Pic("img/c1.webp", 0);
  pics[1] = img2 = new Pic("img/c2.jpeg", 500);
  pics[2] = img3 = new Pic("img/c3.webp", 500*2);
  pics[3] = img4 = new Pic("img/c3.webp", 500*3);
}

function draw() {
  background(0);
  for (let i = 0; i < 4; i++) {
    if(pics[i].x2 != 0){
      pics[i].display();
      pics[i].move();
    }
  }
}

class Pic {
  constructor(imgLine, x) {
    this.x = x;
    this.y = 0;
    this.img = loadImage(imgLine);
    this.speedX = 3;
    this.x2 = 500+x
    this.oldx = x;
  }

  move() {
    this.x -= this.speedX;
    this.x2 -= this.speedX;
    
    if(this.x < -500)
      this.x = this.oldx;
  }

  display() {
    image(this.img, this.x, this.y, width, height);
  }
}
