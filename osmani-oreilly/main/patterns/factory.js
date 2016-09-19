'use strict';

var Vehicle, Car, Sport, Truck, FactoryVehicle,
    _ = require('lodash');

Vehicle = function (options) {
    this.transport = options.transport;
};

Car = function (options) {
    var properties = _.defaults(options, { transport: 'traction' });

    Vehicle.call(this, properties);
    this.paint = properties.paint || null;
    this.doors = properties.doors || null;
};

Car.prototype = _.create(Vehicle.prototype, {
    constructor: Car
});

Sport = function (options) {
    var properties = _.defaults(options, { transport: 'injection' });

    Vehicle.call(this, properties);
    this.turbo = properties.turbo || null;
    this.tires = properties.tires || null;
};

Sport.prototype = _.create(Vehicle.prototype, {
    constructor: Sport
});

Truck = function (options) {
    var properties = _.defaults(options, { transport: '4x4' });

    Vehicle.call(this, properties);
    this.capacity = properties.capacity || null;
    this.tires = properties.tires || null;
};

Truck.prototype = _.create(Vehicle.prototype, {
    constructor: Truck
});

FactoryVehicle = function () {
    this.vehicleType = null;
};

_.assign(FactoryVehicle.prototype, {
    setFactoryVehicle: function (type) {
        this.vehicleType = type;
    },
    checkFactory: function () {
        return new this.vehicleType() instanceof Vehicle;
    },
    checkVehicleType: function (type) {
        return type.prototype.isPrototypeOf(new this.vehicleType());
    },
    getVehicle: function (options) {
        if (this.checkFactory()) {
            return new this.vehicleType(options);

        } else {
            throw new TypeError('should initialize factory with own interface');
        }
    },
    setCarFactory: function () {
        return this.setFactoryVehicle(Car);
    },
    setSportFactory: function () {
        return this.setFactoryVehicle(Sport);
    },
    setTruckFactory: function () {
        return this.setFactoryVehicle(Truck);
    },
    isCarFactory: function () {
        return this.checkVehicleType(Car);
    },
    isSportFactory: function () {
        return this.checkVehicleType(Sport);
    },
    isTruckFactory: function () {
        return this.checkVehicleType(Truck);
    }
});

module.exports.getFactoryVehicle = function (options) {
    return new FactoryVehicle(options || {});
};
