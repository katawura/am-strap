'use strict';

// Modules
var gulp = require('gulp'),
    runSequence = require('run-sequence').use(gulp);

// Register tasks
require('./tasks/clean');
require('./tasks/css');
require('./tasks/watch');

// Development build
gulp.task('development', function() {
  runSequence(
    'clean',
    'css-development',
    'watch'
  );
});

// Production build
gulp.task('production', function() {
  runSequence(
    'clean',
    'css-production'
  );
});

// Server
gulp.task('server', function() {
  require('./tasks/server');
  gulp.start('browser-sync');
});

// Default
gulp.task('default', function() {
  gulp.start('development');
});