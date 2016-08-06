module.exports = {
    'dev-app-vendors': {
        options: {
            debug: false,
            external: null,
            // expose dependencies with alias
            require: ['lodash']
        },
        // External modules that don't need to be constantly re-compiled
        src: ['.'],
        dest: '<%= projectPaths.vendors.publicDir%>/vendors.app.bundle.js'
    },
    'dev-test-vendors': {
        options: {
            debug: false,
            external: null,
            require: ['chai']
        },
        src: ['.'],
        dest: '<%= projectPaths.vendors.publicDir%>/vendors.test.bundle.js'
    },
    'dev-app': {
        options: {
            debug: true,
            // bundle vendor dependencies
            external: ['lodash']
        },
        files: [
            {
                src: '<%= projectPaths.appOsmaniOreilly.application %>/main/**/*.js',
                dest: '<%= projectPaths.appOsmaniOreilly.publicDir %>/app.bundle.js'
            },
            {
                src: '<%= projectPaths.appPlatzy.application %>/main/**/*.js',
                dest: '<%= projectPaths.appPlatzy.publicDir %>/app.bundle.js'
            }
        ]
    },
    'dev-test': {
        options: {
            debug: true,
            external: ['chai']
        },
        files: [
            {
                src: '<%= projectPaths.appOsmaniOreilly.application %>/test/**/*.js',
                dest: '<%= projectPaths.appOsmaniOreilly.test %>/mocha.bundle.js'
            },
            {
                src: '<%= projectPaths.appPlatzy.application %>/test/**/*.js',
                dest: '<%= projectPaths.appPlatzy.test %>/mocha.bundle.js'
            }
        ]
    }
};
