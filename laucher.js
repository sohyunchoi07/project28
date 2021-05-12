class launcher{
    constructor(bodyA,pointB){
        var options={
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length: 10
        }
        this.pointB = pointB;
        this.stoneObj = Constraint.create(options);
        World.add(world,this.stoneObj);
    }
    display(){
        if(this.stoneObj.bodyA){
        var pointA=this.stoneObj.bodyA.position;
        var pointB=this.pointB;
        strokeWeight(4);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
    }
    fly(){
        this.launcher.bodyA = null;
    }
    attach(){
        this.launcher.bodyA = null;
    }
}