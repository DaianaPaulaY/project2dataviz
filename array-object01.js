let bubbles = [];


function setup() {
  createCanvas(600, 400);

  for (let i = 0; i < 10; i++){
    // change position in a sequence
    //let x = 10 + 10*1;

    let x = random(width);
    let y = random(height);
    let r = random(10,40);
    bubbles[i] = new Bubble(x, y, r);
  }
}

function mouseDragged(){
  let r = random(0,50)
  let b = new Bubble(mouseX, mouseY, r);
  // push adds a new element in an array
  bubbles.push(b);
}

function draw() {
  background(0);

    for (let i = 0; i < bubbles.length; i++){
    bubbles[i].show();
    bubbles[i].move();
  }
}

class Bubble {
  constructor(tempX, tempY, tempR) {
    this.x = tempX;
    this.y = tempY;
    this.r = tempR;
  }
  
  move(){
    this.x = this.x + random(-5, 5);
    this.y = this.y + random(-5, 5);
  }
  
  show() {
    stroke(255);
    strokeWeight(4);
    noFill();
    ellipse(this.x, this.y, this.r * 2);
  }

}
