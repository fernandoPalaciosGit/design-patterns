'use strict';

/**
 * Vehicle
 * @constructor
 */
var Vehicle = function (options) {
    this.model = options.model || null;
    this.distributor = options.distributor || null;
    this.aviableLicence = options.isAviableLicence || false;
};

Vehicle.prototype.setModel = function (model) {
    this.model = model;
};

Vehicle.prototype.checkVehicleType = function () {
    return this instanceof Vehicle;
};

/**
 * Car
 * @constructor
 */
var Car = function (options) {
    Vehicle.apply(this, arguments);
    this.color = options.color || null;
};

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.setColor = function (color) {
    this.color = color;
};
Car.prototype.constructor = Car;

module.exports.createCar = function (options) {
    return new Car(options || {});
};
