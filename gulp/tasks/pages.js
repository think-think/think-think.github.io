const gulp = require('gulp')
const rename = require('gulp-rename')
const panini = require('panini')
const gulpConfig = require('../config')

gulp.task('pages', () => {
  gulp.src(gulpConfig.pagesSource)
    .pipe(panini({
      root: gulpConfig.dest,
      layouts: gulpConfig.layoutsSource,
      partials: gulpConfig.partialsSource,
    }))
    .pipe(rename({ extname: '.html' }))
    .pipe(gulp.dest(gulpConfig.dest))
})
