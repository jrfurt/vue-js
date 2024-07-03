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
              @click="openDialogEditUser = true"
              class="me-2"
              icon="mdi-pencil"
              variant="tonal"
              color="primary"
              size="small"
            ></v-btn>

            <v-btn
              @click="openDialogDeleteUser = true"
              icon="mdi-delete"
              variant="tonal"
              color="error"
              size="small"
            ></v-btn>
          </td>
        </tr>
      </tbody>
    </v-table>
  </v-card>

  <v-fab
    @click="openDialogAddUser = true"
    class="mt-7"
    prepend-icon="mdi-plus"
    extended
    text="Add User"
    color="info"
    absolute
    offset
  ></v-fab>

  <v-dialog v-model="openDialogAddUser" max-width="500">
    <v-card title="Add User">
      <v-card-text>
        Dialog to ADD a new user
      </v-card-text>
    </v-card>
  </v-dialog>

  <v-dialog v-model="openDialogEditUser" max-width="500">
    <v-card title="Edit User">
      <v-card-text>
        Dialog to EDIT a user
      </v-card-text>
    </v-card>
  </v-dialog>

  <v-dialog v-model="openDialogDeleteUser" max-width="500">
    <v-card title="Delete User">
      <v-card-text>
        Dialog to DELETE a user
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { ref } from "vue";

const openDialogAddUser = ref<boolean>(false);
const openDialogEditUser = ref<boolean>(false);
const openDialogDeleteUser = ref<boolean>(false);

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
