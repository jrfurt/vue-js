<template>
  <v-row>
    <v-col sm="12" md="6" lg="4">
      <v-card
        variant="tonal"
        title="Pets"
        subtitle="Este é um subtítulo"
        text="Este é um card feito com um componente v-card utilizando props"
        hover
      >
        <v-card-actions>
          <v-btn> Ver Mais </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
    <v-col sm="12" md="6" lg="4">
      <v-card>
        <v-card-item>
          <v-card-title>Camaleão</v-card-title>
          <v-card-subtitle>Réptil</v-card-subtitle>
        </v-card-item>
        <v-card-text>
          Este é outro card criado utilizando v-card, agora utilizando tags
        </v-card-text>
        <v-card-actions>
          <v-btn> Ver Mais </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
    <v-col sm="6" lg="4">
      <v-card>
        <v-img
          class="d-flex align-end"
          height="150"
          :aspect-ratio="16 / 9"
          cover
          src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
        >
          <v-card-title class="text-white">Flores </v-card-title>
        </v-img>

        <v-card-actions>
          <v-btn color="blue" text="Saiba mais"></v-btn>
          <v-spacer></v-spacer>
          <v-btn
            :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
            @click="show = !show"
          ></v-btn>
        </v-card-actions>

        <v-expand-transition>
          <div v-show="show">
            <v-divider></v-divider>

            <v-card-text>
              Este é mais um card criado utilizando outras propriedades
            </v-card-text>
          </div>
        </v-expand-transition>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { ref } from "vue";

const show = ref<boolean>(false);
</script>
