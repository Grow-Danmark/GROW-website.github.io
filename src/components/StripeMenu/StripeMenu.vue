<template>
  <vsm-menu
    ref="header"
    :menu="menu"
    v-bind="$attrs"
  >
    <template #before-nav>
      <li class="vsm-mob-full">
      LOGO
      </li>
    </template>
    <template #default="{ item }">
      <component :is="item.component" />
    </template>
    <template #after-nav>
      <li class="vsm-mob-hide">
        Sign in
      </li>
      <vsm-mob>
mobile
      </vsm-mob>
    </template>
  </vsm-menu>
</template>

<script>
import Om from './Om.vue';


export default {
  components: {
    Om,
  },
  inheritAttrs: false,
  data() {
    return {
      menu: [
        { title: 'Om', dropdown: 'Om', component: 'Om' },
        { title: 'Source', attributes: { href: 'https://github.com/Alexeykhr/vue-stripe-menu/blob/master/demo/components/BaseHeader.vue', target: '_blank' } }
      ]
    }
  }
}
</script>

<style>
.vsm-menu {
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
}

.vsm-nav {
  margin: 0 10px;
}

.vsm-link-container {
  display: flex;
  flex: 1 1 auto;
  justify-content: center;
}

@media screen and (max-width: 768px) {
  .vsm-mob-show {
    display: block;
  }
  .vsm-mob-hide {
    display: none;
  }
  .vsm-mob-full {
    flex-grow: 1;
  }
}
</style>