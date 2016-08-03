module.exports = {
    documentation: 'http://jscs.info/rules',
    options: {
        config: '<%= projectPaths.gruntRuntimeConfig %>/.jscsrc',
        verbose: false,
        fix: false
    },
    dev: {
        files: {
            src: '<%= projectPaths.linterJs %>'
        }
    }
};
