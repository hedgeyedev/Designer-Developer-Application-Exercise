var gulp = require('gulp');
// Requires the gulp-sass plugin
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');


gulp.task('sass', function() {
  return gulp.src('app/scss/**/*.scss') // Gets all files ending with .scss in app/scss
    .pipe(sass())
    .pipe(autoprefixer('last 2 versions'))
    .pipe(gulp.dest('app/css'))
});

// Watchers
gulp.task('watch', function() {
  gulp.watch('app/scss/**/*.scss', ['sass']);
})
