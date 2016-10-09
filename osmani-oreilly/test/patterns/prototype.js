'use strict';

describe('Design patterns', function () {
    let expect = require('chai').expect,
        _ = require('lodash');

    context('Prototype (Creational object pattern)', function () {
        let car, prototype = require('./../../main/patterns/prototype');

        it('should create an object with prototype descriptor', function (next) {
            car = prototype.getCarFromDescriptor('Opel');
            expect(car.getModel()).to.be.equals('Opel');
            expect(_.bindKey(car, 'setModel', 'Funky')).to.throw(TypeError, 'Attempted to assign to readonly property');
            next();
        });

        it('should create an object from prototype but not writable descriptor', function (next) {
            car = prototype.getCarFromObject('Nissan');
            expect(car.getModel()).to.be.equals('Nissan');
            car.setModel('Funky');
            expect(car.getModel()).to.be.equals('Funky');
            next();
        });
    });
});
