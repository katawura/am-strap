'use strict';

// Packages
import gulp from 'gulp';
import runSequence from 'run-sequence';

// Modules
import './tasks/clean';
import './tasks/css';
import './tasks/server';
import './tasks/watch';

// Bind gulp to run sequence
runSequence.use(gulp);

// Development build
gulp.task('development', () => {
  runSequence(
    'clean',
    'css-development',
    'watch',
    'server'
  );
});

// Production build
gulp.task('production', () => {
  runSequence(
    'clean',
    'css-production'
  );
});

// Default
gulp.task('default', () => {
  gulp.start('development');
});