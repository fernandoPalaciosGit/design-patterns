'use strict';

describe('Design patterns', function () {
    context('Class constructor', function () {
        var Car, civic, today, info,
            expect = require('chai').expect,
            mockOptions = {
                model: 'Honda Civic',
                color: 'blue storm'
            };

        before(function () {
            Car = require('./../../main/utils/Car');
        });

        it('should crearte a Car instance initialized', function (next) {
            today = new Date();
            civic = new Car(mockOptions);
            info = civic.getInfo();
            expect(civic).to.be.an.instanceof(Car);
            expect(civic).to.have.property('model', mockOptions.model);
            expect(civic).to.have.property('color', mockOptions.color);
            expect(info).to.have.string(mockOptions.model);
            expect(info).to.have.string(today.toString());
            next();
        });
    });
});
