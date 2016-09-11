'use strict';

describe('Design patterns', function () {
    var expect = require('chai').expect;

    context('Factory (Creational class pattern)', function () {
        var factory = require('./../../main/patterns/factory'), vehicleFactory/*, turism, corvette, tractor*/;

        before(function () {
            vehicleFactory = factory.getFactoryVehicle();
        });

        it('should create instance from factory listed', function (next) {
            expect(vehicleFactory).to.have.property('vehicleType').to.be.null;
            vehicleFactory.setCarFactory();
            expect(vehicleFactory).to.have.property('vehicleType').to.not.be.null;
            /*
            expect(vehicleFactory.isCarFactory()).to.be.true;
            turism = vehicleFactory.getVehicle({ paint: 'red', doors: 3 });
            expect(turism).to.have.property('transport', 'traction');
            expect(turism).to.have.property('paint', 'red');
            expect(turism).to.have.property('doors', 3);
            vehicleFactory.setSportFactory();
            expect(vehicleFactory.isSportFactory()).to.be.true;
            corvette = vehicleFactory.getVehicle({ turbo: '3X', tires: 'michelin' });
            expect(corvette).to.have.property('transport', 'injection');
            expect(corvette).to.have.property('turbo', '3X');
            expect(corvette).to.have.property('tires', 'michelin');
            vehicleFactory.setTruckFactory();
            expect(vehicleFactory.isTruckFactory()).to.be.true;
            tractor = vehicleFactory.getVehicle({ capacity: '3Tons', tires: 'dunlap' });
            expect(tractor).to.have.property('transport', '4x4');
            expect(tractor).to.have.property('capacity', '3Tons');
            expect(tractor).to.have.property('tires', 'dunlap');*/
            next();
        });

        it('should prevent initialize factory out from public scope interfaces', function (next) {
            next();
        });
    });
});
