'use strict';

export default {
  browserSync: {
    files: ['./**/*.{html,css}']
  },
  clean: [
    'dist'
  ],
  css: {
    src: 'main.scss',
    dest: 'dist',
    filename: 'styles.min.css',
    watch: '**/*.scss'
  }
};