<script setup lang="ts">
  import { ref } from 'vue';

  const textf = ref('Your text here.');

  function rev() {
    textf.value = textf.value.split('').reverse().join('');
  }

  function cap() {
    textf.value = textf.value.toUpperCase();
  }

  function low() {
    textf.value = textf.value.toLowerCase();
  }

  function derp() {
    textf.value = derpCase(textf.value);
  }

  function derpCase(tin:string) {
    let tempt = ref(tin.split(''));
    for (let i = 0; i < tempt.value.length; i++) {
      if (i%2==0) {
        tempt.value[i] = tempt.value[i].toUpperCase();
      } else {
        tempt.value[i] = tempt.value[i].toLowerCase();
      }
    }

    return tempt.value.join('');
  }
</script>

<template>
  <main>
    <body>
      <h1>Text Modification</h1>
        <h2>Your text:  {{ textf }}</h2>
      <input v-model="textf">
      <br>
      <button @click="rev()">Reverse</button>
      <button @click="cap()">All-Caps</button>
      <button @click="low()">All-Lows</button>
      <button @click="derp()">Derpify</button>
    </body>
  </main>
</template>
