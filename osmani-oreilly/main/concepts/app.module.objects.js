'use strict';

var _patternDescription = 'Object literal Module notation',
    _privConfig = {
        useCaching: true,
        language: 'es'
    },
    _errorRewritting = {
        message: 'Couldn´t find config properties into new option.'
    },
    _isObjConfig = function (newConfig) {
        return newConfig.hasOwnProperty('useCaching') &&
            newConfig.hasOwnProperty('language');
    };

module.exports = {
    description: _patternDescription,
    toogleStatus: function () {
        _privConfig.useCaching = !_privConfig.useCaching;
    },
    printCachingStatus: function () {
        var msg = _privConfig.useCaching === true ? 'enabled' : 'disabled';

        return 'Caching is ' + msg;
    },
    rewriteConfig: function (opt) {
        opt = opt || {};

        if (!_isObjConfig(opt)) {
            throw new Error(_errorRewritting.message);

        } else {
            _privConfig = opt;
        }
    }
};