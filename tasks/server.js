'use strict';

// Modules
var browserSync = require('browser-sync').create(),
    config = require('./config'),
    gulp = require('gulp'),
    log = require('connect-logger');

// Serve with browser sync
gulp.task('browser-sync', function() {
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