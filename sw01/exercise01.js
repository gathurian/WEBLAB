/*Variable Definitions*/
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

/* Array Definitions */
var colours = ["red", "green", "blue", "yellow"];
colours.push("orange");

for(var i = 0; i<colours.length; i+=1) {
    console.log(colours[i]);
}

var allColours = "";
for (var i = 0; i<colours.length; i++){
    allColours += colours[i] + " ";
}

console.log(allColours);
var sortedColours = colours.sort();
for(var i = 0; i<colours.length; i+=1) {
    console.log(colours[i]);
}

/*Arrays */
var array = [1, 2, 3, 4];
var reducer = function (a,b) {
    return a +(Math.pow(b,2));
};

console.log(array.reduce(reducer));

/*Constructors*/
var listProperties = function (o) {


};


