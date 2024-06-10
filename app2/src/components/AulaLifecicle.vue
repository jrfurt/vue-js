<template>
  <div>
    <h2>Aula Lifecicle</h2>
  </div>
</template>

<script setup lang="ts">
import { onBeforeMount, onBeforeUnmount, onMounted, onUnmounted } from 'vue';

onBeforeMount(() => {
  console.log('on before mount');
});
onMounted(() => {
  console.log('on mounted');
});
onBeforeUnmount(() => {
  console.log('on before unmount');
});
onUnmounted(() => {
  console.log('on unmounted');
});
</script>
