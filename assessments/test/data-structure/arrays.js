/* jscs:disable requireMultipleVarDecl */
'use strict';

var arraysAnswers = require('./../../main/data-structure/arrays').arraysAnswers;
var expect = require('chai').expect;

describe('arrays', function () {
    var testListA, testListB;

    beforeEach(function () {
        testListA = [1, 2, 3, 4];
        testListB = [1, 2, 4, 4, 3, 3, 1, 5, 4, 3, 7];
    });

    context('should be able to determine the location of an item in an array', function () {
        var prototypeTest;

        afterEach(function () {
            expect(arraysAnswers.indexOf(testListA, 0, prototypeTest)).to.eql(-1);
            expect(arraysAnswers.indexOf(testListA, 3, prototypeTest)).to.eql(2);
            expect(arraysAnswers.indexOf(testListA, 5, prototypeTest)).to.eql(-1);
        });

        it('should test standalone', function (next) {
            prototypeTest = null;
            next();
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

    context('should be able to sum the items of an array', function () {
        var prototypeTest;

        afterEach(function () {
            expect(arraysAnswers.sum(testListA, prototypeTest)).to.eql(10);
            expect(arraysAnswers.sum([])).to.eql(0);
        });

        it('should test standalone', function (next) {
            prototypeTest = null;
            next();
        });

        it('should test Array.prototype.reduce', function (next) {
            prototypeTest = 'reduce';
            next();
        });
    });

    context('should be able to remove all instances of a value from an array', function () {
        var prototypeTest;

        afterEach(function () {
            testListA.push(2);
            testListA.push(2);
            var result = arraysAnswers.remove(testListA, 2, prototypeTest);

            expect(result).to.have.length(3);
            expect(result.join(' ')).to.eql('1 3 4');
        });

        it('should test standalone', function (next) {
            prototypeTest = null;
            next();
        });

        it('should test Array.prototype.filter', function (next) {
            prototypeTest = 'filter';
            next();
        });
    });

    it('should be able to remove all instances of a value from an array, returning the original array', function (next) {
        testListA.splice(1, 0, 2);
        testListA.push(2);
        testListA.push(2);

        var result = arraysAnswers.removeWithoutCopy(testListA, 2);

        expect(result).to.have.length(3);
        expect(result.join(' ')).to.eql('1 3 4');

        // make sure that return the same array instance
        expect(result).equal(testListA);
        next();
    });

    it('should be able to add an item to the end of an array', function (next) {
        var resultA = arraysAnswers.append(testListA.slice(0), 10),
            resultB = arraysAnswers.append(testListA.slice(0), 10, 'push');

        expect(resultA).to.have.length(5);
        expect(resultB).to.have.length(5);
        expect(resultA[resultA.length - 1]).to.eql(10);
        next();
    });

    it('should be able to remove the last item of an array', function (next) {
        var resultA = arraysAnswers.truncate(testListA.slice(0)),
            resultB = arraysAnswers.truncate(testListA.slice(0), 'pop');

        expect(resultA).to.have.length(3);
        expect(resultB).to.have.length(3);
        expect(resultA.join(' ')).to.eql('1 2 3');
        next();
    });

    it('should be able to add an item to the beginning of an array', function (next) {
        var result = arraysAnswers.prepend(testListA, 10);

        expect(result).to.have.length(5);
        expect(result[0]).to.eql(10);
        next();
    });

    it('should be able to remove the first item of an array', function (next) {
        var resultA = arraysAnswers.curtail(testListA.slice(0)),
            resultB = arraysAnswers.curtail(testListA.slice(0), 'shift');

        expect(resultA).to.have.length(3);
        expect(resultB).to.have.length(3);
        expect(resultA.join(' ')).to.eql('2 3 4');
        next();
    });

    it('should be able to join together two arrays', function (next) {
        var c = ['a', 'b', 'c', 1],
            resultA = arraysAnswers.concat(testListA.slice(0), c),
            resultB = arraysAnswers.concat(testListA.slice(0), c, 'forEach');

        expect(resultA).to.have.length(8);
        expect(resultB).to.have.length(8);
        expect(resultA.join(' ')).to.eql('1 2 3 4 a b c 1');
        next();
    });

    it('should be able to add an item anywhere in an array', function (next) {
        var result = arraysAnswers.insert(testListA, 'z', 2);

        expect(result).to.have.length(5);
        expect(result.join(' ')).to.eql('1 2 z 3 4');
        next();
    });

    it('should be able to count the occurences of an item in an array', function (next) {
        var result = arraysAnswers.count(testListB, 4);

        expect(result).to.eql(3);
        next();
    });

    it('should be able to find uniques in an array', function (next) {
        var result = arraysAnswers.uniques(testListB);

        expect(result.sort()).to.eql([1, 2, 3, 4, 5, 7]);
        next();
    });

    it.skip('should be able to find duplicates in an array and remove', function (next) {
        var result = arraysAnswers.duplicates(testListB);

        expect(result.sort()).to.eql([1, 3, 4]);
        next();
    });

    it('should be able to square each number in an array', function (next) {
        var result = arraysAnswers.square(testListA);

        expect(result).to.have.length(4);
        expect(result.join(' ')).to.eql('1 4 9 16');
        next();
    });

    context('should be able to find all occurrences of an item in an array, checkout index position', function () {
        var prototypeTest, result;

        afterEach(function () {
            result = arraysAnswers.findAllOccurrences(testListB, 1, prototypeTest);
            expect(result.sort().join(' ')).to.eql('0 6');
        });

        it('should test standalone', function (next) {
            prototypeTest = null;
            next();
        });

        it('should test Array.prototype.reduce', function (next) {
            prototypeTest = 'reduce';
            next();
        });
    });
});
