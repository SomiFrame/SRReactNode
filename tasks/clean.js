var gulp = require('gulp');
var del = require('del');

var rootDir = __dirname.substring(0, __dirname.lastIndexOf('/'));

gulp.task('clean', function(cb) {
  del([
    rootDir + '/dist/js/**/*.js',
    rootDir + '/dist/css/**/*.css'
  ], cb);
});