'use strict';

export default {
  clean: [
    'dist'
  ],
  css: {
    dest: 'dist',
    filename: 'styles.min.css',
    src: 'all.scss',
    watch: '**/*.scss',
  },
  server: {
    files: ['./**/*.{html,css,png,jpg,svg,gif}']
  }
};