<template>
  <div class="layout">
      <AppHeader />
    <slot/>
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



export default {
  components: {
    AppHeader
  }
}
</script>

<style>

</style>
