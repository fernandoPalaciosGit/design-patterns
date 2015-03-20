// leave 'default' properties into a untouched state
// 'option' properties to extend functionaliti

"use strict";
var decoratoApp = {
    defaults : {
        validate : true,
        name : "bar",
        limit: 5,
        welcome : function(){
            console.log("welcome");
        }
    },
    options : {
        validate : false,
        name : "foo",
        helloworld : function(){
            console.log("hello");
        }
    },
    settings : {},
    printObj : function( obj ){
        var arrObj = [];

        Object.keys(obj).forEach(function( key, index ){
            arrObj.push( key + " : " + this[key] );
        }, obj);

        return "{" + arrObj.join(", ") + "}";
    }
};

// recursive merging (overriding properties)
decoratoApp.settings  = $.extend(true, {}, decoratoApp.defaults, decoratoApp.options);
decoratoApp.printObj( decoratoApp.settings );