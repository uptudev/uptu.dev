<script lang="ts">
    import { onMount } from 'svelte';
    import { fade } from 'svelte/transition';
    import { page } from '$app/stores';
    import logo_dark from '../assets/banner-dark.svg';
    import logo_light from '../assets/banner-light.svg';
    import bl_dark from '../assets/bg_image_dark_bl.svg';
    import tr_dark from '../assets/bg_image_dark_tr.svg';
    import bl_light from '../assets/bg_image_light_bl.svg';
    import tr_light from '../assets/bg_image_light_tr.svg';
    import skeleton_image from "../assets/bg.webp"; 

    // initialize the logo image to the current colour scheme
    let logoImageSrc = getLogoImage(true);
    let bgBlSrc = getBlImage(true);
    let bgTrSrc = getTrImage(true);
    updateImageSrc();

    /*
        This function returns the corresponding image by using a 
        media query on the current `window`.
    */
    function getLogoImage(isDarkMode: boolean) {
        return isDarkMode ? logo_dark : logo_light;
    }

    function getBlImage(isDarkMode: boolean) {
        return isDarkMode ? bl_dark : bl_light;
    }

    function getTrImage(isDarkMode: boolean) {
        return isDarkMode ? tr_dark : tr_light;
    }

    /*
        The update function for the `imageSrc` variable, which is called
        via an event listener on the same aforementioned CSS query.
    */
    function updateImageSrc() {
        const isDarkMode = window
            .matchMedia('(prefers-color-scheme: dark)')
            .matches;

        logoImageSrc = getLogoImage(isDarkMode);
        bgBlSrc = getBlImage(isDarkMode);
        bgTrSrc = getTrImage(isDarkMode);

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

    div {
        text-align: center;
    }
</style> 

<div class="svg-container-bl">
    <img src={bgBlSrc} class="svg-bl" alt="" transition:fade={{delay: 0, duration: 300}}/>
</div>
<div class="svg-container-tr">
    <img src={bgTrSrc} class="svg-tr" alt=""transition:fade={{delay: 0, duration: 300}}/>
</div>
<header class="logo-container">
    <a href="/">
        <img class="App-logo" src={logoImageSrc} alt="logo" />
    </a>
</header>
<nav>
    <ul>
        <li class="button">
            <a href="/portfolio">PORTFOLIO</a>
        </li>

        <li class="button">
            <a href="/av">A/V</a>
        </li>

        <li class="button">
            <a href="/blog">BLOG</a>
        </li>
</nav>

{#key $page.url}
    <div out:fade={{ delay: 0, duration: 10}} in:fade={{ delay: 150, duration: 300 }}>
        <slot />
    </div>
{/key}

<!-- idk why this style tag isn't applied via text.scss but whatever -->
<div class='footer' style='font: 400 14px Noto Sans,sans-serif'>
    © uptu 2023
</div>

