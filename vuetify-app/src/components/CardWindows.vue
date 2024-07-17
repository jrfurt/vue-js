<template>
  <v-card max-width="500" class="mx-auto">
    <v-card-title class="text-h6 font-weight-regular">
     <span>{{ title }}</span> 
     <v-avatar
      size="24"
      color="primary"
      v-text="window"
     ></v-avatar>
    </v-card-title>
    <v-window v-model="window">
      <v-window-item :value="1">
        <v-card-text>
          <v-text-field label="Email"></v-text-field>
        </v-card-text>
      </v-window-item>
      <v-window-item :value="2">
        <v-card-text>
          <v-text-field label="Senha"></v-text-field>
          <v-text-field label="Confirme a Senha"></v-text-field>
        </v-card-text>
      </v-window-item>

      <v-divider></v-divider>

      <v-card-actions>
        <v-btn
          color="primary"
          variant="text"
          v-if="window > 1"
          @click="window--"
        >
          Voltar
        </v-btn>

        <v-spacer></v-spacer>

        <v-btn
          color="primary"
          variant="flat"
          @click="window++"
          v-if="window < 3"
        >
          {{ window === 2 ? "Enviar" : "Próx." }}
        </v-btn>
      </v-card-actions>
    </v-window>
  </v-card>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";

const window = ref(1);

const title = computed(() => {
  switch (window.value) {
    case 1:
      return "Seu e-mail";
    case 2:
      return "Crie uma senha";
    default:
      return "Conta criada!";
  }
});
</script>
