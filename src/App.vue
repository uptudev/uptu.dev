<script setup lang="ts">
  import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header class="wrapper header">
    <h1 class="title">UPTU'S TUTORIAL SITE</h1>
    <div class="wrapper">
      <hr />
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
      <hr />
    </div>
    <br>
  </header>

  <RouterView class="main" />
</template>

<style scoped>
  header {
    line-height: 1.5;
    max-height: 100vh;
  }

  .title {
    width: 100%;
    text-align: center;
    font-size:36px;
    font-variant: small-caps;
    font-weight: bold;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  .logo {
    display: block;
    margin: 0 auto 2rem;
  }

  nav {
    grid-area: menu;
    width: 100%;
    font-size: 12px;
    text-align: center;
    margin-top: 1rem;
    margin-bottom: 1rem;
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
  }

  nav a:first-of-type {
    border: 0;
  }
</style>
