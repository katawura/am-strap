'use strict';

export default {
  clean: [
    'dist'
  ],
  css: {
    src: 'main.scss',
    dest: 'dist',
    filename: 'styles.min.css',
    watch: '**/*.scss'
  },
  server: {
    files: ['./**/*.{html,css}']
  }
};