'use strict';


// config
// --------------------------------

var config = {
  css: {
    src: './all.scss',
    dest: './dist',
    dir: './'
  }
};


// modules
// --------------------------------

var autoprefixer = require('gulp-autoprefixer'),
    cleanCSS = require('gulp-clean-css'),
    del = require('del'),
    gulp = require('gulp'),
    rename = require('gulp-rename'),
    runSequence = require('run-sequence'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps');


// build tasks
// --------------------------------

gulp.task('default', function() {
  runSequence('clean', 'build-css', 'watch');
});

gulp.task('build', function() {
  runSequence('clean', 'build-css');
});


// watch for file changes
// --------------------------------

gulp.task('watch', function() {
  gulp.watch(config.css.dir  + '/**/*.scss', function() {
    gulp.start('build-css');
  });
});


// clean
// --------------------------------

gulp.task('clean', function() {
  return del('./dist');
});


// build css
// --------------------------------

gulp.task('build-css', function() {
  return gulp.src(config.css.src)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['> 0.5%']
    }))
    .pipe(cleanCSS())
    .pipe(rename('am-strap.min.css'))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(config.css.dest));
});