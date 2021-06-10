<template>
  <Layout>
<main>Test
  LOL VIRKER DET HER NUUUU
 <TeamCard />
</main>
    <!-- <main v-html="$page.home.content" /> -->
  </Layout>
</template>
<page-query>
query home {
	home: pageBy(uri: "grow-teamet") {
        title

        id
	},
    generalSettings {
    title
  }
}
</page-query>



<script>
import TeamCard from '~/components/TeamCard.vue'

export default {
  components: {
    TeamCard
  },
  name: 'Grow Teamet',
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
