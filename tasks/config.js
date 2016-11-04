'use strict';

module.exports = {
  compile: {
    dest: 'dist',
    temp: '.tmp'
  },
  css: {
    dest: 'dist',
    filename: 'app.min.css',
    src: 'all.scss',
    watch: '**/*.scss',
  },
  server: {
    files: ['./**/*.{html,css,png,jpg,svg,gif}']
  }
};