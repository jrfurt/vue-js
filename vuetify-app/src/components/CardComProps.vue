<template>
  <v-col>
    <v-card>
      <v-card-title>
        {{ title }}
      </v-card-title>
      <v-card-text>
        {{ text }}
      </v-card-text>
      <v-card-actions>
        <v-btn color="info" variant="outlined" icon="mdi-plus" @click="$emit('clicouMais')"></v-btn>
        <v-btn color="info" variant="outlined" icon="mdi-minus" @click="$emit('clicouMenos')"></v-btn>
      </v-card-actions>
    </v-card>
  </v-col>
</template>

<script setup lang="ts">
defineProps(["title", "text"]);
</script>
