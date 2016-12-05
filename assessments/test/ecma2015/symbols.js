'use strict';

let getSymbols = require('./../../main/ecma2015/symbols'),
    expect = require('chai').expect;

describe('Ecma 2015 - Symbols, reflection', function () {
    expect(getSymbols).to.be.an('object');

    it('should create symbol primitive type without, only init with its constructor', function (next) {
        expect(typeof Symbol()).to.be.equals('symbol');
        expect(function () {
            new Symbol();
        }).to.throw(TypeError, 'Symbol is not a constructor');
        next();
    });

    it('should debuggability, by given a description on its instance', function (next) {
        expect(Symbol('test').toString()).to.have.string('Symbol(test)');
        next();
    });

    it('should not be pass as reference like as primitive, and has its own unique index value assign', function (next) {
        let foo = Symbol('foo'),
            test = {
                symbolFoo: foo
            };

        expect(test.symbolFoo).to.be.equals(foo);
        foo = Symbol('newFoo');
        expect(test.symbolFoo).not.to.be.equals(foo);
        expect(test.symbolFoo).not.to.be.equals(Symbol('foo'));
        expect(Symbol('foo')).not.to.be.equals(Symbol('foo'));
        next();
    });

    it('should be referenced, only with getOwnPropertySymbols interface', function (next) {
        let propFoo = Symbol('foo'),
            propBar = 'bar',
            propBeer = 'beer',
            test = {},
            expectedOwnPropertySymbol = [propFoo],
            expectedOwnDescriptor = [propBar, propBeer];

        test[propFoo] = 'foo'; // symbol reference
        test[propBar] = 'bar'; // property reference
        test[propBeer] = 'beer'; // property reference
        expect(Object.keys(test)).to.deep.include.members(expectedOwnDescriptor);
        expect(Object.getOwnPropertyNames(test)).to.deep.include.members(expectedOwnDescriptor);
        expect(Object.getOwnPropertySymbols(test)).to.deep.include.members(expectedOwnPropertySymbol);
        expect(Object.getOwnPropertySymbols(test)[0]).to.be.equals(propFoo);
        expect(test[Object.getOwnPropertySymbols(test)[0]]).to.be.equals('foo');
        next();
    });

    it('should have exception to be unique symbols, same Symbol reference,in a global variable called symbol registry', function (next) {
        // Symbol.for('foo') = 'symbol registred as foo'
        expect(Symbol('foo')).not.to.be.equal(Symbol('foo'));
        expect(Symbol.for('foo')).not.to.be.equal(Symbol('foo'));
        expect(Symbol.for('foo')).to.be.equal(Symbol.for('foo'));

        let test = {},
            propFoo = Symbol.for('foo'),
            propBar = Symbol.for('foo');

        test[propFoo] = 'foo';
        test[propBar] = 'bar'; // last reference override on the unique symbol
        expect(propFoo).to.be.equal(propBar);
        expect(test[propFoo]).to.be.equal('bar');
        expect(test[propBar]).to.be.equal('bar');
        next();
    });

    it('should enumerable Symbols can be copied to other object', function (next) {
        let test = {}, testCopy = {},
            beer = Symbol('beer'),
            foo = Symbol('foo'),
            bar = Symbol('bar');

        test[foo] = 'foo';
        test[bar] = 'bar';
        testCopy[beer] = 'beer';
        Object.assign(testCopy, test);
        expect(Object.getOwnPropertySymbols(test)).to.deep.include.members([foo, bar]);
        expect(Object.getOwnPropertySymbols(testCopy)).to.deep.include.members([beer, foo, bar]);
        next();
    });

    context('should be useful to programming', function () {
        it('to assign unique values on Schemas', function (next) {
            let logLevelDebug = Symbol('debug'),
                logLevels = {
                    DEBUG: logLevelDebug,
                    INFO: Symbol('info'),
                    WARNING: Symbol('warning')
                };

            expect(logLevels.DEBUG).not.to.be.equals(Symbol('debug'));
            expect(logLevels.DEBUG).to.be.equals(logLevelDebug);
            next();
        });

        it('to put metadata values in an Object', function (next) {
            let size = Symbol('size');

            class Collection {
                constructor () {
                    this[size] = 0;
                }

                add (item) {
                    this[this[size]] = item;
                    this[size]++;
                }

                static sizeOf (instance) {
                    return instance[size];
                }
            }

            let x = new Collection();
            expect(Collection.sizeOf(x)).to.be.equals(0);
            x.add('foo');
            expect(Collection.sizeOf(x)).to.be.equals(1);
            expect(Object.keys(x)).to.deep.include.members(['0']);
            expect(Object.getOwnPropertyNames(x)).to.deep.include.members(['0']);
            expect(Object.getOwnPropertySymbols(x)).to.deep.include.members([size]);
            next();
        });
    });

    context('Static operators: "well known symbols", which are implemented within other native objects', function () {
        // jscs:disable requireSpacesInFunctionExpression

        // babel not supported
        it.skip('Symbol.hasInstance, drives the behaviour of instanceof', function (next) {
            class TestClass {
                static [Symbol.hasInstance] (instance) {
                    return Array.isArray(instance);
                }
            }

            expect([] instanceof TestClass).to.be.true;
            next();
        });

        it('Symbol.iterator: drives over operator #of, that loop over the values generated by symbol iterator,' +
            'only on indexed properties', function (next) {
            let testArray = [1, 2, 3],
                resultForOf = [],
                resultIterator = [],
                resultIndexed = [1, 2, 3],
                resultNonIndexed = [1, 2, 3, 4];

            testArray.nonIndexed = 4;

            // FOR OF
            for (let value of testArray) {
                resultForOf.push(value);
            }

            // SYMBOL ITERATOR
            let testArrayIterator = testArray[Symbol.iterator](),
                testArrayIteration;

            while ((testArrayIteration = testArrayIterator.next())) {// eslint-disable-line no-extra-parens
                if (testArrayIteration.done) {
                    break;
                }

                resultIterator.push(testArrayIteration.value);
            }

            expect(resultForOf).to.deep.include.members(resultIndexed);
            expect(resultIterator).to.deep.include.members(resultIndexed);
            expect(resultForOf).not.to.deep.include.members(resultNonIndexed);
            expect(resultIterator).not.to.deep.include.members(resultNonIndexed);
            next();
        });

        // babel not supported
        it.skip('Symbol.isConcatSpreadable: drives the behaviour of Array#concat', function (next) {
            let testArray = [1, 2, 3],
                expectedConcatArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

            // concat behaviour: spreadable / flattened (esparcido, homogeneizado)
            expect(testArray.concat([4, 5], 6).concat([7, 8], 9)).to.deep.include.members(expectedConcatArray);
            expect(testArray).not.to.be.equals(expectedConcatArray);

            // on concat behaviour into class when add new indexed property
            class ArrayTest extends Array {
                get [Symbol.isConcatSpreadable]() {
                    return true;
                }
            }

            class CollectionTest extends Array {
                get [Symbol.isConcatSpreadable]() {
                    return false;
                }
            }

            let array = new ArrayTest(),
                collection = new CollectionTest(),
                expectedConcatOverrideArray = [1, 2, 3, 4, 5, new CollectionTest(6, 7)];

            array[0] = 4;
            array[1] = 5;
            collection[0] = 6;
            collection[1] = 7;
            expectedConcatArray = [1, 2, 3, 4, 5, 6, 7];
            expect(testArray.concat(array).concat(collection)).not.to.be.equals(expectedConcatArray);
            expect(testArray.concat(array).concat(collection)).to.deep.include.members(expectedConcatOverrideArray);
            next();
        });

        it('Symbol.unscopables: defines a set of “unscopable” values in an Object' +
            'which should not be set when used inside the "with" statement', function (next) {
            let foo = function () {
                return 'outside class scope';
            };

            class TestScopable {
                foo() {
                    return 'public function of TestScopable';
                }
            }

            class TestUnScopable {
                foo() {
                    return 'public function of TestUnScopable';
                }

                get [Symbol.unscopables]() {
                    return {
                        foo: true
                    };
                }
            }

            expect(foo()).to.be.equals('outside class scope');
            expect((new TestScopable()).foo()).to.be.equals('public function of TestScopable');
            expect((new TestUnScopable()).foo()).to.be.equals('public function of TestUnScopable');

            /*http://stackoverflow.com/questions/34851566/browserify-error-with-in-strict-mode
             with (TestScopable.prototype) {
             expect(foo()).to.be.equals('public function of TestScopable');
             }

             with (TestUnScopable.prototype) {
             expect(foo()).to.be.equals('outside class scope');
             expect((new TestUnScopable()).foo()).to.be.equals('public function of TestUnScopable');
             }
             */
            next();
        });
        // jscs:enable requireSpacesInFunctionExpression
    });
});
