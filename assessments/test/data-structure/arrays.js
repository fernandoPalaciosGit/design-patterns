/* jscs:disable requireMultipleVarDecl */
'use strict';

var arraysAnswers = require('./../../main/data-structure/arrays').arraysAnswers;
var expect = require('chai').expect;

describe('arrays', function () {
    var testListA, testListB;

    beforeEach(function () {
        arraysAnswers.polifillArraysAnswers = null;
        testListA = [1, 2, 3, 4];
        testListB = [1, 2, 4, 4, 3, 3, 1, 5, 4, 3, 7];
    });

    context('should be able to determine the location of an item in an array', function () {
        afterEach(function () {
            expect(arraysAnswers.indexOf(testListA, 0)).to.eql(-1);
            expect(arraysAnswers.indexOf(testListA, 3)).to.eql(2);
            expect(arraysAnswers.indexOf(testListA, 5)).to.eql(-1);
        });

        it('should test standalone indexOf', function (next) {
            arraysAnswers.polifillArraysAnswers = null;
            next();
        });

        it('should test Array.prototype.indexOf', function (next) {
            arraysAnswers.polifillArraysAnswers = 'indexOf';
            next();
        });

        it('should test Array.prototype.findIndex', function (next) {
            arraysAnswers.polifillArraysAnswers = 'findIndex';
            next();
        });

        it('should test Array.prototype.forEach', function (next) {
            arraysAnswers.polifillArraysAnswers = 'forEach';
            next();
        });
    });

    context('should be able to sum the items of an array', function () {
        afterEach(function () {
            expect(arraysAnswers.sum(testListA)).to.eql(10);
            expect(arraysAnswers.sum([])).to.eql(0);
        });

        it('should test standalone sum', function (next) {
            arraysAnswers.polifillArraysAnswers = null;
            next();
        });

        it('should test Array.prototype.reduce', function (next) {
            arraysAnswers.polifillArraysAnswers = 'reduce';
            next();
        });
    });

    context('should be able to remove all instances of a value from an array', function () {
        var result;

        afterEach(function () {
            testListA.push(2);
            testListA.push(2);
            result = arraysAnswers.remove(testListA, 2);
            expect(result).to.have.length(3);
            expect(result.join(' ')).to.eql('1 3 4');
        });

        it('should test standalone remove', function (next) {
            arraysAnswers.polifillArraysAnswers = null;
            next();
        });

        it('should test Array.prototype.filter', function (next) {
            arraysAnswers.polifillArraysAnswers = 'filter';
            next();
        });
    });

    it('should be able to remove all instances of a value from an array, returning the original array', function (next) {
        var result;

        testListA.splice(1, 0, 2);
        testListA.push(2);
        testListA.push(2);
        result = arraysAnswers.removeWithoutCopy(testListA, 2);
        expect(result).to.have.length(3);
        expect(result.join(' ')).to.eql('1 3 4');
        // make sure that return the same array instance
        expect(result).equal(testListA);
        next();
    });

    context('should be able to add an item to the end of an array', function () {
        var result;

        afterEach(function () {
            result = arraysAnswers.append(testListA.slice(0), 10);
            expect(result).to.have.length(5);
            expect(result[result.length - 1]).to.eql(10);
        });

        it('should test standalone append', function (next) {
            arraysAnswers.polifillArraysAnswers = null;
            next();
        });

        it('should test Array.prototype.push', function (next) {
            arraysAnswers.polifillArraysAnswers = 'push';
            next();
        });
    });

    context('should be able to remove the last item of an array', function () {
        var result;

        afterEach(function () {
            result = arraysAnswers.truncate(testListA.slice(0));
            expect(result).to.have.length(3);
            expect(result.join(' ')).to.eql('1 2 3');
        });

        it('should test standalone truncate', function (next) {
            arraysAnswers.polifillArraysAnswers = null;
            next();
        });

        it('should test Array.prototype.pop', function (next) {
            arraysAnswers.polifillArraysAnswers = 'pop';
            next();
        });
    });

    it('should be able to add an item to the beginning of an array', function (next) {
        var result = arraysAnswers.prepend(testListA, 10);

        expect(result).to.have.length(5);
        expect(result[0]).to.eql(10);
        next();
    });

    context('should be able to remove the first item of an array', function () {
        var result;

        afterEach(function () {
            result = arraysAnswers.curtail(testListA.slice(0));
            expect(result).to.have.length(3);
            expect(result.join(' ')).to.eql('2 3 4');
        });

        it('should test standalone curtail', function (next) {
            arraysAnswers.polifillArraysAnswers = null;
            next();
        });

        it('should test Array.prototype.shift', function (next) {
            arraysAnswers.polifillArraysAnswers = 'shift';
            next();
        });
    });

    context('should be able to join together two arrays', function () {
        var result, testListC = ['a', 'b', 'c', 1];

        afterEach(function () {
            result = arraysAnswers.concat(testListA.slice(0), testListC);
            expect(result).to.have.length(8);
            expect(result.join(' ')).to.eql('1 2 3 4 a b c 1');
        });

        it('should test standalone concat', function (next) {
            arraysAnswers.polifillArraysAnswers = null;
            next();
        });

        it('should test Array.prototype.forEach', function (next) {
            arraysAnswers.polifillArraysAnswers = 'forEach';
            next();
        });
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

    it('should be able to find duplicates in an array and remove', function (next) {
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
        var result;

        afterEach(function () {
            result = arraysAnswers.findAllOccurrences(testListB, 1);
            expect(result.sort().join(' ')).to.eql('0 6');
        });

        it('should test standalone findAllOccurrences', function (next) {
            arraysAnswers.polifillArraysAnswers = null;
            next();
        });

        it('should test Array.prototype.reduce', function (next) {
            arraysAnswers.polifillArraysAnswers = 'reduce';
            next();
        });
    });
});
