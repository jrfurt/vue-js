<template>
  <div>
    Usuário: {{ $route.params.id }}
    <br />
    <button @click="login">Login</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  methods: {
    login() {
      console.log('chegou');
      this.$router.push('/');
    }
  }
});
</script>
