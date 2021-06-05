<template>
<nav role="navigation">
  <ul>
    <g-link class="nav__logo">
    LOGO
    <g-image>
    </g-image>
    </g-link>
    <li class="nav__links"><a href="#" aria-haspopup="true">Om GROW</a>
      <ul class="dropdown nav__list" aria-label="submenu">
        <span>Lær GROW at kende</span>
        <li><a href="#">Sub-1</a></li>
        <li><a href="#">Sub-2</a></li>
        <li><a href="#">Sub-3</a></li>
        <span>Mød teamet bag GROW</span>
      </ul>
    </li>
    <li><a href="#" aria-haspopup="true">Two</a>
      <ul class="dropdown" aria-label="submenu">
        <li><a href="#">Sub-1</a></li>
        <li><a href="#">Sub-2</a></li>
        <li><a href="#">Sub-3</a></li>
      </ul>
    </li>
    <li><a href="#">Lort</a></li>
  </ul>
</nav>
</template>

<static-query>

</static-query>

<script>
    export default {
        name: 'NavBar'
    }
</script>

<style>

</style>