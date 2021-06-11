//creating the class chain
class Chain {
    //creating the constructor and adding parameters
    constructor(bodyA,bodyB){
        //inserting the properties for bodyA and bodyB in a Json format
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.04,
            length: 10
        }
        //creating the constraint chain and giving it a condition, the condition includes the properties inserted in the variable 'options' 
        this.chain = Constraint.create(options);
        //adding the constraint to physics world
        World.add(world, this.chain);
    }
    
    display(){
        //defining the the two points on the two bodies for the condition to take place
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;
        //adding a border
        strokeWeight(4);
        //declaring the x and y position on both the bodies
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}