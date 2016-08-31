'use strict';

var OpelAstra, NissanCascais, CarBuilder,
    Car = require('./app.module.Car'),
    _ = require('lodash'),
    OPEL_ASTRA_PROPERTIES = {
        body: [2, 4, 'yellow pomello'],
        engine: ['Rudolf Diésel', 1600, 120],
        abs: '120 secons'
    },
    NISSAN_CASCAIS_PROPERTIES = {
        body: [5, 5, 'green inferno'],
        engine: ['atkinson biodiesel', 2100, 170],
        gps: '4G'
    };

/**
 * Builder prototype SuperClass
 * @constructor
 */
CarBuilder = function (options) {
    this.car = new Car(options || {});
};

_.assign(CarBuilder.prototype, {
    getResultCar: function () {
        return this.car;
    }
});

/**
 * Car Builder prototype
 * @constructor
 */
OpelAstra = function () {
    CarBuilder.apply(this, arguments);
};

OpelAstra.prototype = _.create(CarBuilder.prototype, {
    constructor: OpelAstra,
    assemble: function () {
        this.car.addBodyParts.apply(this.car, OPEL_ASTRA_PROPERTIES.body);
        this.car.addEngineParts.apply(this.car, OPEL_ASTRA_PROPERTIES.engine);
    },
    addAssets: function () {
        this.car.abs = OPEL_ASTRA_PROPERTIES.abs;
    }
});

/**
 * Car Builder prototype
 * @constructor
 */
NissanCascais = function () {
    CarBuilder.apply(this, arguments);
};

NissanCascais.prototype = _.create(CarBuilder.prototype, {
    constructor: NissanCascais,
    assemble: function () {
        this.car.addBodyParts.apply(this.car, NISSAN_CASCAIS_PROPERTIES.body);
        this.car.addEngineParts.apply(this.car, NISSAN_CASCAIS_PROPERTIES.engine);
    },
    addAssets: function () {
        this.car.gps = NISSAN_CASCAIS_PROPERTIES.gps;
    }
});

module.exports = {
    opelAstra: OpelAstra,
    nissanCascais: NissanCascais,
    isValidBuilder: function (builder) {
        return builder instanceof CarBuilder.prototype.constructor;
    }
};
