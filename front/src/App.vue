<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/boulangerie.png" width="150" height="100" />
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Accueil</RouterLink>
        <RouterLink to="/products">Nos produits</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>

@import url('./assets/base.css');

body {
  margin: 0px;
}

@font-face {
  font-family: 'BAUHS93';
  src: url('./assets/fonts/BAUHS93.ttf') format('truetype');
}

header {
  line-height: 1.5;
  z-index: 1000;
  background-color: #fff;
  padding-left: 4vw;
  padding-right: 4vw;
  padding-top: 2vh;
  padding-bottom: 2vh;
  border-bottom: 2px solid black;
}

.wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  overflow-x: hidden;
}

nav {
  display: flex;
  gap: 1rem;
}

@media (max-width: 600px) {
  .wrapper {
    flex-direction: column;
  }

  nav {
    margin-top: 1rem;
  }
}


.logo {
  display: block;
  margin-right: 10vw;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
  font-family: 'BAUHS93';
  text-decoration: none;
  font-size: 1.5em;
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}

@media (max-width: 800px) {
  header {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
