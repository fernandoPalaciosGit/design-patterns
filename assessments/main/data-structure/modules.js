/* eslint-disable no-unused-vars */
'use strict';

let Personal = function (options) {
    this.greeting = options.greeting;
    this.name = options.name;
};

Personal.prototype = {
    sayIt: function () {
        return [this.greeting, this.name].join(', ');
    }
};

Personal.prototype.constructor = Personal;

module.exports.modulesAnswers = {
    createModule: function (str1, str2) {
        return new Personal({
            greeting: str1,
            name: str2
        });
    }
};
