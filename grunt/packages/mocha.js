module.exports = {
    options: {
        run: true,
        reporter: 'spec',
        logErrors: true,
        growlOnSuccess: false
    },
    dev: {
        src: [
            'mocha-test/platzi.html'/*,
            'mocha-test/osmani-oreilly.html'*/
        ],
        dest: 'mocha-test/spec.out'
    }
};