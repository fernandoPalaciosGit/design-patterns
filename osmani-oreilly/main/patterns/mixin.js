'use strict';

let _ = require('lodash'), overrideMethod = _.noop, overrideObject = _.noop;

// check method extend from givingClass but there is´nt into receiving
overrideMethod = function (receiving, givingClass, overrideMethodInherit) {
    let hasFunctionOverridden = _.isUndefined(receiving.prototype[overrideMethodInherit]) &&
        _.isFunction(givingClass.prototype[overrideMethodInherit]);

    if (hasFunctionOverridden) {
        receiving.prototype[overrideMethodInherit] = givingClass.prototype[overrideMethodInherit];

    } else {
        throw new Error('could not override method: ' + overrideMethodInherit);
    }
};

// augmenting existing class with a method from others
overrideObject = function (receiving, givingClass) {
    _.assign(receiving.prototype, givingClass.prototype);
};

// only provide certain methods to extend from prototype properties
module.exports.augment = function (receiving, givingClass, overrideMethodInherit) {
    _.isString(overrideMethodInherit) ?
        overrideMethod.apply({}, arguments) : overrideObject.apply({}, arguments);
};
