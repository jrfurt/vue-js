<template>
  <v-stepper v-model="e1" :items="steps" :next-text="e1 === 3 ? 'concluir' : 'Próx.'" prev-text="Voltar">
    <template #item.1>
      <v-card title="Insira seus dados"> 
        <v-card-text>
          <v-text-field
            label="Nome"
            required
          ></v-text-field>
          <v-text-field
            label="Sobrenome"
            required
          ></v-text-field>
        </v-card-text>
      </v-card>
    </template>
    <template #item.2>
      <v-card title="Insira seu endereço"> 
        <v-card-text>
          <v-text-field
            label="Estado"
            required
          ></v-text-field>
          <v-text-field
            label="País"
            required
          ></v-text-field>
        </v-card-text>
      </v-card>
    </template>
    <template #item.3>
      <v-card title="Forma de pagamento"> 
        <v-card-text>
          <v-select
            :items="['Crédito', 'Débito', 'Pix']"
            label="Forma de pagemento"
          ></v-select>
        </v-card-text>
      </v-card>
    </template>
  </v-stepper>
</template>

<script setup lang="ts">
import { ref } from "vue";

const steps = ref(["Dados", "Endereço", "Pagamento"]);
const e1 = ref(1);
</script>
