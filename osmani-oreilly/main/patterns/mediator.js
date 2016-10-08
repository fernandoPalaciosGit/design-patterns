'use strict';

let _ = require('lodash'),
    observer = require('./observer/observer');

module.exports = function (object) {
    _.assign(object, observer);
};
