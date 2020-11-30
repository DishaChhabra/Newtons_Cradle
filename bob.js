class Bob{
    constructor(x,y){
         var options = {
                restitution: 0.8,
                friction: 0.7,
                density: 3,
                }
    this.body = Bodies.circle(x,y,20, options);
    World.add(world,this.body);
    }
    
    display(){
        ellipseMode(CENTER)
        fill("grey")
        ellipse(this.body.position.x, this.body.position.y, 50)
    }
    }
    