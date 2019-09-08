import React from 'react'
import { Route } from 'react-router-dom'

import * as Pages from '../src/pages/'

let requireAuth = () => {}

const _routes = [
  {
    path: '/',
    exact: true,
    component: Pages.Home,
    onEnter: requireAuth,
    meta: {
      name: 'home',
      title: 'Home',
      description: 'Landingpage'
    }
  },
  {
    meta: {
      name: 'test',
      title: 'Test',
      description: 'Page for testing some components'
    },
    path: '/test',
    exact: true,
    component: Pages.TestPage
  }
]

const createRoutes = () => {
  requireAuth = () => {
    // console.log('[React23] requireAuth - ...args', args)
  }

  // TBD: loginCheck
  // // const requireAuth = (nextState, _replaceState) => {
  //     const {user: userStore} = store
  //     if (userStore.ready && !userStore.isLoggedin) {
  //         // replaceState(WOHINGENAU?)
  //     }
  // }

  // TBD: use isomporphicRoutes.js

  return _routes.map((_routeProps, i) => {
    let { meta, ...routeProps } = _routeProps
    return <Route key={i} meta={meta} {...routeProps} />
  })
}

export const routes = _routes

export default createRoutes
