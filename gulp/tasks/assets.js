const gulp = require('gulp')
const imagemin = require('gulp-imagemin')
const gulpConfig = require('../config')

gulp.task('assets:images', () => {
  let stream = gulp.src(gulpConfig.imagesSource)

  if (gulpConfig.prod) {
    stream = stream.pipe(imagemin())
  }

  return stream.pipe(gulp.dest(gulpConfig.imagesDest))
})

gulp.task('assets', ['assets:images'])