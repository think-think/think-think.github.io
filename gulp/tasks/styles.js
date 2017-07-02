const gulp = require('gulp')
const sass = require('gulp-sass')
const postcss = require('gulp-postcss')
const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')
const concat = require('gulp-concat')
const gulpConfig = require('../config')

console.log(JSON.stringify(gulpConfig, null, 2))

gulp.task('styles', () => {
  const plugins = [
    autoprefixer({
      browsers: ['last 3 versions', 'not ie < 10'],
    }),
  ]

  if (gulpConfig.prod) {
    plugins.push(cssnano({ zindex: false }))
  }

  return gulp.src(gulpConfig.stylesSource)
    .pipe(sass().on('error', console.log))
    .pipe(postcss(plugins))
    .pipe(gulp.dest(gulpConfig.stylesDest))
})

gulp.task('styles:vendor', () => {
  return gulp.src(gulpConfig.vendorStyles)
    .pipe(concat('vendor.css'))
    .pipe(gulp.dest(gulpConfig.stylesDest))
})
