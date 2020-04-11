var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

var paths = {
	source: './src/*.scss'
};

gulp.task('watch', function() {
	gulp.watch('./**/*.scss', [ 'build' ]);
	gulp.watch('./**/*.scss', [ 'docs' ]);
});

gulp.task('build', function(cb) {
	gulp
		.src(paths.source)
		.pipe(sass({ outputStyle: 'compact' }))
		.pipe(autoprefixer())
		.pipe(gulp.dest('./dist'))
		.pipe(gulp.dest('./dist'));
	cb();
});

gulp.task('default', gulp.series('build'));
