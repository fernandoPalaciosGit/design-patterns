'use strict';

var _ = require('lodash'),
    chai = require('chai'),
    expect = chai.expect,
    Car = require('./../../../main/patterns/builder/app.module.Car'),
    CarDirector = require('./../../../main/patterns/builder/app.module.CarDirector'),
    OpelAstraBuilder = require('./../../../main/patterns/builder/app.module.CarBuilder').opelAstra,
    NissanCascaisBuilder = require('./../../../main/patterns/builder/app.module.CarBuilder').nissanCascais;

describe('Design patterns', function () {
    describe('Builder with factory', function () {
        var carDirector, opelAstraBuilder, nissanCascaisBuilder;

        before(function () {
            carDirector = new CarDirector();
            opelAstraBuilder = new OpelAstraBuilder();
            nissanCascaisBuilder = new NissanCascaisBuilder();
        });

        it('should create a Opel Astra', function (next) {
            var opel = carDirector.createCar(opelAstraBuilder);

            expect(opel).to.be.an.instanceof(Car);
            expect(opel).to.have.property('doors', 2);
            expect(opel).to.have.property('wheels', 4);
            expect(opel).to.have.property('color', 'yellow pomello');
            expect(opel).to.have.property('engineType', 'Rudolf Diésel');
            expect(opel).to.have.property('cylinder', 1600);
            expect(opel).to.have.property('HP', 120);
            expect(opel).to.have.property('abs', '120 secons');
            next();
        });

        it('should create a Nissan Cascais', function (next) {
            var nissan = carDirector.createCar(nissanCascaisBuilder);

            expect(nissan).to.be.an.instanceof(Car);
            expect(nissan).to.have.property('doors', 5);
            expect(nissan).to.have.property('wheels', 5);
            expect(nissan).to.have.property('color', 'green inferno');
            expect(nissan).to.have.property('engineType', 'atkinson biodiesel');
            expect(nissan).to.have.property('cylinder', 2100);
            expect(nissan).to.have.property('HP', 170);
            expect(nissan).to.have.property('gps', '4G');
            next();
        });

        it('should avoid contruct non valid car builders', function (next) {
            expect(_.partial(carDirector.createCar.bind(carDirector), Object.prototype.constructor))
                .to.throw(TypeError);
            next();
        });
    });
});
