<template>
<footer>
    <div class="footer-left">
        <div class="footer-nav-section-items">
            <h5>Lær GROW at kende</h5>
            <g-link to="/vores-historie">Vores historie</g-link>
            <g-link to="/formaal-vison">Formål og vision</g-link>
            <g-link to="/vaerdier">Værdier</g-link>
        </div>

        <div class="footer-nav-section-items">
            <h5>Mød teamet bag GROW</h5>
            <g-link to="/vores-historie">Vores historie</g-link>
            <g-link to="/formaal-vison">Formål og vision</g-link>
            <g-link to="/vaerdier">Værdier</g-link>
        </div>
    </div>
        <div class="footer-nav-section-items footer-forskel">
            <h5>Gør en forskel</h5>
            <g-link to="/vores-historie">Vores historie</g-link>
            <g-link to="/formaal-vison">Formål og vision</g-link>
            <g-link to="/vaerdier">Værdier</g-link>
        </div>

    <div class="footer-nav-section-items footer-hjaelp">
        <h5>Få hjælp hos GROW</h5>
        <g-link to="/faa-hjaelp-hos-grow">Se hvordan du kan få hjælp hos GROW</g-link>
    </div>
    <div class="footer-nav-section-items footer-social">
        <h5>GROW på sociale medier</h5>
        <a href="#" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="#" target="_blank" rel="noopener noreferrer">Youtube</a>
        <a href="#" target="_blank" rel="noopener noreferrer">Linkedin</a>
    </div>
    <div class="footer-right">
    <div class="footer-nav-section-items">
        <h5>Kontakt information</h5>
        <g-link to="/vaerdier">Kontakt os</g-link>
    </div>
        <div class="footer-nav-section-items verdensmaal">
        <h5>GROW støtter:</h5>
        <g-link to="/vaerdier">Indsæt verdensmål</g-link>
    </div>
    </div>
</footer>
</template>

<script>
import AppFooter from '~/components/AppFooter.vue'

export default {
    components: {
    AppFooter
    }
}
</script>

<style lang="scss">
.footer-nav-section-items {
    display: flex;
    flex-direction: column;
}
footer {
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: 1fr;
    grid-gap: 1em;
    margin: 5em 5em;

    a {
        color: black;
        max-width: 20ch;
        margin: .2em 0;
    }
    a:hover {
        color: teal;        
        transition: .2s ease-in;
    }
}
@media screen and (max-width: 60em) {
    .footer-left {
    grid-area: footer-left;
    }
    .footer-forskel {
    grid-area: footer-forskel;
    }
    .footer-hjaelp {
    grid-area: footer-hjaelp;
    }
    .footer-social {
    grid-area: footer-social;
    }
    .footer-right {
    grid-area: footer-right;
    }

    footer {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    grid-template-areas: 
        "footer-left footer-left footer-hjaelp footer-hjaelp"
        "footer-forskel footer-forskel footer-right footer-right"
        "footer-social footer-social . .";
    }
}

</style>