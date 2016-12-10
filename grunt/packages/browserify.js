'use strict';

let _ = require('lodash'),
    browserifyOptions = require('./../options/BrowserifyOptions').getOptions,
    browserifyVendorOptions = browserifyOptions()
        .initBundle()
        .disableSourceDebug()
        .avoidCompileVendors()
        .excludeSourceUnBundleScript(),
    browserifyTestOptions = browserifyOptions()
        .initBundle()
        .requireVendors('test')
        .addCoverage()
        .addBabelify()
        .removeMinifySourceMap()
        .excludeSourceUnBundleScript(),
    browserifyAppOptions = browserifyOptions()
        .initBundle()
        .requireVendors('app')
        .addBabelify()
        .removeMinifySourceMap()
        .excludeSourceUnBundleScript(),
    browserifyReporterOptions = browserifyOptions()
        .initBundle()
        .requireVendors('app')
        .addBabelify()
        .excludeSourceUnBundleScript()
        .setFullPathsBundle();

module.exports = {
    // VENDOR BUNDLES
    'dev-test-vendors': _.cloneDeep(browserifyVendorOptions)
        .setDependencies('test')
        .setAllOriginSource()
        .addCompiledSource('<%= projectPaths.vendors.publicDir%>/test.bundle.js')
        .build(),

    'dev-app-vendors': _.cloneDeep(browserifyVendorOptions)
        .setDependencies('app')
        .setAllOriginSource()
        .addCompiledSource('<%= projectPaths.vendors.publicDir%>/app.bundle.js')
        .build(),

    // TEST APPLICATION BUNDLES
    'dev-test-platzi': _.cloneDeep(browserifyTestOptions)
        .addOriginSource('<%= projectPaths.appPlatzi.application %>/test/**/*.js')
        .addOriginSource('!<%= projectPaths.appPlatzi.application %>/test/index.js')
        .addCompiledSource('<%= projectPaths.appPlatzi.test %>/mocha.spec.bundle.js')
        .build(),

    'dev-test-osmanioreilly': _.cloneDeep(browserifyTestOptions)
        .addOriginSource('<%= projectPaths.appOsmaniOreilly.application %>/test/**/*.js')
        .addOriginSource('!<%= projectPaths.appOsmaniOreilly.application %>/test/index.js')
        .addCompiledSource('<%= projectPaths.appOsmaniOreilly.test %>/mocha.spec.bundle.js')
        .build(),

    'dev-test-assessments': _.cloneDeep(browserifyTestOptions)
        .addOriginSource('<%= projectPaths.appAssessments.application %>/test/**/*.js')
        .addOriginSource('!<%= projectPaths.appAssessments.application %>/test/index.js')
        .addCompiledSource('<%= projectPaths.appAssessments.test %>/mocha.spec.bundle.js')
        .build(),

    // APPLICATION BUNDLES
    'dev-app-widget-platzi': _.cloneDeep(browserifyAppOptions)
        .addOriginSource('<%= projectPaths.appPlatzi.application %>/main/**/*.js')
        .addOriginSource('!<%= projectPaths.appPlatzi.application %>/main/index.js')
        .addCompiledSource('<%= projectPaths.appPlatzi.publicDir %>/app.bundle.js')
        .addMinifyWithSourceMap('<%= projectPaths.appPlatzi.publicDir %>')
        .build(),

    'dev-app-widget-osmanioreilly': _.cloneDeep(browserifyAppOptions)
        .addOriginSource('<%= projectPaths.appOsmaniOreilly.application %>/main/**/*.js')
        .addOriginSource('!<%= projectPaths.appOsmaniOreilly.application %>/main/index.js')
        .addCompiledSource('<%= projectPaths.appOsmaniOreilly.publicDir %>/app.bundle.js')
        .addMinifyWithSourceMap('<%= projectPaths.appOsmaniOreilly.publicDir %>')
        .build(),

    'dev-app-widget-assessments': _.cloneDeep(browserifyAppOptions)
        .addOriginSource('<%= projectPaths.appAssessments.application %>/main/**/*.js')
        .addOriginSource('!<%= projectPaths.appAssessments.application %>/main/index.js')
        .addCompiledSource('<%= projectPaths.appAssessments.publicDir %>/app.bundle.js')
        .addMinifyWithSourceMap('<%= projectPaths.appAssessments.publicDir %>')
        .build(),

    // DISC APPLICATION REPORTER
    'disc-app-platzi': _.cloneDeep(browserifyReporterOptions)
        .addOriginSource('<%= projectPaths.appPlatzi.application %>/main/**/*.js')
        .addOriginSource('!<%= projectPaths.appPlatzi.application %>/main/index.js')
        .addCompiledSource('<%= projectPaths.appPlatzi.publicDir %>/app.bundle.js')
        .postBundleOutputWithDisc('<%= outputDisc %>', '<%= projectPaths.appPlatzi.application %>.html')
        .build(),

    'disc-app-osmanioreilly': _.cloneDeep(browserifyReporterOptions)
        .addOriginSource('<%= projectPaths.appOsmaniOreilly.application %>/main/**/*.js')
        .addOriginSource('!<%= projectPaths.appOsmaniOreilly.application %>/main/index.js')
        .addCompiledSource('<%= projectPaths.appOsmaniOreilly.publicDir %>/app.bundle.js')
        .postBundleOutputWithDisc('<%= outputDisc %>', '<%= projectPaths.appOsmaniOreilly.application %>.html')
        .build(),

    'disc-app-assessments': _.cloneDeep(browserifyReporterOptions)
        .addOriginSource('<%= projectPaths.appAssessments.application %>/main/**/*.js')
        .addOriginSource('!<%= projectPaths.appAssessments.application %>/main/index.js')
        .addCompiledSource('<%= projectPaths.appAssessments.publicDir %>/app.bundle.js')
        .postBundleOutputWithDisc('<%= outputDisc %>', '<%= projectPaths.appAssessments.application %>.html')
        .build()
};
