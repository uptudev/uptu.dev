<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { page } from '$app/stores';
	import logo_dark from '/static/assets/banner-dark.svg';
	import logo_light from '/static/assets/banner-light.svg';
	import bl_dark from '/static/assets/bg_image_dark_bl.svg';
	import tr_dark from '/static/assets/bg_image_dark_tr.svg';
	import bl_light from '/static/assets/bg_image_light_bl.svg';
	import tr_light from '/static/assets/bg_image_light_tr.svg';

	// initialize the logo image to the current colour scheme
	let logoImageSrc = getLogoImage(true);
	let bgBlSrc = getBlImage(true);
	let bgTrSrc = getTrImage(true);
    let year = new Date().getFullYear();
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
		const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

		logoImageSrc = getLogoImage(isDarkMode);
		bgBlSrc = getBlImage(isDarkMode);
		bgTrSrc = getTrImage(isDarkMode);
	}
	onMount(() => {
		window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', updateImageSrc);
	});
</script>

{#if !$page.url.pathname.startsWith('/portfolio/')}
	<div out:fade={{ delay: 0, duration: 15 }} in:fade={{ delay: 50, duration: 150 }}>
		<div class="svg-container-bl">
			<img src={bgBlSrc} class="svg-bl" alt="" transition:fade={{ delay: 0, duration: 300 }} />
		</div>
		<div class="svg-container-tr">
			<img src={bgTrSrc} class="svg-tr" alt="" transition:fade={{ delay: 0, duration: 300 }} />
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
			</ul>
		</nav>
		{#key $page.url}
			<div out:fade={{ delay: 0, duration: 15 }} in:fade={{ delay: 50, duration: 150 }}>
				<slot />
			</div>
		{/key}
	</div>
{:else}
	<div out:fade={{ delay: 0, duration: 15 }} in:fade={{ delay: 15, duration: 150 }}>
		<slot />
	</div>
{/if}

<!-- idk why this style tag isn't applied via text.scss but whatever -->
<div class="footer" style="font: 400 14px Noto Sans,sans-serif">© uptu {year}</div>

<style lang="scss">
	@import url('../stylesheets/index.scss');
	@import url('../stylesheets/base/text.scss');
	@import url('../stylesheets/base/navbar.scss');
	@import url('../stylesheets/base/logo.scss');

	div {
		text-align: center;
	}
</style>
