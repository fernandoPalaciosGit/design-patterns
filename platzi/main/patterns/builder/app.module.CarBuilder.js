'use strict';

var OpelAstra, NissanCascais, CarBuilder,
    createCar = require('./app.module.Car'),
    _ = require('lodash');

CarBuilder = function (options) {
    this.car = createCar(options || {});
};

_.assign(CarBuilder.prototype, {
    getResultCar: function () {
        return this.car;
    }
});

OpelAstra = function () {
    CarBuilder.apply(this, arguments);
};

_.assign(OpelAstra.prototype, {
    assemble: function () {
        this.car.addBodyParts(2, 4, 'yellow pomello');
        this.car.addEngineParts('Rudolf Diésel', 1600, 120);
    },
    addAssets: function () {
        this.car.abs = '120 secons';
    }
}, CarBuilder.prototype);

NissanCascais = function () {
    CarBuilder.apply(this, arguments);
};

_.assign(NissanCascais.prototype, {
    assemble: function () {
        this.car.addBodyParts(5, 5, 'green inferno');
        this.car.addEngineParts('atkinson biodiesel', 2100, 170);
    },
    addAssets: function () {
        this.car.gps = '4G';
    }
}, CarBuilder.prototype);

module.exports = {
    opelAstra: OpelAstra,
    nissanCascais: NissanCascais,
    getConstructorBuilder: function () {
        return CarBuilder.constructor;
    }
};
