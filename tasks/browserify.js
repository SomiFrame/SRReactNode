var gulp = require('gulp');
var concat = require('gulp-concat');
var browserify = require('gulp-browserify');

var rootDir = __dirname.substring(0, __dirname.lastIndexOf('/'));

gulp.task('browserify', function() {
  gulp.src(rootDir + '/src/js/search/main.js')
    .pipe(browserify({transform: 'reactify', 'debug': true}))
    .pipe(concat('main-search.js'))
    .pipe(gulp.dest(rootDir + '/dist/js'));
  gulp.src(rootDir + '/src/js/movies/main.js')
    .pipe(browserify({transform: 'reactify', 'debug': true}))
    .pipe(concat('main-movies.js'))
    .pipe(gulp.dest(rootDir + '/dist/js'));
});
