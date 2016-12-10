'use strict';

var bestPracticesAnswers = require('./../../main/operator-statements/bestPractices').bestPracticesAnswers,
    expect = require('chai').expect,
    moduleScope = window || global;

describe('best practices', function () {
    it('should avoid global variables', function (next) {
        bestPracticesAnswers.globals();
        expect(moduleScope.myObject).not.to.be.ok;
        next();
    });

    it('should use parseInt correctly', function (next) {
        expect(bestPracticesAnswers.parseInt('12')).to.eql(12);
        expect(bestPracticesAnswers.parseInt('12px')).to.eql(12);
        expect(bestPracticesAnswers.parseInt('0x12')).to.eql(0);
        next();
    });

    it('should understand strict comparison', function (next) {
        expect(bestPracticesAnswers.identity(1, '1')).to.eql(false);
        expect(bestPracticesAnswers.identity(1, 1)).to.eql(true);
        expect(bestPracticesAnswers.identity(0, false)).to.eql(false);
        next();
    });
});
