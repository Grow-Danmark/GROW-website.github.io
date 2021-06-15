<template>
  <section class="section-img-text">
    <div class="section-image-container">
      <img src="http://wp.grow.dk/wp-content/uploads/2021/06/imgLanding2.png" :alt="$static.page.heroSection.heroImg.altText" class="hero-image alpha-target">
    </div>
    <div class="section-text-container">
    <h2>Vi er nærværende dér, hvor det gør en forskel</h2>
    <p class="subheading">Hos GROW bliver du en del af et fællesskab der er nærværende. Du bliver en del af et fællesskab, hvor der er plads til hele dig. Sammen kan vi gøre en 
      forskel for hinanden, så vi finder meningsfuldhed og balance.
    </p>
    <ul class="subheading">
      <li>Fællesskab</li>
      <li>Bevidsthed</li>
      <li>Meningsfuldhed</li>
      <li>Balance</li>
    </ul>
    <g-link to="/formaal-vision">
      <button class="btn--small">Læs mere her</button>
    </g-link>
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
@use '../assets/sass/abstracts/variables' as v;

.section-img-text {
    display: grid;
    grid-auto-flow: column;
}
.section-image-container {
  img {
    max-width: 30em;
  }
}

@include v.mq(large) {
  .section-img-text {
    display: grid;
    grid-auto-flow: row;

  .section-image-container {
    margin: 0 auto;
  img {
  max-width: 20em;
  margin: 0 auto;
  }
}
}
}

</style>