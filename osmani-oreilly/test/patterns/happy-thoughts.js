'use strict';

describe('Design patterns', function () {
    var expect = require('chai').expect,
        _ = require('lodash'),
        jsExamples = require('./../../main/patterns/happy-thoughts');

    context('Javascript Contructors and Prototypes', function () {
        var Person, PersonFromScope, Mammal, Cat, bobby;

        before(function () {
            Person = jsExamples.Person;
            PersonFromScope = jsExamples.PersonFromScope;
            Mammal = jsExamples.Mammal;
            Cat = jsExamples.Cat;
        });

        afterEach(function () {
            bobby = undefined;
        });

        it('should create instance from prototype', function (next) {
            bobby = new Person('Bobby Fisher');
            expect(bobby).to.be.instanceof(Person);
            expect(bobby).to.have.property('name', 'Bobby Fisher');
            next();
        });

        it('should elevate \'this\' to global scope, and could not catch instance to variable', function (next) {
            /* jshint newcap:false */
            _.bind(function () {
                bobby = Person('Bobby Fisher');
            }, window);

            expect(bobby).to.not.be.instanceof(Person);
            expect(bobby).to.be.undefined;
            // expect(window.name).to.be.equals('Bobby Fisher'); // but browserify reserve own context
            next();
        });

        it('should constructor expose scope as instance variable, neither callee constructor point outside its scope', function (next) {
            /* jshint newcap:false */
            bobby = new PersonFromScope('Bobby Fisher');
            expect(bobby).to.be.instanceof(PersonFromScope);
            expect(window.surname).to.be.undefined;
            expect(bobby.surname).to.be.equals('Bobby Fisher');

            bobby = PersonFromScope('Bobby Fisher');
            expect(bobby).to.be.instanceof(Person);
            expect(bobby.name).to.be.equals('Bobby Fisher');
            next();
        });

        it('should return constructor scope from any type, saving primitive types', function (next) {
            bobby = new Mammal('Bobby Fisher');
            expect(bobby).to.not.be.instanceof(Mammal);
            expect(bobby).to.be.instanceof(Cat);
            next();
        });
    });

    context('Javascript Prototypes Inheritance', function () {
        context('Instance Pianist -> Pianist.prototype -> Person.prototype -> Function.prototype -> Object.prototype', function () {
            var Pianist, bobby;

            before(function () {
                Pianist = jsExamples.Pianist;
            });

            it('should inheritance prototypes properties and behaviour', function (next) {
                /* jshint proto:true */
                bobby = new Pianist('Grandioso');
                expect(bobby).to.be.instanceof(Pianist);
                expect(bobby.__proto__).to.deep.equals(Pianist.prototype);
                expect(bobby.constructor).to.deep.equals(Pianist.prototype.constructor);
                next();
            });

            it('should chaining inheritance with first prototype own properties', function (next) {
                bobby = new Pianist('Grandioso');
                expect(bobby).to.be.instanceof(Pianist);
                expect(bobby).to.have.ownProperty('handicap');
                expect(Object.getPrototypeOf(bobby)).to.have.ownProperty('pianoMark');
                expect(Object.getPrototypeOf(bobby)).to.have.ownProperty('scoreSharpSound');
                expect(bobby).not.to.have.ownProperty('surname');
                expect(bobby).not.to.have.ownProperty('isAviableInstance');
                next();
            });

            it('should chaining inheritance from all prototypes hierarchy', function (next) {
                bobby = new Pianist('Federico');
                expect(bobby.handicap).to.be.equals('enhancement');
                expect(bobby.scoreSharpSound()).to.be.equals(100);
                expect(bobby.pianoMark).to.be.equals('Yamaha');
                expect(bobby.name).to.be.equals('Federico');
                expect(bobby.surname).to.be.equals('Magnificent');
                expect(bobby.isProgrammer).to.be.equals(false);
                expect(bobby.isAviableInstance()).to.be.equals(true);
                next();
            });
        });
    });

    context('Funtion prototype', function () {
        var Book, CalculateFuntions;

        before(function () {
            Book = jsExamples.Book;
            CalculateFuntions = jsExamples.CalculateFuntions;
        });

        it('should override instance context', function (next) {
            var pesca = new Book('pesca'),
                caza = new Book('caza');

            expect(pesca).to.be.instanceof(Book);
            expect(caza).to.be.instanceof(Book);
            expect(pesca.toStringISBN()).to.be.equals('That´s my book PESCA');
            expect(pesca.toStringISBN.apply(caza)).to.be.equals('That´s my book CAZA');
            next();
        });

        it('should pass arguments as function params', function (next) {
            var arrValues = [2, 72, 65, 1],
                myGraph = new CalculateFuntions(arrValues);

            expect(myGraph.max(2, 72, 65, 1)).to.be.equals(72);
            expect(Math.max.apply(Math, myGraph.arrParams)).to.be.equals(72);
            next();
        });

        it('should extend methods from native prototypes', function (next) {
            var guardianCenteno = Book.newInstance('guardian-centeno');

            expect(guardianCenteno).to.be.instanceof(Book);
            next();
        });
    });
});
