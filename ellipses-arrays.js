var XPosArr = [];
var YPosArr = [];
var dArr = [];
var colorArr = [];

function setup() {
  createCanvas(400, 400);
  colorMode(HSB)
  for (var i = 0; i < 50; i += 1) {
  	XPosArr[i] = random(0, width);
    YPosArr[i] = random(0, height);
    dArr[i] = random(5, 20);
    colorArr[i] = color(random(255), random(100), random(100));
  }
}
  
function draw() {
  background(255);
  noStroke();
	for (var i = 0; i < 50; i += 1) {
    fill(colorArr[i]);
  	ellipse(XPosArr[i], YPosArr[i], dArr[i]);
  }
  // 0.1% of the time
  for (var i = 0; i < 50; i += 1) {
    if (random() < 0.001) {
      XPosArr[i] = random(0, width);
    	YPosArr[i] = random(0, height);
    	dArr[i] = random(5, 20);
    }
  }
}
