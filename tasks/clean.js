'use strict';

// Packages
import del from 'del';
import gulp from 'gulp';

// Modules
import config from './config';

// Delete items
gulp.task('clean', () => {
  return del(config.clean);
});