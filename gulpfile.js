var gulp=require('gulp');
var webserver=require('gulp-webserver');
gulp.task('webserver',function(){
	return gulp.src("./src/")
	.pipe(webserver({
		port:8080,
		open:true,
		livereload:true
	}))
})