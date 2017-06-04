'use strict';

// Packages
import browserSync from 'browser-sync';
import gulp from 'gulp';
import log from 'connect-logger';

// Modules
import config from './config';

// Create server
browserSync.create()

// Serve with browser sync
gulp.task('browser-sync', () => {
  browserSync.init({
    open: false,
    notify: false,
    injectChanges: true,
    files: config.browserSync.files,
    watchOptions: {
      cwd: '.'
    },
    server: {
      baseDir: './',
       middleware: [
        log({
          format: '%date %status %method %url'
        })
      ]
    }
  });
});