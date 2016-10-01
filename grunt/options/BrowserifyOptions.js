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
        ['plugin', []],
        ['exclude', []],
        ['postBundleCB', function (err, src, next) {
            next(err, src);
        }]
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
    _createDisc = (err, src, next) => {
        let fs = require('fs'),
            grunt = require('grunt'),
            currentTask = grunt.task.current,
            discOutput = currentTask.data.options.browserifyOptions.discOutput,
            createOutput = () => {
                let disc = require('disc'),
                    stream = require('stream'),
                    s = new stream.Readable(),
                    output = _.join(_.toArray(discOutput), '/');

                s._read = _.noop;
                s.push(src);
                s.push(null);
                s.pipe(disc({
                    header: '<div>' + 'Bundle ' + discOutput.file + '</div>',
                    footer: `<div><a src="${grunt.options.packageJson.repository.url}">Fork me !!!</a></div>`
                }))
                    .pipe(fs.createWriteStream(output))
                    .once('close', () => next(err, src));
            };

        fs.stat(discOutput.dir, (err) => {
            if (!_.isEmpty(err)) {
                fs.mkdir(discOutput.dir, createOutput);

            } else {
                createOutput();
            }
        });
    },
    BrowserifyOptions = function (options) {
        this.options = _.cloneDeep(new Map(SchemaBrowserOptions));
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
    excludeSourceUnBundleScript: function () {
        let exclude = this.options.get('exclude');

        exclude.push('**/*.html', '**/*.css', '**.*.json');
        this.options.set('exclude', exclude);

        return this;
    },
    requireVendors: function (path) {
        this.options.set('external', _.get(vendors, path));

        return this;
    },
    disableSourceDebug: function () {
        let browser = this.options.get('browserifyOptions');

        browser.debug = false;
        this.options.set('browserifyOptions', browser);

        return this;
    },
    // when using the command-line interface (like disc profile)
    setFullPathsBundle: function () {
        let browser = this.options.get('browserifyOptions');

        browser.fullPaths = true;
        this.options.set('browserifyOptions', browser);

        return this;
    },
    setDependencies: function (path) {
        this.options.set('require', _.get(vendors, path));

        return this;
    },
    postBundleOutputWithDisc: function (/*dir, file*/) {
        let browser = this.options.get('browserifyOptions');

        browser.discOutput = _.zipObject(['dir', 'file'], arguments);
        this.options.set('browserifyOptions', browser);
        this.options.set('postBundleCB', _createDisc);

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
