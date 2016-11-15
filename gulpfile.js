var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

gulp.task('browserify', function() {
    // Grabs the app.js file
    return browserify('./app/app.module.js')
        // bundles it and creates a file called bundle.js
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('./publish/'));
});

var browserSync = require('browser-sync').create();
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./",
            // The key is the url to match
            // The value is which folder to serve (relative to your current working directory)
            routes: {
                "/node_modules": "node_modules"
            }
        },
        browser:"chrome"
    });
});