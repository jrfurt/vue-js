<template>
  <v-container>
    <div>
      <h2>Card com Grid Layout</h2>
    </div>
    <v-row>
      <v-col cols="12" sm="6" md="4">
        <v-sheet class="border"> 1 </v-sheet>
      </v-col>
      <v-col cols="12" sm="6" md="4">
        <v-sheet class="border"> 1 </v-sheet>
      </v-col>
      <v-col cols="12" sm="6" md="4">
        <v-sheet class="border"> 1 </v-sheet>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="10">
        <v-sheet class="border"> 1 </v-sheet>
      </v-col>
      <v-col>
        <v-sheet class="border"> 1 </v-sheet>
      </v-col>
      <v-col cols="2">
        <v-sheet class="border"> 1 </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
//
</script>
