var gulp = require('gulp'), inject = require('gulp-inject');

gulp.task('default', function() {
    // place code for your default task here
});

gulp.task('updateIndex', function() {
    var target = gulp.src('./app/index.html');
    var sources = gulp.src([
        './app/js/**/*.js',
            './app/css/**/*.css',
            './app/',
            './bower_components/**/*.js',
            './bower_components/**/*.css'
        ],
        {read:false})

    return target.pipe(inject(sources))
        .pipe(gulp.dest('./app'))

});