<template>
<section class="help-section">
  <div class="headers">
  <h2>Hvordan kan GROW hjælpe dig?</h2>
  <p class="has-text-align-center">Hos GROW har vi nogle grundlæggende værdier, som vi tror på kan være med til at hjælpe dig.</p>
  </div>
<div class="grid-columns">
  <div class="help-card help-card-one">
    <g-image :src="$static.page.helpCards.image.sourceUrl" :alt="$static.page.helpCards.image.altText" class="help-img" quality="100"></g-image>
    <h3 class="help-text">{{ $static.page.helpCards.heading1 }}</h3>
  </div>  
  <div class="help-card help-card-two">
    <g-image :src="$static.page.helpCards.image2.sourceUrl" :alt="$static.page.helpCards.image2.altText" class="help-img" quality="100"></g-image>
    <h3 class="help-text">{{ $static.page.helpCards.heading2 }}</h3>
  </div>  
  <div class="help-card help-card-three">
    <g-image :src="$static.page.helpCards.image3.sourceUrl" :alt="$static.page.helpCards.image3.altText" class="help-img" quality="100"></g-image>
    <h3 class="help-text">{{ $static.page.helpCards.heading3 }}</h3>
  </div>  
  <div class="help-card help-card-four">
    <g-image :src="$static.page.helpCards.image4.sourceUrl" :alt="$static.page.helpCards.image4.altText" class="help-img" quality="100"></g-image>
    <h3 class="help-text">{{ $static.page.helpCards.heading4 }}</h3>
  </div>
 </div>
  <g-link to="/vaerdier">
  <button class="btn--medium row">Læs mere om vores værdier</button>
  </g-link>
</section>
</template>

<static-query>
query cards {
  page(id: "cG9zdDoy") {
    helpCards {
      heading1
      heading2
      heading3
      heading4
      image {
        altText
        sourceUrl
      }
      	image2 {
        altText
        sourceUrl
      }
        image3 {
        altText
        sourceUrl
      }
        image4 {
        altText
        sourceUrl
      }
    }
  }
}
</static-query>




<script>
export default {
  name: 'HelpCards',
}
</script>

<style lang="scss">
@use '../assets/sass/abstracts/variables' as v;

.help-section {
  margin: 0 auto 5em auto;
}
.headers {
  display: flex;
  align-items: center;
  flex-direction: column;

  p {
    margin-bottom: 3em;
  }
}
  @include v.mq(small) {
  .grid-columns {
  
}
}

.help-card {
  display: flex;
  flex-direction: column;
  max-width: 10em;
  flex-basis: 25%;
  margin: 0 auto;

  @include v.mq(small) {
    margin: .5em;
  }
}
.help-img {
  width: 80%;
  margin: 0 auto;
}
.help-text {
  font-size: .8em;
  text-align: center;
  margin: 1em auto;
}

</style>