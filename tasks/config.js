'use strict';

export default {
   browserSync: {
    baseDir: './',
    files: ['./**/*.{css,html}']
  },
  clean: [
    'dist'
  ],
  css: {
    src: 'am-strap.scss',
    dest: 'dist',
    filename: 'styles.min.css',
    watch: '**/*.scss'
  }
};