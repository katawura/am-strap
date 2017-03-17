'use strict';

// Packages
import gulp from 'gulp';
import watch from 'gulp-watch';

// Modules
import config from './config';

// Watch files
gulp.task('watch', () => {
  watch(config.css.watch, () => {
    gulp.start('css-development');
  });
});