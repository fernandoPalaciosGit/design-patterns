'use strict';

var _ = require('lodash'), template, parseHtml;

template = function (parseTemplate, interpolatedTemplate, ...interpolatedValues) {
    var buildTemplate = (memo, current, index) =>
            memo += interpolatedValues.hasOwnProperty(index) ? current + interpolatedValues[index] : current;

    return _.chain(interpolatedTemplate)
        .reduce(buildTemplate, '')
        .trim()
        .thru(parseTemplate)
        .value();
};

parseHtml = function (val) {
    return String(val)
        // remove Carriage Return, Line Feeds and white spaces in all OS between not words or numbers (special characters)
        .replace(new RegExp('(\\W)\\s+|\\s+(\\W)', 'g'), '$1')
        .replace(new RegExp('&', 'g'), '&amp;')
        .replace(new RegExp('>', 'g'), '&gt;')
        .replace(new RegExp('<', 'g'), '&lt;');
};

module.exports = {
    getString: _.partial(template, _.identity),
    getHtml: _.partial(template, parseHtml),
    select: (condition, thenTemplate, elseTemplate = '') => condition ? thenTemplate : elseTemplate,
    map: (list, cb) => list.map(cb).join('')
};
