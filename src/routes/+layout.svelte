<script lang="ts">
    import { onMount } from 'svelte';
    import logo_dark from '../assets/banner-dark.svg';
    import logo_light from '../assets/banner-light.svg';

    // initialize the image to the current colour scheme
    let imageSrc = getImage(true);

    /*
        This function returns the corresponding image by using a 
        media query on the current `window`.
    */
    function getImage(isDarkMode: boolean) {
        return isDarkMode ? logo_dark : logo_light;
    }

    /*
        The update function for the `imageSrc` variable, which is called
        via an event listener on the same aforementioned CSS query.
    */
    function updateImageSrc() {
        const isDarkMode = window
            .matchMedia('(prefers-color-scheme: dark)')
            .matches;

        imageSrc = getImage(isDarkMode);
    }
    onMount(() => {
        window
            .matchMedia('(prefers-color-scheme: dark)')
            .addEventListener('change', updateImageSrc);
    });
</script>

<style lang="scss">
    @import url('../stylesheets/index.scss');
    @import url('../stylesheets/base/text.scss');
    @import url('../stylesheets/base/navbar.scss');
    @import url('../stylesheets/base/logo.scss');
</style> 

<header class="logo-container">
    <a href="/">
        <img class="App-logo" src={imageSrc} alt="logo" />
    </a>
</header>
<nav>
    <ul>
        <li class="button">
            <a href="/games">GAMES</a>
        </li>

        <li class="button">
            <a href="/av">A/V</a>
        </li>

        <li class="button">
            <a href="/blog">BLOG</a>
        </li>

</nav>

<slot></slot>

