import fs from 'fs'
import path from 'path'

import gulp from 'gulp'
import gulplog from 'gulplog'
import gulpJsonlint from 'gulp-jsonlint'
import gulpRename from 'gulp-rename'
import gulpReplace from 'gulp-replace'
import gulpStandard from 'gulp-standard'
import gulpWatch from 'gulp-watch'
import { publish as ghPagesPublish } from 'gh-pages'

const paths = {
  docs: 'docs',
  json: [
    '*.json',
    'data/**/*.json',
    'examples/**/*.json',
    'fixtures/**/*.json'
  ],
  scripts: ['*.js', 'examples/**/*.js', 'lib/**/*.js', 'test/**/*.js']
}

export const docVersion = () => {
  const data = fs.readFileSync(path.resolve('package.json'))
  const pkg = JSON.parse(data)

  return gulp
    .src(['.doc.index.html'])
    .pipe(gulpReplace('--version--', pkg.version))
    .pipe(gulpRename('index.html'))
    .pipe(gulp.dest(`${paths.docs}/${pkg.name}`))
}

export const publishDocs = (done) => {
  const publish = (docs, pkg, done) =>
    ghPagesPublish(
      docs,
      {
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
      },
      done
    )

  fs.readFile(path.resolve('package.json'), (err, data) => {
    if (err) {
      done(err)
      return
    }
    const pkg = JSON.parse(data)
    const docs = path.resolve(paths.docs, pkg.name)
    publish(docs, pkg, done)
  })
}

export const standard = () =>
  gulp
    .src(paths.scripts)
    .pipe(gulpStandard())
    .pipe(
      gulpStandard.reporter('default', {
        breakOnError: true
      })
    )

export const jsonlint = () =>
  gulp
    .src(paths.json)
    .pipe(gulpJsonlint())
    .pipe(gulpJsonlint.failAfterError())
    .pipe(gulpJsonlint.reporter())

export const watchScripts = () =>
  gulp
    .src(paths.scripts)
    .pipe(
      gulpWatch(paths.scripts, (vinyl) => {
        if (vinyl.event === 'change') {
          gulplog.info(`Linted ${vinyl.relative}`)
        }
      })
    )
    .pipe(gulpStandard())
    .pipe(gulpStandard.reporter('default', {}))

export const watchJson = () =>
  gulp
    .src(paths.json)
    .pipe(
      gulpWatch(paths.json, (vinyl) => {
        if (vinyl.event === 'change') {
          gulplog.info(`Linted ${vinyl.relative}`)
        }
      })
    )
    .pipe(gulpJsonlint())
    .pipe(gulpJsonlint.reporter())

export const lint = gulp.parallel(jsonlint, standard)

export const watch = gulp.parallel(watchJson, watchScripts)

export const docs = gulp.series(docVersion, publishDocs)

export default gulp.series(lint, watch)
