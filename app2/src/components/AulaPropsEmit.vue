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
    <ul>
      <li>
        Emits são utilizados para se passar propriedades de componentes filho (
        <code>defineProps()</code> ) para o componente pai (de baixo para cima)
      </li>
      <li>O componente pai vai ouví-lo através do <code>v-on</code></li>
      <li>
        Ao se utilizar <code>emits</code> também é necessário definí-los no
        script ( <code>defineEmits()</code> ), APENAS CASO QUEIRA ACESSÁ-LO NO
        SCRIPT DO ARQUIVO
      </li>
      <li>
        As formas de se definir os emits no script podem ser: <br />
        <ul>
          <li><em>runtime declaration</em>, utilizando array de strings</li>
          <li>
            <em>options-based</em>, utilizando a <em>object syntax</em>, quando
            se pretende passar funções para os <code>emits</code>
          </li>
        </ul>
      </li>
    </ul>
    <button>
      {{ botao }}
      <!-- o nome do button tem a tag slot, portanto está sendo atribuído apenas onde o component está sendo chamado -->
      <slot />
    </button>

    <!-- usando emit para enviar propriedade ao clicar no botão -->
    <button @click="$emit('aumentarEm', 1)">{{ botaoDois }}</button>
  </div>
</template>

<script setup lang="ts">
// definindo props com object syntax
const props = defineProps(['botao', 'botaoDois']);

// definindo o emit para o componente pai
// const emit = defineEmits(['aumentarEm']);

// const emit = defineEmits({
//   onClicou: () => {
//     emit();
//   }
// });
</script>
