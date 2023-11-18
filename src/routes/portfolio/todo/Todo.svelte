<script lang='ts'>
    export var title: string = "";
    export var contents: string = "";
</script>

<style lang='scss'>
    @import url("../../../stylesheets/libs/colours.css");
    @import url("../../../stylesheets/libs/fonts.scss");
    $todo-title-font: 600 24pt 'm5x7', monospace; 
    $todo-body-font: 400 24pt 'm5x7', monospace; 

    .todo {
        border: 1px solid var(--primary-accent);
        border-radius: 8px;
        min-width: 240px;
        max-height: 460px;
        margin: 8px;
        background-color: var(--background-color-muted);
    }

    .todo-title {
        border-bottom: 1px solid var(--primary-accent-muted);
        background-color: var(--primary-accent-muted);
        color: var(--background-color);
        font: $todo-title-font;
    }

    .todo-contents {
        font: $todo-body-font;
    }
</style>

<div class='todo'>
    <div class='todo-title'>
        {title}
    </div>
    <div class='todo-contents'>
        {contents}
    </div>
</div>
