module.exports = {
    reporters: [
        'test/spec.out',
        'test/html.out',
        'test/xunit.out'
    ],
    masks: ['spec', 'dot', 'nyan', 'landing', 'list', 'progress', 'min', 'html'],
    dev: {
        src: [
            'test/platzi.html',
            'test/osmani-oreilly.html'
        ],
        dest: '<%= mochaReporterOutput %>',
        options: {
            reporter: '<%= mochaReporterMask %>',
            run: true,
            logErrors: true,
            log: true
        }
    }
};
