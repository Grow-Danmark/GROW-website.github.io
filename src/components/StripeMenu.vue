// Tredjepartskode fra Wes Bos på Github: https://github.com/wesbos/JavaScript30/blob/master/26%20-%20Stripe%20Follow%20Along%20Nav/index-FINISHED.html
<template>
  <nav class="top">
    <div class="dropdownBackground">
      <span class="arrow"></span>
    </div>
    <ul>
        <div class="nav-logo">
            <g-link to="/">
            <g-image src="~/favicon.png" width="50"></g-image>
            </g-link>
        </div>
        <ul class="cool">
        <li>
            <g-link>Om GROW</g-link>
            <div class="dropdown dropdown1">
            <div class="dual-list">
            <ul>
                <span>Lær GROW at kende</span>
                    <g-link to="/">Vores historie</g-link>
                    <g-link to="/">Formål og vision</g-link>
                    <g-link to="/">Værdier</g-link>
            </ul>
                <ul>
                <span>Mød teamet bag GROW</span>
                    <g-link to="/">GROW teamet</g-link>
                    <g-link to="/">Samarbejdspartnere</g-link>
            </ul>
            </div>
            </div>
        </li>
        <li>
            <a href="#">Det gør vi</a>
            <ul class="dropdown courses">
                <g-link to="/">Samarbejdspartnere</g-link>
            </ul>
        </li>
        <li>
            <a href="#">Other Links</a>
            <ul class="dropdown courses">
                <g-link to="/">Samarbejdspartnere</g-link>
            </ul>
        </li>
            <li>
                <g-link to="/samarbejdspartnere">Få hjælp hos GROW</g-link>
            </li>
            <li>
                <g-link to="/samarbejdspartnere">Kontakt os</g-link>
            </li>
        </ul>
    </ul>
  </nav>
</template>

<script>
export default {
  mounted: function() {
  const triggers = document.querySelectorAll('.cool > li:nth-child(-n+4)');
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