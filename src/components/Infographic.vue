<template>
  <section class="info-section">
      <div class="headers">
      <h2>Hvor finder du et GROW fællesskab?</h2>
      <p class="subheading">Se på kortet nedenfor, hvor du kan finde dit lokale GROW fælleskab</p>
      </div>
    <div class="infographic">
        <g-image src="../assets/img/Infographic.png" alt="Danmarkskort som viser hvor GROW du kan finde GROW fælleskaber" class="info-img"></g-image>
    </div>
</section>
</template>


<script>
export default {
  name: 'Infographic',
  data () {
    return {
    }
  },
}
</script>

<style lang="scss">
@use '../assets/sass/abstracts/variables' as v;

.info-section {
    margin: 5em auto;
}
.infographic {
    display: flex;
    margin: 5em;
    img {
        max-width: 80%;
    }
}
.info-img {
    margin: 0 auto;
}

@include v.mq(medium) {
    .infographic {
        margin: 1em;

        img {
            width: 30em;
        }
    }
}

</style>