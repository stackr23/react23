# TODO

* [ ] react23-CLI
    - [x] babel-preset-react23
        - [?] fix, publish install  
        Error: Plugin/Preset files are not allowed to export objects, only functions.  
        Plugin/Preset did not return an object.
    - [ ] npm package react23
        - [ ] setup dir structure to imitate package
        - [ ] let user override default \[App.js, server.js\]
        - [ ] let user modify webpackconfig (process.env.APP_CONFIG)  
        - [ ] publish stack as package
* babel-preset-react23
    - decide for polyfill (tranform runtime/polyfill)  
    - remove unnessecary core-js plugins in production build
* webpack (tweak config)
    * [approve performance](https://www.codementor.io/drewpowers/high-performance-webpack-config-for-front-end-delivery-90sqic1qa#3-dynamic-imports-for-lazy-loaded-modules)
    (done: 1. and 2.)
    * [x] enable sourcemaps
    * [x] sass/stylus support
        * [ ] sourcemaps
        * [x] @stackr23/styleobjects-loader 
        * [x] extract text plugin for production
        * [ ] add libs
            * [ ] MUI
            * [ ] grid-system?
            * [ ] doubleu23-stylus/scss.boilerplate
    * [ ] stores
        * [x] add mobx
    * [ ] routing
        * [ ] add mobx-router and define routes
        * [ ] add "loadable"/async components support for route based code-split
    * [ ] /app/components
        - MD loader
        - bit.rc loader
* [x] gulp
* [x] frontend server
    * [x] xserver side rendering
    * [x] use /app/index.html as template
        * [ ] optional - use webpack hash in dev mode  
        not needed because of HMR we need no build-hash
    * [ ] prefetch data
    * [ ] api route
        * [ ] fixtures (depends on store)
* [ ] server
    * [ ] /api + DB integration
    * [ ] /test + data mocking 
* [ ] tests
    * [x] fix eslint (+IDE) integration
    * [ ] add mocha
        * [ ] write unit tests
    * [ ] add karma
        * [ ] write integration tests
