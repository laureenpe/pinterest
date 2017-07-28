
//Dependencias de desarrollo que necesitaremos en nuestras tasks 

var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-minify-css');
var webserver = require('gulp-webserver');

//Tareas a configurar que concatenará nuestros archivos js, convirtiéndolo en script.js el que guardará en una carpeta llamada dist, será el q finalmente linkearemos en nuestro html

gulp.task('script', function () {
    gulp.src(['node_modules/jquery/dist/jquery.js', 'node_modules/materialize-css/dist/js/materialize.js', 'assets/js*.js'])
        .pipe(concat('scripts.js'))
        //carpeta dist
        .pipe(gulp.dest('dist/js'));
});

//2da tarea style la que concatenará u minificara nuestro archivo main.scss, convirtiendolo en style.min.css el que guardara en una carpeta llamada dist, será el que finalmente linkearemos en nuestro html

gulp.task('style', function () {
    gulp.src(['node_modules/materialize-css/dist/css/materialize.css', 'assets/sass/main.scss'])
        .pipe(sass().on('error', sass.logError))
        .pipe(minifyCSS())
        .pipe(concat('style.min.css'))
        .pipe(gulp.dest('dist/css/'));
});

//3ra tarea: webserver la cual nos crea un servidor web de desarrollo que se ejecuta en el localhost puerto 8000

gulp.task('webserver', function () {
    gulp.src('../sprint06/')
        .pipe(webserver({
            fallback: 'index.html',
            livereload: true,
            directoryListing: false,
            open: true,
            port:8001
        }));
});

//Indicar a gulp cuales son las tareas que deberá ejecutar al hacer correr el comando gulp en nuestro terminal
gulp.task('watch', function() {
  gulp.watch('assets/sass/*.scss',['style']);
});
gulp.task('default', ['script', 'style', 'webserver','watch']);
