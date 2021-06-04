<template>
    <nav class="nav center examplex">
        <g-link to="/" class="nav__logo">{{ $static.generalSettings.title }}</g-link>
        <ul class="nav__list">
            <li v-for="page in $static.pages.edges" :key="page.databaseId">
                <g-link :to="page.node.uri" class="nav__links">
                {{ page.node.title }}
                </g-link>
            </li>
        </ul>
    </nav>
</template>

<static-query>
query Pages {
  pages: pages {
		edges {
      node
      {
        title
        uri
        databaseId
      }
    }
  },
  generalSettings {
    title
  }
}
</static-query>

<script>
    export default {
        name: 'NavBar'
    }
</script>

<style>
.logo {
  margin-left: -10em;

}
</style>