class Rope {

    constructor(body1,body2,offsetX,offsetY){
  
        this.offsetX = offsetX
        this.offsetY = offsetY
          var options = {
          length : 10,
          stiffness : 0.04,
          body1 : body1,
          body2 : body2,
          }
  
          this.rope = Constraint.create(options);
          World.add(world,this.rope);
    }
  
   display(){
      var pointA = this.rope.bodyA.position;
      var  pointB = this.rope.bodyB.position;
      
      line (pointA.x, pointA.y, pointB.x, pointB.y);
  
  }
  
  
  
      }