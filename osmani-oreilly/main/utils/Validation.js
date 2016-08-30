'use strict';

var _ = require('lodash');

module.exports = {
    hasEmptyFields: function (args) {
        return _.chain(args).compact().isEmpty().value();
    },
    hasOwnPropertyChain: function (property, scope) {
        return property in scope;
    }
};