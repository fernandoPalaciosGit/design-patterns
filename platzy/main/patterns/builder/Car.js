"use strict";

var Car,
    _ = require('lodash');


Car = function (options) {
    this.doors = options.doors;
    this.wheels = options.wheels;
    this.color = options.color;
    this.engineType = options.engineType;
    this.cylinder = options.cylinder;
    this.HP = options.HP;
};

_.assign(Car.prototype, {
    printEquipmentAsset: function (printer, key) {
        return printer += _.join(['-', key, ':', this[key], '\n'], '\s');
    },
    printEquipmentList: function (printer) {
        return _.reduce(Object.getOwnPropertyNames(this), this.printEquipmentAsset, printer, this);
    },
    addBodyParts: function (doors, wheels, color) {
        this.doors = doors;
        this.wheels = wheels;
        this.color = color;
    },
    addEngineParts: function (engineType, cylinder, HP) {
        this.engineType = engineType;
        this.cylinder = cylinder;
        this.HP = HP;
    }
});

module.exports = function (options) {
    return new Car(options);
};