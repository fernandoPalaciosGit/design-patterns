'use strict';

/*** declarete @constructor*/
var Car = function (model, color) {
    // instance properties
    this.model = model;
    this.year = new Date();
    this.color = color;
    this.getInfo = function () {
        return this.model + ' ' + this.year;
    };
};

var civic = new Car('Honda Civic', 'blue storm');
civic.getInfo();