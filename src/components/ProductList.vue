<script setup>
const products = [
  {
    id: 112341234,
    name: "Ordenador",
    price: 1000,
    isForSale: false,
  },
  {
    id: 234234234,
    name: "Televisión",
    price: 500,
    isForSale: true,
  },
  {
    id: 345345345,
    name: "Teclado",
    price: 30,
    isForSale: true
  }
];
</script>

<template>
  <h2>Productos:</h2>
  <ul>
    <li v-for="(product, index) in products" :key="product.id">
      <h3>{{ index + 1 }} - {{ product.name }}</h3>
      <p>{{ product.price }}</p>
    </li>
  </ul>
</template>

<style></style>
