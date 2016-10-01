'use strict';

var _ = require('lodash'),
    Person, PersonFromScope, Cat, Mammal, Musician, Pianist, Book, CalculateFuntions;

Person = function (name) {
    this.name = name;
};

PersonFromScope = function (name) {
    if (!(this instanceof PersonFromScope)) {
        return new Person(name);
    }

    this.surname = name;
};

Cat = function (name) {
    this.name = name;
};

Mammal = function (name) {
    return new Cat(name);
};

Musician = function (name) {
    this.name = name;
};

Musician.prototype.isProgrammer = false;

Pianist = function (name) {
    this.handicap = 'enhancement';
    this.name = name;
};

Pianist.prototype = new Musician('Grandioso');
Pianist.prototype.constructor = Pianist;
Pianist.prototype.scoreSharpSound = function () {
    return 100;
};

/* jshint freeze:false */
Musician.prototype.surname = 'Magnificent';
Pianist.prototype.pianoMark = 'Yamaha';
Object.prototype.isAviableInstance = _.constant(true);

Book = function (idBook) {
    this.ISBN = idBook;
};

Book.prototype.toStringISBN = function () {
    return 'That´s my book ' + this.ISBN.toUpperCase();
};

CalculateFuntions = function (params) {
    this.arrParams = params;
};

CalculateFuntions.prototype.max = function () {
    return Math.max.apply(Math, arguments);
};

Function.prototype.newInstance = function () {
    var args = arguments,
        constructor = this,
        Fake = function () {
            // 'this' is the real constructor
            constructor.apply(this, args);
        };

    Fake.prototype = constructor.prototype;
    Fake.prototype.constructor = constructor;
    /* jshint supernew:true */
    return new Fake;
};

module.exports = {
    Person: Person,
    PersonFromScope: PersonFromScope,
    Cat: Cat,
    Mammal: Mammal,
    Pianist: Pianist,
    Book: Book,
    CalculateFuntions: CalculateFuntions
};
