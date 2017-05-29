var gulp       = require('gulp');
var gutil      = require('gulp-util');
var plumber    = require('gulp-plumber');
var concat     = require('gulp-concat');
var watchify   = require('watchify');
var babelify   = require('babelify');
var bulkify    = require('bulkify');
var envify     = require('envify/custom');
var browserify = require('browserify');
var _          = require('lodash');
var console    = require('better-console');
var fs         = require('fs');
var source     = require('vinyl-source-stream');
var buffer     = require('vinyl-buffer');
var bundles    = ['admin'];
var inputs     = ['./src/index.js']
var outputs     = ['./reframe.js']

gulp.task('watch', ['js']);

gulp.task('js', function () {
  var desiredEnv = process.env.NODE_ENV || 'development'
  var bundlers = inputs.map(function (file, index) {
    var bundler = browserify(file, {
      cache: {},
      packageCache: {},
      fullPaths: true,
      transform: [babelify, bulkify, envify({
        NODE_ENV: desiredEnv,
      })],
      plugin: [watchify],
      paths: ['./node_modules','./src'],
      debug: true
    })
    function rebundle() {
      var startTime = Date.now();
      gutil.log('Starting bundle...');
      return bundler.bundle()
        .on('error', function (err) {
          gutil.beep();
          console.log(err);
          this.emit('end');
        })
        .on('end', function () {
          gutil.log(_.template('Finished bundling in <%= time %> seconds.')({time: (Date.now() - startTime) / 1000}));
        })
        .pipe(plumber({errorHandler: function (err) {
          gutil.beep();
          console.log(err);
          this.emit('end');
        }}))
        .pipe(source(outputs[index]))
        .pipe(buffer())
        .pipe(gulp.dest('.'));
    }
    bundler.on('update', rebundle);
    return rebundle()
  })
  return bundlers[0]
});
