<script setup>
import ProductCard from "./ProductCard.vue";

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
    isForSale: true,
  },
];
</script>

<template>
  <h2>Productos:</h2>
  <ul class="product-list">
    <li v-for="(product, index) in products" :key="product.id">
      <ProductCard :index="index" :product="product"></ProductCard>
    </li>
  </ul>
</template>

<style>
.product-list {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
</style>
