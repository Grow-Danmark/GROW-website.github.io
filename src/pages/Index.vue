<template>
  <Layout>
  <!-- <main v-html="$page.home.content" /> -->
  <HeroComponent></HeroComponent>
  <HelpCards></HelpCards>
  <ImageText></ImageText>
  <ThreeCards></ThreeCards>
  <MeetTheTeam></MeetTheTeam>
  <Infographic></Infographic>

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
import ThreeCards from '../components/ThreeCards.vue'
import MeetTheTeam from '../components/MeetTheTeam.vue'
import Infographic from '../components/Infographic.vue'


export default {
  components: {
  HelpCards,
  HeroComponent,
  ImageText,
  ThreeCards,
  MeetTheTeam,
  Infographic,
  },
  name: 'home',
  metaInfo() {
    return {
      title: this.$page.home.title,
      titleTemplate: this.$page.generalSettings.title + ' | ' + this.$page.home.title,
      meta: [
        { name: 'description', content: this.$page.generalSettings.title + ' | ' + this.$page.home.title }
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