const gulp = require('gulp')
const path = require('path')
const requireDir = require('require-dir')
const panini = require('panini')
const browserSync = require('browser-sync').create()

requireDir('./gulp/tasks')

gulp.task('vendor', ['styles:vendor'])
gulp.task('build', ['pages', 'styles', 'vendor', 'assets'])

gulp.task('serve', ['watch'], () => {
  browserSync.init({
    server: {
      baseDir: path.join(__dirname, 'public')
    },
    open: false,
  })
})

gulp.task('watch', ['build'], () => {
  gulp.watch(['src/styles/*.scss'], ['styles'])
  gulp.watch(['src/{layouts,partials}/**/*.*'], panini.refresh)
  gulp.watch([`public/**/*.*`], browserSync.reload)
})

gulp.task('start', ['watch', 'serve'])
