<template>
  <v-app>
    <v-navigation-drawer v-model="drawer"></v-navigation-drawer>
    <v-app-bar flat color="blue-grey-lighten-5" class="border-b">
      <v-app-bar-nav-icon @click="drawer = !drawer" ></v-app-bar-nav-icon>
      <v-app-bar-title>Application</v-app-bar-title>
    </v-app-bar>
    <v-main>
      <HelloWorld />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const drawer = ref<boolean>(false);
</script>
