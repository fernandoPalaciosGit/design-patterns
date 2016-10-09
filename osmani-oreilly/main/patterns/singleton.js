'use strict';

let ConfigConstruct, _singleton, _initInstance;

ConfigConstruct = function (config) {
    this.name = config.name || 'singleton tester';
};

ConfigConstruct.prototype.setName = function (name) {
    this.name = name;
};

// first instance creation once in execution
_initInstance = function (opt) {
    _singleton = new ConfigConstruct(opt);

    return _singleton;
};

module.exports.getInstance = (opt) => {
    return _singleton instanceof ConfigConstruct ? _singleton : _initInstance(opt || {});
};
