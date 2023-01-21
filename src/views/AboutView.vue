<template>
  <div class="main">
    <h1 id="vuetut" class="green h1">vueTut</h1>
    <p>This is my JavaScript playground, mostly for experimenting with web development and JS frameworks.</p>
    <p>Scripts will be written in TypeScript, primarily using Vue as a framework. Markup will be done in HTML (as is standard), and stylesheets will be handled by CSS.</p>
    <br><hr><br>
    <h2 id="current-folders" class="green h1">Current Folders</h2>
    <ul>
    <li><p><strong>/src/</strong> - The source code for the site.</p>
      <ul>
      <li><p><strong>/src/assets/</strong> - Contains the CSS files to style the website.</p>
      </li>
      <li><p><strong>/src/components/</strong> - Contains Vue components (see Current Components).</p>
      </li>
      <li><p><strong>/src/router/</strong> - Contains router config.</p>
      </li>
      <li><p><strong>/src/views/</strong> - Contains the about and home pages.</p>
      </li>
    </ul>
    </li>
    <li><p><strong>/.vscode/</strong> - Contains VS Code extension JSON.</p>
    </li>
    <li><p><strong>/public/</strong> - Contains favicon and other public assets.</p>
    </li>
    <li><p><strong>/dist/</strong> - Contains the built & compiled production assets for this website to be deployed to a webserver.</p>
    </li>
    </ul>
    <br><hr><br>
    <h2 id="key-files" class="green h1">Key Files</h2>
    <ul>
    <li><p><strong>/src/App.vue</strong> - The core script for the website, written in Vue.js.</p>
    </li>
    <li><p><strong>/src/main.ts</strong> - The driver script that is hooked into by the next file and runs <strong>App.vue</strong>.</p>
    </li>
    <li><p><strong>/public/favicon.ico</strong> - The favicon.</p>
    </li>
    <li><p><strong>index.html</strong> - The main page of the website (and only page on SPAs); runs <strong>/src/main.ts</strong> and sets page properties.</p>
    </li>
    <li><p><strong>LICENSE</strong> - The GPL v3.0 liscense that this website is written under (for the time being).</p>
    </li>
    </ul>
    <br><hr><br>
    <h2 id="current-components" class="green h1">Current Components</h2>
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
</style>
