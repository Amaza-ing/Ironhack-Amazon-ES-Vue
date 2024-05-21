<script setup>
import { ref } from "vue";

const emit = defineEmits(["login"]);

const user = ref({
  userName: "",
  password: "",
});

const handleLogin = () => {
  const pass = "myPassword";

  if (user.value.password === pass) {
    console.log("Has hecho login!");
    emit("login", user.value);
  } else {
    console.log("La contraseña no es correcta");
  }
};
</script>

<template>
  <form @submit.prevent="handleLogin">
    <label for="username">Nombre de usuario:</label>
    <input type="text" id="username" v-model="user.userName" />
    <br />
    <label for="password">Contraseña:</label>
    <input type="password" id="password" v-model="user.password" />
    <br />
    <button>Login</button>
  </form>
</template>

<style></style>
