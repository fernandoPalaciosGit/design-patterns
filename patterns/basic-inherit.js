var Vehicle = function( settings ){
    this.distributor = settings.distributor || "distributor not prvided";
    this.aviableLicence = true;
};

Vehicle.prototype.enableLicence = function( enable ){
    this.aviableLicence = enable;
};

var Car = function( settings ){
    this.color = settings.color || "color not provided";
    this.model = settings.model || "model not provided";

    // Extending from constructor instance properties (this : distributor, aviableLicence, color, model)
    // Extending prototype properties ( prototype : enableLicence )
    Vehicle.apply( this, arguments );
    this.__proto__ = Vehicle.prototype;
};

Car.prototype.guru = "yomismo";

var pegasus_21 = new Car({
    color : "yellow",
    model : "toyota pegasus X654",
    distributor : "Toyota"
});