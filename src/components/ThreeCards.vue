<template>
  <div class="cards-container centered"> 
    <div class="headers centered">
    <h2>Hvad vi kan tilbyde i GROW</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt non labore magnam nulla necessitatibus distinctio illo ut ab ratione. Quasi?</p>
    </div>
    <div class="cards">
        <div class="card card--glow-blue">
            <h3 class="clr-blue">Workshops, foredrag og arrangementer</h3>
            <hr class="border-blue">
            <p>I GROW vil vi altid gerne komme ud på din uddannelsesinstitution og fortælle dig om GROW-fællesskabets muligheder</p>
            <g-link to="/">
                <button class="btn--small btn--blue">Læs mere</button>
            </g-link>
        </div>
        <div class="card card--glow-teal">
            <h3 class="clr-teal">Certificering som GROW-ambassadør</h3>
            <hr class="border-teal">
            <p>Som GROW-ambassadør får man værktøjer og metoder til at hjælpe sig selv og hinanden til liv med mening, bedre mental sundhed og balance.</p>
            <g-link to="/">
                <button class="btn--small btn--teal">Læs mere</button>
            </g-link>
        </div>
        <div class="card card--glow-yellow">
            <h3 class="clr-yellow">Online community og læring</h3>
            <hr class="border-yellow">
            <p>I GROW ønsker vi, at alle unge har adgang til et fællesskab og livsændrende viden om vores egen og andres psykologi og adfærd </p>
            <g-link to="/">
               <button class="btn--small btn--yellow">Læs mere</button>
            </g-link>
        </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'ThreeCards'
    }
</script>

<style lang="scss">

</style>