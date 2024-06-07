<template>
  <div>
    <main>
      <TheWelcome />
    </main>
    <div>
      {{ name.first_name }}
      <button @click="changeName">Mudar Nome</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import TheWelcome from '../components/TheWelcome.vue';

let name = ref({
  first_name: 'Harry',
  last_name: 'Potter'
});

const changeName = () => {
  name.value.first_name = 'Ron';
};
</script>
