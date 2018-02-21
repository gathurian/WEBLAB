/*---------Closures------------*/
var myStack = [];

myStack.push = function (o) {
  myStack.push(o);
};

/*---------Object Hierarchies---------------*/
var Shape = {
    xPos: 0,
    yPos: 0

};
var Rectangle(xPos, yPos, xLength, yLength)= {
    xPos: 0,
    yPos: 0
    xLength: 0
};
var Circle = {
    xPos: 0,
    yPos: 0,
    radius: 0
};

Shape.draw = function () {
    console.log("Shape at Position (" + Shape.xPos + "," + Shape.yPos + ")");

};

