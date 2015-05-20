var gulp = require('gulp');
var gls = require('gulp-live-server');

var rootDir = __dirname.substring(0, __dirname.lastIndexOf('/'));

gulp.task('livereload', function() {
  // Start the server at the beginning of the task.
  var server = gls.new(rootDir + '/server/express.js', {env: {NODE_ENV: 'development'}});
  server.start();
  // watch css and js change then refresh.
  gulp.watch([rootDir + '/src/**/*.css'], server.notify);
  gulp.watch([rootDir + '/src/**/*.js', rootDir + '/src/**/*.html'], function(event) {
    gulp.run(['clean', 'css', 'browserify'], function() {
      setTimeout(function() {
        server.notify(event);
      }, 2000);
    });
  });
});
