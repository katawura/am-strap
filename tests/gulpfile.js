'use strict';


// modules
// --------------------------------

var autoprefixer = require('gulp-autoprefixer'),
    cleanCSS = require('gulp-clean-css'),
    gulp = require('gulp'),
    rename = require('gulp-rename'),
    runSequence = require('run-sequence'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
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
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['> 0.5%']
    }))
    .pipe(cleanCSS())
    .pipe(rename('app.min.css'))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./dist'));
});


// watch files
// --------------------------------

gulp.task('watch', function() {
  watch('../modules/**/*.scss', function() {
    return gulp.start('default');
  });
});