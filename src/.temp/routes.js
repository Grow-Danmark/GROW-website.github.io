const c1 = () => import(/* webpackChunkName: "page--src--templates--wp-page-vue" */ "/Users/scottlind/Documents/GitHub/gridsome-wp-boilerplate/src/templates/WP_Page.vue")
const c2 = () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/scottlind/Documents/GitHub/gridsome-wp-boilerplate/node_modules/gridsome/app/pages/404.vue")
const c3 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/scottlind/Documents/GitHub/gridsome-wp-boilerplate/src/pages/Index.vue")

export default [
  {
    path: "/om/",
    component: c1
  },
  {
    path: "/kontakt/",
    component: c1
  },
  {
    path: "/hjem/",
    component: c1
  },
  {
    name: "404",
    path: "/404/",
    component: c2
  },
  {
    name: "home",
    path: "/",
    component: c3
  },
  {
    name: "*",
    path: "*",
    component: c2
  }
]
