var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(xPos, yPos, radius) {
        var _this = _super.call(this, xPos, yPos) || this;
        _this.radius = radius;
        return _this;
    }
    Circle.prototype.draw = function () {
        console.log("Circle at " + this.xPos + "/" + this.yPos + " with radius " + this.radius);
    };
    return Circle;
}(Shape));
