'use strict';

describe('Design patterns', function () {
    var expect = require('chai').expect;

    context('Inherit prototype', function () {
        var car,
            createCar = require('./../../main/patterns/basic-inherit').createCar;

        before(function () {
            car = createCar();
        });

        it('should get an instance with properties inheritance from superclass', function (next) {
            expect(car.checkVehicleType()).to.be.true;
            expect(car).to.have.ownProperty('color');
            expect(car).to.have.ownProperty('model');
            expect(car).to.have.ownProperty('distributor');
            expect(car).to.have.ownProperty('aviableLicence');
            next();
        });

        it('should get an instance with prototype inheritance from superclass', function (next) {
            expect(car.checkVehicleType()).to.be.true;
            expect(car).to.have.property('setColor').that.is.a('function');
            expect(car).to.have.property('setModel').that.is.a('function');
            expect(car).to.have.property('checkVehicleType').that.is.a('function');
            next();
        });

        it('should initialize inheritance properties', function (next) {
            expect(car).to.have.property('model', null);
            expect(car).to.have.property('aviableLicence', false);
            car = createCar({
                color: 'blue',
                distributor: 'Opel',
                model: 'Astra',
                isAviableLicence: true
            });
            expect(car).to.have.property('color', 'blue');
            expect(car).to.have.property('distributor', 'Opel');
            expect(car).to.have.property('model', 'Astra');
            expect(car).to.have.property('aviableLicence', true);
            car.setModel('Corsa');
            expect(car).to.have.property('model', 'Corsa');
            next();
        });
    });
});
