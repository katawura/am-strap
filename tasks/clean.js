'use strict';

// Modules
var config = require('./config'),
    del = require('del'),
    gulp = require('gulp');

// Empty distribution directory
gulp.task('clean', function() {
  return del([
    config.compile.dest,
    config.compile.temp
  ]);
});