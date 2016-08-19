module.exports = {
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
