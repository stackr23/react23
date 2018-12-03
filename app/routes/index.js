import React from 'react'
import {Route} from 'react-router-dom'
import * as Pages from '../src/pages/'

let requireAuth = () => {}

const _routes = [
    {
        meta: {
            name: 'home',
            linktext: 'Home',
            title: 'Home'
        },

        // route props
        path: '/',
        exact: true,
        component: Pages.Home,
        onEnter: requireAuth
    },
    {
        meta: {
            name: 'test',
            linktext: 'Test',
            title: 'Test'
        },
        path: '/test',
        exact: true,
        component: Pages.TestPage
    }
]

const createRoutes = (stores) => {
    requireAuth = (...args) => {
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
        let {meta, ...routeProps} = _routeProps
        return <Route key={i} {...routeProps} />
    })
}

export const routes = _routes

export default createRoutes
