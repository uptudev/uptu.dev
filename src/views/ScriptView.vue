<script setup lang="ts">
  import TextMod from '../components/TextMod.vue';
  import MD2HTML from '../components/MD2HTML.vue';
</script>

<template>
  <body id="container" class="container">
    <TextMod />
    <br>
    <MD2HTML />
    <br>
  </body>
</template>

<style>
.container {
  display: inline-flex;
  flex-wrap: wrap;
  flex-direction:row;
  justify-content: center;
  padding: 10px;
}
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
