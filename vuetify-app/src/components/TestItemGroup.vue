<template>
  <v-item-group selected-class="bg-primary">
    <v-container>
      <v-row>
        <v-col v-for=" in 3" key="n">
          <v-item v-slot="{ isSelected, selectedClass, toggle }">
            <v-card
              :class="['d-flex align-center', selectedClass]"
              height="150"
              @click="toggle"
            >
              <div class="text-h3 flex-grow-1 text-center">
                {{ isSelected ? 'Clicou!' : 'Clique' }}
              </div>
            </v-card>
          </v-item>
        </v-col>
      </v-row>
    </v-container>
  </v-item-group>
</template>