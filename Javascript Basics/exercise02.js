
// strict mode Version der Sprache
"use strict";

console.log("\nStart of Script \n ")


/*
Erzeugen Sie ein Objekt myStack, dass die Methoden push() und pop() enthält,
 um Objekte zu einem Stack hinzuzufügen und wieder zu entfernen.
Der eigentliche Stack sollte nur über dieses Objekt zugreifbar sein.

 */
var myStack = (
    function() {
        var Stack = [];
        return {
            push: function (obj) {
                Stack.push(obj);
            },
            pop: function () {
                return Stack.pop();
            }
        };
    }
);

/*
    Erzeugen Sie eine Hierarchie von zeichenbaren Objekten Shape, Rectangle und Circle.
    Alle Objekte haben eine Position x und y, sowie eine Methode draw, die ausgibt welches Objekte
    mit welchen Attributen gezeichnet wird. I.e. Circle at Position (2, 3) mit Radius 5..
    Definieren Sie Konstruktoren für Ihre Objekte und fügen sie die notwendigen Attribute und Funktionen hinzu.
*/
function Shape(x, y) {
    this.x = x;
    this.y = y;
}

function Circle(x, y, r){
    this.circle = new Shape(x, y);
    this.radius = r;
    this.draw = function() {
        console.log("Circle at Position (" + this.circle.x + ", " + this.circle.y + ") with radius " + this.radius);
    }
}

var circle = new Circle(1, 1, 2);
circle.draw();

function Rectangle(x, y, a, b){
    this.rectangle = new Shape(x, y);
    this.a = a;
    this.b = b;
    this.draw = function() {
        console.log("Rectangle at Position (" + this.rectangle.x + ", " + this.rectangle.y +
            ") with side a = " + this.a + " and side b = " + this.b);
    }
}

var rectangle = new Rectangle(2, 2, 3, 4);
rectangle.draw();

/*
    Derived Properties. Fügen Sie ein Property area hinzu, das abgefragt werden kann.
    Der Wert des Properties soll aus den anderen Properties des Objekts berechnet werden.
*/

/*Auf Rectangle.propotype, da die Funktion dann auf ALLEN Rectangles, die jemals erstellt werden könnten verfügbar ist*/
Rectangle.prototype.area = function() {
    return this.a * this.b;
};

console.log("Area is " + rectangle.area());


/*
    Serialisieren Sie die Objekte in JSON.
    Stellen Sie sicher, dass das Read-Only Property area nicht serialisiert wird.

    Was ist der Unterschied zwischen Objekt-Hierarchien in JavaScript und Vererbung in anderen OO Programmiersprachen? Was sind die Vor- und Nachteile?


 */
var myJSON = JSON.stringify(rectangle);
console.log(myJSON);


console.log("\nEnd of Script\n ");


