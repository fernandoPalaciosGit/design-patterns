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
    coverageTarget: [
        '<%= outputCoverage %>/cobertura/cobertura-coverage.xml',
        '<%= outputCoverage %>/lcov/lcov.info',
        '<%= outputCoverage %>/clover/clover.xml',
        '<%= outputCoverage %>/json/coverage.json',
        '<%= outputCoverage %>/html/index.html'
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
            htmlReport: '<%= outputCoverage %>/html',
            coberturaReport: '<%= outputCoverage %>/cobertura',
            lcovReport: '<%= outputCoverage %>/lcov',
            cloverReport: '<%= outputCoverage %>/clover',
            jsonReport: '<%= outputCoverage %>/json'
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
