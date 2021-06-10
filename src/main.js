// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import '/static/assets/sass/styles.scss';

import '/static/styles/normalize.css';
import '/static/styles/styles.css';
import '/static/styles/colors.css';
import '/static/styles/navbar.css';

import DefaultLayout from '~/layouts/Default.vue';

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);
}
