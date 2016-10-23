'use strict';

var logicalOperatorsAnswers = require('./../../main/operator-statements/logicalOperators').logicalOperatorsAnswers,
    expect = require('chai').expect;

describe('logical operators', function () {
    it.skip('should be able to work with logical or', function (next) {
        expect(logicalOperatorsAnswers.or(false, true)).to.be.ok;
        expect(logicalOperatorsAnswers.or(true, false)).to.be.ok;
        expect(logicalOperatorsAnswers.or(true, true)).to.be.ok;
        expect(logicalOperatorsAnswers.or(false, false)).not.to.be.ok;
        expect(logicalOperatorsAnswers.or(3, 4)).to.not.eq(7);
        next();
    });

    it.skip('should be able to work with logical and', function (next) {
        expect(logicalOperatorsAnswers.and(false, true)).not.to.be.ok;
        expect(logicalOperatorsAnswers.and(false, false)).not.to.be.ok;
        expect(logicalOperatorsAnswers.and(true, false)).not.to.be.ok;
        expect(logicalOperatorsAnswers.and(true, true)).to.be.ok;
        expect(logicalOperatorsAnswers.and(3, 4)).to.be.ok;
        next();
    });
});
