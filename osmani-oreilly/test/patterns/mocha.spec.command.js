'use strict';

describe('Design patterns', function () {
    var expect = require('chai').expect,
        _ = require('lodash');

    context('Command (Behaviour object pattern)', function () {
        var getRentCar = require('./../../main/patterns/app.module.command'), concessionaire;

        before(function () {
            concessionaire = getRentCar();
        });

        it('should execute inherit properties by interface argument', function (next) {
            expect(concessionaire.checkBusiness).to.be.a('function');
            expect(concessionaire).to.have.property('checkBusiness');
            expect(concessionaire).to.have.property('buyCar');
            expect(concessionaire).to.have.property('requestInfo');
            expect(concessionaire.checkBusiness('buyCar', 'Ferrari', 230050)).to.be.equal('buyCar<-->Ferrari<-->230050');
            expect(concessionaire.checkBusiness('requestInfo', 'Mazda', 'yellow Cream')).to.be.equal('requestInfo<-->Mazda<-->yellow Cream');
            expect(_.bindKey(concessionaire, 'checkBusiness', 'unknownProperty')).to.throw(Error, 'invalid method');
            next();
        });
    });
});
