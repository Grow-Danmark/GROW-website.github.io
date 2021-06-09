<template>
  <Layout>
            <g-image :src="$page.home.featuredImage.node.sourceUrl" quality="100"></g-image>
            <article class="col-6" v-html="$page.home.content" />
  </Layout>
</template>
<page-query>
query home {
	home: pageBy(uri: "hjem") {
        title
        content
        id
        featuredImage {
    	  node {
    	    sourceUrl
    	  }
    	}
	},
    generalSettings {
    title
  }
}
</page-query>

<script>
export default {
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
