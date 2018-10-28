# TODO

* webpack (tweak config)
    * [approve performance](https://www.codementor.io/drewpowers/high-performance-webpack-config-for-front-end-delivery-90sqic1qa#3-dynamic-imports-for-lazy-loaded-modules)
    (done: 1. and 2.)
    * [x] enable sourcemaps
    * [x] sass/stylus support
        * [ ] sourcemaps
        * [x] extract text plugin for production
        * [ ] add libs
            * [ ] MUI
            * [ ] grid-system?
            * doubleu23-stylus/scss.boilerplate
    * [ ] stores
        * [ ] add mobx
    * [ ] routing
        * [ ] add mobx-router and define routes
        * [ ] add "loadable"/async components support for route based code-split
    * [ ] /app/components
        - MD loader
        - bit.rc loader
* [x] gulp
* [x] frontend server
    * [ ] xserver side rendering
    * [x] use /app/index.html as template
    * [ ] prefetch data
    * [ ] api route
        * [ ] fixtures (depends on store)
* [ ] tests
    * [x] fix eslint (+IDE) integration
    * [ ] add mocha
        * [ ] write unit tests
    * [ ] add karma
        * [ ] write integration tests
