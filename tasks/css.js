var gulp = require('gulp');
var cssshrink = require('gulp-cssshrink');
var minifyCss = require('gulp-minify-css');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var rootDir = __dirname.substring(0, __dirname.lastIndexOf('/'));

gulp.task('css', function() {
  gulp.src(rootDir + '/src/css/**/*.css')
        .pipe(cssshrink())
        .pipe(sourcemaps.init())
        .pipe(minifyCss({compatibility: 'ie8'}))
        .pipe(sourcemaps.write())
        .pipe(concat('app.css'))
        .pipe(gulp.dest(rootDir + '/dist/css'));
});

