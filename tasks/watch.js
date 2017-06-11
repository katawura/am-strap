'use strict';

// Packages
import gulp from 'gulp';
import watch from 'gulp-watch';

// Modules
import config from './config';

// Trigger tasks on file changes
gulp.task('watch', () => {
  watch(config.css.watch, () => {
    gulp.start('css:development');
  });
});