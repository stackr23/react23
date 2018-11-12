'use strict'

import Pages            from '../js/pages/'

export const createRoutes = store => {
    // TBD: loginCheck
    // // const requireAuth = (nextState, _replaceState) => {
    //     const {user: userStore} = store
    //     if (userStore.ready && !userStore.isLoggedin) {
    //         // replaceState(WOHINGENAU?)
    //     }
    // }

    // TBD: use isomporphicRoutes.js
    const routes          = [
        {
            path:       '/',
            exact:      true,
            component:  Pages.Home
            // onEnter: requireAuth
        },
        {
            path:       '/test',
            exact:      true,
            component:  Pages.TestPage
        }
    ]

    return routes
}

export default createRoutes
