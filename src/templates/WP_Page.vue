<template>
<layout>
  <div v-html="$page.page.content" /> 
</layout>
</template>

<page-query>
query wpPage ($slug: String) {
	page: pageBy(uri: $slug) {
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
export default {
  name: 'wpPage',
  metaInfo() {
    return {
      title: this.$page.page.title,
      titleTemplate: this.$page.generalSettings.title + ' | ' + this.$page.page.title,
      meta: [
        { name: 'description', content: this.$page.generalSettings.title + ' | ' + this.$page.page.title }
      ]
      // etc...
    }
  }
}
</script>


<style>

</style>