var Typescript = /** @class */ (function () {
    function Typescript(version) {
        this.version = version;
    }
    Typescript.prototype.info = function (name) {
        return "[".concat(name, "]: Typescript version is ").concat(this.version);
    };
    return Typescript;
}());
// class Car {
//   readonly model: string;
//   readonly number_of_wheels: number = 4;
//   constructor(the_model: string) {
//     this.model = the_model;
//   }
// }
var Car = /** @class */ (function () {
    function Car(model) {
        this.model = model;
        this.number_of_wheels = 4;
    }
    return Car;
}());
var Model = /** @class */ (function () {
    function Model(model) {
        this.model = model;
    }
    Model.prototype.get_model = function () {
        return this.model;
    };
    return Model;
}());
var model = new Model("BMW");
console.log(model.get_model());
