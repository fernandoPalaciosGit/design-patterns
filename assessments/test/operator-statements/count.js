/* jscs:disable requireMultipleVarDecl */
/* eslint-disable no-console, no-inner-declarations, no-undef */
'use strict';

var countAnswers = require('./../../main/operator-statements/count').countAnswers;
var expect = require('chai').expect;
var sinon = require('sinon');

describe('counter', function () {
    var nums;
    var origConsoleLog;

    beforeEach(function () {
        nums = [];
        origConsoleLog = console.log;
        console.log = function (val) {
            nums.push(val);
        };

        this.clock = sinon.useFakeTimers();
    });

    afterEach(function () {
        console.log = origConsoleLog;

        this.clock.restore();
    });

    it('should count from start number to end number, one per 1/10th of a second', function (next) {
        this.timeout(600);
        countAnswers.count(1, 5);

        for (var i = 1; i <= 5; i++) {
            expect(nums.length).to.eql(i);

            this.clock.tick(100);
        }

        expect(nums.length).to.eql(5);
        expect(nums[0]).to.eql(1);
        expect(nums[4]).to.eql(5);
        next();
    });

    it('should provide a method to cancel the counting', function (next) {
        this.timeout(600);

        var counter = countAnswers.count(1, 5);
        counter.cancel();

        this.clock.tick(550);

        expect(nums.length < 5).to.be.ok;
        next();
    });
});
