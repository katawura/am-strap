'use strict';


// config
// --------------------------------

var paths = {
  css: {
    dest: './examples/dist',
    dir: './',
    src: './all.scss'
  },
  html: {
    dir: './examples'
  },
  normalize: {
    dest: './examples/dist',
    src: './node_modules/normalize.css/normalize.css'
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
    'serve',
    'watch'
  );
});


// serve test 
// --------------------------------

gulp.task('serve', function() {
  browserSync.init({
    server: {
      baseDir: "./examples"
    }
  });
});


// watch for file changes
// --------------------------------

gulp.task('watch', function() {

  gulp.watch(paths.css.dir + '/**/*.scss', function() {
    runSequence('build-css', browserSync.reload);
  });
  
  gulp.watch(paths.html.dir + '/*.html').on('change', browserSync.reload);

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


// normalize.css
// --------------------------------

gulp.task('normalize', function() {
  return gulp.src(paths.normalize.src)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['> 0.5%']
    }))
    .pipe(cleanCSS())
    .pipe(rename('normalize.min.css'))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(paths.normalize.dest));
});