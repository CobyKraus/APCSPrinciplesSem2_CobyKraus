/*
**  Ball Constructor Function
**  Coby Kraus
**  Aug 20, 2018
*/

function Ball(location, velocity, radius, col){
  // Instance variables
   this.loc = location;
   this.vel = velocity;
   this.rad = radius;
   this.col = col;
  // This function calls other functions
  this.run = function(){
    this.checkEdges();
    this.update();
    this.render();
  }
  // This function changes the location of the ball
  // by adding speed to x and y
   this.update = function(){
    this.loc.add(this.vel)
   }

   //checkEdges() reverses speed when the ball touches an edge
   this.checkEdges = function(){
     if(this.loc.x < 0) this.vel.x = -this.vel.x;
     if(this.loc.x > width) this.vel.x = -this.vel.x;
     if(this.loc.y < 0) this.vel.y = -this.vel.y;
     if(this.loc.y > height) this.vel.y = -this.vel.y;

   }

    // render() draws the ball at the new location
    this.render = function(){
       fill(220,0,220);
       if(this.loc.y>400 ){
       stroke(0,0,random(100,200)+this.loc.dist(this.vel))
       strokeWeight(random(1,5));
       line(this.loc.x, this.loc.y, 10, height/2);
     }
     if(this.loc.x>400){
     stroke(random(100,200)+this.loc.dist(this.vel),0,0)
     strokeWeight(random(1,5));
     line(this.loc.x, this.loc.y, width, height/2);
   }
     if(this.loc.y<400){
       stroke(random(100,200)+this.loc.dist(this.vel),random(100,200)+this.loc.dist(this.vel),random(100,200)+this.loc.dist(this.vel))
       strokeWeight(random(1,5));
       line(this.loc.x, this.loc.y, width/2, height/2);
     }
   //   if(this.loc.x>400){
   //   stroke(0,random(100,200)+this.loc.dist(this.vel),0)
   //   strokeWeight(random(1,5));
   //   line(this.loc.x, this.loc.y, 40, 40);
   // }
 }


 }
