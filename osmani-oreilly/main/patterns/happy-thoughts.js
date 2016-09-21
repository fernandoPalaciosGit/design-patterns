'use strict';

var Person, PersonFromScope, Cat, Mammal, Musician, Pianist;

Person = function (name) {
    this.name = name;
};

PersonFromScope = function (name) {
    if (!(this instanceof Person)) {
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

Pianist = function () {
    this.handicap = 'enhancement';
};

Pianist.prototype = new Musician();
Pianist.prototype.constructor = Pianist;
Pianist.prototype.scoreSharpSound = function () {
    return 100;
};

/* jshint freeze:false */
Musician.prototype.surname = 'Magnificent';
Pianist.prototype.pianoMark = 'Yamaha';
Object.prototype.aviableInstance = true;

module.exports = {
    Person: Person,
    PersonFromScope: PersonFromScope,
    Cat: Cat,
    Mammal: Mammal,
    Pianist: Pianist
};
