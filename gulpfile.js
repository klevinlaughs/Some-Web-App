'use strict';

var gulp = require('gulp');
var ts = require('gulp-typescript');
var del = require('del');
var sass = require('gulp-sass');
var proj = ts.createProject('tsconfig.json');

gulp.task('default', ['build']);

gulp.task('build', ['html', 'scripts', 'styles', 'fonts']);

gulp.task('html', function(){
  return gulp.src('src/**/*.html').pipe(gulp.dest('dist'));
});

gulp.task('scripts', function(){
  return proj.src().pipe(ts(proj)).js.pipe(gulp.dest('dist/scripts'));
});

gulp.task('styles', ['css', 'sass']);

gulp.task('css', function(){
  return gulp.src('src/css/**/*.css').pipe(gulp.dest('dist/css'));
});

gulp.task('sass', function(){
  return gulp.src('src/css/**/*.scss').pipe(sass().on('error', sass.logError).pipe(gulp.dest('dist/css'));
});

gulp.task('fonts', function(){
  return gulp.src('src/fonts/**/*.*').pipe(gulp.dest('dist/fonts'));
});

gulp.task('clean', function(){
  return del(['dist/**/*']);
});
