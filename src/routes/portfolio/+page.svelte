<script lang='ts'>
    import PortfolioEntry from './portfolio_entry.svelte';

    function local(input: string): string {
        return `/portfolio/${input}`;
    }

    function github(input: string): string {
        return `https://github.com/uptudev/${input}`;
    }
</script>

<style lang='scss'>
    @import url('../../stylesheets/base/text.scss');
    @import url('../../stylesheets/pages/music.scss');
    @import url('../../stylesheets/pages/about.scss');
</style>

<div class='box'>
    <h2>Web Apps</h2>
    <ul class='p language-grid'>
        <PortfolioEntry href='local:todo' title='Todo App' text=
            'Lorem ipsum' 
        />
    </ul>
</div>

<div class='box'>
    <h2>Miscellaneous</h2>
    <ul class='p language-grid'>
        <PortfolioEntry href='github:rosetta' title='Rosetta Stone' text =
            "This is a simple Fibonacci function written in every language I could get my hands on. It expands constantly, as I tend to learn new languages simply out of curiosity, and a simple recursive addition and print loop is a great demonstrator of a language's syntax."
        />
    </ul>
</div>
