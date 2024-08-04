<script lang="ts">
	import PortfolioEntry from './portfolio_entry.svelte';

	function local(input: string): string {
		return `/portfolio/${input}`;
	}

	function github(input: string): string {
		return `https://github.com/uptudev/${input}`;
	}
</script>

<div class="box">
	<h2>Projects</h2>
	<ul class="p language-grid">
		<PortfolioEntry
			href="github:rosetta"
			title="Rosetta Stone"
			text="This is a simple Fibonacci function written in every language I could get my hands on. It expands constantly, as I tend to learn new languages simply out of curiosity, and a simple dynamic programming problem is a great demonstrator of a language's syntax. Currently it has entries in 24 languages, and I add more as I learn them in my spare time."
		/>
		<PortfolioEntry
			href="github:passwerdle"
			title="Passwerdle"
			text="This is a game based off of the classic game of Wordle, but with a twist. Instead of guessing a word, you guess one of the top 500 most common passwords. It's a fun little project that I've been working on in my free time, and was the project I used to learn the V language."
		/>
		<PortfolioEntry
			href="github:pi"
			title="Pi"
			text="This is a project initializer that I built to easily scaffold new projects. It's a simple CLI tool that allows for the creation of new projects with a single command, and is built in C as en exercise in memory management. Languages that I find myself using somewhat often are added as needed, and feature recommendations are always welcome."
		/>
		<PortfolioEntry
			href="github:hamisNice"
			title="hamisNice 👍"
			text="This is a mod in Lua for one of my favourite games, Noita. It uses simple proximity detection on a timer to determine when the player is near a given enemy, and then allows for the ability to give said enemy a thumbs up, a reference to an inside joke in the Noita community."
		/>
		<PortfolioEntry
			href="github:tikrtrakr"
			title="TikrTrakr"
			text="This is a Binance CLI tracker, where a daemon is set up to track a certain symbol pair using the Binance API, and then a frontend binary is used to display the data in a simple, easy-to-read format. It was made for a friend of mine, and is a simple C project that I used to learn more about API interfacing and Linux daemon development."
		/>
	</ul>
</div>

<style lang="scss">
	@import url('../../stylesheets/base/text.scss');
	@import url('../../stylesheets/pages/music.scss');
	@import url('../../stylesheets/pages/about.scss');
</style>
