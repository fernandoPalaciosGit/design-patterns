var Vehicle = function( options ){
    this.op = options.op || "not assign";
};

var Car = function( options ){
    Vehicle.apply( this, arguments );
    this.paint = options.paint || "white";
    this.doors = options.doors || 5;
};

var Sport = function( options ){
    Vehicle.apply( this, arguments );
    this.turbo = options.turbo || false;
    this.tires = options.tires || "pirelli";
};

var Truck = function( options ){
    Vehicle.apply( this, arguments );
    this.capacity = options.capacity || 1.235;
    this.tires = options.tires || 10;
};


(function( Car, Sport, Truck ){
    // SUPERCLASS FACTORY
    var FarctoryVehicle = function(){ };
    FarctoryVehicle.prototype.vehicleClass = Car; // asignar el tipo de factoria
    // interfaz por doinde ,voy a crear instancias de ese tipo de factoria
    FarctoryVehicle.prototype.getVehicle = function( options ){
        return new this.vehicleClass( options );
    };

    // crear una instancia del tipo de la factoria, reutilizable por tipos
    var farctoryVehicle = new FarctoryVehicle();
    var megane = farctoryVehicle.getVehicle( {paint: "red", doors: 3} );
    console.assert( megane instanceof Car );
    console.dir(megane);

    // si queremos cambiar el comportamiento de la factoria, por ejemplo propiedades diferentes
    // modify the factory type
    FarctoryVehicle.prototype.vehicleClass = Sport;
    var mazda = farctoryVehicle.getVehicle( {turbo: true, tires: "michellin"} );
    console.assert( mazda instanceof Sport );
    console.dir(mazda);


    // SUBCLASS FACTORY
    // si queremos cambiar el tipo de factoria
    var FarctoryTruck = function(){};
    FarctoryTruck.prototype = new FarctoryVehicle();
    FarctoryVehicle.prototype.vehicleClass = Truck;
    var farctoryTruck = new FarctoryTruck();
    var maverick = farctoryTruck.getVehicle( {capacity: 2.5, tires: 15, op: "Joan Company"} );
    console.assert( maverick instanceof Truck );
    console.dir(maverick);

}( Car, Sport, Truck ));
