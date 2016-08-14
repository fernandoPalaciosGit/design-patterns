module.exports = {
    instrument: {
        files: [
            {
                src: '<%= projectPaths.appOsmaniOreilly.application %>/main/**/*.js'
            },
            {
                src: '<%= projectPaths.appPlatzi.application %>/main/**/*.js'
            }
        ],
        options: {
            lazy: true,
            basePath: '<%= coverageReporter %>/instrument/'
        }
    },
    reloadTasks: {
        rootPath: '<%= coverageReporter %>/instrument/tasks'
    },
    storeCoverage: {
        options: {
            dir: '<%= coverageReporter %>/reports'
        }
    },
    makeReport: {
        src: '<%= coverageReporter %>/reports/**/*.json',
        options: {
            type: 'lcov',
            dir: '<%= coverageReporter %>/reports',
            print: 'detail'
        }
    }
};