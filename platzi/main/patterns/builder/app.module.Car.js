'use strict';

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

Car.prototype = _.create({
    constructor: Car,
    printEquipmentAsset: function (printer, key) {
        var msg  = !_.isString(printer) ? '' : printer;

        return msg += _.join(['-', key, ':', this[key], '\n'], '\s');
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

module.exports = Car;