var gulp = require('gulp');
var requireDir = require('require-dir');
var gulpSequence = require('gulp-sequence');

// load all child tasks.
requireDir('./tasks');

// for debug in chrome.
gulp.task('debug',gulpSequence(['clean', 'css', 'browserify', 'livereload']));

// default task.
gulp.task('default', gulpSequence(['clean', 'css', 'browserify']));

