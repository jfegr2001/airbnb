<template>
  <div>
    <h1>Apartamentos Disponibles</h1>
    <ul>
      <li v-for="apartment in apartments" :key="apartment.id">
        <router-link :to="`/apartment/${apartment.id}`">{{
          apartment.name
        }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { useAppStore } from "../store";

export default defineComponent({
  setup() {
    const store = useAppStore();
    onMounted(() => store.fetchApartments());
    return { apartments: store.apartments };
  },
});
</script>
