<script setup>
import HeaderComponent from "./components/HeaderComponent.vue";
import ContentComponent from "./components/ContentComponent.vue";
import UserForm from "./components/UserForm.vue";
import ProductList from "./components/ProductList.vue";

const showHeader = true;
</script>

<template>
  <HeaderComponent v-if="showHeader"></HeaderComponent>

  <ContentComponent></ContentComponent>

  <UserForm></UserForm>

  <ProductList></ProductList>
</template>

<style scoped>
</style>
