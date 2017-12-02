export default {
    entry: './dist/build/ngx-google-places-autocomplete.js',
    dest: './dist/ngx-google-places-autocomplete.umd.js',
    format: 'umd',
    // Global namespace.
    moduleName: 'ng.ngx-google-places-autocomplete',
    // External libraries.
    external: [
        '@angular/core',
        '@angular/common',
        'rxjs/Observable',
        'rxjs/Observer'
    ],
    globals: {
        '@angular/core': 'ng.core',
        '@angular/common': 'ng.common',
        'rxjs/Observable': 'Rx',
        'rxjs/Observer': 'Rx'
    },
    onwarn: () => { return }
}