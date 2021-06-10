<template>
  <section class="section-img-text">
    <div class="section-image-container">
      <img :src="$static.page.heroSection.blobbg.sourceUrl" :alt="$static.page.heroSection.heroImg.altText" class="hero-image alpha-target">
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

    <button class="button--small button--teal">Få nu hjælp</button>
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
      blobbg{
        sourceUrl(size:LARGE)
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
.section-img-text {
    margin: 0 auto;
    display: flex;
    justify-content: center;
    flex-direction: row;
}
// .section-image-container {

// }
.hero-section img { 
    width: 80%;
 }
 button {
   background: var(--clr-teal-400);
 }

</style>