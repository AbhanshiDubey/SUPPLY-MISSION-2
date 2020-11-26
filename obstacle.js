class Obstacle {

constructor(x,y,w,h){

 var option = {
  restitution : 0.5
            
  }

 this.body = Bodies.rectangle(x,y,20,h,option);
this.height = h ;
this.width = 20;

World.add(world,this.body);
    }

display () {
        //
  push ()
          //
 translate(this.body.position.x,this.body.position.y);
        // for rotating the second box.
 rotate (this.body.angle);
        
  rectMode(CENTER);
 rect(0,0,this.width,this.height);
        
          //
 pop ();
        }

}