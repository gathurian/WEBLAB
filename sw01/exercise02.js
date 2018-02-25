/*---------Closures------------*/
var myStack = [];

myStack.push = function (o) {
  myStack.push(o);
};

/*---------Object Hierarchies---------------*/
var Circle = {
    xPos: 0,
    yPos: 0,
    radius: 0
};

function Shape(xPos, yPos) {
    this.draw = function () {
        console.log("Shape at Position (" + Shape.xPos + "," + Shape.yPos + ")");
    }
}

function Rectangle(xPos, yPos, xLenght, yLength) {
    Shape.call(this)
    this.xPos = xPos;
    this.yPos = yPos;

}

Rectangle.draw();

function Circle(xPos, yPos, radius) {
    console.log("Circle at Position (" + Shape.xPos + "," + Shape.yPos + ") with radius " + Circle.radius);
}vi .