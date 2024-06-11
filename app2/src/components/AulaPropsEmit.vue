<template>
  <div>
    <h2>Aula Props / Emit</h2>
    <h3>Slot</h3>
    <li>
      Uma tag de slot é utilizada para receber o conteúdo desejado, digitando-o
      dentro da tag do component, onde o mesmo for chamado (neste caso, na
      HomeView.vue)
    </li>
    <br />

    <h3>Props</h3>
    <li>
      Ao utilizar <code>props</code> precisamos definí-las no componente filho,
      para que ela possa ser renderizada no componente pai, podendo ser definido
      seu <em>tipo</em> e também um valor <code>default</code>
    </li>
    <li>
      Props podem ser declaradas utilizando o <em>array de strings</em> ou a
      <em>object syntax</em>
    </li>
    <br />

    <h3>Emit</h3>
    <li>
      Emits são utilizados para se passar propriedades de componentes filho para
      o componente pai (de baixo para cima)
    </li>
    <li>
      Ao se utilizar <code>emits</code> também é necessário definí-los no script
    </li>
    <button>
      {{ botao }}
      <!-- o nome do button tem a tag slot, portanto está sendo atribuído apenas onde o component está sendo chamado -->
      <slot />
    </button>

    <button @click="$emit('clicou')">{{ botaoDois }}</button>
  </div>
</template>

<script setup lang="ts">
// definindo props com object syntax
const props = defineProps(['botao', 'botaoDois']);

// definindo o emit para o componente pai
const emit = defineEmits(['clicou']);
</script>
