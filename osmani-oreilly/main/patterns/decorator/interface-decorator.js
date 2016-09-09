'use strict';

/**
 * Provide dynamic responsibilities to an object
 */
var User, UserGeolocate,
    _ = require('lodash'),
    logger = require('./../../utils/Output').getLogger;

// Prototype
User = function (options) {
    this.name = options.name;
};

_.assign(User.prototype, {
    remember: function () {
        logger.add('User: ' + this.name);
    },
    say: function () {
        return logger.showLog();
    }
});

// Decorator
UserGeolocate = function (user, options) {
    // ensure that the interface maintains the properties
    if (user instanceof User) {
        this.user = user;
        this.name = this.user.name;
        this.street = options.street;
        this.city = options.city;

    } else {
        throw new TypeError('User reference incorrect.');
    }
};

_.assign(UserGeolocate.prototype, {
    // overloading properties
    remember: function () {
        logger.add('User: ' + this.name + ', ' + this.street + ', ' + this.city);
    },
    say: function () {
        return this.user.say();
    }
});

module.exports.getUser = function (options) {
    return new User(options || {});
};

module.exports.getUserGeolocated = function (user, options) {
    return new UserGeolocate(user, options || {});
};
