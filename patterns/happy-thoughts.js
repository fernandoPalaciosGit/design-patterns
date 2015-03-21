// Type constructor
"use strict";
var Person = function( name ){
    this.name = name;
};

/*instances are objects type of its onstructor (self properties),
prototype from its constructor (shared properties)*/
var bobby = new Person("Bobby Fisher");
bobby instanceof Person; //true

// elevate this. to global scope 
var bobby = Person("Bobby Fisher");
bobby.name; /*Error, bobby is undefined, 
            because Person() return its scope (this) to window,
            and there is not returning nothing*/

window.name; // Bobby Fisher

/*queremos que nuestros constructores apunten al namespace de su propio tipo,
(in otrer words, create global variables)*/
var Person = function( name ){
    if( !(this instanceof Person) )
        return new Person( name );

    this.name = name;
};

// We can return constructor scope from any type, saving primitive types
var Cat = function(name){
    this.name = name;
};
var Person = function(name){
    return new Cat(name);
};
var bobby = Person("Bobby Fisher");
bobby instanceof Person; // false
bobby instanceof Cat; // true


// PROTOTYPE INHERITANCE
var Person = function(name){ this.name = name || ""; };
Person.prototype.isProgrammer = true;

var Pianist = function( name ){ 
    this.handicap = "enhancement";
};
Pianist.prototype = new Person(); // now pianist is a person
Pianist.prototype.constructor = Pianist;
Pianist.prototype.scoreSharpSound = function(){};

var nando = new Pianist( "nando" );
nando.__proto__ === Pianist.prototype; // true
nando.constructor === Pianist.prototype.constructor; // true
nando instanceof Pianist; // true

// nando -> Pianist.prototype -> Person.prototype -> Object.prototype
/*Each time you create a new instance of Pianist,
we create a 3-level chain,
in that nando is now parented by Pianist.prototype which,
since it is an instance of Persona, is in turn parented by Person.prototype.
We can extend properties from ever parent prototype, and fernando's going to inherit*/
Person.prototype.surname = "Palacios";
Pianist.prototype.pianoMark = "Yamaha";
Object.prototype.aviableInstance = true;

// check instance properties
nando.hasOwnProperty("name"); // false
nando.hasOwnProperty("handicap"); // true

// check inherit properties
"name" in nando; // true
"scoreSharpSound" in nando; // true
"surname" in nando; // true
"pianoMark" in nando; // true
"aviableInstance" in nando; // true