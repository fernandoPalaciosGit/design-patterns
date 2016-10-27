/* jscs:disable requireMultipleVarDecl */
'use strict';

var recursionAnswers = require('./../../main/operator-statements/recursion').recursionAnswers;
var expect = require('chai').expect;
var _ = require('lodash');

describe('recursion', function () {
    var fileData = {
        dir: 'app',
        files: [
            'index.html',
            {
                dir: 'js',
                files: [
                    'main.js',
                    'app.js',
                    'misc.js',
                    {
                        dir: 'vendor',
                        files: [
                            'jquery.js',
                            'underscore.js'
                        ]
                    }
                ]
            },
            {
                dir: 'css',
                files: [
                    'reset.css',
                    'main.css'
                ]
            }
        ]
    };

    it('should be able to return a list of files from the data', function (next) {
        var result = recursionAnswers.listFiles(fileData);
        expect(result.length).to.eql(8);
        expect(result.indexOf('index.html') > -1).to.be.ok;
        expect(result.indexOf('main.js') > -1).to.be.ok;
        expect(result.indexOf('underscore.js') > -1).to.be.ok;
        next();
    });

    it('should be able to return a list of files in a subdir', function (next) {
        var result = recursionAnswers.listFiles(fileData, 'js');
        expect(result.length).to.eql(5);
        expect(result.indexOf('main.js') > -1).to.be.ok;
        expect(result.indexOf('underscore.js') > -1).to.be.ok;
        next();
    });
});

describe('factorial', function () {
    it('should test factorial of a number', function (next) {
        expect(recursionAnswers.factorial(4)).to.eql(24);
        expect(recursionAnswers.factorial(6)).to.eql(720);
        expect(recursionAnswers.factorial(0)).to.eql(0);
        next();
    });
});

describe('permutation', function () {
    var arr = [1, 2, 3, 4];
    var answer = [
        [1, 2, 3, 4],
        [1, 2, 4, 3],
        [1, 3, 2, 4],
        [1, 3, 4, 2],
        [1, 4, 2, 3],
        [1, 4, 3, 2],
        [2, 1, 3, 4],
        [2, 1, 4, 3],
        [2, 3, 1, 4],
        [2, 3, 4, 1],
        [2, 4, 1, 3],
        [2, 4, 3, 1],
        [3, 1, 2, 4],
        [3, 1, 4, 2],
        [3, 2, 1, 4],
        [3, 2, 4, 1],
        [3, 4, 1, 2],
        [3, 4, 2, 1],
        [4, 1, 2, 3],
        [4, 1, 3, 2],
        [4, 2, 1, 3],
        [4, 2, 3, 1],
        [4, 3, 1, 2],
        [4, 3, 2, 1]
    ];

    it.skip('should be able to return the permutations of an array', function (next) {
        var result = recursionAnswers.permute(arr);
        var resultStrings = _.map(result, function (r) {
            return r.join('');
        });

        expect(result.length).to.eql(answer.length);

        _.each(answer, function (a) {
            expect(resultStrings.indexOf(a.join('')) > -1).to.be.ok;
        });
        next();
    });

    it.skip('should be able to return the nth number in a fibonacci sequence', function (next) {
        expect(recursionAnswers.fibonacci(2)).to.eql(1);
        expect(recursionAnswers.fibonacci(6)).to.eql(8);
        next();
    });

    it.skip('should be able to return the set of all valid combinations of n pairs of parentheses.', function (next) {
        var expected = ['((()))', '(()())', '(())()', '()(())', '()()()'];
        var result = recursionAnswers.validParentheses(3);

        expect(result.length).to.eql(5);
        _.each(expected, function (c) {
            expect(result).to.contain(c);
        });
        next();
    });
});
