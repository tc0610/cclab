//alert('Hello');

function setup(){
    let canvas = createCanvas(400,400);
    canvas.parent("canvasContainer");
}

function draw(){
    background(120,120,120);
    for(i=0; i<50; i++){
        noStroke();
        fill(random(255),random(255),random(255));
        circle(random(width), random(height), 100);
    }
    
    
}