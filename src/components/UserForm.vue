<script setup>
import { ref } from "vue";

const username = ref("");
const password = ref("");

const handleSubmit = () => {
  console.log(username.value, password.value);
}
</script>

<template>
  <h2>{{ username }} - {{ password }}</h2>
  <form @submit.prevent="handleSubmit">
    <fieldset class="field">
      <label for="username">Username: </label>
      <input type="text" id="username" v-model="username" />
    </fieldset>
    <fieldset class="field">
      <label for="password">Contraseña: </label>
      <input type="password" id="password" v-model="password" />
    </fieldset>
    <button>Enviar</button>
  </form>
</template>

<style>
.field {
  width: 300px;
}
</style>
