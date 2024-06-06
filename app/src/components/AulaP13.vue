<template>
  <div>
    <h2>Aula 13 - Passar eventos de pai para filho (e vice-versa)</h2>
    <p>
      Para se comunicar com um node de uma hierarquia maior (pai) é utilizado o
      <code>$emit</code>, enquanto para se comunicar com um node do DOM de uma
      hierarquia menor, utilizamos a propriedade <code>props</code>.
    </p>
    <div>
      <p v-if="showMessage">
        mensagem de confirmação <button @click="showMessage = false">X</button>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showMessage: true
    };
  },
  methods: {}
};
</script>
