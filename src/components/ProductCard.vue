<script setup>
defineProps({
  index: Number,
  product: Object
})
</script>

<template>
  <section class="product-card">
    <h3>{{ index + 1 }} - {{ product.name }}</h3>
    <p>{{ product.price }}</p>
  </section>
</template>

<style>
.product-card {
  width: 300px;
  height: 300px;
  background-color: blue;
  color: white;
}
</style>
