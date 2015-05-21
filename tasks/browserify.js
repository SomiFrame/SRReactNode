var gulp = require('gulp');
var concat = require('gulp-concat');
var browserify = require('gulp-browserify');

var rootDir = __dirname.substring(0, __dirname.lastIndexOf('/'));

// In multipage application ever page has its own depends javascript
// we should not package all the page that not depends on each other
// 's javascript sources in one file, so we split package the js files
// by page.
gulp.task('browserify', function() {
  gulp.src(rootDir + '/src/js/entrance/main.js')
    .pipe(browserify({transform: 'reactify', 'debug': true}))
    .pipe(concat('main-entrance.js'))
    .pipe(gulp.dest(rootDir + '/dist/js'));

  gulp.src(rootDir + '/src/js/search/main.js')
    .pipe(browserify({transform: 'reactify', 'debug': true}))
    .pipe(concat('main-search.js'))
    .pipe(gulp.dest(rootDir + '/dist/js'));

  gulp.src(rootDir + '/src/js/movies/main.js')
    .pipe(browserify({transform: 'reactify', 'debug': true}))
    .pipe(concat('main-movies-result.js'))
    .pipe(gulp.dest(rootDir + '/dist/js'));

  gulp.src(rootDir + '/src/js/chart/main.js')
    .pipe(browserify({transform: 'reactify', 'debug': true}))
    .pipe(concat('main-chart.js'))
    .pipe(gulp.dest(rootDir + '/dist/js'));
});
