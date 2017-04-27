// get the dependencies
var gulp        = require('gulp'), 
  childProcess  = require('child_process');

// create the gulp task
gulp.task('run', function () { 
  childProcess.spawn('npm', ['run', 'dev'], { stdio: 'inherit' }); 
});