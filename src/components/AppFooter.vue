<template>
<footer>
    <div class="footer-left">
        <div class="footer-nav-section-items">
            <ul>
            <h5>Lær GROW at kende</h5>
                <li>
                    <g-link to="/vores-historie">Vores historie</g-link>
                </li>
                <li>
                    <g-link to="/formaal-vison">Formål og vision</g-link>
                </li>
                <li>
                    <g-link to="/vaerdier">Værdier</g-link>
                </li>
            </ul>
        </div>

        <div class="footer-nav-section-items">
            <ul>
            <h5>Mød teamet bag GROW</h5>
                <li>
                    <g-link to="/grow-teamet">GROW teamet</g-link>
                </li>
                <li>
                    <g-link to="/samarbejdspartnere">Samarbejdspartnere</g-link>
                </li>
            </ul>
        </div>
    </div>
        <div class="footer-nav-section-items footer-forskel">
            <ul>
            <h5>Det gør vi</h5>
                <li>
                  <g-link to="/certificeringer">Certificeringer</g-link>
                </li>
                <li>
                    <g-link to="/workshops-foredrag-arrangementer">Workshops, foredrag og arrangementer</g-link>
                </li>
            </ul>
            <ul>
            <h5>Gør en forskel</h5>
                <li>
                  <g-link to="/bliv-ambassador">Bliv GROW-ambassadør</g-link>
                </li>
                <li>
                    <g-link to="/bliv-samarbejdspartner">Bliv samarbejdspartner</g-link>
                </li>
                <li>
                    <g-link to="/stot-grow">Støt GROW</g-link>
                </li>
            </ul>
        </div>

    <div class="footer-nav-section-items footer-hjaelp">
        <ul>
        <h5>Få hjælp hos GROW</h5>
            <li>
                <g-link to="/faa-hjaelp-hos-grow">Se hvordan du kan få hjælp hos GROW</g-link>
            </li>
        </ul>
    </div>
    <div class="footer-nav-section-items footer-social">
        <ul>
        <h5>GROW på sociale medier</h5>
            <li>
                <a href="#" target="_blank" rel="noopener noreferrer">Facebook</a>
            </li>
            <li>
                <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
            </li>
            <li>
                <a href="#" target="_blank" rel="noopener noreferrer">Youtube</a>
            </li>
            <li>
                <a href="#" target="_blank" rel="noopener noreferrer">Linkedin</a>
            </li>
        </ul>
    </div>
    <div class="footer-right">
    <div class="footer-nav-section-items">
        <ul>
        <h5>Kontakt information</h5>
            <li>
                <g-link to="/kontakt">Kontakt os</g-link>
            </li>
        </ul>
    </div>
        <div class="footer-nav-section-items verdensmaal">
        <h5>GROW støtter:</h5>
        <div class="verdensmaal">
            <a href="https://www.verdensmaalene.dk/fakta/verdensmaalene" target="_blank" rel="noopener noreferrer">
                <g-image src="../assets/img/verdensmaal/vm-3.png"></g-image>
                <g-image src="../assets/img/verdensmaal/vm-4.png"></g-image>
                <g-image src="../assets/img/verdensmaal/vm-10.png"></g-image>
            </a>
        </div>
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

    ul {
        margin: 0;
        padding: 0;
        list-style-type: none;
    }
    li {
        max-width: 20ch;
    }

    a {
        color: black;
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
.verdensmaal {
    img {
        border-radius: .5em;
        margin-right: 1em;
    }
}

</style>