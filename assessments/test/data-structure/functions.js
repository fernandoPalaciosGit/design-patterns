/* jscs:disable requireMultipleVarDecl */
/* eslint-disable no-inner-declarations */
'use strict';

var functionsAnswers = require('./../../main/data-structure/functions').functionsAnswers;
var expect = require('chai').expect;

describe('functions', function () {
    var sayItCalled = false;
    var sayIt = function (greeting, name, punctuation) {
        sayItCalled = true;

        return greeting + ', ' + name + (punctuation || '!');
    };
    var a, b, c, d;

    beforeEach(function () {
        sayItCalled = false;
        a = Math.random();
        b = Math.random();
        c = Math.random();
        d = Math.random();
    });

    it.skip('you should be able to use an array as arguments when calling a function', function (next) {
        var result = functionsAnswers.argsAsArray(sayIt, ['Hello', 'Ellie', '!']);
        expect(result).to.eql('Hello, Ellie!');
        expect(sayItCalled).to.be.ok;
        next();
    });

    it.skip('you should be able to change the context in which a function is called', function (next) {
        var speak = function () {
            return sayIt(this.greeting, this.name, '!!!');
        };
        var obj = {
            greeting: 'Hello',
            name: 'Rebecca'
        };

        var result = functionsAnswers.speak(speak, obj);
        expect(result).to.eql('Hello, Rebecca!!!');
        expect(sayItCalled).to.be.ok;
        next();
    });

    it.skip('you should be able to return a function from a function', function (next) {
        expect(functionsAnswers.functionFunction('Hello')('world')).to.eql('Hello, world');
        expect(functionsAnswers.functionFunction('Hai')('can i haz funxtion?')).to.eql('Hai, can i haz funxtion?');
        next();
    });

    it.skip('you should be able to use closures', function (next) {
        var arr = [Math.random(), Math.random(), Math.random(), Math.random()];
        var square = function (x) {
            return x * x;
        };

        var funcs = functionsAnswers.makeClosures(arr, square);
        expect(funcs).to.have.length(arr.length);

        for (var i = 0; i < arr.length; i++) {
            expect(funcs[i]()).to.eql(square(arr[i]));
        }
        next();
    });

    it.skip('you should be able to create a "partial" function', function (next) {
        var partial = functionsAnswers.partial(sayIt, 'Hello', 'Ellie');
        expect(partial('!!!')).to.eql('Hello, Ellie!!!');
        expect(sayItCalled).to.be.ok;
        next();
    });

    it.skip('you should be able to use arguments', function (next) {
        expect(functionsAnswers.useArguments(a)).to.eql(a);
        expect(functionsAnswers.useArguments(a, b)).to.eql(a + b);
        expect(functionsAnswers.useArguments(a, b, c)).to.eql(a + b + c);
        expect(functionsAnswers.useArguments(a, b, c, d)).to.eql(a + b + c + d);
        next();
    });

    it.skip('you should be able to apply functions with arbitrary numbers of arguments', function (next) {
        (function () {
            var wasITake2ArgumentsCalled = false;
            var iTake2Arguments = function (firstArgument, secondArgument) {
                expect(arguments.length).to.eql(2);
                expect(firstArgument).to.eql(a);
                expect(secondArgument).to.eql(b);

                wasITake2ArgumentsCalled = true;
            };

            var wasITake3ArgumentsCalled = false;
            var iTake3Arguments = function (firstArgument, secondArgument, thirdArgument) {
                expect(arguments.length).to.eql(3);
                expect(firstArgument).to.eql(a);
                expect(secondArgument).to.eql(b);
                expect(thirdArgument).to.eql(c);

                wasITake3ArgumentsCalled = true;
            };

            functionsAnswers.callIt(iTake2Arguments, a, b);
            functionsAnswers.callIt(iTake3Arguments, a, b, c);

            expect(wasITake2ArgumentsCalled).to.be.ok;
            expect(wasITake3ArgumentsCalled).to.be.ok;
        }());
        next();
    });

    it.skip('you should be able to create a "partial" function for variable number of applied arguments', function (next) {
        var partialMe = function (x, y, z) {
            return x / y * z;
        };

        expect(functionsAnswers.partialUsingArguments(partialMe)(a, b, c)).to.eql(partialMe(a, b, c));
        expect(functionsAnswers.partialUsingArguments(partialMe, a)(b, c)).to.eql(partialMe(a, b, c));
        expect(functionsAnswers.partialUsingArguments(partialMe, a, b)(c)).to.eql(partialMe(a, b, c));
        expect(functionsAnswers.partialUsingArguments(partialMe, a, b, c)()).to.eql(partialMe(a, b, c));
        next();
    });

    it.skip('you should be able to curry existing functions', function (next) {
        var curryMe = function (x, y, z) {
            return x / y * z;
        };
        var result;

        result = functionsAnswers.curryIt(curryMe);
        expect(typeof result).to.eql('function');
        expect(result.length).to.eql(1);

        result = functionsAnswers.curryIt(curryMe)(a);
        expect(typeof result).to.eql('function');
        expect(result.length).to.eql(1);

        result = functionsAnswers.curryIt(curryMe)(a)(b);
        expect(typeof result).to.eql('function');
        expect(result.length).to.eql(1);

        result = functionsAnswers.curryIt(curryMe)(a)(b)(c);
        expect(typeof result).to.eql('number');
        expect(result).to.eql(curryMe(a, b, c));
        next();
    });
});
