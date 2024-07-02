<template>
  <v-card>
    <v-card-title> Users </v-card-title>
    <v-table>
      <thead>
        <tr>
          <th class="text-left">Nome</th>
          <th class="text-left">E-mail</th>
          <th class="text-left">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in users" :key="index">
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>
            <v-btn
              icon="mdi-pencil"
              variant="tonal"
              color="primary"
              size="small"
            ></v-btn>
          </td>
        </tr>
      </tbody>
    </v-table>
  </v-card>
  <v-fab
    class="me-4 mt-7"
    prepend-icon="mdi-plus"
    extended
    text="Add User"
    absolute
    offset
  ></v-fab>
</template>

<script setup lang="ts">
import { ref } from "vue";

const users = [
  {
    name: "Allef",
    email: "alefedelas@gmail.com",
  },
  {
    name: "Lázaro",
    email: "lazindaskebra@gmail.com",
  },
  {
    name: "Luis Felipe",
    email: "luisfelipe@gmail.com",
  },
  {
    name: "Antonio",
    email: "toin@gmail.com",
  },
];
</script>
