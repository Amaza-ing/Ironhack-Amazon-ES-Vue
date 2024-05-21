<script setup>
import { ref } from "vue";
import HeaderComponent from "./components/HeaderComponent.vue";
import ContentComponent from "./components/ContentComponent.vue";
import UserForm from "./components/UserForm.vue";
import ProductList from "./components/ProductList.vue";
import ChildSlots from "./components/ChildSlots.vue";
import ChildProps from "./components/ChildProps.vue";
import LoginComponent from "./components/LoginComponent.vue";
import ComputedWatch from "./components/ComputedWatch.vue";

const showHeader = true;
const user = ref("Adrián");
const age = ref(18);
const product = ref({
  name: "Computer",
  price: 1000,
  isForSale: true,
});

const userLogin = (e) => {
  console.log("Login ha llegado al componente padre. User: ", e);
}
</script>

<template>
  <HeaderComponent v-if="showHeader"></HeaderComponent>

  <!-- <ContentComponent></ContentComponent>

  <UserForm></UserForm> -->

  <!-- <ProductList></ProductList> -->

  <!-- <ChildSlots>
    <template v-slot:top>
      <h3>Información desde el componente padre</h3>
    </template>
  </ChildSlots>

  <ChildSlots>
    <template v-slot:bottom>
      <ul>
        <li>item 1</li>
        <li>item 2</li>
        <li>item 3</li>
      </ul>
    </template>
    <template v-slot:top>
      <h3>Hola</h3>
    </template>
  </ChildSlots>

  <ChildSlots></ChildSlots> -->

  <!-- <ChildProps :userName="user" :userAge="age" :product="product"></ChildProps> -->

  <!-- <LoginComponent @login="userLogin"></LoginComponent> -->

  <ComputedWatch></ComputedWatch>
</template>

<style scoped></style>
