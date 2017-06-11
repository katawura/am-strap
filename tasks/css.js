'use strict';

// Packages
import autoprefixer from 'gulp-autoprefixer';
import cleanCSS from 'gulp-clean-css';
import gulp from 'gulp';
import rename from 'gulp-rename';
import sass from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps';

// Modules
import config from './config';

// Development CSS build
gulp.task('css:development', () => {
  return gulp
    .src(config.css.src)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(rename(config.css.filename))
    .pipe(gulp.dest(config.css.dest));
});

// Production CSS build
gulp.task('css:production', () => {
  return gulp
    .src(config.css.src)
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['> 0.5%']
    }))
    .pipe(cleanCSS())
    .pipe(rename(config.css.filename))
    .pipe(gulp.dest(config.css.dest));
});