'use strict'

let gulp = require('gulp');
let sass = require('gulp-sass');
let browserify = require('gulp-browserify');

gulp.task('default', ['html', 'css', 'js','watch']);

gulp.task('html', function () {
  gulp.src('./templates/*.html').pipe(gulp.dest('./public/templates'));
  gulp.src('./templates/directives/*.html').pipe(gulp.dest('./public/templates/directives'));

    return gulp.src('./index.html')
        .pipe(gulp.dest('./public'));
});

gulp.task('css', function () {
    return gulp.src('./styles.scss')
        .pipe(sass())
        .pipe(gulp.dest('./public'));
});


gulp.task('js', function () {
  // gulp.src('./js/controllers/*.js').pipe(gulp.dest('./public/js/controllers'));
  // gulp.src('./js/services/*.js').pipe(gulp.dest('./public/js/services'));


    return gulp.src('./js/app.js')
        .pipe(browserify())
        .pipe(gulp.dest('./public/js'))
});

gulp.task('watch', function () {
    gulp.watch('./js/*.js', ['js']);
    gulp.watch('./js/*/*.js', ['js']);
    // gulp.watch('./*/*/*.js', ['js']);
    gulp.watch('./*.scss', ['css']);
    gulp.watch('./index.html', ['html']);
    gulp.watch('./templates/*.html', ['html']);
    gulp.watch('./templates/*/*.html', ['html']);
    gulp.watch('./js/controllers/*.js,'['js']);
    gulp.watch('./js/services/*.js,'['js']);


});
