'use strict';


// modules
// --------------------------------

var gulp = require('gulp'),
    rename = require('gulp-rename'),
    runSequence = require('run-sequence'),
    sass = require('gulp-sass'),
    watch = require('gulp-watch');


// build
// --------------------------------

gulp.task('default', function() {
  return runSequence(
    'css',
    'watch'
  );
});


// build css
// --------------------------------

gulp.task('css', function() {
  return gulp.src('../all.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(rename('app.min.css'))
    .pipe(gulp.dest('./dist'));
});


// watch files
// --------------------------------

gulp.task('watch', function() {
  watch('../modules/**/*.scss', function() {
    return gulp.start('default');
  });
});