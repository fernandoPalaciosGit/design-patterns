/* eslint-disable no-unused-vars */
'use strict';

module.exports.objectsAnswers = {
    alterContext: function (fn, obj) {
        return fn.call(obj);
    },

    alterObjects: function (constructor, greeting) {
        constructor.prototype.greeting = greeting;
    },

    iterate: function (obj) {
        let results = [];

        // propiedades enumerables, no heredadas
        for (let prop in obj) {
            // propiedades instanciadas (del constructor), no de su prototipo
            if (obj.hasOwnProperty(prop)) {
                results.push([prop, obj[prop]].join(': '));
            }
        }

        return results;
    }
};
