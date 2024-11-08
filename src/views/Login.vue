<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="handleLogin">
      <input v-model="username" placeholder="Username" />
      <input type="password" v-model="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useAppStore } from "../store";

export default defineComponent({
  setup() {
    const store = useAppStore();
    const username = ref("");
    const password = ref("");

    const handleLogin = async () => {
      try {
        await store.login(username.value, password.value);
      } catch (error) {
        alert("Login failed");
      }
    };

    return { username, password, handleLogin };
  },
});
</script>
