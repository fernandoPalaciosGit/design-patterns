/* jscs:disable requireMultipleVarDecl */
'use strict';

var arraysAnswers = require('./../../main/data-structure/arrays').arraysAnswers;
var expect = require('chai').expect;

describe('arrays', function () {
    var a;

    beforeEach(function () {
        a = [1, 2, 3, 4];
    });

    context('should be able to determine the location of an item in an array', function () {
        var prototypeTest;

        afterEach(function () {
            expect(arraysAnswers.indexOf(a, 0, prototypeTest)).to.eql(-1);
            expect(arraysAnswers.indexOf(a, 3, prototypeTest)).to.eql(2);
            expect(arraysAnswers.indexOf(a, 5, prototypeTest)).to.eql(-1);
        });

        it('should test Array.prototype.indexOf', function (next) {
            prototypeTest = 'indexOf';
            next();
        });

        it('should test Array.prototype.findIndex', function (next) {
            prototypeTest = 'findIndex';
            next();
        });

        it('should test Array.prototype.forEach', function (next) {
            prototypeTest = 'forEach';
            next();
        });
    });

    it.skip('you should be able to sum the items of an array', function () {
        expect(arraysAnswers.sum(a)).to.eql(10);
    });

    it.skip('you should be able to remove all instances of a value from an array', function () {
        a.push(2); // Make sure the value appears more than one time
        a.push(2); // Make sure the value appears more than one time in a row
        var result = arraysAnswers.remove(a, 2);

        expect(result).to.have.length(3);
        expect(result.join(' ')).to.eql('1 3 4');
    });

    it.skip('you should be able to remove all instances of a value from an array, returning the original array', function () {
        a.splice(1, 0, 2);
        a.push(2);
        a.push(2);

        var result = arraysAnswers.removeWithoutCopy(a, 2);

        expect(result).to.have.length(3);
        expect(result.join(' ')).to.eql('1 3 4');

        // make sure that you return the same array instance
        expect(result).equal(a);
    });

    it.skip('you should be able to add an item to the end of an array', function () {
        var result = arraysAnswers.append(a, 10);

        expect(result).to.have.length(5);
        expect(result[result.length - 1]).to.eql(10);
    });

    it.skip('you should be able to remove the last item of an array', function () {
        var result = arraysAnswers.truncate(a);

        expect(result).to.have.length(3);
        expect(result.join(' ')).to.eql('1 2 3');
    });

    it.skip('you should be able to add an item to the beginning of an array', function () {
        var result = arraysAnswers.prepend(a, 10);

        expect(result).to.have.length(5);
        expect(result[0]).to.eql(10);
    });

    it.skip('you should be able to remove the first item of an array', function () {
        var result = arraysAnswers.curtail(a);

        expect(result).to.have.length(3);
        expect(result.join(' ')).to.eql('2 3 4');
    });

    it.skip('you should be able to join together two arrays', function () {
        var c = ['a', 'b', 'c', 1];
        var result = arraysAnswers.concat(a, c);

        expect(result).to.have.length(8);
        expect(result.join(' ')).to.eql('1 2 3 4 a b c 1');
    });

    it.skip('you should be able to add an item anywhere in an array', function () {
        var result = arraysAnswers.insert(a, 'z', 2);

        expect(result).to.have.length(5);
        expect(result.join(' ')).to.eql('1 2 z 3 4');
    });

    it.skip('you should be able to count the occurences of an item in an array', function () {
        var result = arraysAnswers.count([1, 2, 4, 4, 3, 4, 3], 4);

        expect(result).to.eql(3);
    });

    it.skip('you should be able to find duplicates in an array', function () {
        var result = arraysAnswers.duplicates([1, 2, 4, 4, 3, 3, 1, 5, 3]);

        expect(result.sort()).to.eql([1, 3, 4]);
    });

    it.skip('you should be able to square each number in an array', function () {
        var result = arraysAnswers.square(a);

        expect(result).to.have.length(4);
        expect(result.join(' ')).to.eql('1 4 9 16');
    });

    it.skip('you should be able to find all occurrences of an item in an array', function () {
        var result = arraysAnswers.findAllOccurrences([1, 2, 3, 4, 5, 6, 1, 7], 1);

        expect(result.sort().join(' ')).to.eql('0 6');
    });

});
