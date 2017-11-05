var gulp = require('gulp'),
	path = require('path'),
	webpack = require('gulp-webpack');


gulp.task('webpack', function() {
	return gulp.src('./src/index.js')
		.pipe(webpack( require('./webpack.config.js') ))
		.pipe(gulp.dest('dist/'));
});


