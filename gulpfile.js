'use strict'

const gulp = require('gulp')
const gulplog = require('gulplog')
const $ = require('gulp-load-plugins')()

const paths = {
  json: [
    '*.json',
    'data/**/*.json',
    'examples/**/*.json',
    'fixtures/**/*.json'
  ],
  scripts: [
    '*.js',
    'examples/**/*.js',
    'lib/**/*.js',
    'test/**/*.js'
  ]
}

gulp.task('default', [
  'lint',
  'watch'
])

gulp.task('lint', [
  'jsonlint',
  'standard'
])

gulp.task('watch', [
  'watch:json',
  'watch:scripts'
])

gulp.task('standard', () => (
  gulp.src(paths.scripts)
    .pipe($.standard())
    .pipe($.standard.reporter('default', {
      breakOnError: true
    }))
))

gulp.task('jsonlint', () => (
  gulp.src(paths.json)
    .pipe($.jsonlint())
    .pipe($.jsonlint.failAfterError())
    .pipe($.jsonlint.reporter())
))

gulp.task('watch:scripts', () => (
  gulp.src(paths.scripts)
    .pipe($.watch(paths.scripts, vinyl => {
      if (vinyl.event === 'change') {
        gulplog.info(`Linted ${vinyl.relative}`)
      }
    }))
    .pipe($.plumber())
    .pipe($.standard())
    .pipe($.standard.reporter('default', {}))
))

gulp.task('watch:json', () => (
  gulp.src(paths.json)
    .pipe($.watch(paths.json, vinyl => {
      if (vinyl.event === 'change') {
        gulplog.info(`Linted ${vinyl.relative}`)
      }
    }))
    .pipe($.plumber())
    .pipe($.jsonlint())
    .pipe($.jsonlint.reporter())
))
