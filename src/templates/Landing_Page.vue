<template>
  <Layout>

        <section class="container">
            <h1 v-html="$page.home.title" />
            test
            <article class="col-6" v-html="$page.home.content" />
        </section>

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
export default {
  name: 'home',
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

</style>
