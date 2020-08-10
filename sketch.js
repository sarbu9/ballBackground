let col = 0;
let bubble1;
let bubble2;

function setup() {
  createCanvas(400, 400);
  bubble1 = new Bubble(200, 100, 100, 80);
  bubble2 = new Bubble(100, 200, 100, 50);
}

function draw() {
  background(col);
  bubble1.show();
  bubble1.move();
  bubble1.edge();
  bubble1.background();
  bubble2.show();
  bubble2.move();
  bubble2.edge();

}

class Bubble{
  constructor(r, g, b, size){
    this.circleX = 0;
    this.circleY = 200;
    this.r = r;
    this.g = g;
    this.b = b;
    this.size = size;
  }
  show(){
    fill(this.r, this.g, this.b);
    ellipse(this.circleX, this.circleY, this.size, this.size);
  }
  move(){
    this.circleX += random(-15, 19);
    // this.circleY += random(-5, 5);
  }
  edge(){
    if(this.circleX >= width){
      this.circleX = 0;
    }
  }
  background(){
    col = map(this.circleX, 0, width, 0, 255);
  }
}