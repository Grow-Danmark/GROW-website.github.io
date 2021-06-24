<template>
  <nav class="top">
    <div class="dropdownBackground">
<!-- Tredjepartskode fra Wes Bos på Github: https://github.com/wesbos/JavaScript30/blob/master/26%20-%20Stripe%20Follow%20Along%20Nav/index-FINISHED.html -->
      <span class="arrow"></span>
    </div>
    <ul>
        <div class="nav-logo">
          <!-- Tredjepartskode fra Wes Bos på Github: https://github.com/wesbos/JavaScript30/blob/master/26%20-%20Stripe%20Follow%20Along%20Nav/index-FINISHED.html -->
            <g-link to="/">
            <g-image src="~/assets/img/logo.png" width="130" quality="100" alt="GROWs logo"></g-image>
            </g-link>
        </div>
         <input type="checkbox" id="onOffToggle">
        <label id="burger" for="onOffToggle">
            <div></div>
            <div></div>
            <div></div>
        </label>
        <ul class="cool" id="menu">
        <li>
          <g-link to="/">Hjem</g-link>
        </li>
        <li>
            <a href="#" class="menu-item">Om GROW</a>
            <div class="dropdown">
                <div class="dual-list">
                    <ul>
                        <span>Lær GROW at kende</span>
                        <li>
                            <g-link to="/vores-historie">Vores historie</g-link>
                        </li>
                        <li>
                            <g-link to="/formaal-vision">Formål og vision</g-link>
                        </li>
                        <li>
                            <g-link to="/vaerdier">Værdier</g-link>
                        </li>
                    </ul>
                        <ul>
                        <span>Mød teamet bag GROW</span>
                        <li>
                            <g-link to="/grow-teamet">GROW teamet</g-link>
                        </li>                        
                        <li>
                            <g-link to="/samarbejdspartnere">Samarbejdspartnere</g-link>
                        </li>
                    </ul>
                </div>
            </div>
        </li>
        <li>
            <a href="#" class="menu-item">Det gør vi</a>
            <div class="dropdown">
                <div class="single-list">
                    <ul class="single-list-items">
                      <li>
                        <g-link to="/certificeringer">Certificeringer</g-link>
                      </li>
                      <li>
                        <g-link to="/workshops-foredrag-arrangementer">Workshops, foredrag og arrangementer</g-link>
                      </li>
                    </ul>
                </div>
            </div>
        </li>
        <li>
            <a href="#" class="menu-item">Gør en forskel</a>
            <div class="dropdown">
                <div class="single-list">
                    <ul class="single-list-items difference">
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
            </div>
        </li>
            <li>
                <g-link class="menu-item" to="/kontakt">Kontakt os</g-link>
            </li>
            <li>
              <g-link to="/faa-hjaelp-hos-grow" class="btn--teal menu-btn">
              Få hjælp
              </g-link>
            </li>
        </ul>
    </ul>
  </nav>
</template>

<script>
export default {
  mounted: function() {
    // Tredjepartskode fra Wes Bos på Github: https://github.com/wesbos/JavaScript30/blob/master/26%20-%20Stripe%20Follow%20Along%20Nav/index-FINISHED.html
    const triggers = document.querySelectorAll('.cool > li:nth-child(-n+4):not(:first-child)');
    const background  = document.querySelector('.dropdownBackground');
    const nav  = document.querySelector('.top');
    function handleEnter() {
        if(window.innerWidth > 1024) {
            this.classList.add('trigger-enter');
            setTimeout(() => this.classList.contains('trigger-enter') && this.classList.add('trigger-enter-active'), 150);
            background.classList.add('open');
        }
        
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
@use '../assets/sass/abstracts/colors' as c;
@use '../assets/sass/abstracts/variables' as v;


nav {
  position: relative;
  perspective: 600px;
}
.nav-logo {
  display: flex;
  align-items: center;
}

nav ul {
  z-index: 20;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: space-around;
  a:hover {
      color: var(--clr-teal-400);        
      transition: .2s ease-in;
  }
}
.cool > li {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.cool > li:not(:last-child):after  {
  content: '|';
}
.cool > li:last-child  {
  margin: 0 0 0 1em;
}
.cool > li > a {
  font-weight: 400;
  padding: 1em 0.5em;
  display: inline-block;
  margin: 1.2em auto;
}
.menu-item {
  font-weight: 600;
}

.dropdown {
  opacity: 0;
  position: absolute;
  padding: 1em;
  top: -1em;
  /* Positionen på drowdown-elementet */
  border-radius: 2em;
  transition: all 0.5s;
  transform: translateY(100px);
  will-change: opacity;
  display: none;

  a {
    display: block;
    padding: 0.2em;
  }
}

#onOffToggle {
  display: none;
}

@include v.mq(large) {
  .nav-logo {
    padding: 2.2em 0 0 0;
    justify-content: flex-start;
    margin: 0 0 0 3em;
  }
  nav ul {
    justify-content: center;
    flex-direction: column;
  }
  .cool {
    display: flex;
  }
  .cool > li {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    height: fit-content;

    a {
      padding: 0;
      // text-align: left;
    }
    span {
      margin: .5em auto;
      font-size: 1em;
    }
  }
  .cool > li > a {
    font-weight: 500;
  }
  .cool > li > a:last-child {
    padding: 1em;
  }
  .cool > li:not(:last-child):after  {
  content: '';
  }
  .dual-list {
    flex-direction: column;
  }
  .dropdown {
    display: flex;
    opacity: 1;
    padding: 0;
    position: relative;
    justify-content: center;
    transform: none;
  }

  .trigger-enter .dropdown {
    display: none;
  }

  .trigger-enter-active .dropdown {
    opacity: 0;
  }
  .dropdownBackground {
    display: none;
  }

  // HamburgerBtn

  #menu {
    background: c.$white;
    width: 100%;
    height: 100vh;
    position: fixed;
    right: 0;
    transition-timing-function: cubic-bezier(0.65, 0, 0.35, 1);
    transform: translateX(200%);
    top: 0;
    z-index: 0;
    transition: 1s;
  }


  #onOffToggle:checked ~ #menu {
    transform: translateX(0rem);
  }


  #burger {
    position: absolute;
    cursor: pointer;
    width: 2em;
    height: 2em;
    right: 1em;
    top: 2em;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }

  #burger > div {
    height: 2px;
    background-color: var(--clr-teal-400);
    transition: 0.5s;
    z-index: 999;
  }

  #onOffToggle:checked ~ #burger > div {
    background-color: var(--clr-teal-400);
  }
  #onOffToggle:checked ~ #burger > div:nth-child(1) {
    transform: translateY(15px) rotate(45deg);
  }
  #onOffToggle:checked ~ #burger > div:nth-child(2) {
    opacity: 0;
  }
  #onOffToggle:checked ~ #burger > div:nth-child(3) {
    transform: translateY(-15px) rotate(-45deg);
  }
}

.trigger-enter .dropdown {
  display: block;
}

.trigger-enter-active .dropdown {
  opacity: 1;
}

.dropdownBackground {
  position: absolute;
  background: c.$white;
  border-radius: 1em; // Kanten på dropdown
  box-shadow: 0 3em 15em rgba(50, 50, 93, 0.1), 0 1em 2em rgba(50, 50, 93, 0.15),
    0 0.3em 1em rgba(0, 0, 0, 0.1);
  transition: all 0.3s, opacity 0.1s, transform 0.2s;
  transform-origin: 50% 0;
  display: flex;
  justify-content: center;
  opacity: 0;
}

.dropdownBackground.open {
  opacity: 1;
}

.arrow {
  position: absolute;
  width: 1.8em;
  height: 1.8em;
  display: block;
  background: c.$white;
  transform: translateY(-50%) rotate(45deg);
}

.dual-list {
  display: flex;
  align-items: baseline;
  justify-content: space-around;

  span {
    font-weight: 500;
    font-size: 1.2em;
    min-width: 12em;
    margin: 0 0 0.5em 0;
    color: c.$teal50;
  }
  ul {
    display: flex;
    flex-direction: column;
  }
  ul:first-child {
    margin-right: 2em;
  }
  a {
    padding: 0.2em;
  }
}
.single-list {
  min-width: 12em;
}

.single-list-items {
  display: flex;
  flex-direction: column;
}

.dropdown a {
  text-decoration: none;
}
.active--exact {
  color: var(--clr-teal-300);
}
.menu-btn {
  color: c.$white;
  width: 7em;
  text-align: center;
  padding: 0;
}
.menu-btn a {
  color: c.$white;
}
.menu-btn a:hover {
  color: c.$white;
}

.menu-btn:hover {
  color: c.$white;
}

</style>