<template>
  <section class="section-img-text row--reversed">
    <div class="section-image-container">
      <img :src="$static.page.secondSection.blockImage.sourceUrl" :alt="$static.page.secondSection.blockImage.altText">
    </div>
    <div class="section-text-container">
    <h2>{{ $static.page.secondSection.blockHeading }}</h2>
    <p>{{ $static.page.secondSection.blockText }}</p>

    <g-link to="/grow-teamet">
      <button class="btn--medium">
        Mød GROW teamet
      </button>
    </g-link>
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
.row--reversed {
  flex-direction: row-reverse;
}
</style>