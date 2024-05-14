<script setup>
import { ref } from "vue";

const number = ref(10);

const addOneToNumber = () => {
  number.value++;
  console.log(number.value);
};

const myId = "lorem";

const isHighlight = ref(false);

const toggleHighlight = () => {
  isHighlight.value = !isHighlight.value;
};

const show = ref(false);
</script>

<template>
  <h2>{{ number }}</h2>
  <button @click="addOneToNumber">Añadir 1</button>

  <h2>{{ 2 + 3 }}</h2>

  <p :id="myId" :class="isHighlight ? 'highlight' : ''">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, fugiat?
  </p>
  <button @click="toggleHighlight">highlight</button>

  <p v-if="show">
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt tempore
    corrupti voluptate, dolor odit architecto. Illo consectetur vitae ducimus,
    sequi vel, beatae doloribus incidunt ipsa dolore exercitationem facere dicta
    dolor!
    <span>asdfasdfasdf</span>
  </p>
  <p v-else>No se puede mostrar el contenido</p>
</template>

<style>
.highlight {
  background-color: black;
  color: yellow;
}
</style>
