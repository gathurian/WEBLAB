class Circle extends Shape{
    xPos: number;
    yPos: number;
    radius: number;

    constructor(xPos: number, yPos: number, radius: number){
        super(xPos, yPos);
        this.radius = radius;
    }

    draw(){
        console.log("Circle at " + this.xPos + "/" + this.yPos + " with radius " + this.radius);
    }

}