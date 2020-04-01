const { src, dest } = require('gulp');
function copy() {
    return src('src/scss/main.scss').pipe(dest('dist'))
}
exports.copy = copy