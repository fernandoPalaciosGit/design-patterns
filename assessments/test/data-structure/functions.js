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

    it('should be able to use an array as arguments when calling a function', function (next) {
        var result = functionsAnswers.argsAsArray(sayIt, ['Hello', 'Ellie', '!']);
        expect(result).to.eql('Hello, Ellie!');
        expect(sayItCalled).to.be.ok;
        next();
    });

    it('should be able to change the context in which a function is called', function (next) {
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

    it('should be able to return a function from a function', function (next) {
        expect(functionsAnswers.functionFunction('Hello')('world')).to.eql('Hello, world');
        expect(functionsAnswers.functionFunction('Hai')('can i haz funxtion?')).to.eql('Hai, can i haz funxtion?');
        next();
    });

    it('should be able to use closures', function (next) {
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

    it('should be able to create a "partial" function', function (next) {
        var partial = functionsAnswers.partial(sayIt, 'Hello', 'Ellie');
        expect(partial('!!!')).to.eql('Hello, Ellie!!!');
        expect(sayItCalled).to.be.ok;
        next();
    });

    it('should be able to use arguments', function (next) {
        expect(functionsAnswers.useArguments(a)).to.eql(a);
        expect(functionsAnswers.useArguments(a, b)).to.eql(a + b);
        expect(functionsAnswers.useArguments(a, b, c)).to.eql(a + b + c);
        expect(functionsAnswers.useArguments(a, b, c, d)).to.eql(a + b + c + d);
        next();
    });

    it('should be able to apply functions with arbitrary numbers of arguments', function (next) {
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

    context('Partial, should be able to combine arguments and return partial closure', function () {
        it('from variable number of applied arguments', function (next) {
            var partialMe = function (x, y, z) {
                return x / y * z;
            };

            expect(functionsAnswers.partialUsingArguments(partialMe)(a, b, c)).to.eql(partialMe(a, b, c));
            expect(functionsAnswers.partialUsingArguments(partialMe, a)(b, c)).to.eql(partialMe(a, b, c));
            expect(functionsAnswers.partialUsingArguments(partialMe, a, b)(c)).to.eql(partialMe(a, b, c));
            expect(functionsAnswers.partialUsingArguments(partialMe, a, b, c)()).to.eql(partialMe(a, b, c));
            next();
        });

        it('from concat strings', function (next) {
            var formatName = function (first, surname, nickname) {
                    return [first, nickname, surname].join(' \" ');
                },
                partialNickname = functionsAnswers.partialUsingArguments(formatName, 'Fernando', 'Palacios'),
                schoolName = partialNickname('fer'),
                familyName = partialNickname('nando');

            expect(schoolName).to.equal('Fernando " fer " Palacios');
            expect(familyName).to.equal('Fernando " nando " Palacios');
            next();
        });
    });

    it('Curry, should be able to combine arguments and return partial closure', function (next) {
        var result, curry = functionsAnswers.curry,
            average = function (x, y, z) {
                return x / y * z;
            };

        result = curry(average);
        expect(typeof result).to.eql('function');
        expect(result(a)(b)(c)).to.eql(average(a, b, c));

        result = curry(average)(a);
        expect(typeof result).to.eql('function');
        expect(result(b)(c)).to.eql(average(a, b, c));

        result = curry(average)(a)(b);
        expect(typeof result).to.eql('function');
        expect(result(c)).to.eql(average(a, b, c));

        result = curry(average)(a)(b)(c);
        expect(typeof result).to.eql('number');
        expect(result).to.eql(average(a, b, c));
        next();
    });

    context('Compose, should be able to combining other partial functions with composition', function () {
        var pipe, curry, partial, replace, wrapWith, poem, expectedPoem;

        before(function () {
            pipe = functionsAnswers.compose;
            curry = functionsAnswers.curry;
            partial = functionsAnswers.partialUsingArguments;
            replace = function (find, replacement, str) {
                return str.replace(new RegExp(find, 'g'), replacement);
            };
            wrapWith = function (tag, str) {
                return '<' + tag + '>' + str + '</' + tag + '>';
            };
            poem = 'Twas brillig, and the slithy toves\n' +
                'Did gyre and gimble in the wabe;\n' +
                'All mimsy were the borogoves,\n' +
                'And the mome raths outgrabe.';
            expectedPoem = '<blockquote><p>Twas <em>four o’clock in the afternoon</em>, and the slithy toves<br/>' +
                'Did gyre and gimble in the wabe;<br/>' +
                'All mimsy were the borogoves,<br/>' +
                'And the mome raths outgrabe.</p></blockquote>';
        });

        it('and the last function receive arguments from partial', function (next) {
            var nohow = function (sentence) {
                    return sentence + ', nohow!';
                },
                contrariwise = function (sentence) {
                    return sentence + ' contrariwise…';
                },
                statement = 'Not nothing',
                nohowContrariwise = pipe(contrariwise, nohow);

            expect(nohowContrariwise(statement)).to.equal('Not nothing contrariwise…, nohow!');
            next();
        });

        it('and compose with Partials', function (next) {
            var modifyPoem = pipe(
                partial(wrapWith, 'p'), // wrap to paragraph
                partial(wrapWith, 'blockquote'), // wrap to blockquote
                partial(replace, '\n', '<br/>'), // add breaks
                partial(replace, 'brillig', '<em>four o’clock in the afternoon</em>') // replace brillig
            );

            expect(modifyPoem(poem)).to.equal(expectedPoem);
            next();
        });

        it('and compose with Curring', function (next) {
            var modifyPoem = pipe(
                curry(wrapWith)('p'),
                curry(wrapWith)('blockquote'),
                curry(replace)('\n')('<br/>'),
                curry(replace)('brillig')('<em>four o’clock in the afternoon</em>')
            );

            expect(modifyPoem(poem)).to.equal(expectedPoem);
            next();
        });
    });
});
