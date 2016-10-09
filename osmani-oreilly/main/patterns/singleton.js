'use strict';

let Construct, _singleton, _checkInitializedSingleton;

Construct = function (config) {
    this.name = config.name || 'singleton tester';
};

Construct.prototype.setName = function (name) {
    this.name = name;
};

_checkInitializedSingleton = function (opt) {
    var hasInitializedSingleton = _singleton instanceof Construct;

    // first instance creation once in execution
    if (!hasInitializedSingleton) {
        _singleton = new Construct(opt || {});
    }
};

module.exports.getInstance = (opt) => {
    _checkInitializedSingleton(opt);

    return _singleton;
};
