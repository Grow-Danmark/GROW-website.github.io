<template>
  <Layout>
  <div class="not-found">
    <h1>Siden blev desværre ikke fundet</h1>
    <p>Klik <g-link to="/">her</g-link> for at komme til forsiden.</p>
  </div>
  </Layout>
</template>

<script>


export default {
  components: {

  },
  name: '404',
  metaInfo() {
    return {
      title: 'GROW',
      titleTemplate: 'GROW' + ' | ' + 'Siden blev ikke fundet',
      meta: [
        { name: 'description', content: 'GROW' + ' | ' + 'Siden blev ikke fundet' }
      ]
      // etc...
    }
  },
  methods: {
    
  }
}
</script>

<style>
.not-found {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>