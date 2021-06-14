<template>
  <div>
    <AppHeader />
      <transition name="fade" appear>
         <main>
          <slot /> <!-- the content -->   
        </main> 
      </transition>
    <AppFooter />
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
.fade-enter-active {
  transition: opacity .5s;
}

.fade-enter {
  opacity: 0;
}
</style>
