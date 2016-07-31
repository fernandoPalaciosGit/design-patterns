var Vehicle = function( settings ){
    this.distributor = settings.distributor || "distributor not prvided";
    this.aviableLicence = true;
};

Vehicle.prototype =  {
    enableLicence : function( enable ){
        this.aviableLicence = enable;
    },
    chenageDistributor : function( newDist ){
        this.distributor = newDist;
    }
};

var Car = function( settings ){
    this.color = settings.color || "color not provided";
    this.model = settings.model || "model not provided";
};

var Sport = function( settings ){
    this.color = settings.color || "color not provided";
    this.model = settings.model || "model not provided";
};

// augmenting existing class with a method from others
var augment = function( recivingClass, givingClass ){
    var methodNameInherit;
    
    // only provide certain methods to eextentd from prototype properties
    if( !!arguments[2] ){
        for (var i = 2, len = arguments.length ; i < len; i++) {
            methodNameInherit = arguments[i];
            if( !methodNameInherit.isprototypeOf(recivingClass) ){
                recivingClass.prototype[ methodNameInherit ] = givingClass.prototype[ methodNameInherit ];
            }
        }

    // provide all methos
    } else {
        for( methodNameInherit in givingClass.prototype ){
            // check all method extend from givingClass but there is´nt into recivingClass
            if( !recivingClass.prototype[methodNameInherit] ){
                recivingClass.prototype[ methodNameInherit ] = givingClass.prototype[ methodNameInherit ];
            }

        }
    }
};

// INHERITANCE
augment( Sport, Vehicle ); // Sports instance inherit all prototype properties from Vehcle
augment( Car, Vehicle, "chenageDistributor" );

var pegasus_21 = new Car({
    color : "yellow",
    model : "toyota pegasus X654",
    distributor : "Toyota"
});
// pegasus_21.enableLicence(true); // Error
pegasus_21.chenageDistributor("Toyota Vip");

var shine_42 = new Sport({
    color : "red",
    model : "Lexus Y-X564",
    distributor : "Lexus"
});
shine_42.enableLicence(true);
shine_42.chenageDistributor("Lexus Vip");