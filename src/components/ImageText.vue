<template>
  <section class="section-img-text">
    <div class="section-image-container">
      <img :src="$static.page.heroSection.heroImg.sourceUrl" :alt="$static.page.heroSection.heroImg.altText" class="hero-image alpha-target">
    </div>
    <div class="section-text-container">
    <h2>Vi er nærværende dér, hvor det gør en forskel</h2>
    <p>Hos GROW bliver du en del af et fællesskab der er nærværende. Du bliver en del af et fællesskab, hvor der er plads til hele dig. Sammen kan vi gøre en 
      forskel for hinanden, så vi finder meningsfuldhed og balance.
    </p>
    <ul>
      <li>Fællesskab</li>
      <li>Bevidsthed</li>
      <li>Meningsfuldhed</li>
      <li>Balance</li>
    </ul>

    <button>Læs mere her</button>
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

</style>