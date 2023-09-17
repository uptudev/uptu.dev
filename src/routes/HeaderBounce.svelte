<script lang="ts">
    export let text;

    $: characters = text.split('');
</script>

<style lang="scss">
    .head-span {
        position: relative;
        top: 0;
        display: inline-block;
        text-shadow: 0 1px 0 var(--primary-accent), 0 2px 0 transparent, 0 3px 0 transparent, 0 4px 0 transparent,
        1.5px 3px 1px rgba(0, 0, 0, 0.25);
    }

    @media (prefers-reduced-motion: no-preference) {
        .head-span {
            animation: head-bounce 0.25s ease-out infinite alternate;
            -webkit-animation: head-bounce 0.25s ease-out infinite alternate;
        }
    }

    .nth-child1 {
      -webkit-animation-delay: 0.1s;
      animation-delay: 0.1s;
    }

    .nth-child2 {
      -webkit-animation-delay: 0.2s;
      animation-delay: 0.2s;
    }

    .nth-child3 {
      -webkit-animation-delay: 0.3s;
      animation-delay: 0.3s;
    }

    @keyframes head-bounce {
      100% {
        top: -10px;
        text-shadow: 0 3px 0 var(--primary-accent), 0 4px 0 var(--primary-accent), 0 5px 0 var(--primary-accent), 0 6px 0 var(--primary-accent),
        4px 10px 8px rgba(0, 0, 0, 0.25);
      }
    }

    /* ANIMATION */
    @-webkit-keyframes head-bounce {
      100% {
        top: -10px;
        text-shadow: 0 3px 0 var(--primary-accent), 0 4px 0 var(--primary-accent), 0 5px 0 var(--primary-accent), 0 6px 0 var(--primary-accent),
        4px 10px 8px rgba(0, 0, 0, 0.25);
      }
    }
</style>

{#each characters as char, index}
    <span class="head-span nth-child{index}">{char}</span>
{/each}
