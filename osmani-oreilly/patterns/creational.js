/*jshint proto:true*/

'use strict';

var newObject, propObject;

newObject = Object.create(null);

//////////////////////
// ES3 : DOT SINTAX //
//////////////////////
newObject.someKey = 'someValue';    //writte propperty
propObject = newObject.someKey; // access to property

//////////////////////////////////
// ES3 : SQUARE BRACKETS SYNTAX //
//////////////////////////////////
newObject['someKey'] = 'someValue';     //writte propperty
propObject = newObject['someKey'];  // access to property

////////////////////////////////////////////////
// ES5 : property create by 'data descriptor' //
////////////////////////////////////////////////
Object.defineProperty(newObject, 'someKey', {
    __proto__: null,   // no inherited properties // in order to ensure preserve these properties behaveour
    value: 'someValue', // property value
    configurable: true, // can change typeof && can delete from Object
    enaumerable: true,  // can show by iterate into Object
    writable: true      // can be modified
});

////////////////////////////////////
// ES5 : Object define properties //
////////////////////////////////////
Object.defineProperties(newObject, {
    'someKey': {
        value: 'someValue',
        writable: true
    },
    'anotherKey': {
        value: 'someValue',
        writable: false
    }
});


//////////////////
// TEST PATTERN //
//////////////////
(function () {

    var Developer = function (name) {
        this.name = name;

        // create writable properties || 'data property descriptor'
        Object.defineProperty(this, 'skills', {
            value: [],
            configurable: true,
            enaumerable: true,
            writable: true
        });

        // create final properties
        Object.defineProperty(this, 'proyects', {
            __proto__: null,
            value: [],
            configurable: false,
            enaumerable: false,
            writable: false
        });
    };

    Developer.prototype.addSkills = function (skill) {
        this.skills.push(skill);
    };

    Developer.prototype.addProyects = function (proyect) {
        this.proyects.push(proyect);
    };

}());
