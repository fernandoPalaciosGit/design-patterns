module.exports = {
    dev: {
        files: [
            {
                expand: false,
                src: '<%= projectPaths.appOsmaniOreilly.application %>/**/*.js',
                dest: '<%= projectPaths.appOsmaniOreilly.publicDir %>/app.build.js'
            },
            {
                expand: false,
                src: '<%= projectPaths.appPlatzy.application %>/**/*.js',
                dest: '<%= projectPaths.appPlatzy.publicDir %>/app.build.js'
            }
        ]
    }
};
