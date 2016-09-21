'use strict';

// http://tobyho.com/2010/11/22/javascript-constructors-and/

// Type constructor
var Person = function (name) {
    this.name = name;
};

/*instances are objects type of its onstructor (self properties),
 prototype from its constructor (shared properties)*/
var bobby = new Person('Bobby Fisher');
bobby instanceof Person; //true

// elevate this. to global scope
/* jshint newcap:false */
var bobby = Person('Bobby Fisher');
bobby.name;
/*Error, bobby.name is undefined,
 because Person() return its scope (this) to window,
 and there is not returning nothing*/

window.name; // Bobby Fisher

/*queremos que nuestros constructores apunten al namespace de su propio tipo,
 (in otrer words, create global variables)*/
var Person = function (name) {
    if (!(this instanceof Person)) {
        return new Person(name);
    }

    this.name = name;
};

// We can return constructor scope from any type, saving primitive types
var Cat = function (name) {
    this.name = name;
};
var Person = function (name) {
    return new Cat(name);
};
var bobby = Person('Bobby Fisher');
bobby instanceof Person; // false
bobby instanceof Cat; // true


// PROTOTYPE INHERITANCE
var Person = function (name) {
    this.name = name || '';
};
Person.prototype.isProgrammer = true;

var Pianist = function () {
    this.handicap = 'enhancement';
};
Pianist.prototype = new Person(); // now pianist is a person
Pianist.prototype.constructor = Pianist;
Pianist.prototype.scoreSharpSound = function () {
};

var nando = new Pianist('nando');
/* jshint proto:true */
nando.__proto__ === Pianist.prototype; // true
nando.constructor === Pianist.prototype.constructor; // true
nando instanceof Pianist; // true

// nando -> Pianist.prototype -> Person.prototype -> Object.prototype
/*Each time you create a new instance of Pianist,
 we create a 3-level chain,
 in that nando is now parented by Pianist.prototype which,
 since it is an instance of Persona, is in turn parented by Person.prototype.
 We can extend properties from ever parent prototype, and fernando's going to inherit*/
Person.prototype.surname = 'Palacios';
Pianist.prototype.pianoMark = 'Yamaha';
/* jshint freeze:false */
Object.prototype.aviableInstance = true;

// check instance properties
nando.hasOwnProperty('name'); // false
nando.hasOwnProperty('handicap'); // true

// check inherit properties
'name' in nando; // true
'scoreSharpSound' in nando; // true
'surname' in nando; // true
'pianoMark' in nando; // true
'aviableInstance' in nando; // true


/*se puede utilizar el metodo 'apply' del prototipo de Funtion (Funtion.prototype.apply)
 en cualquier contructor para especificar (sobreescribir) la llamada al contexto 'this'*/
var Book = function (idBook) {
    this.ISBN = idBook;
};

Book.prototype.toStringISBN = function () { // Book -> Funtion -> Object
    return 'That´s my book ' + this.ISBN.toUpperCase();
};

var pesca = new Book('pesca');
var caza = new Book('caza');

pesca.toStringISBN();
caza.toStringISBN.apply(pesca); // change contex


////////////////////////////////////////////////////////////////
// apply arguments are arguments within function constructors //
////////////////////////////////////////////////////////////////

var CalculateFuntions = function (params) {
    this.arrParams = params;
};

CalculateFuntions.prototype.max = function () {
    return Math.max.apply(Math, arguments[0]);
};

var myGraph = new CalculateFuntions([2, 72, 65, 1]);
myGraph.max(myGraph.arrParams);


///////////////////////////
// OVERRIDING NEW METHOD //
///////////////////////////
Function.prototype.new = function () {
    var args = arguments,
        constructor = this,
        Fake = function () {
            constructor.apply(this, args); // 'this' is the real constructor
        };

    Fake.prototype = constructor.prototype;
    Fake.prototype.constructor = constructor;
    /* jshint supernew:true */
    return new Fake; // return the constructor object
};

var Library = function (name) {
    this.name = name;
};
var comecocos = Library.new('comecocos');
comecocos instanceof Library; // true