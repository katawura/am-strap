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
gulp.task('development-build', (callback) => {
  runSequence(
    'clean',
    'css-development',
    callback
  );
});

// Development server
gulp.task('development-server', (callback) => {
  runSequence(
    'development-build',
    'watch',
    'browser-sync',
    callback
  );
});

// Production build
gulp.task('production-build', (callback) => {
  runSequence(
    'clean',
    'css-production',
    callback
  );
});

// Default task
gulp.task('default', () => {
  gulp.start('development-build');
});