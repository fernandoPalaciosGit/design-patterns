// http://addyosmani.com/blog/decorator-pattern/

/* An interface is a way of defining the methods an object *should* have, 
 however, it doesn't actually directly specify how those methods should be implemented.*/

"use strict";

// we define our intergface by its name and array methods 
var Interface = function (name, methods) {
    if (arguments.length != 2) {
        throw new Error("Interface constructor called with " + arguments.length + "arguments, but expected exactly 2.");
    }
    this.name = name;
    this.methods = [];
    for (var i = 0, len = methods.length; i < len; i++) {
        if (typeof methods[i] !== "string") {
            throw new Error("Interface constructor expects method names to be " + "passed in as a string.");
        }
        this.methods.push(methods[i]);
    }
};


// Static class method
Interface.ensureImplements = function (object) {
    if (arguments.length < 2) {
        throw new Error("Function Interface.ensureImplements called with " + arguments.length + "arguments, but expected at least 2.");
    }

    for (var i = 1, len = arguments.length; i < len; i++) {
        var interface = arguments[i];
        if (interface.constructor !== Interface) {
            throw new Error("Function Interface.ensureImplements expects arguments" + "two and above to be instances of Interface.");
        }
        for (var j = 0, methodsLen = interface.methods.length; j < methodsLen; j++) {
            var method = interface.methods[j];
            if (!object[method] || typeof object[method] !== "function") {
                throw new Error("Function Interface.ensureImplements: object " + "does not implement the " + interface.name + " interface. Method " + method + " was not found.");
            }
        }
    }
};

// Mackbook.name , Mackbook.methods
var Macbook = new Interface("Macbook", ["addEngraving", "addParallels", "add4GBRam", "add8GBRam", "addCase"]);

var MacbookProInterface = function( macbook ){
    Interface.ensureImplements(macbook, Macbook);
    this.macbook = macbook;
};

MacbookProInterface.prototype = {
         addEngraving: function(){
            return this.macbook.addEngraving();
        },
        addParallels: function(){
            return this.macbook.addParallels();
        },
        add4GBRam: function(){
            return this.macbook.add4GBRam();
        },
        add8GBRam:function(){
            return this.macbook.add8GBRam();
        },
        addCase: function(){
            return this.macbook.addCase();
        },
        getPrice: function(){
            return this.macbook.getPrice();
        }
};

//Instantiation of the macbook
var myMacbookPro = new MacbookProInterface();
//This will return 900.00
console.log(myMacbookPro.getPrice());

//Decorate the macbook
myMacbookPro = new CaseDecorator( myMacbookPro ); /*note*/
//This will return 945.00
console.log(myMacbookPro.getPrice());