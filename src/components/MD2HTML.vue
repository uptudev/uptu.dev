<script setup lang="ts">
  import { ref } from 'vue';
  import showdown from 'showdown';

  var converter = new showdown.Converter();
  var text = '';

  function toHTML() {
    var html = converter.makeHtml(text);
    (<HTMLInputElement>document.getElementById("md2TA")).value = html;
  }

  function toMD() {
    var md = converter.makeMarkdown(text);
    (<HTMLInputElement>document.getElementById("md2TA")).value = md;   
  }
</script>

<template>
  <div class="main cell">
    <h1 class="h1 light">Markdown->HTML</h1>
    <textarea v-model="text" id="md2TA" class="input ta" name="md2TA" rows=8 cols=50 placeholder="Place your text here." />
    <button class="buttonlong" @click="toHTML">Markdown -> HTML</button>
    <button class="buttonlong" @click="toMD">HTML -> Markdown</button>
  </div>
</template>

<style>
  .ta {
    font-size:8pt!important;
    height:143px;
    resize:none;
    margin-bottom:0!important
  }
</style>
