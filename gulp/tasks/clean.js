const gulp = require('gulp')
const fs = require('fs')
const childProcess = require('child_process')
const gulpConfig = require('../config')

gulp.task('clean', done => {
  fs.exists(gulpConfig.dest, exists => {
    if (exists) {
      childProcess.exec(`rm -rf ${gulpConfig.dest}`, done)
      return
    }

    done()
  })
})
