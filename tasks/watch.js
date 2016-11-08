'use strict';

// Modules
var config = require('./config'),
    gulp = require('gulp'),
    runSequence = require('run-sequence'),
    watch = require('gulp-watch');

// Watch files
gulp.task('watch', function() {
  watch(config.css.watch, function() {
    runSequence('css-development');
  });
});