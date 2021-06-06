// Tredjepartskode fra Wes Bos på Github: https://github.com/wesbos/JavaScript30/blob/master/26%20-%20Stripe%20Follow%20Along%20Nav/index-FINISHED.html
<template>
  <nav class="top">
    <div class="dropdownBackground">
      <span class="arrow"></span>
    </div>
    <ul>
        <div class="nav-logo">
            <g-link to="/">
            <g-image src="~/assets/img/logo.png" width="130" quality="100"></g-image>
            </g-link>
        </div>
        <ul class="cool">
        <li>
            <g-link>Om GROW</g-link>
            <div class="dropdown">
                <div class="dual-list">
                    <ul>
                        <span>Lær GROW at kende</span>
                            <g-link to="/vores-historie">Vores historie</g-link>
                            <g-link to="/formaal-vision">Formål og vision</g-link>
                            <g-link to="/vaerdier">Værdier</g-link>
                    </ul>
                        <ul>
                        <span>Mød teamet bag GROW</span>
                            <g-link to="/grow-teamet">GROW teamet</g-link>
                            <g-link to="/samarbejdspartnere">Samarbejdspartnere</g-link>
                    </ul>
                </div>
            </div>
        </li>
        <li>
            <g-link>Det gør vi</g-link>
            <div class="dropdown">
                <div class="single-list">
                    <ul class="single-list-items">
                        <g-link to="/certificeringer">Certificeringer</g-link>
                        <g-link to="/workshops-foredrag-arrangementer">Workshops, foredrag og arrangementer</g-link>
                    </ul>
                </div>
            </div>
        </li>
        <li>
            <g-link>Gør en forskel</g-link>
            <div class="dropdown">
                <div class="single-list">
                    <ul class="single-list-items forskel">
                        <g-link to="/bliv-ambassador">Bliv GROW-ambassadør</g-link>
                        <g-link to="/bliv-samarbejdspartner">Bliv samarbejdspartner</g-link>
                        <g-link to="/stot-grow">Støt GROW</g-link>
                    </ul>
                </div>
            </div>
        </li>
            <li>
                <g-link to="/fa-hjaelp-hos-grow">Få hjælp hos GROW</g-link>
            </li>
            <li>
                <g-link to="/kontakt-os">Kontakt os</g-link>
            </li>
        </ul>
    </ul>
  </nav>
</template>

<script>
export default {
  mounted: function() {
  const triggers = document.querySelectorAll('.cool > li:nth-child(-n+3)');
  const background  = document.querySelector('.dropdownBackground');
  const nav  = document.querySelector('.top');

  function handleEnter() {
    this.classList.add('trigger-enter');
    setTimeout(() => this.classList.contains('trigger-enter') && this.classList.add('trigger-enter-active'), 150);
    background.classList.add('open');

    const dropdown = this.querySelector('.dropdown');
    const dropdownCoords = dropdown.getBoundingClientRect();
    const navCoords = nav.getBoundingClientRect();

    const coords = {
      height: dropdownCoords.height,
      width: dropdownCoords.width,
      top: dropdownCoords.top - navCoords.top,
      left: dropdownCoords.left - navCoords.left
    };

    background.style.setProperty('width', `${coords.width}px`);
    background.style.setProperty('height', `${coords.height}px`);
    background.style.setProperty('transform', `translate(${coords.left}px, ${coords.top}px)`);
  }

  function handleLeave() {
    this.classList.remove('trigger-enter', 'trigger-enter-active');
    background.classList.remove('open');
  }

  triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter));
  triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave));
  }
}

</script>

<style lang="scss">
 
</style>