# TODO

* webpack (tweak config)
    * [approve performance](https://www.codementor.io/drewpowers/high-performance-webpack-config-for-front-end-delivery-90sqic1qa#3-dynamic-imports-for-lazy-loaded-modules)
    (done: 1. and 2.)
    * [ ] enable sourcemaps
    * [ ] sass/stylus support
        * [ ] sourcemaps
        * [ ] extract text plugin for production
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
        [ ] add BrowserSync support!?  
        prio low, because we use HMR of webpack  
        browserSync only needed for tests usage (mirror clicks and scrolls, ...)
* [x] frontend server
    * [ ] server side rendering
    * [ ] use /app/index.html as template
    * [ ] prefetch data
    * [ ] api route
        * [ ] fixtures (depends on store)
* [ ] tests
    * [ ] add mocha
        * [ ] write unit tests
    * [ ] add karma
        * [ ] write integration tests
