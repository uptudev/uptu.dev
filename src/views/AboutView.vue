<template>
  <div class="main padding">
    <h1 id="uptu.dev" class="light h1 title">uptu.dev</h1>
    <p>This is my portfolio website/JavaScript playground, mostly for experimenting with web development and JS frameworks.</p>
    <p>Scripts will be written in TypeScript, primarily using Vue as a framework. Markup will be done in HTML (as is standard), and stylesheets will be handled by CSS.</p>
    <br><hr><br>
    <h2 id="current-components" class="h1">Current Components</h2>
    <p class="small"><em>(All can be found in /src/components/)</em></p>
    <ul>
      <li><p><strong>TextMod.vue</strong> - Runs basic string manipulation scripts.</p>
      </li>
    </ul>
    <br><hr><br>
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

.title {
  font-size:32pt;
}

.padding {
  padding:10px;
}
</style>
