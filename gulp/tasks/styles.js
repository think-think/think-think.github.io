const gulp = require('gulp')
const sass = require('gulp-sass')
const postcss = require('gulp-postcss')
const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')
const concat = require('gulp-concat')
const sourcemaps = require('gulp-sourcemaps')
const gulpConfig = require('../config')

gulp.task('styles', () => {
  const plugins = [
    autoprefixer({
      browsers: ['last 3 versions', 'not ie < 10'],
    }),
  ]

  if (gulpConfig.env.prod) {
    plugins.push(cssnano({ zindex: false }))
    
    return gulp.src(gulpConfig.stylesSource)
      .pipe(sass().on('error', console.log))
      .pipe(postcss(plugins))
      .pipe(gulp.dest(gulpConfig.stylesDest))
  }

  return gulp.src(gulpConfig.stylesSource)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', console.log))
    .pipe(postcss(plugins))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(gulpConfig.stylesDest))
})

gulp.task('styles:vendor', () => {
  return gulp.src(gulpConfig.vendorStyles)
    .pipe(concat('vendor.css'))
    .pipe(gulp.dest(gulpConfig.stylesDest))
})
