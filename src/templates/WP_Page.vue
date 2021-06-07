<template>
<layout>

        <section class="container">
            <!-- <h1 v-html="$page.page.title" /> -->
            <!-- <div v-if="$page.page.featuredImage" class="featured-image">
                <img src="$page.page.featuredImage.sourceUrl" />
            </div> -->
            <article class="col-6" v-html="$page.page.content" />
        </section>

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
        { name: 'description', content: this.$page.title }
      ]
      // etc...
    }
  }
}
</script>


<style>
.row > div {
    background-color: lightblue;
    border: 1px solid black;
}
</style>