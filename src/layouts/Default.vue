<template>
  <div>
    <AppHeader />
    <div class="layout">
    <slot/>
    <AppFooter />
    </div>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import AppHeader from '~/components/AppHeader.vue'
import AppFooter from '~/components/AppFooter.vue'



export default {
  components: {
    AppHeader,
    AppFooter
  }
}
</script>

<style>

</style>
