//  Global variables
var balls = [];
var toggle = true;
// put setup code here
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20,20,20);
  loadBalls(20);  //  !!!!!!!!!!  this is a function call
}

function draw() {
  if(toggle === true){
  background(20,20,20,5);
  for(var i = 0; i < balls.length; i = i + 1){
    balls[i].run();
  }
}
if (mouseIsPressed){
  toggle = false;
}
}

function loadBalls(numBalls){

    for(var i = 0; i < numBalls; i++){
        var loc = createVector(random(width), random(height));
        var vel = createVector(random(-5,5), random(-5,5));
        var radius = random(1,400);
        var col = color(random(255), random(255), random(255));

        balls.push(new Ball(loc, vel, radius, col));

    }

}
