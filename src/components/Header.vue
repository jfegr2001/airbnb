<!-- src/components/Header.vue -->
<template>
  <header>
    <nav>
      <a href="/">Apartamentos</a>
      <a href="/reservations">Mis Reservas</a>
      <a href="/add-apartment">Agregar Apartamento</a>
      <a href="/login">Iniciar Sesión</a>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Header",
});
</script>

<style scoped>
header {
  background-color: #1e90ff;
  color: #fff;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav a {
  color: #fff;
  margin: 0 1rem;
  text-decoration: none;
  font-weight: bold;
}

nav a:hover {
  color: #32cd32;
}
</style>
