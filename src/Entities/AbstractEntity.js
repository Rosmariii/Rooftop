"use strict";
exports.__esModule = true;
var AbstractEntity = /** @class */ (function () {
    function AbstractEntity() {
    }
    AbstractEntity.prototype.setId = function (id) {
        return this.id = id;
    };
    AbstractEntity.prototype.getId = function () {
        return this.id;
    };
    return AbstractEntity;
}());
exports["default"] = AbstractEntity;
