import React from 'react'
import {Route} from 'react-router-dom'
import Pages from '../js/pages/'

const createRoutes = (stores) => {
    const requireAuth = (...args) => {
        console.log('[React23] requireAuth - ...args', args)
    }

    // TBD: loginCheck
    // // const requireAuth = (nextState, _replaceState) => {
    //     const {user: userStore} = store
    //     if (userStore.ready && !userStore.isLoggedin) {
    //         // replaceState(WOHINGENAU?)
    //     }
    // }

    // TBD: use isomporphicRoutes.js
    const routes = [
        {
            path: '/',
            exact: true,
            component: Pages.Home,
            onEnter: requireAuth
        },
        {
            path: '/test',
            exact: true,
            component: Pages.TestPage
        }
    ]

    return routes.map((routeProps, i) => {
        return <Route key={i} onEnter={requireAuth()} {...routeProps} />
    })
}

export default createRoutes
