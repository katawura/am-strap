'use strict';


// config
// --------------------------------

var paths = {
  css: {
    dest: './dist',
    dir: '../',
    src: [
      '../all.scss'
    ]
  },
  normalize: {
    dest: './dist',
    src: [
      '../node_modules/normalize.css/normalize.css'
    ]
  }
};


// modules
// --------------------------------

var autoprefixer = require('gulp-autoprefixer'),
    browserSync = require('browser-sync'),
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
  runSequence(
    'clean', 
    'build-css'
  );
});

gulp.task('dev', function() {
  runSequence(
    'clean', 
    ['build-css', 'normalize'], 
    'serve'
  );
});


// serve test 
// --------------------------------

gulp.task('serve', function() {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
});


// watch for file changes
// --------------------------------

gulp.task('watch', function() {

  gulp.watch(paths.css.dir + '/**/*.scss', function() {
    runSequence('build-css', browserSync.reload);
  });
  
  gulp.watch('./*.html').on('change', browserSync.reload);

});


// clean
// --------------------------------

gulp.task('clean', function() {
  return del('./dist');
});


// build css
// --------------------------------

gulp.task('build-css', function() {
  return gulp.src(paths.css.src)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['> 0.5%']
    }))
    .pipe(cleanCSS())
    .pipe(rename('am-strap.min.css'))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(paths.css.dest));
});


// distribute normalize
// --------------------------------

gulp.task('normalize', function() {
  return gulp.src(paths.normalize.src)
    .pipe(gulp.dest(paths.normalize.dest)); 
});