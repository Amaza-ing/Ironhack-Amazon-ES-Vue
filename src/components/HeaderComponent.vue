<script setup></script>

<template>
  <header class="header">
    <h1 class="title">Hola a todos!</h1>
    <nav>
      <ul class="nav-list">
        <li>
          <RouterLink class="nav-link" :to="{ name: 'home' }">Home</RouterLink>
        </li>
        <li>
          <RouterLink class="nav-link" :to="{ name: 'products' }"
            >Products</RouterLink
          >
        </li>
        <li>
          <RouterLink class="nav-link" :to="{ name: 'content' }"
            >Content</RouterLink
          >
        </li>
        <li>
          <RouterLink class="nav-link" :to="{ name: 'user-form' }"
            >User Form</RouterLink
          >
        </li>
      </ul>
    </nav>
  </header>
</template>

<style>
.header {
  background-color: blue;
  color: white;

  .title {
    text-align: center;
  }

  .nav-list {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    justify-content: space-around;

    .nav-link {
      color: white;
    }
  }
}
</style>
