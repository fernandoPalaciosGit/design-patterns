/*
 todo: Error Running "instrument" task
 Verifying property instrument.files exists in config...ERROR
 >> Unable to process task.
 Warning: Required      config property "instrument.files" missing. Use --force to continue.
 */
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