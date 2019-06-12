const gulp = require('gulp'),
watch = require('gulp-chokidar')(gulp);
browserSync = require('browser-sync').create();
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require('postcss-import'),
mixins = require('postcss-mixins');




gulp.task('styles', (done) => {
		gulp.src('app/src/styles/style.css')
		.pipe(postcss([cssImport, mixins, cssvars, nested, autoprefixer]))
		.pipe(gulp.dest('app/dist/'))
   		browserSync.reload();
});

gulp.task('reload', ()=> {
	browserSync.reload();
})


gulp.task('default', function () {

	browserSync.init({
        server: "./app",
    });

    watch('app/src/styles/**/*.css', 'styles');
    watch('app/index.html', 'reload');

});