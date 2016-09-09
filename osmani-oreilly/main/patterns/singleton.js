'use strict';

var Singleton = (function () {
    var _instance = null,
        _initInstance;

    // first instance creation once in execution 
    _initInstance = function () {
        return {
            publicMethod: function () {
                return 'function ' + this.publicProperty;
            },
            publicProperty: 'property, created once'
        };
    };

    // public interface
    return {
        getInstance: function () {
            return ( !!_instance ) ? _instance : _initInstance();
        }
    };
}());
var singleton = Singleton.getInstance();
singleton.publicProperty;

//////////////////
// TEST PATTERN //
//////////////////
var ConfigOptions = (function () {
    var ConfigConstruct, _instance, _initInstance;

    ConfigConstruct = function (config) {
        config = config || {};
        this.name = 'singleton tester';
        this.pointX = config.pointX || 43;
        this.pointY = config.pointY || 852;
    };

    _initInstance = function (opt) {
        return new ConfigConstruct(opt);
    };

    return {
        getInstance: function (opt) {
            return ( !!_instance ) ? _instance : _initInstance(opt);
        }
    };
}());

var singleTest2 = ConfigOptions.getInstance({pointY: 1000000});
singleTest2.name;