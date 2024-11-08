<!-- src/views/AddApartment.vue -->
<template>
  <div>
    <h1>Agregar Nuevo Apartamento</h1>
    <form @submit.prevent="addApartment">
      <label>
        Nombre:
        <input v-model="apartment.name" type="text" required />
      </label>
      <label>
        Descripción:
        <textarea v-model="apartment.description" required></textarea>
      </label>
      <label>
        Precio por noche:
        <input v-model="apartment.price" type="number" required />
      </label>
      <button type="submit">Agregar Apartamento</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import axios from "axios";

export default defineComponent({
  name: "AddApartment",
  setup() {
    const apartment = ref({
      name: "",
      description: "",
      price: 0,
    });

    const addApartment = async () => {
      try {
        await axios.post(
          "https://mockapi.io/endpoint/apartments",
          apartment.value
        );
        alert("Apartamento agregado con éxito");
        apartment.value = { name: "", description: "", price: 0 }; // Limpiar el formulario
      } catch (error) {
        console.error("Error al agregar apartamento:", error);
      }
    };

    return { apartment, addApartment };
  },
});
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: auto;
}

label {
  margin-bottom: 1rem;
}

button {
  background-color: #1e90ff;
  color: #fff;
  padding: 0.5rem;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #32cd32;
}
</style>
