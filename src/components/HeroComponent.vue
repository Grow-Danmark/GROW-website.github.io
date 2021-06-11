<template>
  <section class="hero-section">
    <div class="hero-text-container">
    <p class="heroText">{{ $static.page.heroSection.welcome }}</p>
    <h1>{{ $static.page.heroSection.heading }}</h1>
    <p>{{ $static.page.heroSection.heroText }}</p>
    
    
      <button class="btn--large">Læs mere</button>
    
    </div>

    <div class="blob">
      <img :src="$static.page.heroSection.heroImg.sourceUrl" :alt="$static.page.heroSection.heroImg.altText" class="hero-image alpha-target">
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
  name: 'HeroComponent',
  data () {
    return {

    }
  },
}
</script>

<style lang="scss">
.hero-section {
    padding: 5% 10%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
}
.hero-section img { 
  width: 100%;
 }
.hero-section h1 {
   max-width: 19ch; 
}
.hero-text-container{width: 50%;}

.hero-text-container > p:nth-child(1){
    color: var(--clr-teal-400); 
}
</style>