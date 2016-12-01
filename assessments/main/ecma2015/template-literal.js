'use strict';

require('babel-polyfill');

var _ = require('lodash'), Template;

Template = function () {
    this.BLOCK = {
        START: Symbol('blockStartSentinel'),
        IGNORE: Symbol('blockIgnoreSentinel'),
        END: Symbol('blockEndSentinel')
    };
    this.sentinels = [];
};

_.assign(Template.prototype, {
    // Template Blocks
    setSentinels: function (val = []) {
        this.sentinels = val;
    },
    hasToAddBlockSymbol: function (interpolated) {
        return _.includes([this.BLOCK.START, this.BLOCK.IGNORE], interpolated);
    },
    hasToRemoveBlockSymbol: function (interpolated) {
        return _.includes([this.BLOCK.END], interpolated);
    },
    hasToIgnoreBlockTemplate: function () {
        return _.includes(this.sentinels, this.BLOCK.IGNORE);
    },
    buildBlockSymbols: function (interpolated) {
        if (this.hasToAddBlockSymbol(interpolated)) {
            this.sentinels.push(interpolated);
        }

        if (this.hasToRemoveBlockSymbol(interpolated)) {
            this.sentinels.pop();
        }
    },
    cleanBlockSymbols: function () {
        _.pull(this.sentinels, this.BLOCK.IGNORE);
    },
    getValueWithoutSentinels: function (interpolated) {
        return this.hasToAddBlockSymbol(interpolated) || this.hasToRemoveBlockSymbol(interpolated) ? '' : interpolated;
    },

    // Template Render
    parseString: function (val) {
        return _.chain(String(val))
            .trim()
            .escape()
            .value();
    },
    parseHtml: function (val) {
        return _.chain(String(val))
            .trim()
            // remove Carriage Return, Line Feeds and white spaces in all OS between not words or numbers (special characters)
            .replace(new RegExp('(\\W)\\s+|\\s+(\\W)', 'g'), '$1')
            .replace(new RegExp('&', 'g'), '&amp;')
            .replace(new RegExp('>', 'g'), '&gt;')
            .replace(new RegExp('<', 'g'), '&lt;')
            .value();
    },
    engine: function (parseTemplate, interpolatedTemplate, ...interpolatedValues) {
        var buildTemplate = (memo, current, index) => {
            if (this.hasToIgnoreBlockTemplate()) {
                this.cleanBlockSymbols();

            } else if (interpolatedValues.hasOwnProperty(index)) {
                this.buildBlockSymbols(interpolatedValues[index]);
                memo += current + this.getValueWithoutSentinels(interpolatedValues[index]);

            } else {
                memo += current;
            }

            return memo;
        };

        this.setSentinels();

        return _.chain(interpolatedTemplate)
            .reduce(buildTemplate, '')
            .thru(parseTemplate)
            .value();
    },

    // Interfaces
    render: function () {
        return _.partial(this.engine, _.identity).apply(this, arguments);
    },
    renderString: function () {
        return _.partial(this.engine, this.parseString).apply(this, arguments);
    },
    renderHtml: function () {
        return _.partial(this.engine, this.parseHtml).apply(this, arguments);
    },
    select: function (condition, thenTemplate, elseTemplate = '') {
        return condition ? thenTemplate : elseTemplate;
    },
    map: function (list, cb) {
        return list.map(cb).join('');
    },
    start: function (condition = true) {
        return condition ? this.BLOCK.START : this.BLOCK.IGNORE;
    },
    end: function () {
        return this.BLOCK.END;
    }
});

module.exports = (options = {}) => new Template(options);
