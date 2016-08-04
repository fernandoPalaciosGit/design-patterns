'use strict';

var MyModule = (function (w) {

    var prop = 'All my private property';

    function myMethod() {
        w.alert('my method');
    }

    function myOtherMethod() {
        w.alert('my other method');
    }

    function Construct(p) {
        this.prop = p;
        this.func = myOtherMethod;
    }

    // return public methods when this object is instantiated
    return {
        // not possible to override
        SomeContructor: Construct,
        someAlertMethod: myMethod,
        privateProp: prop // Possible to override
    };

})(window);

//  example usage
MyModule.myMethod(); // undefined
MyModule.myOtherMethod(); // undefined
MyModule.someAlertMethod(); // alerts 'my method'
MyModule.someAlertOtherMethod(); // alerts 'my other method'

var instance = new MyModule.SomeContructor(MyModule.privateProp);
instance.prop;
instance.func();