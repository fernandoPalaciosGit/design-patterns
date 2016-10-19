'use strict';

let _ = require('lodash'),
    browserify = require('./../options/BrowserifyOptions'),
    browserifyVendorOptions = browserify.getOptions()
        .disableSourceDebug()
        .avoidCompileVendors()
        .addMinifyWithoutSourceMap(),
    browserifyTestOptions = browserify.getOptions()
        .requireVendors('test')
        .addTransformTestBundle()
        .excludeSourceUnBundleScript(),
    browserifyAppOptions = browserify.getOptions()
        .requireVendors('app')
        .addTransformAppBundle()
        .excludeSourceUnBundleScript();

module.exports = {
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

    'dev-app-widget-platzi': _.cloneDeep(browserifyAppOptions)
        .addOriginSource('<%= projectPaths.appPlatzi.application %>/main/**/*.js')
        .addOriginSource('!<%= projectPaths.appPlatzi.application %>/main/index.js')
        .addCompiledSource('<%= projectPaths.appPlatzi.publicDir %>/app.bundle.js')
        .setFullPathsBundle()
        .build(),

    'dev-app-widget-osmanioreilly': _.cloneDeep(browserifyAppOptions)
        .addOriginSource('<%= projectPaths.appOsmaniOreilly.application %>/main/**/*.js')
        .addOriginSource('!<%= projectPaths.appOsmaniOreilly.application %>/main/index.js')
        .addCompiledSource('<%= projectPaths.appOsmaniOreilly.publicDir %>/app.bundle.js')
        .setFullPathsBundle()
        .build(),

    'dev-app-widget-assessments': _.cloneDeep(browserifyAppOptions)
        .addOriginSource('<%= projectPaths.appAssessments.application %>/main/**/*.js')
        .addOriginSource('!<%= projectPaths.appAssessments.application %>/main/index.js')
        .addCompiledSource('<%= projectPaths.appAssessments.publicDir %>/app.bundle.js')
        .setFullPathsBundle()
        .build(),

    'disc-app-platzi': _.cloneDeep(browserifyAppOptions)
        .addMinifyWithSourceMap('<%= projectPaths.appPlatzi.publicDir %>')
        .addOriginSource('<%= projectPaths.appPlatzi.application %>/main/**/*.js')
        .addOriginSource('!<%= projectPaths.appPlatzi.application %>/main/index.js')
        .addCompiledSource('<%= projectPaths.appPlatzi.publicDir %>/app.bundle.js')
        .setFullPathsBundle()
        .postBundleOutputWithDisc('<%= outputDisc %>', '<%= projectPaths.appPlatzi.application %>.html')
        .build(),

    'disc-app-osmanioreilly': _.cloneDeep(browserifyAppOptions)
        .addMinifyWithSourceMap('<%= projectPaths.appOsmaniOreilly.publicDir %>')
        .addOriginSource('<%= projectPaths.appOsmaniOreilly.application %>/main/**/*.js')
        .addOriginSource('!<%= projectPaths.appOsmaniOreilly.application %>/main/index.js')
        .addCompiledSource('<%= projectPaths.appOsmaniOreilly.publicDir %>/app.bundle.js')
        .setFullPathsBundle()
        .postBundleOutputWithDisc('<%= outputDisc %>', '<%= projectPaths.appOsmaniOreilly.application %>.html')
        .build(),

    'disc-app-assessments': _.cloneDeep(browserifyAppOptions)
        .addMinifyWithSourceMap('<%= projectPaths.appAssessments.publicDir %>')
        .addOriginSource('<%= projectPaths.appAssessments.application %>/main/**/*.js')
        .addOriginSource('!<%= projectPaths.appAssessments.application %>/main/index.js')
        .addCompiledSource('<%= projectPaths.appAssessments.publicDir %>/app.bundle.js')
        .setFullPathsBundle()
        .postBundleOutputWithDisc('<%= outputDisc %>', '<%= projectPaths.appAssessments.application %>.html')
        .build()
};
