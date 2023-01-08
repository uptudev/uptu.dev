<script setup lang="ts">
 /**
  **My reference Vue.js website
  * 
  */

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
    /**
     * Function to turn text like this into SoMeThInG cLoSeR tO tHiS
     */
    let words = ref(textf.value.trim().split(' ')) //word holder var
    let letters = ref("") //letter holder var
    let hold = "" //output holder var
    let bool = false; //Checks whether the last word ended in a capital to maintain pattern
    for (let j = 0; j < words.value.length; j++) { //Word loop
      letters.value = words.value[j].split(''); //Split word into letters
      let i = 0;
      do { //Letter loop
        if (i%2==0) { //mod2 defines oddness vs evenness
          letters.value[i] = bool?letters.value[i].toLowerCase():letters.value[i].toUpperCase();
        } else {
          letters.value[i] = bool?letters.value[i].toUpperCase():letters.value[i].toLowerCase();
        }
        i++;
      } while (i != letters.value.length)

      if (letters.value[i-1] == letters.value[i-1].toUpperCase()) { //If the previous word ended in a capital
        bool = true; //Set flag to reflect that
      } else {
        bool = false; //^
      }
      hold = hold + ' ' + letters.value.join(''); //Rejoin words into the initial phrase.
    }
    textf.value = hold;
  }
</script>

<template>
  <main>
    <body>
      <h1>Text Modification</h1>
      <input v-model="textf">
      <br>
      <button @click="rev()">Reverse</button>
      <button @click="cap()">All-Caps</button>
      <button @click="low()">All-Lows</button>
      <button @click="derp()">Derpify</button>
    </body>
  </main>
</template>
