<template>
  <div>
    <div>
      <div>
        <h2>Aula Ref</h2>
        {{ name.first_name }}
        <button @click="changeName">Mudar Nome</button>
      </div>
      <div>
        <h2>Aula Computed e Watch</h2>
        <div>
          <h3>Computed</h3>
          <ul>
            <li>
              A função <code>computed()</code> é utilizada quando um valor
              depende de outro para sua renderização final
            </li>
          </ul>

          <h3>Watch</h3>
          <ul>
            <li>
              Já a função <code>watch()</code> é utilizando quando se precisa
              observar alguma variável, então ele pode monitorá-la em tempo real
            </li>
            <li>
              O primeiro parâmetro desta função é a variável que será
              <em>observada</em> <br />
              Seu segundo parâmetro é a callback function <br />
              E, por último, mas opcional, as options, que é um objeto podendo
              conter a função <code>deep: true</code>. por exemplo, quando se
              observa um objeto
            </li>
          </ul>
          <br />
          Full name: {{ fullName }}
          <p>Watch: {{ name.first_name }}</p>
        </div>
      </div>

      <div>
        <AulaLifecicle v-if="showComponent" />
        <button @click="showComponent = !showComponent">Liga/Desliga</button>
      </div>
      <AulaPropsEmit
        botao="botão usando props array"
        botao-dois="
      botão dois"
      >
        Save
      </AulaPropsEmit>
    </div>
  </div>
</template>

<script setup lang="ts">
import AulaLifecicle from '@/components/AulaLifecicle.vue';
import AulaPropsEmit from '@/components/AulaPropsEmit.vue';
import { computed, ref, watch } from 'vue';

let name = ref({
  first_name: 'Harry',
  last_name: 'Potter'
});

const showComponent = ref(true);

const changeName = () => {
  name.value.first_name = 'Ron';
};

const fullName = computed(() => {
  return `${name.value.first_name} ${name.value.last_name}`;
});

watch(
  name,
  () => {
    console.log('Eu tô observando!');
  },
  // options
  // só é utilizada quando eu preciso observar um objeto inteiro
  // para uma variável simples ele não é necessário
  { deep: true }
);
</script>

<style>
h2 {
  font-weight: 500;
}

div {
  margin-bottom: 1rem;
}
</style>
