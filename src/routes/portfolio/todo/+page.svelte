<style lang='scss'>
    @import url("../../../stylesheets/libs/fonts.scss");
    @import url("../../../stylesheets/libs/colours.css");
    $title-font: 500 48pt 'm5x7', monospace; 
    .todo-list-header {
        border: 1px solid var(--primary-accent-muted);
        border-radius: 8px;
        margin: 8px;
        text-align: center;
        text-decoration: 1px solid underline var(--primary-accent);
        background-color: var(--background-color);
    }

    .todo-list-main {
        border: 1px solid var(--primary-accent-muted);
        border-radius: 8px;
        margin: 8px;
        text-align: center;
        height: calc(100vh - 129px); /* This is dumb */
        background-color: var(--background-color);
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }

    .todo-page-title {
        font: $title-font;
        margin: 0;
    }
</style>

<script lang='ts'>
    import Todo from './Todo.svelte';
    var todolist = [];
    function add_todo() {
        todolist.push({title: "Example Todo", contents: "Lorem ipsum"});
    }
    add_todo();
</script>

<div class='todo-list-header'>
    <div class='todo-page-title'>
        Todo App
    </div>
</div>
<div class='todo-list-main'>
    {#each todolist as todo}
        <Todo title={todo.title} contents={todo.contents} />
    {/each}
</div>
