# react23
> perfect react stack to wrap your web app

<!-- MarkdownTOC autolink="true" autoanchor="true" -->

- [usage](#usage)
  - [npm scripts](#npm-scripts)
- [setup](#setup)
  - [gh-pages](#gh-pages)

<!-- /MarkdownTOC -->


[![Build Status](https://travis-ci.com/stackr23/react23.svg?branch=master)](https://travis-ci.com/stackr23/react23)
[![devDependencies Status](https://david-dm.org/stackr23/react23/dev-status.svg)](https://david-dm.org/stackr23/react23?type=dev)
[![Greenkeeper badge](https://badges.greenkeeper.io/stackr23/react23.svg)](https://greenkeeper.io/)

<a href="https://standardjs.com"><img src="https://img.shields.io/badge/code_style-standard-brightgreen.svg" alt="Standard - JavaScript Style Guide"></a>
[![Maintenance][maintenance-img]][maintenance-url]
[![PRs Welcome][pr-welcome]](http://makeapullrequest.com)
<a href="https://gitmoji.carloscuesta.me">
    <img src="https://img.shields.io/badge/gitmoji-%20😜%20😍-FFDD67.svg?style=flat-square"
         alt="Gitmoji">
</a>

[maintenance-img]: https://img.shields.io/badge/Maintained%3F-yes-green.svg
[maintenance-url]: https://GitHub.com/Doubleu23/tailored-react-env/graphs/commit-activity
[pr-welcome]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square

<a id="usage"></a>
# usage
```
git clone https://github.com/stackr23/react23 --depth 1
cd react23
npm install
npm start 
```

<a id="npm-scripts"></a>
## npm scripts
| __TASK__              | __Description__                       |   
|-----------------------|---------------------------------------|
| __`npm run start`__   | starts webpack devServer              |
| __`npm run build`__   | static build (TBD: productionserver)  |
| __`npm run lint`__    | runs eslint                           |
| __`npm run test`__    | runs gulp 'test'-task                 | 


<a id="setup"></a>
# setup

<a id="gh-pages"></a>
## gh-pages
> this are the steps to set /build as branch gh-pages

1. delete build dirs content - `rm -rf build/*`  
2. set /build as branch gh-pages - `git worktree add dist gh-pages`

> __=> you successfully set up the /build dir as worktree.__  

__'gh-pages' is now checked out at 'react23/build'__

3. make a fresh build - `npm run build`  
4. checkout gh-pages - `cd build`  
5. add, commit and build fresh build  
- `git add . -A && git commit -m ":cat: Deploy to gh-pages" && git push origin gh-pages`  
