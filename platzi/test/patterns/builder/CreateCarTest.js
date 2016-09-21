'use strict';

var _ = require('lodash'),
    chai = require('chai'),
    expect = chai.expect,
    Car = require('./../../../main/patterns/builder/Car'),
    CarDirector = require('./../../../main/patterns/builder/CarDirector'),
    CarBuilder = require('./../../../main/patterns/builder/CarBuilder'),
    isValidBuilder = CarBuilder.isValidBuilder,
    OpelAstraBuilder = CarBuilder.opelAstra,
    NissanCascaisBuilder = CarBuilder.nissanCascais;

describe('Design patterns', function () {
    describe('Builder with factory', function () {
        var carDirector, opelAstraBuilder, nissanCascaisBuilder, carType, opel, nissan;

        before(function () {
            carDirector = new CarDirector();
            opelAstraBuilder = new OpelAstraBuilder();
            nissanCascaisBuilder = new NissanCascaisBuilder();
        });

        it('should create an instance type defined from director builder injector', function (next) {
            expect(isValidBuilder(opelAstraBuilder)).to.be.true;
            expect(opelAstraBuilder).and.to.be.an.instanceof(OpelAstraBuilder);

            expect(isValidBuilder(nissanCascaisBuilder)).to.be.true;
            expect(nissanCascaisBuilder).to.be.an.instanceof(NissanCascaisBuilder);

            carType = carDirector.createCar(opelAstraBuilder);
            expect(carType).to.be.an.instanceof(Car);

            carType = carDirector.createCar(nissanCascaisBuilder);
            expect(carType).to.be.an.instanceof(Car);
            next();
        });

        it('should avoid construct instance from a non valid builders', function (next) {
            expect(_.bindKey(carDirector, 'createCar', Object.prototype.constructor))
                .to.throw(TypeError);
            next();
        });

        it('should create an instance with properties from builder injector', function (next) {
            opel = carDirector.createCar(opelAstraBuilder);
            expect(opel).to.have.property('doors', 2);
            expect(opel).to.have.property('wheels', 4);
            expect(opel).to.have.property('color', 'yellow pomello');
            expect(opel).to.have.property('engineType', 'Rudolf Diésel');
            expect(opel).to.have.property('cylinder', 1600);
            expect(opel).to.have.property('HP', 120);
            expect(opel).to.have.property('abs', '120 secons');
            next();
        });

        it('should create an instance with properties from builder injector', function (next) {
            nissan = carDirector.createCar(nissanCascaisBuilder);
            expect(nissan).to.have.property('doors', 5);
            expect(nissan).to.have.property('wheels', 5);
            expect(nissan).to.have.property('color', 'green inferno');
            expect(nissan).to.have.property('engineType', 'atkinson biodiesel');
            expect(nissan).to.have.property('cylinder', 2100);
            expect(nissan).to.have.property('HP', 170);
            expect(nissan).to.have.property('gps', '4G');
            next();
        });
    });
});
