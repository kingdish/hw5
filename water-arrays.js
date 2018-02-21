var x = 230;
var y = 220;
var dropsPosY = [];
var dropsVelY = [];

function setup() {
  createCanvas(400, 400);
  colorMode(HSB)
  for (var i = 0; i < 50; i += 1) {
    dropsPosY[i] = random(y, height * 2);
  	dropsVelY[i] = random(3, 8);
  }
}
  
function draw() {
  background(0);
  noStroke();
  rect(0, 200, x, 20);

  for (var i = 0; i < 50; i += 1) {
  	ellipse(x, dropsPosY[i], 10);
    dropsPosY[i] += dropsVelY[i];
    if (dropsPosY[i] > height*2) {
      dropsPosY[i] = 220;
    }
  }
}
