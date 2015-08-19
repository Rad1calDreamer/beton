/**
 * Created by Andrew on 04.08.2015.
 */
var gulp = require('gulp');
var postcss = require('gulp-postcss');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('autoprefixer-core');
var csso = require('gulp-csso');
var sass = require('gulp-sass');

gulp.task('sass', function () {
    return gulp.src('./_css/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./_css/'));
});


gulp.task('mini',['afterwork'], function () {
    return gulp.src('./_css/*.css')
        .pipe(csso())
        .pipe(gulp.dest('./_css/'));
});
gulp.task('afterwork',['sass'], function () {
    return gulp.src('./_css/*.css')
        .pipe(postcss([autoprefixer({browsers: ['last 3 version']})]))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./_css/'));

});
// The default task (called when you run `gulp` from cli)
gulp.task('totalStyle', ['sass','afterwork','mini']);