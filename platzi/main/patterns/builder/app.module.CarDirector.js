'use strict';

var CarDirector,
    CarBuilder = require('./app.module.CarBuilder').getConstructorBuilder(),
    _ = require('lodash');

CarDirector = function () {};

_.assign(CarDirector.prototype, {
    createCar: function (builderCar) {
        if (builderCar instanceof CarBuilder) {
            builderCar.assemble();
            builderCar.addAssets();
            return builderCar.getResultCar();

        } else {
            throw new Error({msg: 'Error Car builder type'});
        }
    }
});

module.exports = CarDirector;