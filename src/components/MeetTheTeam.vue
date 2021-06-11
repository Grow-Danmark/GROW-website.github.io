<template>
  <section class="section-img-text row--reversed">
    <div class="section-image-container">
      <img :src="$static.page.heroSection.heroImg.sourceUrl" :alt="$static.page.heroSection.heroImg.altText" class="alpha-target">
    </div>
    <div class="section-text-container">
    <h2>{{ $static.page.heroSection.heading }}</h2>
    <p>{{ $static.page.heroSection.heroText }}</p>
    <ul>
      <li>Fællesskab</li>
      <li>Bevidsthed</li>
      <li>Meningsfuldhed</li>
      <li>Balance</li>
    </ul>

    <button>Få nu hjælp</button>
    </div>
</section>
</template>

<static-query>
query hero {
  page(id: "cG9zdDoy") {
    heroSection {
      heading
      heroText
      welcome
      heroImg {
        altText
        sourceUrl(size: LARGE)
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