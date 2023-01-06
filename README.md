# vueTut

This is my JavaScript playground, mostly for experimenting with web development and JS frameworks.

Scripts will be written in TypeScript, primarily using Vue as a framework. Markup will be done in HTML (as is standard), and stylesheets will be handled by CSS.

## Current Folders

* **/src/** - The source code for the site.

  * **/src/assets/** - Contains the CSS files to style the website.

  * **/src/components/** - Contains Vue components.

  * **/src/router/** - Contains router config.

  * **/src/stores/** - Don't know what this does yet but it has a counter class in it for some reason.
  
  * **/src/views/** - Contains the about and home pages.
  
* **/.vscode/** - Contains VS Code extension JSON.

* **/public/** - Contains favicon and other public assets.

## Key Files

* **/src/App.vue** - The core script for the website, written in Vue.js.

* **/src/main.ts** - The driver script that is hooked into by the next file and runs **App.vue**.

* **/public/favicon.ico** - The favicon.

* **index.html** - The main page of the website (and only page on SPAs); runs **/src/main.ts** and sets page properties.

* **LICENSE** - The GPL v3.0 liscense that this website is written under (for the time being).
