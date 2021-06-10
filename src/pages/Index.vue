<template>
  <Layout>
  <!-- <main v-html="$page.home.content" /> -->
  <HeroComponent></HeroComponent>
  <HelpCards></HelpCards>
  <ImageText></ImageText>

  </Layout>
</template>

<page-query>
query home {
	home: pageBy(uri: "hjem") {
        title
        content
        id
	},
    generalSettings {
    title
  }
}
</page-query>

<script>
import HelpCards from '~/components/HelpCards.vue'
import HeroComponent from '../components/HeroComponent.vue'
import ImageText from '../components/ImageText.vue'


export default {
  components: {
  HelpCards,
  HeroComponent,
  ImageText,
  },
  name: 'home',
  metaInfo() {
    return {
      title: this.$page.generalSettings.title,
      titleTemplate: this.$page.generalSettings.title + ' | ' + this.$page.page.title,
      meta: [
        { name: 'description', content: this.$page.title }
      ]
      // etc...
    }
  },
  methods: {
    
  }
}
</script>


<style>

</style>
