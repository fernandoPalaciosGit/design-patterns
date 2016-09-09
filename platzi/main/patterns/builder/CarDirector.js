'use strict';

var CarDirector,
    isValidBuilder = require('./CarBuilder').isValidBuilder,
    _ = require('lodash');

CarDirector = function () {
};

_.assign(CarDirector.prototype, {
    createCar: function (builderCar) {
        if (isValidBuilder(builderCar)) {
            builderCar.assemble();
            builderCar.addAssets();

            return builderCar.getResultCar();

        } else {
            throw new TypeError('Invalid Car builder type.');
        }
    }
});

module.exports = CarDirector;
