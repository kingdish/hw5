//circles constrained in a centered circle with a radius of 150
var XPosArr = [];
var YPosArr = [];
var dArr = [];
var colorArr = [];
var radius = 150;

function setup() {
  createCanvas(400, 400);
  colorMode(HSB)
  for (var i = 0; i < 50; i += 1) {
    var r = random(0, radius);
    var theta = random(0, 6.283);
    XPosArr[i] = Math.cos(theta) * r + width/2;
    YPosArr[i] = Math.sin(theta) * r + height/2;
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
      var r = random(0, radius);
      var theta = random(0, 6.283);
      XPosArr[i] = Math.cos(theta) * r + width/2;
    	YPosArr[i] = Math.sin(theta) * r + height/2;
    	dArr[i] = random(5, 20);
    }
  }
}
