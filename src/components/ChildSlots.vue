<script setup></script>

<template>
  <section class="child">
    <slot name="top"></slot>

    <h2>SLOTS | Este es el componente hijo</h2>

    <!-- <slot>
      <h4>Este es el contenido por defecto</h4>
    </slot> -->

    <p>Este es el último elemento HTML del componente hijo</p>
    <slot name="bottom"></slot>
  </section>
</template>

<style>
.child {
  border: 10px solid black;
  margin: 10px;
  padding: 10px;
}
</style>