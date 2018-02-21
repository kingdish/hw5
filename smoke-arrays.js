var x = 210;
var y = 290;
var r = 0;
var xArr = [];
var yArr = [];
var rArr = [];
var xSpeed = 0;

function setup() {
  createCanvas(400, 400);
  for (var i = 0; i < 100; i += 1) {
  	xArr[i] = random(x - 30, x + 30);
    yArr[i] = random(y, y + 40);
    rArr[i] = 0;
  }
}
  
function draw() {
  background(0);
  noStroke();
  fill(255);
  rect(195, height, 30, -100);
	for (var i = 0; i < 100; i += 1) {
    // save graphics state
    push();
    // darker as it gets closer to 0
    fill(yArr[i]);
    // rotate r around (x,y)
    translate(xArr[i], yArr[i]);
    rotate(rArr[i]);
    // draw rectangle
    rect(-10, -10, 20, 20);
    // reset rotation and translation
    pop();

    // up 3 pixels
    yArr[i] -= random(1, 3);

    // rotate 0.05 radians ~= 2.8 degrees per frame
    rArr[i] += 0.05

    // if reach past the top a bunch
    if (yArr[i] < -150) {
      yArr[i] = 290;
    }
  }
}
