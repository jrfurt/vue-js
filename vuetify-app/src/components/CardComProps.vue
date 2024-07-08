<template>
  <v-col>
    <v-card>
      <v-card-title>
        {{ title }}
      </v-card-title>
      <v-card-text>
        {{ text }}
      </v-card-text>
    </v-card>
  </v-col>
</template>

<script setup lang="ts">
defineProps(["title", "text"]);
</script>
