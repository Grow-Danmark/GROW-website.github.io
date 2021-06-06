<template>
<header>
    <!-- <NavBar /> -->
    <div id="hamburgerHeader" v-if="mobileView">
        <div class="nav-logo">
            <g-link to="/">
            <g-image src="~/favicon.png" width="45" quality="100"></g-image>
            </g-link>
        </div>
        <svg viewBox="0 0 100 80" width="40" height="45">
            <rect width="100" height="15"></rect>
            <rect y="30" width="100" height="15"></rect>
            <rect y="60" width="100" height="15"></rect>
        </svg>
    </div>
    <StripeMenu v-if="!mobileView" />
</header>
</template>

<script>
import NavBar from '~/components/NavBar.vue'
import StripeMenu from '~/components/StripeMenu.vue'


export default {
    components: {
    NavBar,
    StripeMenu
    },
    data: () => {
        return {
            mobileView: true,
            showNav: false,
        };
    },
    methods: {
        handleView() {
            this.mobileView = window.innerWidth <= 1024;
        }
    },
    created() {
        this.handleView();
    }
}
</script>

<style>
#hamburgerHeader {
    position: relative;
    display: flex;
    justify-content: space-between;
    margin: 1em;
    cursor: pointer;
}
</style>