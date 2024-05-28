<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { usePhotoStore } from '@/stores/photoStore';

const route = useRoute();

const photoStore = usePhotoStore();

const API_URL = "https://jsonplaceholder.typicode.com/photos/";

const photo = ref({});

onMounted(async () => {
  console.log("El componente se ha montado");

  const id = route.params.id;
  const response = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`);
  const data = await response.json();
  photo.value = data;
})
</script>

<template>
  <h2>Mostrando la vista de la foto: {{ route.params.id }}</h2>
 
  <h3>{{ photoStore.photoName }}</h3>
  <img :src="photo.url" alt="">
</template>

<style></style>