var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('serve', function(){
    browserSync.init({
        server: {
            baseDir: ["./", "./src"]
        }
    })
    gulp.watch(['src/*.html', 'src/*.js']).on('change', browserSync.reload);
})
gulp.task('default', ['serve'])

