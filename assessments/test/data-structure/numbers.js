'use strict';

var numbersAnswers = require('./../../main/data-structure/numbers').numbersAnswers,
    expect = require('chai').expect;

describe('numbers', function () {
    describe('binary operations', function () {
        it.skip('you should be able to find the value of a given bit', function (next) {
            expect(numbersAnswers.valueAtBit(128, 8)).to.eql(1);
            expect(numbersAnswers.valueAtBit(65, 1)).to.eql(1);
            expect(numbersAnswers.valueAtBit(65, 7)).to.eql(1);
            expect(numbersAnswers.valueAtBit(128, 1)).to.eql(0);
            next();
        });

        it.skip('you should be able to return the base10 representation of a binary string', function (next) {
            expect(numbersAnswers.base10('11000000')).to.eql(192);
            next();
        });

        it.skip('you should be able to convert an eight-bit number to a binary string', function (next) {
            expect(numbersAnswers.convertToBinary(128)).to.eql('10000000');
            expect(numbersAnswers.convertToBinary(65)).to.eql('01000001');
            next();
        });
    });

    describe('decimals', function () {
        it.skip('you should be able to multiply with precision', function (next) {
            expect(numbersAnswers.multiply(3, 0.1)).to.eql(0.3);
            expect(numbersAnswers.multiply(3, 0.2)).to.eql(0.6);
            expect(numbersAnswers.multiply(3, 0.0001)).to.eql(0.0003);
            next();
        });
    });
});
