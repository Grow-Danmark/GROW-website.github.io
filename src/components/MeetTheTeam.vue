<template>
  <section class="section-img-text">
    <div class="section-text-container">
    <h2>{{ $static.page.secondSection.blockHeading }}</h2>
    <p class="subheading">{{ $static.page.secondSection.blockText }}</p>

    <g-link to="/grow-teamet">
      <button class="btn--medium">
        Mød GROW teamet
      </button>
    </g-link>
    </div>
    <div class="section-image-container">
      <img :src="$static.page.secondSection.blockImage.sourceUrl" :alt="$static.page.secondSection.blockImage.altText">
    </div>
</section>
</template>

<static-query>
query team {
  page(id: "cG9zdDoy") {
    secondSection {
      blockHeading
      blockText
      blockImage {
        sourceUrl
        altText
      }
    }
  }
}
</static-query>


<script>
export default {
  name: 'ImgText',
  data () {
    return {
    }
  },
}
</script>

<style lang="scss">
.section-text-container {
margin: auto 0;
}
</style>