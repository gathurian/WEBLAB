class Rectangle extends Shape{
    xPos: number;
    yPos: number;
    xLength: number;
    yLength: number;
    area: number;

    constructor(xPos: number, yPos: number, xLenght: number, yLength: number){
        super(xPos, yPos);
        this.xLength = xLenght;
        this.yLength = yLength;
        this.area = this.xLength * this.yLength;
    }

    draw(){
        console.log("Rectangle at " + this.xPos + "/" + this.yPos + " with lengths " + this.xLength + "/" + this.yLength + " and area " + this.area);
    }

}