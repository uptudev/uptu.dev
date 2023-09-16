<script lang="ts">
    import logo from '../assets/banner.webp';
</script>

<style lang="scss">
    @import url('../stylesheets/index.scss');
    @import url('../stylesheets/base/text.scss');
    @import url('../stylesheets/base/navbar.scss');
    @import url('../stylesheets/base/logo.scss');
</style> 

<header class="logo-container">
    <a href="/">
        <img class="App-logo" src={logo} alt="logo" />
    </a>
</header>
<nav>
    <ul>
        <li class="button">
            <a href="/games">Games</a>
        </li>

        <li class="button">
            <a href="/av">A/V</a>
        </li>

        <li class="button">
            <a href="/blog">Blog</a>
        </li>

</nav>

<slot></slot>

