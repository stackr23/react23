# react23
> perfect react stack to wrap your web app

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
[Gulp](https://gulpjs.com/), [React](https://reactjs.org/), [MobX](https://mobx.js.org/), [Webpack](https://webpack.js.org/), [Express Server](http://expressjs.com/), [EsLint](https://eslint.org/),
[Karma](https://github.com/karma-runner/karma)/[Mocha](https://github.com/mochajs/mocha), [ES7 via Babel 7](https://babeljs.io/docs/en/index.html)

## usage
```
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

### styleobjects
to keep styling in its space and use stylus vars globally, we use [@stackr23/styleobjects-loader](https://github.com/stackr23/styleobjects-loader) to "sync" material-ui with stylus  
imported files with __targeted extension `.csso`__ will be __transformed from stylus to js-objects__ via [@stackr23/styleobjects](https://github.com/stackr23/styleobjects)

### themes
The custom theme is created in `/app/style/muiThemes/react23.csso`,  
which uses the global stylus vars of `/app/style/setup.styl`

### layout
the layout is defined in `/app/style/layout.styl` and is focused on global styles of the page like #body, #wrapper and #content

### modular style
component specific styles are defined directly in their directory - fe: `/app/components/Header.styl`  
and are loaded via [@stackr23/style-loader](https://github.com/stackr23/style-loader) mixed with defined pre-processors  
> __in devevlopment__, the styles are __injected__ directly __via style tags__ per HMR  
> __in production__, they are extracted via `ExtractTextPlugin` and __bundled in `/build/app-[hash].css`__  
> __both environments__ use `cssMqPacker` and `autoprefixer`
