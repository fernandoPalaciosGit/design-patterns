'use strict';
var _ = require('lodash'),
    phantomResources = {
        platzi: 'test/platzi.html',
        osmanioreilly: 'test/osmani-oreilly.html',
        assessments: 'test/assessments.html'
    };

module.exports = {
    // --reporter=spec,html,xunit
    reporters: [
        'test/spec.out',
        'test/html.out',
        'test/xunit.out'
    ],
    // --mask=Spec,Dot,Nyan
    masks: ['Spec', 'Dot', 'Nyan', 'Landing', 'List', 'Progress', 'Min', 'Html'],
    phantomResources: phantomResources,
    coverageReporter: 'test/coverage',
    coverageTarget: [
        '<%= mocha.coverageReporter %>/cobertura/cobertura-coverage.xml',
        '<%= mocha.coverageReporter %>/lcov/lcov.info',
        '<%= mocha.coverageReporter %>/clover/clover.xml',
        '<%= mocha.coverageReporter %>/json/coverage.json',
        '<%= mocha.coverageReporter %>/html/index.html'
    ],
    mochaOptions: {
        reporter: '<%= mochaReporterMask %>',
        run: true,
        logErrors: true,
        log: true
    },
    mochaOptionsWithCoverage: {
        run: true,
        coverage: {
            htmlReport: '<%= mocha.coverageReporter %>/html',
            coberturaReport: '<%= mocha.coverageReporter %>/cobertura',
            lcovReport: '<%= mocha.coverageReporter %>/lcov',
            cloverReport: '<%= mocha.coverageReporter %>/clover',
            jsonReport: '<%= mocha.coverageReporter %>/json'
        }
    },
    dev: {
        src: _.values(phantomResources),
        dest: '<%= mochaReporterOutput %>',
        options: '<%= mocha.mochaOptions %>'
    },
    coverage: {
        src: _.values(phantomResources),
        options: '<%= mocha.mochaOptionsWithCoverage %>'
    }
};
