<template>
  <v-container>
    <h1>Home</h1>
    <CardTeste />
    <CardGrid />
    <CardVcard />
    <TestItemGroup />
    <v-row>
      <CardComProps
        v-for="post in posts"
        :key="post.id"
        :title="post.title"
        :text="post.text"
      />
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from "vue";

const posts = ref([
  {
    id: 1,
    title: "My journey with Vue",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae eveniet nemo eaque suscipit quidem cupiditate",
  },
  {
    id: 2,
    title: "Blogging with Vue",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae eveniet nemo eaque suscipit quidem cupiditate",
  },
  {
    id: 3,
    title: "Why Vue is so fun",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae eveniet nemo eaque suscipit quidem cupiditate",
  },
]);
</script>
