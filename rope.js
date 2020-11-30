class Rope{
    constructor(bodyA, pointB){
    
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.3
        }
        this.sling = Constraint.create(options);   
        this.pointB = pointB
        World.add(world, this.sling);
    }

    display(){
        push()
        fill("black")
        strokeWeight(3)
        line(this.sling.bodyA.position.x, this.sling.bodyA.position.y,this.pointB.x, this.pointB.y)
        pop()
    }
}