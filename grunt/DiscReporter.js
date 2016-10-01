'use strict';

let _ = require('lodash'),
    fs = require('fs'),
    grunt = require('grunt'),
    DiscReporter = _.noop;

DiscReporter = function (options) {
    this.src = options.src;
};

_.assign(DiscReporter.prototype, {
    createDiscFolder: (folder, cb) => {
        fs.stat(folder, (err) => {
            if (!_.isEmpty(err)) {
                fs.mkdir(folder, cb);

            } else {
                cb();
            }
        });
    },
    setOutputDisc: function (src) {
        this.output = src;
    },
    createBundleWithReport: function (err, src/*, next*/) {
        let disc = require('disc'),
            stream = require('stream'),
            s = new stream.Readable();

        s._read = _.noop;
        s.push(src);
        s.push(null);
        s.pipe(disc(this.templates))
            .pipe(fs.createWriteStream(this.output))
            .once('close', this.openReportAndContinueBundler.apply(this, arguments));
    },
    openReportAndContinueBundler: function (err, src, next) {
        let open = require('opener');

        open(this.output);
        next(err, src);
    },
    setHtmlTemplates: function (output) {
        let bundleName = output.file.split('.')[0],
            repositoryUrl = grunt.file.readJSON('package.json').repository.url;

        this.templates = {
            header: `<center><h2>Bundle ${bundleName}</h2></center>`,
            footer: `<center><a href="${repositoryUrl}">Fork me !!!</a></center>`
        };
    },
    postBundleCB: function (/*err, src, next*/) {
        let currentTask = grunt.task.current,
            outputDisc = currentTask.data.options.browserifyOptions.outputDisc,
            outputSrc = _.join(_.toArray(outputDisc), '/');

        this.setOutputDisc(outputSrc);
        this.setHtmlTemplates(outputDisc);
        this.createDiscFolder(outputDisc.dir, this.createBundleWithReport.apply(this, arguments));
    }
});

module.exports = (options) => {
    return new DiscReporter(options || {});
};
