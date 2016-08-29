'use strict';

/**
 * Vehicle
 * @constructor
 */
var Vehicle = function (options) {
    this.distributor = options.distributor || null;
    this.aviableLicence = options.isAviableLicence || false;
};

Vehicle.prototype.enableLicence = function (isValid) {
    this.aviableLicence = isValid;
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
    this.model = options.model || null;
};

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.setModel = function (model) {
    this.model = model;
};
Car.prototype.constructor = Car;

module.exports.createCar = function (options) {
    return new Car(options || {});
};
