# TODO

    * [ ] routing
        * [ ] add mobx-router and define routes
        * [ ] add "loadable"/async components support for route based code-split
* webpack (tweak config)
    * [approve performance](https://www.codementor.io/drewpowers/high-performance-webpack-config-for-front-end-delivery-90sqic1qa#3-dynamic-imports-for-lazy-loaded-modules)
    (done: 1. and 2.)
    * [x] enable sourcemaps
        * [ ] production shows partly transformed code 
    * [x] sass/stylus support
        * [ ] sourcemaps dont show correct file
        * [x] @stackr23/styleobjects-loader 
        * [x] extract text plugin for production
        * [ ] add libs
            * [x] stylus23
                * [ ] publish as namespaced with @stackr23/stylus
            * [x] MUI
    * [x] mobx store
    * [ ] /app/components
        - MD loader
        - bit.rc loader
* [x] gulp
* [x] frontend server
    * [x] xserver side rendering
    * [x] use /app/index.html as template
    * [ ] prefetch data
* [ ] server
    * [ ] /api + DB integration
    * [ ] /test + data mocking with fixtures
* [ ] tests
    * [x] fix eslint (+IDE) integration
    * [ ] add mocha - write unit tests
    * [ ] add karma - write integration tests
* babel-preset-react23
    - decide for polyfill (tranform runtime/polyfill)  
    - remove unnessecary core-js plugins in production build
* eslint-preset-stackr23
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
