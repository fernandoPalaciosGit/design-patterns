'use strict';

var Vehicle, Car, Sport, Truck, FactoryVehicle,
    _ = require('lodash');

Vehicle = function (options) {
    this.trasport = options.transport;
};

Car = function (options) {
    _.defaults(options, { transport: 'traction' });
    Vehicle.apply(this, options);
    this.paint = options.paint;
    this.doors = options.doors;
};

Car.prototype = _.create(Vehicle.prototype, {
    constructor: Car
});

Sport = function (options) {
    _.defaults(options, { transport: 'injection' });
    Vehicle.apply(this, options);
    this.turbo = options.turbo;
    this.tires = options.tires;
};

Sport.prototype = _.create(Vehicle.prototype, {
    constructor: Sport
});

Truck = function (options) {
    _.defaults(options, { transport: '4x4' });
    Vehicle.apply(this, options);
    this.capacity = options.capacity;
    this.tires = options.tires;
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
        return type.prototype.isPrototypeOf(this.vehicleType);
    },
    getVehicle: function (options) {
        if (this.checkFactory()) {
            return new this.vehicleType(options || {});

        } else {
            throw new TypeError('should initialize factory with own interface');
        }
    },
    setCarFactory: _.bindKey(FactoryVehicle.prototype, 'setFactoryVehicle', Car),
    setSportFactory: _.bindKey(FactoryVehicle.prototype, 'setFactoryVehicle', Sport),
    setTruckFactory: _.bindKey(FactoryVehicle.prototype, 'setFactoryVehicle', Truck),
    isCarFactory: _.bindKey(FactoryVehicle.prototype, 'checkFactory', Car),
    isSportFactory: _.bindKey(FactoryVehicle.prototype, 'checkFactory', Sport),
    isTruckFactory: _.bindKey(FactoryVehicle.prototype, 'checkFactory', Truck)
});

module.exports.getFactoryVehicle = function (options) {
    return new FactoryVehicle(options || {});
};
