<template>
<layout>
    <main class="section">
        <section class="container">
            <h1 v-html="$page.page.title" />
            <!-- <div v-if="$page.page.featuredImage" class="featured-image">
                <img src="$page.page.featuredImage.sourceUrl" />
            </div> -->
            <article class="col-6" v-html="$page.page.content" />
            <div class="row">
                <div class="col-2">2</div>
                <div class="col-4">4</div>
                <div class="col-4 col-offset-4">4</div>
                <div class="col-6 col-offset-4">6</div>
            </div>
        </section>
    </main>
</layout>
</template>

<page-query>
query wpPage ($slug: String) {
	page: pageBy(uri: $slug) {
        title
        content
        id
	}
}
</page-query>

<script>
export default {
  name: 'wpPage',
  metaInfo() {
    return {
      title: this.$page.page.title,
      titleTemplate: 'Site Name | ' + this.$page.page.title,
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