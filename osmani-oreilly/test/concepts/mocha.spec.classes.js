'use strict';

describe('Design patterns', function () {
    context('Class constructor', function () {
        var Car, civic, today,
            expect = require('chai').expect,
            mockOptions = {
                model: 'Honda Civic',
                color: 'blue storm'
            };

        before(function () {
            Car = require('./../../main/concepts/app.module.classes');
        });

        it('should crearte a Car instance initialized', function (next) {
            today = new Date();
            civic = new Car(mockOptions);
            expect(civic).to.be.an.instanceof(Car);
            expect(civic).to.have.property('model', mockOptions.model);
            expect(civic).to.have.property('color', mockOptions.color);
            expect(civic.getInfo()).to.have.string(mockOptions.model);
            expect(civic.getInfo()).to.have.string(today.toUTCString());
            next();
        });
    });
});
