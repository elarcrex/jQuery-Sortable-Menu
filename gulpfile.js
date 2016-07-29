var gulp = require('gulp');
var minify = require('gulp-minify');
var concat = require('gulp-concat');

gulp.task('concat', function() {
  return gulp.src(['js/jquery.min.js', 'js/jquery-ui.js', 'js/nested.js'])
    .pipe(concat('all.js'))
    .pipe(minify({
        ext:{
            src:'js.all',
            min:'.js'
        }
    }))
    .pipe(gulp.dest('js/'));
});
gulp.task('default',['concat']);