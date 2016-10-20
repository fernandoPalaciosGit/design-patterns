'use strict';

var bestPracticesAnswers = require('./../../main/operator-statements/bestPractices').bestPracticesAnswers,
    expect = require('chai').expect;

describe('best practices', function () {
    it.skip('you should avoid global variables', function () {
        bestPracticesAnswers.globals();
        expect(window.myObject).not.to.be.ok;
    });

    it.skip('you should use parseInt correctly', function () {
        expect(bestPracticesAnswers.parseInt('12')).to.eql(12);
        expect(bestPracticesAnswers.parseInt('12px')).to.eql(12);
        expect(bestPracticesAnswers.parseInt('0x12')).to.eql(0);
    });

    it.skip('you should understand strict comparison', function () {
        expect(bestPracticesAnswers.identity(1, '1')).to.eql(false);
        expect(bestPracticesAnswers.identity(1, 1)).to.eql(true);
        expect(bestPracticesAnswers.identity(0, false)).to.eql(false);
    });
});
