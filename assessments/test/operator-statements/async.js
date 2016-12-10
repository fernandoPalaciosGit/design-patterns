/* jscs:disable requireMultipleVarDecl */
'use strict';

var asyncAnswers = require('./../../main/operator-statements/async').asyncAnswers;
var expect = require('chai').expect;

describe('async behavior', function () {
    it('should understand how to use promises to handle asynchronous process', function (done) {
        var flag = false;
        var finished = 0;
        var total = 2;

        function finish(_done) {
            if (++finished === total) {
                _done();
            }
        }

        asyncAnswers.async(true).then(function (result) {
            flag = result;
            expect(flag).to.eql(true);
            finish(done);
        });

        asyncAnswers.async('success').then(function (result) {
            flag = result;
            expect(flag).to.eql('success');
            finish(done);
        });

        expect(flag).to.eql(false);
    });

    it.skip('should be able to retrieve data from the server and return a sorted array of names', function (done) {
        var url = '/design-patterns/assessments/main/data/test.json';

        asyncAnswers.manipulateRemoteData(url).then(function (result) {
            let listPeople = result.people.map(function (person) {
                return person.name;
            }).sort().join(' ');

            expect(result.people).to.have.length(5);
            expect(listPeople).to.eql('Adam Alex Matt Paul Rebbecca');
            done();
        });
    });
});
