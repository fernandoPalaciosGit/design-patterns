'use strict';

var _ = require('lodash'), template, parseHtml;

template = function (parseTemplate, interpolatedTemplate, ...interpolatedValues) {
    return interpolatedTemplate.reduce((memo, current, index) => {
        return memo += interpolatedValues.hasOwnProperty(index) ? current + parseTemplate(interpolatedValues[index]) : current;
    }, '');
};

parseHtml = function (val) {
    return String(val)
        .replace(new RegExp('&', 'g'), '&amp;')
        .replace(new RegExp('>', 'g'), '&gt;')
        .replace(new RegExp('<', 'g'), '&lt;');
};

module.exports = {
    getString: _.partial(template, _.identity),
    getHtml: _.partial(template, parseHtml)
};
