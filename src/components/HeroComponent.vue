<template>
  <section class="hero-section">
    <div class="hero-text-container">
    <p class="heroText">{{ $static.page.heroSection.welcome }}</p>
    <h1>{{ $static.page.heroSection.heading }}</h1>
    <p>{{ $static.page.heroSection.heroText }}</p>
    </div>
    <div class="blob">
      <img :src="$static.page.heroSection.blobbg.sourceUrl" :alt="$static.page.heroSection.heroImg.altText" class="hero-image alpha-target">
      <img :src="$static.page.heroSection.heroImg.sourceUrl" class="blob-bg alpha-target">
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
  name: 'HeroComponent',
  data () {
    return {

    }
  },
}
</script>

<style lang="scss">
.hero-section {
    padding: 5% 15%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
}
.hero-section img { 
    width: 80%;
 }
.hero-section h1 {
   max-width: 16ch; 
}

.hero-text-container p:nth-child(4) {
    color: grey;
    width: 50%;
}

.hero-text-container{width: 50%;}

.hero-text-container > p:nth-child(1){
    color: var(--clr-teal-400); 
}
.alpha-target {
  mask-image: url(../assets/img/blob.svg);
  mask-mode: alpha;
  mask-repeat: no-repeat;
  mask-size: 60%;
  transform: rotate(35deg);
}
.blob {
  position: relative;
  fill: grey;
  transform: rotate(-95deg);

}
.blob-bg {
    position: absolute;
    top: 8em;
    right: 5em;
    z-index: 1;
    transform: rotate(95deg);
}
</style>