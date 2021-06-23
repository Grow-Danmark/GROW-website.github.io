<template>
  <div>
    <AppHeader />
      <transition name="fade" appear>
         <main>
           <slot /> <!-- the content -->  
           <a href="#app">
            <button class="to-top">
              Til top
            </button>
          </a> 
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

<style lang="scss">
html {
  scroll-behavior: smooth;
}
.fade-enter-active {
  transition: opacity .5s;
}

.fade-enter {
  opacity: 0;
}
.to-top {
  position: absolute;
  right: 5em;
  padding: .5em 1em;
  
  a {
    color: white;
  }
  }
</style>
