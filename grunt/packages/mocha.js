module.exports = {
    reporters: [
        'test/spec.out',
        'test/html.out',
        'test/xunit.out'
    ],
    masks: ['Spec', 'Dot', 'Nyan', 'Landing', 'List', 'Progress', 'Min', 'Html'],
    mochaOptions: {
        reporter: '<%= mochaReporterMask %>',
        run: true,
        logErrors: true,
        log: true
        /*coverage: {
         htmlReport: 'example/test/results/coverage.out/html',
         coberturaReport: 'example/test/results/coverage.out/cobertura',
         lcovReport: 'example/test/results/coverage.out/lcov',
         cloverReport: 'example/test/results/coverage.out/clover',
         jsonReport: 'example/test/results/coverage.out/json'
         }*/
    },
    dev: {
        options: '<%= mocha.mochaOptions %>',
        src: [
            'test/platzi.html',
            'test/osmani-oreilly.html'
        ],
        dest: '<%= mochaReporterOutput %>'
    }
};
