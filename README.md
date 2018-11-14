# React23
> perfect react stack to wrap your web app  
> __demo:__ https://stackr23.github.io/react23/  

[![Build Status](https://travis-ci.com/stackr23/react23.svg?branch=master)](https://travis-ci.com/stackr23/react23)
[![devDependencies Status](https://david-dm.org/stackr23/react23/dev-status.svg)](https://david-dm.org/stackr23/react23?type=dev)
[![Known Vulnerabilities](https://snyk.io/test/github/stackr23/react23/badge.svg)](https://snyk.io/test/github/stackr23/react23)
[![Greenkeeper badge](https://badges.greenkeeper.io/stackr23/react23.svg)](https://greenkeeper.io/)<br />
[![Maintenance][maintenance-img]][maintenance-url]
[![PRs Welcome][pr-welcome]](http://makeapullrequest.com)
<a href="https://standardjs.com"><img src="https://img.shields.io/badge/code_style-standard-brightgreen.svg" alt="Standard - JavaScript Style Guide"></a>
<a href="https://gitmoji.carloscuesta.me">
    <img src="https://img.shields.io/badge/gitmoji-%20😜%20😍-FFDD67.svg?style=flat-square"
         alt="Gitmoji">
</a>

[maintenance-img]: https://img.shields.io/badge/Maintained%3F-yes-green.svg
[maintenance-url]: https://GitHub.com/stackR23/react23/graphs/commit-activity
[pr-welcome]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square

## features
* :robot: __[Gulp](https://gulpjs.com/) task automation__  
  full control of script pipelines
* :recycle: __[React](https://reactjs.org/) universal app libary__  
  inclusive server side rendering
* :card_file_box: __[MobX](https://mobx.js.org/) with mobx-router and mobx-react__  
  global stores based on observables
* :package: __[Webpack](https://webpack.js.org/) v4 features__  
  hot module reload, static build, code splitting
* :zap: __[ExpressJS](http://expressjs.com/) server__  
  webpack-dev in dev, serverside rendering on prod  
  * [ ] /api and /test server  
  * [ ] prefetch component data
* :rotating_light: __[EsLint](https://eslint.org/) code linting__  
  beautyful and error proof code with [standard-js](https://standardjs.com) style  
* :white_check_mark: __TBD - [Karma](https://github.com/karma-runner/karma) and [Mocha](https://github.com/mochajs/mocha)__  
  integration and unit tests  
* :alembic: __[ES7 via Babel 7](https://babeljs.io/docs/en/index.html)__  
  dynamic import, async/await, decorators (legacy), etc..  
* :rocket: __github pages deployment scripts__  
  initiate and push git worktree from /build to gh-pages

## usage  
> until npm release, just clone the repo  

```bash
git clone https://github.com/stackr23/react23 --depth 1  
cd react23  
npm install  
npm start 
```

### scripts

| __npm run__   |                                       |   
|---------------|---------------------------------------|
| __`start`__   | starts webpack devServer              |
| __`build`__   | static build (TBD: productionserver)  |
| __`lint`__    | runs eslint                           |
| __`test`__    | runs gulp 'test'-task                 | 

> __npm run script__ calls shell scripts in __/stack/scripts__

| __npm run script__    |                                   |
|-----------------------|-----------------------------------|
| __`gh-pages/init`__   | initiate /build as git-worktree   |
| __`gh-pages/deploy`__ | deploy to gh-pages                |

## styling

### pre-processors
the __default pre-processor is__ [stylus](http://stylus-lang.com/)  
_you can add custom loaders in `/config/webpack/styleLoader.js`_

the __UI is based on__ [material-ui](https://github.com/mui-org/material-ui)  

### styleobjects (deprecated due to SSR)
to keep styling in its space and use stylus vars globally,  
we use [@stackr23/styleobjects-loader](https://github.com/stackr23/styleobjects-loader) to "sync" material-ui with stylus  
  
imported files with __targeted extension `.csso`__,  
will be __transformed from stylus to js-objects__ via [@stackr23/styleobjects](https://github.com/stackr23/styleobjects)

### themes
the custom theme is located in `/app/style/muiThemes/react23Theme.js`,  
which uses the global stylus vars of `/app/style/setup.styl` (TBD: !stylus!styleobjects on SSR)

### layout
the layout is defined in `/app/style/layout.styl`  
and is __focused on global styles like #body, #wrapper and #content__

### modular style
component specific styles are defined directly in their directory - fe: `/app/components/Header.styl`  
and are loaded via [@stackr23/style-loader](https://github.com/stackr23/style-loader) mixed with defined pre-processors  
__in devevlopment__, the styles are __injected__ directly __via style tags__ per HMR  
__in production__, they are extracted via `ExtractTextPlugin` and __bundled in `/build/app-[hash].css`__  
__both environments__ use `cssMqPacker` and `autoprefixer`
