/*** declarete @constructor*/
var Car = function( model, color ){
    // instance properties
    this.model = model;
    this.year = new Date();
    this.color = color;
    this.geInfo = function(){
        return this.model+" "+this.year;
    };
};