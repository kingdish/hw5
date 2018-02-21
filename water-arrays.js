var x = 230;
var y = 220;
var dropsPosX = [];
var dropsPosY = [];
var dropsVelY = [];
var dropsVelX = [];

function setup() {
  createCanvas(400, 400);
  colorMode(HSB)
  for (var i = 0; i < 50; i += 1) {
    dropsPosX[i] = x;
    dropsPosY[i] = random(y, height * 2);
  	dropsVelY[i] = random(3, 8);
    dropsVelX[i] = random(-0.5, 0.5);
  }
}
  
function draw() {
  background(0);
  noStroke();
  rect(0, 200, x, 20);

  for (var i = 0; i < 50; i += 1) {
  	ellipse(dropsPosX[i], dropsPosY[i], 10);
    dropsPosY[i] += dropsVelY[i];
    dropsPosX[i] += dropsVelX[i];
    if (dropsPosY[i] > height*2) {
      dropsPosY[i] = 220;
      dropsPosX[i] = x;
    }
  }
}
