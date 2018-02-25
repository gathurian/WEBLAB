/*-----------Variable Definitions--------------*/
var a = 1;
var b = 1.1;
var c = true;
var d = "foo";
var e = new Object();
var f = [1, 2, 3, 4];
var g = [2, 3, new Object(), 5];
var h = function (a,b) {
    return a*b;
};

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);
console.log(typeof e);
console.log(typeof f);
console.log(typeof g);
console.log(typeof h);

console.log("");

/* --------------Array Definitions--------------*/
var colours = ["red", "green", "blue", "yellow"];

for(var i = 0; i<colours.length; i+=1) {
    console.log(colours[i]);
}

colours.push("orange");

console.log("");


var allColours = "";
for (var i = 0; i<colours.length; i++){
    allColours += colours[i] + " ";
}

console.log(allColours);
console.log("");

var sortedColours = colours.sort();
for(var i = 0; i<colours.length; i+=1) {
    console.log(sortedColours[i]);
}
console.log("");


/*--------------Arrays--------------------*/
var array = [1, 2, 3, 4];
var reducer = function (a,b) {
    return a +(Math.pow(b,2));
};

console.log(array.reduce(reducer));
console.log("");


/*---------------Constructors------------------*/
var listProperties = function (o) {
    var vals = Object.keys(o).map(function(key) {
        return o[key];
    });

    console.log(vals);
    console.log("");
};

const object = {
    name: "weblab",
    ects: 3,
    day: "tuesday",
    time: "15.40-18.00"
};

listProperties(object);

var date = new Date(2018,02,21,18,07);
console.log(date);
console.log("");

var object2 = new Object("This is an Object");
console.log(object2);
console.log("");

function Interval(smallerNumber, biggerNumber) {
    this.smallNumber = smallerNumber;
    this.bigNumber = biggerNumber;
    this.isInside = function (number) {
        return smallerNumber < number < biggerNumber;
    };
};

var myInterval = new Interval(4,10);
console.log(myInterval.isInside(6));




/*---------------Functions---------------*/
function Mult(a, b){
    return a*b;
};

var MultVar = function (a,b) {
    return a*b;
};

console.log(Mult(3,4));
console.log(MultVar(3,4));
console.log("");

var Factorial = function (a) {
    if(a == 0){
        return 1;
    }
    else {
        return a*Factorial(a-1);
    }

};
console.log(Factorial(10));

/*TODO: Finish this
var FactorialMemoization(a){
    var memo = [0];
}
*/
