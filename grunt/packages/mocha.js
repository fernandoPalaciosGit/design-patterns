module.exports = {
    reporters: [
        'test/spec.out',
        'test/html.out',
        'test/xunit.out'
    ],
    coverageReporter: 'test/coverage',
    masks: ['Spec', 'Dot', 'Nyan', 'Landing', 'List', 'Progress', 'Min', 'Html'],
    phantomResources: [
        'test/platzi.html',
        'test/osmani-oreilly.html'
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
        src: '<%= mocha.phantomResources %>',
        dest: '<%= mochaReporterOutput %>',
        options: '<%= mocha.mochaOptions %>'
    },
    coverage: {
        src: '<%= mocha.phantomResources %>',
        options: '<%= mocha.mochaOptionsWithCoverage %>'
    }
};
