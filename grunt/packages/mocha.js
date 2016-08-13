module.exports = {
    dev: {
        src: [
            'test/platzi.html',
            'test/osmani-oreilly.html'
        ],
        dest: '<%= mochaReporter %>',
        options: {
            reporter: 'spec',
            run: true,
            logErrors: true,
            log: true
        }
    }
};
