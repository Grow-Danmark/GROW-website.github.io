const c1 = () => import(/* webpackChunkName: "page--src--templates--wp-page-vue" */ "/Users/scottlind/Documents/GitHub/Grow-website/src/templates/WP_Page.vue")
const c2 = () => import(/* webpackChunkName: "page--src--templates--grow-teamet-vue" */ "/Users/scottlind/Documents/GitHub/Grow-website/src/templates/GrowTeamet.vue")
const c3 = () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/scottlind/Documents/GitHub/Grow-website/node_modules/gridsome/app/pages/404.vue")
const c4 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/scottlind/Documents/GitHub/Grow-website/src/pages/Index.vue")

export default [
  {
    path: "/workshops-foredrag-arrangementer/",
    component: c1
  },
  {
    path: "/vores-historie/",
    component: c1
  },
  {
    path: "/vaerdier/",
    component: c1
  },
  {
    path: "/stot-grow/",
    component: c1
  },
  {
    path: "/samarbejdspartnere/",
    component: c1
  },
  {
    path: "/om-grow/",
    component: c1
  },
  {
    path: "/kontakt/",
    component: c1
  },
  {
    path: "/faa-hjaelp-hos-grow/",
    component: c1
  },
  {
    path: "/grow-teamet/",
    component: c2
  },
  {
    path: "/hjem/",
    component: c1
  },
  {
    path: "/formaal-vision/",
    component: c1
  },
  {
    path: "/bliv-ambassador/",
    component: c1
  },
  {
    path: "/bliv-samarbejdspartner/",
    component: c1
  },
  {
    path: "/certificeringer/",
    component: c1
  },
  {
    name: "404",
    path: "/404/",
    component: c3
  },
  {
    name: "home",
    path: "/",
    component: c4
  },
  {
    name: "*",
    path: "*",
    component: c3
  }
]
