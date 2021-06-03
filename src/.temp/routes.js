const c1 = () => import(/* webpackChunkName: "page--src--templates--wp-page-vue" */ "/Users/scottlind/Documents/GitHub/Grow-website/src/templates/WP_Page.vue")
const c2 = () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/scottlind/Documents/GitHub/Grow-website/node_modules/gridsome/app/pages/404.vue")
const c3 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/scottlind/Documents/GitHub/Grow-website/src/pages/Index.vue")

export default [
  {
    path: "/om-grow/",
    component: c1
  },
  {
    path: "/privatlivspolitik/",
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
