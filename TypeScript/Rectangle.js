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
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(xPos, yPos, xLenght, yLength) {
        var _this = _super.call(this, xPos, yPos) || this;
        _this.xLength = xLenght;
        _this.yLength = yLength;
        _this.area = _this.xLength * _this.yLength;
        return _this;
    }
    Rectangle.prototype.draw = function () {
        console.log("Rectangle at " + this.xPos + "/" + this.yPos + " with lengths " + this.xLength + "/" + this.yLength + " and area " + this.area);
    };
    return Rectangle;
}(Shape));
