<template>
  <div>
    <h1>Her er GROW teamet</h1>
    <div v-for="member in $static.teamet.edges" :key="member.name" class="card">
      <g-image :src="member.node.teamMember.image.sourceUrl" :alt="member.node.teamMember.image.altText" class="card-img"></g-image>
      <div class="card-text">
      <h3> {{ member.node.teamMember.name }}</h3>
      <h4> {{ member.node.teamMember.role }}</h4>
      <p> {{member.node.teamMember.description }}</p>
      </div>
    </div>
  </div>
    <!-- <nav role="navigation" class="nav">
        <g-link to="/" class="nav__logo"><g-image src="~/assets/img/logo.png" width="150px"/></g-link>
        <ul class="nav__list">
          <li v-for="page in $static.pages.edges.slice().reverse()" :key="page.databaseId">
              <g-link :to="page.node.uri" class="nav__links">
              {{ page.node.title }}
              </g-link>
          </li>
        </ul>
    </nav> -->
</template>

<static-query>
query GrowTeamet {
  teamet {
    edges {
      node {
        teamMember {
          name
          role
          description
          image {
            altText
            sourceUrl
          }
        }
      }
    }
  }
}

</static-query>

<script>
    export default {
        name: 'TeamCard'
    }
</script>

<style lang="scss">
.card {
  display: flex;
  flex-direction: column;
  max-width: 20rem;
}
.card-img {
  border-radius: 50%;
}
.card-text {
  text-align: center;

  p {
    margin: 0 auto;
    text-align: left;
  }
}
</style>