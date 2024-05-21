<script setup>
import { ref, computed, watch } from "vue";

const person = ref("María");
const person2 = ref("asdf");

const personObj = ref({
  name: "Ana",
  age: 20
})

const nameLength = computed(() => {
  return person.value.length + person2.value.length;
});

watch(
  personObj,
  () => {
    console.log(
      "El nombre de la persona ha cambiado"
    );
  },
  {
    immediate: true,
    deep: true
  }
);

watch(
  person,
  (newValue, oldValue) => {
    console.log(
      `El nombre de la persona ha cambiado de ${oldValue} a ${newValue}`
    );
  },
  {
    immediate: true,
  }
);
</script>

<template>
  <h1>Computed | Watch</h1>

  <h2>{{ person }} - {{ nameLength }}</h2>
  <h2>{{ personObj.name }}</h2>

  <input type="text" v-model="person" />
  <input type="text" v-model="personObj.name" />
</template>

<style></style>
