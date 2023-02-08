<script setup lang="ts">
  import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header class="wrapper header">
    <picture class="centre">
      <source
        srcset="./assets/banner-dark.webp"
        media="(prefers-color-scheme: dark)">
      <img class="logo" src="./assets/banner.webp" alt="Logo"/>
    </picture>
    <div class="wrapper navbar">
      <hr class="hr" />
      <nav>
        <RouterLink to="/">HOME</RouterLink>
        <RouterLink to="/scripts">SCRIPTS</RouterLink>
        <RouterLink to="/about">ABOUT</RouterLink>
        <RouterLink to="/test">SVG TEST</RouterLink>
        <RouterLink to="/3d">3D TEST</RouterLink>
      </nav>
      <hr class="hr" />
    </div>
  </header>

  <RouterView class="main" />
</template>

<!-- CSS specifically for the header and the router. -->
<style>
  /* Mostly deprecated; originally used to make the header text formatted, but that has since been replaced with a logo. Now it just makes the header space itself out correctly. */
  header {
    display:block;
    margin:0;
    line-height:1.5;
    max-height:100vh;
  }

  .logo {
    display:block;
    margin:-100px auto;
    transform-origin:50% 50%;
    -webkit-transform:scale(.5);
    -ms-transform:scale(.5);
    transform:scale(.5);
    transition:.15s;
    transition-timing-function:ease-in-out;
    justify-content: center;
  }

  .centre {
    margin-left: auto !important;
    margin-right: auto !important;
  }

  .logo:hover {
    -webkit-transform:scale(.53125);
    -ms-transform:scale(.53125);
    transform:scale(.53125);
    transition:.2s;
    transition-timing-function:ease-in-out
  }

  /* Sets CSS styling for the router navbar */
  nav {
    grid-area:menu;
    width:100%;
    font-size:12px;
    text-align:center;
    margin-top:1rem;
    margin-bottom:1rem
  }

  /* Styling for the active view's entry in the navbar. Highlights the text colour (not as much as the hovered entry) and background colour */
  nav a.router-link-exact-active {
    color:var(--color-router-active);
    background-color:var(--color-router-active-bg)
  }

  nav a {
    color:var(--color-text);
    text-align: center;
    text-decoration:none;
    display:inline-block;
    font-weight:700;
    padding:0 1rem;
    margin:.1%;
    border-bottom:3px double var(--color-heading);
    transition:.1s;
    height:1.5rem;
    width:100px;
    line-height:1.5rem;

  }

  /* Hover styling for each navbar entry */
  nav a:hover {
    color:var(--color-router-hover);
    text-align:center;
    background-color:var(--color-router-hover-bg);
    border-bottom:3px double var(--color-router-active);
    transition:.3s;
    width:120px;
    margin:0
  }

  .navbar {
    margin:0 0 5px!important
  }
</style>
