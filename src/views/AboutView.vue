<template>
  <div class="main padding">
    <h1 id="uptu.dev" class="light h1 title">uptu.dev</h1>
    <br><hr class="hr"><br>
    <div>
      <p>This is my portfolio website/JavaScript playground, mostly for experimenting with web development and JS frameworks.</p>
      <br>
      <p>Scripts will be written in TypeScript, primarily using Vue as a framework. Markup will be done in HTML (as is standard), and stylesheets will be handled by CSS.</p>
    </div>
    <br><hr class="hr"><br>
    <div class="text textflat">
      <h2 id="current-components" class="h1 light">Current Components</h2>
      <p class="smaller"><em>(All can be found in /src/components/)</em></p>
      <br><hr class="hr"><br>
      <ul>
        <li><p><strong>TextMod.vue</strong> - Runs basic string manipulation scripts.</p>
        </li>
        <br>
        <li><p><strong>MD2HTML.vue</strong> - Bidirectional Markdown/HTML converter running off of https://github.com/showdownjs/showdown/.</p>
        </li><br>
      </ul>
    </div>
    <br><hr class="hr"><br>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}

.padding {
  padding:10px;
}

.textflat{
  text-indent: 0% !important;
}
</style>
