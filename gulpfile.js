var gulp = require('gulp'), inject = require('gulp-inject');

gulp.task('default', function() {
    // place code for your default task here
});

/*
Insert all scripts into index.html
*/
gulp.task('updateIndex', function() {
    gulp.src('./app/index.html')
        .pipe(inject(gulp.src([
        './app/js/**/*.js',
        './app/css/**/*.css',
        './app/',
        './bower_components/**/*.js',
        './bower_components/**/*.css'
    ],
            {read: false}),
            {relative: true}))
        .pipe(gulp.dest('./app'))
});