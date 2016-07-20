'use strict';


// Modules
// --------------------------------

var gulp = require('gulp'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass');


// Build css
// --------------------------------

gulp.task('default', function() {
  return gulp.src('../all.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(rename('app.min.css'))
    .pipe(gulp.dest('./dist'));
});