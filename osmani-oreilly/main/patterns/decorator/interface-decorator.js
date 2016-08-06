'use strict';

// http://www.dofactory.com/javascript/decorator-design-pattern

var log = (function( w ){
    
    var acumulateLog ='';
    return {
        add: function( log ){
            acumulateLog += (log+'\n');
        },
        show : function(){
            w.alert(acumulateLog); acumulateLog ='';
        }
    };
}(window));

// MAIN CONSTRUCTOR
var User = function( name ){
    this.name = name ||'';
    this.say = function(){
        log.add('User: '+this.name);
    };
};

// DECORATOR
var UserHomeland = function( user, street, city ){
    // ensure that the interface maintains the properties
    this.name = user.name;
    this.street = street;
    this.city = city;

    // overloading properties
    this.say = function(){
        log.add('User: ' + this.name + ', ' + this.street + ', ' + this.city);
    };
};

// TESTING
var nando = new User('Fernando');
nando.say();

// decorate the simple instance, to omore complexible
nando = new UserHomeland(nando, 'Fiola', 'Palma de Mallorca');
nando.say();

log.show();