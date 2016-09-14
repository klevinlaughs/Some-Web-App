'use strict';

var gulp = require('gulp');
var ts = require('gulp-typescript');
var del = require('del');
var sass = require('gulp-sass');
var proj = ts.createProject('tsconfig.json');
var merge = require('merge2');

var appDir = 'app'

gulp.task('default', ['build']);

gulp.task('build', ['typescript', 'sass']);

gulp.task('typescript', function(){
    var tsResult = proj.src()
        .pipe(ts(proj));

    return merge([
        tsResult.dts.pipe(gulp.dest(appDir)),
        tsResult.js.pipe(gulp.dest(appDir))
    ]);
});

// gulp.task('watch', ['typescript'], function() {
//     gulp.watch('${appDir}/**/*.ts', ['typescript']);
// });

gulp.task('sass', function(){
  return gulp.src(`${appDir}/css/**/*.scss`)
            .pipe(sass().on('error', sass.logError))
            .pipe(gulp.dest(appDir));
});

gulp.task('clean', function(){
    //return del([appDir+'/**/*.js', '!'+appDir+'/scripts/*.js', '!'+appDir])
    return del([`${appDir}/**/*.js`, `!${appDir}/scripts/*.js`, `!${appDir}`])
    .then(paths => {
        console.log('\nDeleted files and folders:\n', paths.join('\n'));
        console.log('');
    });
});
