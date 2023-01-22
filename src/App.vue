<script setup lang="ts">
  import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header class="wrapper header">
    <img class="logo header" src="./assets/banner.webp" alt="Logo"/>
    <div class="wrapper navbar">
      <hr />
      <nav>
        <RouterLink to="/">HOME</RouterLink>
        <RouterLink to="/scripts">SCRIPTS</RouterLink>
        <RouterLink to="/about">ABOUT</RouterLink>
      </nav>
      <hr />
    </div>
  </header>

  <RouterView class="main" />
</template>

<!-- CSS specifically for the header and the router. -->
<style>
  /* Mostly deprecated; originally used to make the header text formatted, but that has since been replaced with a logo. Now it just makes the header space itself out correctly. */
  header {
    display:block;
    margin: 0px;
    line-height: 1.5;
    max-height: 100vh;
  }
  /* Sets CSS styling for the logo on top of the website, which also uses the .header class. */
  .logo {
    display: block; /* Ensures handling as a centred single object with nothing else in the same line */
    margin: -100px auto -100px; /* Negative margins to make the default 512px × 512px bounding box smaller ([automatic X value] × 287px) to keep formatting closer to the old 256px × 265px setup */
    transform-origin: 50% 50%; /* Ensures scaling is done from a centred origin and not from 0,0 on the image */
    -webkit-transform: scale(0.5);
    -ms-transform: scale(0.5);
    transform: scale(0.5); /* Scale down to an image that is 256px × 256px by default */
    transition: 150ms; /* Transition between scaling sizes */
    transition-timing-function: ease-in-out; /* Set transition type to EIO */
  }
  /* Hovering over the logo increases the size 6.25% (1/16) relative to the original 0.5× scaled image */
  .logo:hover {
    -webkit-transform: scale(0.53125);
    -ms-transform: scale(0.53125);
    transform: scale(0.53125);
    transition: 200ms;
    transition-timing-function: ease-in-out;
  }

  /* Sets CSS styling for the router navbar */
  nav {
    grid-area: menu;
    width: 100%;
    font-size: 12px;
    text-align: center;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  /* Styling for the active view's entry in the navbar. Highlights the text colour (not as much as the hovered entry) and background colour */
  nav a.router-link-exact-active {
    color: var(--color-router-active);
    background-color: var(--color-router-active-bg);
  }

  /* Default styling for each navbar entry */
  nav a {
    color: var(--color-text);
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-weight: bold;
    padding: 0 1rem;
    margin: 0.1%;
    border-bottom: 1px solid var(--color-border);
    transition: 100ms;
    height: 20px;
    width: 100px;
  }

  /* Hover styling for each navbar entry */
  nav a:hover {
    color: var(--color-router-hover);
    text-align: center;
    background-color: var(--color-router-hover-bg);
    transition: 300ms;
    width: 120px;
    margin: 0px;
  }

  .navbar {
    margin-top:0px !important;
    margin-right:0px !important;
    margin-left:0px !important;
    margin-bottom:5px !important;
  }
</style>
