
let img1;
let img2;
let pics = [];
let counter = 0;
let picw = 1167;

function setup() {
  let c = createCanvas(400, 400);
  c.parent("canvasContainer");
  pics[0] = img1 = new Pic("img/z1.png", 0);
  pics[1] = img2 = new Pic("img/z2.png", picw);
 
}

function draw() {
  background(0);
  for (let i = 0; i < 2; i++) {
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
    this.speedX = 2;
    this.x2 = 600+x
    this.oldx = x;
  }

  move() {
    this.x -= this.speedX;
    this.x2 -= this.speedX;
    
    if(this.x < -600)
      this.x = this.oldx;
  }

  display() {
    image(this.img, this.x, this.y, 600, 400);
  }
}
