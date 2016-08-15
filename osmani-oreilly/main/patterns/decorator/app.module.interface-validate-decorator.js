'use strict';

// http://addyosmani.com/blog/decorator-pattern/
// https://medium.com/google-developers/exploring-es7-decorators-76ecb65fb841#.rmslfpdzw

var MacbookProInterface,
    getInterface = require('./../../utils/Interface'),
    _ = require('lodash');

MacbookProInterface = function (macbook) {
    var Macbook = getInterface('Macbook', ['addEngraving', 'addParallels', 'add4GBRam', 'add8GBRam', 'addCase']);

    Macbook.ensureImplements(macbook);
    this.macbook = macbook;
};

_.assign(MacbookProInterface.prototype, {
    addEngraving: function () {
        return this.macbook.addEngraving();
    },
    addParallels: function () {
        return this.macbook.addParallels();
    },
    add4GBRam: function () {
        return this.macbook.add4GBRam();
    },
    add8GBRam: function () {
        return this.macbook.add8GBRam();
    },
    addCase: function () {
        return this.macbook.addCase();
    },
    getPrice: function () {
        return this.macbook.getPrice();
    }
});


//Instantiation of the macbook
var myMacbookPro = new MacbookProInterface();
//This will return 900.00
console.log(myMacbookPro.getPrice());