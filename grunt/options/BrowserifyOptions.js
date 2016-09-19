'use strict';

/**
 * @property options.external: external modules that don't need to be constantly re-compiled.
 * @property options.require: expose dependencies with alias.
 * @property options.browserifyOptions.debug: enable inline Source mapping (source map at the end of bundle), required with minifyify plugin.
 * @property options.plugin.minifyify.output: create json with debugging source map.
 * @property options.plugin.minifyify.map: append source map url at the end of bundle.
 * @constructor
 */
let _ = require('lodash'),
    utils = require('./../UtilsTask'),
    SchemaBrowserOptions = [
        ['browserifyOptions', {
            debug: true
        }],
        ['transform', []],
        ['plugin', []]
    ],
    SchemaBrowserTransform = [
        ['browserify-shim'],
        ['babelify', {
            'presets': ['es2015']
        }]
    ],
    vendors = {
        app: ['lodash', 'jquery'],
        test: ['lodash', 'jquery', 'chai']
    },
    BrowserifyOptions = function (options) {
        this.options = options.options || _.cloneDeep(new Map(SchemaBrowserOptions));
        this.src = options.src || new Set();
        this.dest = options.dest || '';
    };

_.assign(BrowserifyOptions.prototype, {
    // External modules that don't need to be constantly re-compiled
    setAllOriginSource: function () {
        this.src.clear();
        this.src.add('.');

        return this;
    },
    // Reset this here because it's not needed
    avoidCompileVendors: function () {
        this.options.set('external', null);

        return this;
    },
    requireVendors: function (path) {
        this.options.set('external', path);

        return this;
    },
    disableSourceDebug: function () {
        let browser = this.options.get('browserifyOptions');

        browser.debug = false;
        this.options.set('browserifyOptions', browser);

        return this;
    },
    setDependencies: function (path) {
        this.options.set('require', _.get(vendors, path));

        return this;
    },
    addOriginSource: function (path) {
        this.src.add(path);

        return this;
    },
    addCompiledSource: function (path) {
        this.dest = path;

        return this;
    },
    addMinifyWithSourceMap: function (path) {
        let plugins = this.options.get('plugin');

        plugins.push(['minifyify', {
            output: path + '/sourcemap.json',
            map: utils.getProyectPath(path + '/sourcemap.json')
        }]);
        this.options.set('plugin', plugins);

        return this;
    },
    addMinifyWithoutSourceMap: function () {
        let plugins = this.options.get('plugin');

        plugins.push(['minifyify', {
            map: false
        }]);
        this.options.set('plugin', plugins);

        return this;
    },
    addTransformTestBundle: function () {
        this.options.set('transform',
            SchemaBrowserTransform.concat(['browserify-istanbul']));

        return this;
    },
    addTransformAppBundle: function () {
        this.options.set('transform', SchemaBrowserTransform);

        return this;
    },
    build: function () {
        utils.logger.debug({
            options: utils.convert.strMapToObj(this.options),
            src: utils.convert.strSetToObj(this.src),
            dest: this.dest
        });

        return {
            options: utils.convert.strMapToObj(this.options),
            src: utils.convert.strSetToObj(this.src),
            dest: this.dest
        };
    }
});

module.exports.getOptions = function (options) {
    return new BrowserifyOptions(options || new Map());
};
