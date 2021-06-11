<template>
<footer>
    <div>
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

        <div class="footer-nav-section-items">
            <h5>Gør en forskel</h5>
            <g-link to="/vores-historie">Vores historie</g-link>
            <g-link to="/formaal-vison">Formål og vision</g-link>
            <g-link to="/vaerdier">Værdier</g-link>
        </div>

    <div class="footer-nav-section-items">
        <h5>Få hjælp hos GROW</h5>
        <g-link to="/faa-hjaelp-hos-grow">Se hvordan du kan få hjælp hos GROW</g-link>
    </div>
    <div class="footer-nav-section-items">
        <h5>GROW på sociale medier</h5>
        <a href="#" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="#" target="_blank" rel="noopener noreferrer">Youtube</a>
        <a href="#" target="_blank" rel="noopener noreferrer">Linkedin</a>
    </div>
    <div>
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
footer {
    display: flex;
    justify-content: space-evenly;
    margin: 3em auto 6em auto;

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
.footer-nav-section-items {
    display: flex;
    flex-direction: column;
}
</style>