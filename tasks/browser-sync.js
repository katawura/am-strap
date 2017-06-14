'use strict';

// Packages
import browserSync from 'browser-sync';
import gulp from 'gulp';
import connectLogger from 'connect-logger';

// Modules
import config from './config';

// Create server
browserSync.create();

// Launch a browser sync server
gulp.task('browser-sync', () => {
  browserSync.init({
    open: false,
    notify: false,
    injectChanges: true,
    files: config.browserSync.files,
    watchOptions: {
      cwd: config.browserSync.baseDir
    },
    server: {
      baseDir: config.browserSync.baseDir,
      middleware: [
        connectLogger({
          format: '%date %status %method %url'
        })
      ]
    }
  });
});