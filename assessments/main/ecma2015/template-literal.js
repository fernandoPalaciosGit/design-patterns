'use strict';

module.exports = {
    getString: function (interpolatedTemplate, ...interpolatedValues) {
        return interpolatedTemplate.reduce((memo, current, index) => {
            return memo += interpolatedValues.hasOwnProperty(index) ? current + interpolatedValues[index] : current;
        }, '');
    }
};
