<template>
  <div>
    <AppHeader />
      <transition name="fade" appear>
          <HeroSection />
          
          <HelpCards />
         <!-- a wrapper for slot is needed -->
          <slot /> <!-- the content -->
        
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
import HeroSection from '~/components/HeroSection.vue'
import HelpCards from '~/components/HelpCards.vue'




export default {
  components: {
    AppHeader,
    AppFooter,
    HeroSection,
    HelpCards
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
