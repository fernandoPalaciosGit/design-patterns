'use strict';
describe('Design patterns', function () {
    context('Decorator interface dependency injector', function () {
        var MacBookDecorator = require('./../../../main/patterns/decorator/object-decorator'),
            expect = require('chai').expect,
            getMacBook = MacBookDecorator.getMacBook,
            engravingCost = MacBookDecorator.decorateMac.engravingCost,
            insuranceLow = MacBookDecorator.decorateMac.insuranceLow,
            insuranceHigh = MacBookDecorator.decorateMac.insuranceHigh;

        it('should extend properties behaviour', function (next) {
            /* jshint maxstatements:15 */
            var myLaptop = getMacBook({
                cost: 1250, screenSize: 17
            });

            expect(myLaptop).to.have.property('screenAviable')
                .that.is.an('array')
                .that.deep.equals([11, 15, 17]);
            expect(myLaptop).to.have.property('cost')
                .that.is.an('number')
                .that.deep.equals(1250);
            expect(myLaptop).to.have.property('screenSize')
                .that.is.an('number')
                .that.deep.equals(17);
            expect(myLaptop.getInsuranceCost).not.to.exist;
            expect(myLaptop.getEngravingCost).not.to.exist;

            engravingCost(myLaptop);
            insuranceLow(myLaptop);
            expect(myLaptop).to.have.property('getEngravingCost')
                .that.is.an('number')
                .that.deep.equals(18);
            expect(myLaptop).to.have.property('getInsuranceCost')
                .that.is.an('number')
                .that.deep.equals(1606.25);

            insuranceHigh(myLaptop);
            expect(myLaptop.getEngravingCost).to.equal(18);
            expect(myLaptop.getInsuranceCost).to.equal(1625);
            next();
        });
    });
});
