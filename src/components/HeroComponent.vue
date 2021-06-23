<template>
  <section class="hero-section">
    <div class="hero-text-container">
      <p class="heroText">{{ $static.page.heroSection.welcome }}</p>
      <h1>{{ $static.page.heroSection.heading }}</h1>
      <p class="subheading">{{ $static.page.heroSection.heroText }}</p>
      <br>
      <p class="subheading">{{ $static.page.heroSection.heroText2 }}</p>
    </div>

    <div class="hero-image">
      <img :src="$static.page.heroSection.heroImg.sourceUrl" :alt="$static.page.heroSection.heroImg.altText">
    </div>

</section>
</template>

<static-query>
query hero {
  page(id: "cG9zdDoy") {
    heroSection {
      heading
      heroText
      heroText2
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
  name: 'HeroComponent',
  data () {
    return {

    }
  },
}
</script>

<style lang="scss">
@use '../assets/sass/abstracts/variables' as v;

.hero-section {
  padding: 3em;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
}
.hero-image { 
  margin: 0 auto;

  // img {
  //   width: 500px;
  //   height: 500px;
  // }
 }
.hero-section h1 {
   max-width: 16ch; 
}
.hero-text-container{
  margin: 2em auto;
}
@include v.mq(medium) {
  .hero-section {
    flex-direction: column-reverse;
    padding: 0;
  }
  .hero-text-container{
  margin: 0;
  width: 100%;
  }
  // .hero-image {
  //   display: none;
  // }
}
@include v.mq(large) {
  .hero-section {
    padding: 0;
  }
  .hero-text-container{
  margin: 0 auto;
  width: 100%;
  }
  // .hero-image {
  //   width: 40%;
  // }
}

.hero-text-container > p:nth-child(1){
    color: var(--clr-teal-400); 
}
</style>