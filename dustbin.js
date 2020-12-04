class Dustbin{

    constructor(x, y){
        this.x=x;
        this.y=y;
        this.dustbinWidth=200;
        this.dustbinHeight=100;
        this.wallThickness=200;
        this.angle=0;
        
        this.bottomBody=Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.dustbinHeight,{isStatic:true})
        this.leftWallBody=Bodies.rectangle(this.x-this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness)
        Matter.Body.setAngle(this.leftWallBody, this.angle);

        this.rightWallBody=Bodies.rectangle(this.x+this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness)
        Matter.Body.setAngle(this.rightWallBody, -1*this.angle);
        World.add(world, this.bottomBody)
        World.add(world, this.leftWallBody)
        World.add(world, this.rightWallBody);

    }
    display(){
        var posBottom = this.bottomBody.position;
        var posLeft = this.leftWallBody.position;
        var posRight = this.rightWallBody.position;

        push()
        translate(posRight.x, posRight.y);
        rectMode(CENTER)
        strokeWeight(4);
        stroke("red");
        angleMode(RADIANS)
        fill("red")
        rotate(-1*this.angle)
        rect(0, 0, this.wallThickness, this.dustbinHeight);
        pop() 
    }
}