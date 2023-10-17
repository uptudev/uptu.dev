<script lang='ts'>
    export let href = '';
    export let title;
    export let text;

    function parseHref(): string {
        let words = href.split(':');
        if (words.length == 1) {
            return `/portfolio/${words[0]}`;
        } else if (words.length == 2) {
            switch (words[0]) {
                case 'github':
                    return `https://github.com/uptudev/${words[1]}`
                case 'local':
                    return `/portfolio/${words[1]}`;
                default:
            }
        } else {
            return '/';
        }
    }

</script>

<style lang='scss'>
    @import url('../../stylesheets/base/text.scss');
    @import url('../../stylesheets/pages/music.scss');
    @import url('../../stylesheets/pages/about.scss');
</style>

<li class='biglist app-list'>
    <p class='single_line app-list-header'>
        <strong>
            <a class='link-underline' href={parseHref()}>
                {title}
            </a>    
            </strong>  
    </p>
    <p class='single_line app-list-body'>
        {text}
    </p>
</li>

