module.exports = {
    'dev-test-vendors': {
        options: {
            debug: false,
            external: null,
            require: ['chai']
        },
        src: ['.'],
        dest: '<%= projectPaths.vendors.publicDir%>/vendors.test.bundle.js'
    },
    'dev-test': {
        options: {
            debug: true,
            external: ['chai', 'lodash']
        },
        files: [
            {
                src: '<%= projectPaths.appOsmaniOreilly.application %>/test/**/mocha.spec.*.js',
                dest: '<%= projectPaths.appOsmaniOreilly.test %>/mocha.spec.bundle.js'
            },
            {
                src: '<%= projectPaths.appPlatzi.application %>/test/**/mocha.spec.*.js',
                dest: '<%= projectPaths.appPlatzi.test %>/mocha.spec.bundle.js'
            }
        ]
    },
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
    'dev-app-widget': {
        options: {
            debug: true,
            external: ['lodash']
        },
        files: [
            {
                src: '<%= projectPaths.appOsmaniOreilly.application %>/main/**/app.widget.*.js',
                dest: '<%= projectPaths.appOsmaniOreilly.publicDir %>/app.widget.bundle.js'
            },
            {
                src: '<%= projectPaths.appPlatzi.application %>/main/**/app.widget.*.js',
                dest: '<%= projectPaths.appPlatzi.publicDir %>/app.widget.bundle.js'
            }
        ]
    }
};
