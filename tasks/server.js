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
gulp.task('server', () => {
  browserSync.init({
    injectChanges: true,
    files: config.server.files,
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