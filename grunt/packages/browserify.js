'use strict';

let _ = require('lodash'),
    browserify = require('./../options/BrowserifyOptions'),
    browserifyVendorOptions = browserify.getOptions()
        .disableSourceDebug()
        .avoidCompileVendors()
        .addMinifyWithoutSourceMap(),
    browserifyTestOptions = browserify.getOptions()
        .requireVendors('test')
        .addTransformTestBundle(),
    browserifyAppOptions = browserify.getOptions()
        .requireVendors('app')
        .addTransformAppBundle();

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
        //.addMinifyWithSourceMap('<%= projectPaths.appPlatzi.test %>')
        .addOriginSource('<%= projectPaths.appPlatzi.application %>/test/**/*.js')
        .addOriginSource('!<%= projectPaths.appPlatzi.application %>/test/index.js')
        .addCompiledSource('<%= projectPaths.appPlatzi.test %>/mocha.spec.bundle.js')
        .build(),

    'dev-test-osmanioreilly': _.cloneDeep(browserifyTestOptions)
        //.addMinifyWithSourceMap('<%= projectPaths.appOsmaniOreilly.test %>')
        .addOriginSource('<%= projectPaths.appOsmaniOreilly.application %>/test/**/*.js')
        .addOriginSource('!<%= projectPaths.appOsmaniOreilly.application %>/test/index.js')
        .addCompiledSource('<%= projectPaths.appOsmaniOreilly.test %>/mocha.spec.bundle.js')
        .build(),

    'dev-app-widget-platzi': _.cloneDeep(browserifyAppOptions)
        //.addMinifyWithSourceMap('<%= projectPaths.appPlatzi.publicDir %>')
        .addOriginSource('<%= projectPaths.appPlatzi.application %>/main/**/*.js')
        .addOriginSource('!<%= projectPaths.appPlatzi.application %>/main/index.js')
        .addCompiledSource('<%= projectPaths.appPlatzi.publicDir %>/app.bundle.js')
        .build(),

    'dev-app-widget-osmanioreilly': _.cloneDeep(browserifyAppOptions)
        //.addMinifyWithSourceMap('<%= projectPaths.appOsmaniOreilly.publicDir %>')
        .addOriginSource('<%= projectPaths.appOsmaniOreilly.application %>/main/**/*.js')
        .addOriginSource('!<%= projectPaths.appOsmaniOreilly.application %>/main/index.js')
        .addCompiledSource('<%= projectPaths.appOsmaniOreilly.publicDir %>/app.bundle.js')
        .build()
};
