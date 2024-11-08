<!-- src/components/Footer.vue -->
<template>
  <footer>
    <p>2024 Derechos Reservados</p>
    <div>
      <a href="https://facebook.com" target="_blank">Facebook</a> |
      <a href="https://instagram.com" target="_blank">Instagram</a> |
      <a href="/about">Conócenos más</a>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Footer",
});
</script>

<style scoped>
footer {
  text-align: center;
  padding: 1rem;
  background-color: #f4f4f4;
  color: #333;
}

footer a {
  color: #1e90ff;
  margin: 0 5px;
  text-decoration: none;
}
</style>
