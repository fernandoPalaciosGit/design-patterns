/* jscs:disable requireMultipleVarDecl */
/* eslint-disable no-warning-comments */
'use strict';

var regexAnswers = require('./../../main/operator-statements/regex').regexAnswers;
var expect = require('chai').expect;

describe('regular expressions', function () {
    it.skip('you should be able to detect a number in a string', function (next) {
        expect(regexAnswers.containsNumber('abc123')).to.eql(true);
        expect(regexAnswers.containsNumber('abc')).to.eql(false);
        next();
    });

    it.skip('you should be able to detect a repeating letter in a string', function (next) {
        expect(regexAnswers.containsRepeatingLetter('bookkeeping')).to.eql(true);
        expect(regexAnswers.containsRepeatingLetter('rattler')).to.eql(true);
        expect(regexAnswers.containsRepeatingLetter('ZEPPELIN')).to.eql(true);
        expect(regexAnswers.containsRepeatingLetter('cats')).to.eql(false);
        expect(regexAnswers.containsRepeatingLetter('l33t')).to.eql(false);
        next();
    });

    it.skip('you should be able to determine whether a string ends with a vowel (aeiou)', function (next) {
        expect(regexAnswers.endsWithVowel('cats')).to.eql(false);
        expect(regexAnswers.endsWithVowel('gorilla')).to.eql(true);
        expect(regexAnswers.endsWithVowel('I KNOW KUNG FU')).to.eql(true);
        next();
    });

    it.skip('you should be able to capture the first series of three numbers', function (next) {
        expect(regexAnswers.captureThreeNumbers('abc123')).to.eql('123');
        expect(regexAnswers.captureThreeNumbers('9876543')).to.eql('987');
        expect(regexAnswers.captureThreeNumbers('abcdef')).to.eql(false);
        expect(regexAnswers.captureThreeNumbers('12ab12ab')).to.eql(false);
        next();
    });

    it.skip('you should be able to determine whether a string matches a pattern', function (next) {
        // the pattern is XXX-XXX-XXXX where all X's are digits
        expect(regexAnswers.matchesPattern('800-555-1212')).to.eql(true);
        expect(regexAnswers.matchesPattern('451-933-7899')).to.eql(true);
        expect(regexAnswers.matchesPattern('33-444-5555')).to.eql(false);
        expect(regexAnswers.matchesPattern('abc-def-hijk')).to.eql(false);
        expect(regexAnswers.matchesPattern('1800-555-1212')).to.eql(false);
        expect(regexAnswers.matchesPattern('800-555-12121')).to.eql(false);
        expect(regexAnswers.matchesPattern('800-5555-1212')).to.eql(false);
        expect(regexAnswers.matchesPattern('800-55-1212')).to.eql(false);
        next();
    });

    it.skip('you should be able to detect correctly-formatted monetary amounts in USD', function (next) {
        expect(regexAnswers.isUSD('$132.03')).to.eql(true);
        expect(regexAnswers.isUSD('$32.03')).to.eql(true);
        expect(regexAnswers.isUSD('$2.03')).to.eql(true);
        expect(regexAnswers.isUSD('$1,023,032.03')).to.eql(true);
        expect(regexAnswers.isUSD('$20,933,209.93')).to.eql(true);
        expect(regexAnswers.isUSD('$20,933,209')).to.eql(true);
        expect(regexAnswers.isUSD('$459,049,393.21')).to.eql(true);
        expect(regexAnswers.isUSD('34,344.34')).to.eql(false);
        expect(regexAnswers.isUSD('$,344.34')).to.eql(false);
        expect(regexAnswers.isUSD('$34,344.3')).to.eql(false);
        expect(regexAnswers.isUSD('$34,344.344')).to.eql(false);
        expect(regexAnswers.isUSD('$34,344_34')).to.eql(false);
        expect(regexAnswers.isUSD('$3,432,12.12')).to.eql(false);
        expect(regexAnswers.isUSD('$3,432,1,034.12')).to.eql(false);
        expect(regexAnswers.isUSD('4$3,432,034.12')).to.eql(false);
        expect(regexAnswers.isUSD('$2.03.45')).to.eql(false);
        next();
    });
});
