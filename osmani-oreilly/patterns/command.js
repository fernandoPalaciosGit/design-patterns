var RentCar = function(){
    var scope = this;
    
    // Command Patern
    var _execute = function( methodName ){
        /*hasOwnProperty return false, because methods of Rentcar are inheritance from prototype
        not from instance */
        if( methodName in scope ){
            scope[methodName].apply(scope, [].slice.call(arguments, 1) );
        }
    };

    // creational pattern
    Object.defineProperty( this, 'checkBussinessRentCar', {
        value: _execute,
        enaumerable: true
    });
};

RentCar.prototype.buyCar = function( model, id ){
    console.dir("buyCar", arguments);
};
RentCar.prototype.requestInfo = function( model, id ){
    console.dir("requestInfo", arguments);
};
RentCar.prototype.arrengeViewing = function( model, id ){
    console.dir("arrengeViewing", arguments);
};

var Adis = new RentCar();
Adis.checkBussinessRentCar( "buyCar", "Ferrrari", 546546);
Adis.checkBussinessRentCar( "requestInfo", "Ferrrari", 546546);
Adis.checkBussinessRentCar( "arrengeViewing", "Ferrrari", 546546);