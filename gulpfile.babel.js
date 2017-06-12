'use strict';

// Packages
import gulp from 'gulp';
import runSequence from 'run-sequence';

// Modules
import './tasks/browser-sync';
import './tasks/clean';
import './tasks/css';
import './tasks/watch';

// Bind gulp to run sequence
runSequence.use(gulp);

// Development build
gulp.task('build:development', callback => {
  runSequence(
    'clean',
    'css:development',
    callback
  );
});

// Production build
gulp.task('build:production', callback => {
  runSequence(
    'clean',
    'css:production',
    callback
  );
});

// Development server
gulp.task('server:development', callback => {
  runSequence(
    'build:development',
    'watch',
    'browser-sync',
    callback
  );
});

// Default task
gulp.task('default', () => {
  gulp.start('build:development');
});