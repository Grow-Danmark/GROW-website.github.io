<template>
<section class="help-section">
  <div class="help-headers">
  <h2>Hvordan kan GROW hjælpe dig?</h2>
  <h3>Mega fed og inspirerende tekst</h3>
  </div>
<div class="help-cards">
  <div class="help-card">
    <g-image src="~/assets/img/icons/heledig.svg" alt="" class="help-img" quality="100"></g-image>
    <h4 class="help-text">Plads til hele dig</h4>
  </div>  
  <div class="help-card">
    <g-image src="~/assets/img/icons/balance.svg" alt="" class="help-img" quality="100"></g-image>
    <h4 class="help-text">Finde balance</h4>
  </div>  
  <div class="help-card">
    <g-image src="~/assets/img/icons/fremdrift.svg" alt="" class="help-img" quality="100"></g-image>
    <h4 class="help-text">Meningsfuld fremdrift</h4>
  </div>  
  <div class="help-card">
    <g-image src="~/assets/img/icons/nysgerrig.svg" alt="" class="help-img" quality="100"></g-image>
    <h4 class="help-text">Søge nysgerrigt</h4>
  </div>
 </div>
  <button class="">Få nu hjælp</button>
</section>
</template>


<script>
export default {
  name: 'HelpCards',
}
</script>

<style lang="scss">
@use 'src/assets/sass/abstracts/_variables.scss' as v;
.help-section {
  margin: 0 auto;
  button {
    padding: 1em 2em;
    background-color: var(--clr-teal-400);
    display: block;
    margin: 0 auto;
  }
}
.help-headers {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.help-cards {
  display: flex;
  justify-content: space-evenly;

  border: 1px solid black;
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