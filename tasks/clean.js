'use strict';

// Packages
import del from 'del';
import gulp from 'gulp';

// Modules
import config from './config';

// Delete compile directories
gulp.task('clean', () => {
  return del(config.clean);
});