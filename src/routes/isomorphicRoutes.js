// main route trees
const routes = {
  path: '/',

  // Keep in mind, routes are evaluated in order
  children: [
    {
      path: '/',
      load: () => import(/* webpackChunkName: 'home' */ 'app/pages/Home')
    },
    {
      path: '/test',
      load: () => import(/* webpackChunkName: 'testPage' */ 'app/pages/TestPage')
    }
    // {
    //     path: '(.*)',
    //     load: () => import( webpackChunkName: 'not-found'  './not-found')
    // }
  ],

  async action ({ next }) {
    // Execute each child route until one of them return the result
    const route = await next()

    // Provide default values for title, description etc.
    route.title = `${route.title ||
            'Untitled Page'} - www.reactstarterkit.com`
    route.description = route.description || ''

    return route
  }
}

export default routes
