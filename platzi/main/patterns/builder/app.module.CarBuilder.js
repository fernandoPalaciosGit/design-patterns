'use strict';

var OpelAstra, NissanCascais, CarBuilder,
    createCar = require('./app.module.Car'),
    _ = require('lodash');

/**
 * Builder prototype SuperClass
 * @constructor
 */
CarBuilder = function (options) {
    this.car = createCar(options || {});
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
        this.car.addBodyParts(2, 4, 'yellow pomello');
        this.car.addEngineParts('Rudolf Diésel', 1600, 120);
    },
    addAssets: function () {
        this.car.abs = '120 secons';
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
        this.car.addBodyParts(5, 5, 'green inferno');
        this.car.addEngineParts('atkinson biodiesel', 2100, 170);
    },
    addAssets: function () {
        this.car.gps = '4G';
    }
});


module.exports = {
    opelAstra: OpelAstra,
    nissanCascais: NissanCascais,
    isValidBuilder: function (builder) {
        return builder instanceof CarBuilder.prototype.constructor;
    }
};
