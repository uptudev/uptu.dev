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
	<h2>Web Apps</h2>
	<ul class="p language-grid">
		<PortfolioEntry
			href="github:FlavourVault"
			title="FlavourVault"
			text="This is a prototype for a recipe card management webapp. It still needs basic I/O functionality and other minor additions, but the general idea is there. May host on this domain in the future."
		/>
		<PortfolioEntry
			href="local:todo"
			title="Todo App (WIP)"
			text="This is a simple WIP Todo list application in its final stages of development."
		/>
	</ul>
</div>

<div class="box">
	<h2>Miscellaneous</h2>
	<ul class="p language-grid">
		<PortfolioEntry
			href="github:rosetta"
			title="Rosetta Stone"
			text="This is a simple Fibonacci function written in every language I could get my hands on. It expands constantly, as I tend to learn new languages simply out of curiosity, and a simple recursive addition and print loop is a great demonstrator of a language's syntax."
		/>
		<PortfolioEntry
			href="github:hamisNice"
			title="hamisNice 👍"
			text="This is a sprite swap mod in Lua for one of my favourite games, Noita. It uses simple proximity detection on a timer to determine when the player is near a given enemy, and then allows for the ability to give said enemy a thumbs up."
		/>
		<PortfolioEntry
			href="github:intrust"
			title="intrust (WIP)"
			text="This is a work-in-progress interpreter for a simple, type-safe scripting language. I haven't gotten around to building the parser by nature of getting lost in the world of parser generators, but the lexer is done."
		/>
	</ul>
</div>

<style lang="scss">
	@import url('../../stylesheets/base/text.scss');
	@import url('../../stylesheets/pages/music.scss');
	@import url('../../stylesheets/pages/about.scss');
</style>
