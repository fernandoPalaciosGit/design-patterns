'use strict';

var CarDirector,
    _ = require('lodash');

CarDirector = function () {};

_.assign(CarDirector.prototype, {
    createCar: function (builderCar) {
        builderCar.assemble();
        builderCar.addAssets();
        return builderCar.getResultCar();
    }
});

module.exports = function (options) {
    return new CarDirector(options);
};