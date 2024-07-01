<template>
  <v-app>
    <v-app-bar flat color="blue-grey-lighten-5" class="border-b">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-app-bar-title>Application</v-app-bar-title>

      <template #append>
        <v-btn icon>
          <v-badge color="info" :content="2">
            <v-icon icon="mdi-bell"></v-icon>
          </v-badge>
        </v-btn>
        <v-item-group>
          <v-item v-slot="{ isSelected, toggle }">
            <v-btn
              :icon="isSelected ? 'mdi-heart' : 'mdi-heart-outline'"
              @click="toggle"
            >
            </v-btn>
          </v-item>
        </v-item-group>
      </template>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      class="bg-blue-grey-lighten-5 elevation-3 border-e"
    >
      <template v-slot:prepend>
        <v-list-item
          lines="three"
          prepend-avatar="https://randomuser.me/api/portraits/women/81.jpg"
          subtitle="Logged-in"
          title="Luís Felipe"
        ></v-list-item>
      </template>

      <v-divider></v-divider>

      <v-list>
        <v-list-item
          prepend-icon="mdi-view-dashboard"
          title="Home"
          value="home"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-forum"
          title="About"
          value="about"
        ></v-list-item>

        <v-divider></v-divider>

        <v-list-group value="Contact">
          <template v-slot:activator="{ props }">
            <v-list-item
              v-bind="props"
              prepend-icon="mdi-account-circle"
              title="Contact"
            ></v-list-item>
          </template>

          <v-list-item
            v-for="n in 2"
            prepend-icon="mdi-account"
            :key="n"
          >{{ 'Contact ' + n }}</v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <CardTeste />
      <CardGrid />
      <CardVcard />
      <TestItemGroup />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { VBtn, VIcon } from "vuetify/components";

const drawer = ref<boolean>(true);
</script>
