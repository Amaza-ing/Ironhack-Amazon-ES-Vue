<script setup>
defineProps({
  userName: String,
  userAge: Number,
  product: Object
});
</script>

<template>
  <section class="child">
    <h2>PROPS | Este es el componente hijo</h2>

    <h3>Hola {{ userName }} - {{ userAge }}</h3>
    <h4>{{ product.name }} - {{ product.price }}</h4>
  </section>
</template>

<style>
.child {
  border: 10px solid black;
  margin: 10px;
  padding: 10px;
}
</style>
