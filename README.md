# React23

> perfect react stack to wrap your web app  
> **demo:** https://stackr23.github.io/react23/

[![Build Status](https://travis-ci.com/stackr23/react23.svg?branch=master)](https://travis-ci.com/stackr23/react23)
[![Maintenance][maintenance-img]][maintenance-url]
[![PRs Welcome][pr-welcome]](http://makeapullrequest.com)
<a href="https://standardjs.com"><img src="https://img.shields.io/badge/code_style-standard-brightgreen.svg" alt="Standard - JavaScript Style Guide"></a>
<a href="https://gitmoji.carloscuesta.me"><br />
[![devDependencies Status](https://david-dm.org/stackr23/react23/dev-status.svg)](https://david-dm.org/stackr23/react23?type=dev)
[![Known Vulnerabilities](https://snyk.io/test/github/stackr23/react23/badge.svg)](https://snyk.io/test/github/stackr23/react23)
[![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=stackr23/react23)](https://dependabot.com)

[maintenance-img]: https://img.shields.io/badge/Maintained%3F-yes-green.svg
[maintenance-url]: https://GitHub.com/stackR23/react23/graphs/commit-activity
[pr-welcome]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square

## :sparkles: Features

:robot: **[Gulp v4](https://gulpjs.com/) - task automation**  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;full control of script pipelines

:package: **[Webpack v4](https://webpack.js.org/) - module bundler**  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;hot module reload, static build, code splitting

:recycle: **[React v16.5](https://reactjs.org/) - view-controller library**  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;inclusive server side rendering

:card_file_box: **[MobX v5.5](https://mobx.js.org/) - observable store injection**  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;global stores based on observables

:alembic: **[Babel v7](https://babeljs.io/docs/en/index.html) - ES7 support provider**  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;async/await, static class properties, decorators (legacy), etc..

:rotating_light: **[EsLint v5.7](https://eslint.org/) - code linting tool**  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;beautyful and error proof code with **[standard-js](https://standardjs.com)** style

:white_check_mark: **TBD - [Karma](https://github.com/karma-runner/karma) and [Mocha](https://github.com/mochajs/mocha)**  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;integration and unit tests

:zap: **[ExpressJS v4](http://expressjs.com/) - node-js server**  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;webpack-dev in dev, serverside rendering on prod  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**TBD -** /api and /test server  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**TBD -** prefetch component data

:rocket: **github pages deployment scripts**  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;initiate and push git worktree from /build to gh-pages

## Usage

> until npm release, just clone the repo

```bash
git clone https://github.com/stackr23/react23 --depth 1
cd react23
yarn install
yarn run start
```

### Scripts

| **yarn run** |                                      |
| ------------ | ------------------------------------ |
| **`start`**  | starts webpack devServer             |
| **`build`**  | static build (TBD: productionserver) |
| **`lint`**   | runs eslint                          |
| **`test`**   | runs gulp 'test'-task                |

> **npm run script** calls shell scripts in **/stack/scripts**

| **npm run script**    |                                 |
| --------------------- | ------------------------------- |
| **`gh-pages/init`**   | initiate /build as git-worktree |
| **`gh-pages/deploy`** | deploy to gh-pages              |

## Styling

### Preprocessors

the **default pre-processor is** [stylus](http://stylus-lang.com/)  
_you can add custom loaders in `/config/webpack/styleLoader.js`_

the **UI is based on** [material-ui](https://github.com/mui-org/material-ui)

### Themes

the custom theme is located in `/app/style/muiThemes/react23Theme.js`,  
which uses the global stylus vars of `/app/style/setup.styl` (TBD: !stylus!styleobjects on SSR)

### Layout

the layout is defined in `/app/style/layout.styl`  
and is **focused on global styles like #body, #wrapper and #content**
