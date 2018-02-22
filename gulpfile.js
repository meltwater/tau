'use strict'

const fs = require('fs')
const path = require('path')

const ghpages = require('gh-pages')
const gulp = require('gulp')
const gulplog = require('gulplog')
const $ = require('gulp-load-plugins')()

const paths = {
  docs: 'docs',
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

gulp.task('doc-version', (done) => {
  const pkg = JSON.parse(
    fs.readFileSync(path.resolve(__dirname, 'package.json'))
  )

  return gulp.src(['.doc.index.html'])
    .pipe($.replace('--version--', pkg.version))
    .pipe($.rename('index.html'))
    .pipe(gulp.dest(`${paths.docs}/${pkg.name}`))
})

gulp.task('publish-docs', ['doc-version'], (done) => {
  const pkg = JSON.parse(
    fs.readFileSync(path.resolve(__dirname, 'package.json'))
  )

  const docs = path.resolve(__dirname, paths.docs, pkg.name)

  ghpages.publish(docs, {
    repo: `git@github.com:${pkg.repository}.git`,
    branch: 'gh-pages',
    add: true,
    clone: '.gh-pages',
    depth: 2,
    message: `Publish docs for v${pkg.version} [ci skip]`,
    user: {
      name: pkg.author.name,
      email: pkg.author.email
    }
  }, done)
})
