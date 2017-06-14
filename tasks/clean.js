'use strict';

// Packages
import del from 'del';
import gulp from 'gulp';

// Modules
import config from './config';

// Delete array of directories or files
gulp.task('clean', () => {
  return del(config.clean, {
    force: true
  });
});