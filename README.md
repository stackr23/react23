# react23
> perfect react stack to wrap your web app

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

# usage
```
git clone https://github.com/stackr23/react23 --depth 1
cd react23
npm install
npm start 
```

## npm scripts  
__start__ - starts webpack devServer  
__build__ - starts webpack in production mode  
__build-static__ - static build (production)  
__lint__ - runs eslint  
__test__ - runs gulp 'test'-task  

## gulp tasks
__test__ - TBD  
__clean__ - cleans the defined blob - __default:__ /build and /test  
__build__ - builds webpack depending on your NODE_ENV (-p for production)  
__build-static__ - build + copy of /app/index.html to /build  
__build-sass__ - builds sass files, _deprecated_ through babel style-loaders  
__server:frontend__ - starts the express server and renders index.html on /  
