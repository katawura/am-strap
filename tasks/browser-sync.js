'use strict';

// Packages
import browserSync from 'browser-sync';
import fallback from 'connect-history-api-fallback';
import gulp from 'gulp';
import log from 'connect-logger';

// Modules
import config from './config';

// Create server
browserSync.create();

// Launch a browser sync server
gulp.task('browser-sync', () => {

  // Middleware array
  var middleware = [
    log({
      format: '%date %status %method %url'
    })
  ];

  // Single page application file fallback
  if (config.browserSync.spa) {
    middleware.push(fallback({
      index: '/index.html',
      htmlAcceptHeaders: ['text/html', 'application/xhtml+xml']
    }));
  }

  // Initialise browser sync
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
      middleware: middleware
    }
  });
});