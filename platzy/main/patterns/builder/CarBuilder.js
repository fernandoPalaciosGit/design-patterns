"use strict";

var OpelAstraBuilder, NissanCascaisBuilder, CarBuilder,
    createCar = require('Car'),
    _ = require('lodash');

CarBuilder = function (options) {
    this.car = createCar(options);
};

_.assign(CarBuilder.prototype, {
    getResultCar: function () {
        return this.car;
    }
});

OpelAstraBuilder = function () {
    CarBuilder.apply(this, arguments);
};

_.assign(OpelAstraBuilder.prototype, {
    assemble: function () {
        this.car.addBodyParts(2, 4, "yellow pomello");
        this.car.addEngineParts("Rudolf Diésel", 1600, 120);
    },
    addAssets: function () {
        this.car.abs = "120 secons";
    }
}, CarBuilder.prototype);

NissanCascaisBuilder = function () {
    CarBuilder.apply(this, arguments);
};

_.assign(NissanCascaisBuilder.prototype, {
    assemble: function () {
        this.car.addBodyParts(5, 5, "green inferno");
        this.car.addEngineParts("atkinson biodiesel", 2100, 170);
    },
    addAssets: function () {
        this.car.gps = "4G";
    }
}, CarBuilder.prototype);

module.exports = OpelAstraBuilder;
module.exports = NissanCascaisBuilder;