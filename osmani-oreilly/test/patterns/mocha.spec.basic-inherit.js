'use strict';

describe('Design patterns', function () {
    var expect = require('chai').expect;

    context('Inherit prototype', function () {
        var car,
            createCar = require('./../../main/patterns/app.module.basic-inherit').createCar;

        before(function () {
            car = createCar();
        });

        it('should get an instance with prototype inheritance from superclass', function (next) {
            expect(car.checkVehicleType()).to.be.true;
            next();
        });

        it('should inherit prototype properties', function (next) {
            next();
        });

        it('should override inherit properties', function (next) {
            next();
        });
    });
});
