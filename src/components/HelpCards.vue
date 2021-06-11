<template>
<section class="help-section">
  <div class="headers">
  <h2>Hvordan kan GROW hjælpe dig?</h2>
  <p>Mega fed og inspirerende tekst</p>
  </div>
<div class="help-cards">
  <div class="help-card">
    <g-image :src="$static.page.helpCards.image.sourceUrl" :alt="$static.page.helpCards.image.altText" class="help-img" quality="100"></g-image>
    <h4 class="help-text">{{ $static.page.helpCards.heading }}</h4>
  </div>  
  <div class="help-card">
    <g-image :src="$static.page.helpCards.image2.sourceUrl" :alt="$static.page.helpCards.image2.altText" class="help-img" quality="100"></g-image>
    <h4 class="help-text">{{ $static.page.helpCards.heading2 }}</h4>
  </div>  
  <div class="help-card">
    <g-image :src="$static.page.helpCards.image3.sourceUrl" :alt="$static.page.helpCards.image3.altText" class="help-img" quality="100"></g-image>
    <h4 class="help-text">{{ $static.page.helpCards.heading3 }}</h4>
  </div>  
  <div class="help-card">
    <g-image :src="$static.page.helpCards.image4.sourceUrl" :alt="$static.page.helpCards.image4.altText" class="help-img" quality="100"></g-image>
    <h4 class="help-text">{{ $static.page.helpCards.heading4 }}</h4>
  </div>
 </div>
  <button class="btn--medium row">Få nu hjælp</button>
</section>
</template>

<static-query>
query cards {
  page(id: "cG9zdDoy") {
    helpCards {
      heading
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
.help-cards {
  display: flex;
  justify-content: space-evenly;
}
.help-card {
  display: flex;
  flex-direction: column;
  max-width: 10em;
  flex-basis: 25%;
  @media screen and (max-width: 40em) {
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