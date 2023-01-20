<script setup lang="ts">

  import { ref } from 'vue';

  const textf = ref('Your text here.');
  const stxt = ref('');

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
    let words = ref(textf.value.trim().split(' ')); //word holder var
    let letters = ref(words.value[0].split('')); //letter holder var
    let hold = ""; //output holder var
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

  function normify() {
    /**
     * Function to make text capitalization follow normal rules.
     */
    let words = ref(textf.value.trim().split('. ')); //word holder var
    let letters = ref(words.value[0].split('')); //letter holder var
    let hold = ""; //output holder var
    letters.value[0] = letters.value[0].toUpperCase(); //Set first character to uppercase
    for (let j = 0; j < words.value.length; j++) {
      letters.value = words.value[j].split('');
      letters.value[0] = letters.value[0].toUpperCase();

      for (let i = 1; i < letters.value.length; i++) {
        letters.value[i] = letters.value[i].toLowerCase();
      }
      if (hold == "") {
        hold = letters.value.join('');
      } else {
        hold = hold + '. ' + letters.value.join('');
      }
    }
    textf.value = hold;
  }

  function leetspeak() {
    let input = ref(textf.value.trim().split('')); //split into individual letters
    let char = '';

    for (let i = 0; i < input.value.length; i++) {
      char = input.value[i];

      switch (char) {
        case 'l':
          input.value[i] = '1';
          break;
        case 'e':
        case 'E':
          input.value[i] = '3';
          break;
        case 'a':
          input.value[i] = '@'
          break;
        case 'A':
          input.value[i] = '4';
          break;
        case 't':
        input.value[i] = '+';
          break;
        case 's':
        case 'S':
          input.value[i] = '5';
          break;
        case 'g':
          input.value[i] = '9';
          break;

        default:
          break;
      }
    }
    textf.value = input.value.join('');
  }

  function saveText() {
    stxt.value = textf.value;
  }

  function recallText() {
    textf.value = stxt.value;
  }
</script>

<template>
  <div class="main">
    <h1 class="h1 green">Text Modification</h1>
    <input class="input" v-model="textf">
    <br>
    <button class="button" @click="rev()">Reverse</button>
    <button class="button" @click="cap()">All-Caps</button>
    <button class="button" @click="low()">All-Lows</button>
    <br>
    <button class="button" @click="derp()">Derpify</button>
    <button class="button" @click="normify()">Normify</button>
    <button class="button" @click="leetspeak()">L33tSp34k</button>
    <br>
    <button class="buttonlong" @click="saveText()">Save Text</button>
    <button class="buttonlong" @click="recallText()">Recall Text</button>
  </div>
</template> 

<style>
  .button {
    background-color: var(--color-border);
    transition: 100ms;
    border: none;
    border-bottom: 3px double var(--color-heading);
    color: var(--color-text);
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    font-weight: normal;
    width: 10%;
    height: 50px;
    border-radius: 8px;
    margin-right: 0.5%;
    margin-bottom: 0.5%;
  }

  .button:hover {
    background-color:var(--color-border-hover);
    font-weight: bold;
    transition: 300ms;
    border-radius: 4px;
  }

  .buttonlong {
    background-color: var(--color-border);
    transition: 100ms;
    border: none;
    border-bottom: 3px double var(--color-heading);
    color: var(--color-text);
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    font-weight: normal;
    width: 15.2%;
    height: 50px;
    border-radius: 8px;
    margin-right: 0.5%;
    margin-bottom: 0.5%;
  }

  .buttonlong:hover {
    background-color:var(--color-border-hover);
    font-weight: bold;
    transition: 300ms;
    border-radius: 4px;
  }

  .input {
    width: 31%;
    font-size: 16px;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
    background-color: var(--color-background-soft);
    color: var(--color-text);
  }

  .input:hover {
    background-color: var(--color-background-mute);
  }
</style>