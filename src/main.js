// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import VueStripeMenu from 'vue-stripe-menu';
import 'vue-stripe-menu/dist/vue-stripe-menu.css'


import DefaultLayout from '~/layouts/Default.vue';
import '~/assets/sass/styles.scss';

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);
  Vue.use(VueStripeMenu);
}
