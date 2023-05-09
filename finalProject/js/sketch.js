let img1;
let img2;
let img3;
let img4;
let img5;
let img6;
let img7;
let img8;
let img9;
let img10;
let pics = [];
let counter = 0;

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.id("p5canvas");
  canvas.parent("p5-canvas-container");
  canvas.position(0,0);
  canvas.style('z-index', '-3');
  //img1 = loadImage("img/p1.jpeg");

  pics[0] = img1 = new Pic("img/p1.jpeg", 0);
  pics[1] = img2 = new Pic("img/p2.jpeg", 1069);
  pics[2] = img3 = new Pic("img/p3.jpeg", 1069*2);
  pics[3] = img4 = new Pic("img/p4.jpeg", 1069*3);
  pics[4] = img5 = new Pic("img/p5.jpeg", 1069*4);
  pics[5] = img6 = new Pic("img/p6.jpeg", 1069*5);
  pics[6] = img7 = new Pic("img/p7.jpeg", 1069*6);
  pics[7] = img8 = new Pic("img/p8.jpeg", 1069*7);
  pics[8] = img8 = new Pic("img/p9.jpeg", 1069*8);
  pics[9] = img8 = new Pic("img/p10.jpeg", 1069*9);
  pics[10] = img8 = new Pic("img/p12.jpeg", 1069*10);
  pics[11] = img8 = new Pic("img/p13.jpeg", 1069*11);
  pics[12] = img8 = new Pic("img/p14.jpeg", 1069*12);
  pics[13] = img8 = new Pic("img/p15.jpeg", 1069*13);
  pics[14] = img8 = new Pic("img/p16.jpeg", 1069*14);
  pics[15] = img8 = new Pic("img/p17.jpeg", 1069*15);
  pics[16] = img8 = new Pic("img/p18.jpeg", 1069*16);
  pics[17] = img8 = new Pic("img/p19.jpeg", 1069*17);
  pics[18] = img8 = new Pic("img/p20.jpeg", 1069*18);
  pics[19] = img8 = new Pic("img/p21.jpeg", 1069*19);
  pics[20] = img8 = new Pic("img/p22.jpeg", 1069*20);
  pics[21] = img8 = new Pic("img/p23.jpeg", 1069*21);
}

function draw() {
  background(0);
  for (let i = 0; i < 22; i++) {
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
    this.speedX = 5;
    this.x2 = 1069+x
    this.oldx = x;
  }

  move() {
    this.x -= this.speedX;
    this.x2 -= this.speedX;
    
    if(this.x < -1069)
      this.x = this.oldx;
  }

  display() {
    image(this.img, this.x, this.y, this.img.width,windowHeight);
  }
}

