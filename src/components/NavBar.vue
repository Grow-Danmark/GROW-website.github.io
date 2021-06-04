<template>
    <nav role="navigation" class="nav">
        <g-link to="/" class="nav__logo"><g-image src="~/assets/img/logo.png" width="150px"/></g-link>
        <ul class="nav__list">
            <li v-for="page in $static.pages.edges.slice().reverse()" :key="page.databaseId">
                <g-link :to="page.node.uri" class="nav__links">
                {{ page.node.title }}
                </g-link>
            </li>

        </ul>
    </nav>
</template>

<static-query>
query Pages {
  pages {
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

</style>