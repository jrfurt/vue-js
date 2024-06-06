<template>
  <h2>Aula 11 - Observadores (Watches)</h2>
  <p>
    Observadores vão <strong>monitorar</strong> o comportamento de determinadas
    variáveis sempre que elas forem alteradas. <br />
    São funções que possuem dois atributos,
    <code>function(newValue, oldValue)</code>, um que recebe o valor atual e
    outra que recebe o valor antigo. <br />
    Elas são responsáveis apenas por fazer a observação, portanto a lógica,
    assim como as regras de negócio, devem ficar na propriedade
    <code>methods()</code>. <br />
    <br />
    Geralmente são utilizadas em alguns exemplos, como a paginação de sites web.
  </p>
  <div>
    <input v-model="name" type="text" name="name" id="name" /> <br />
    {{ name }} <br />
    <label for="page">Paginação: </label>
    <select v-model="pageCount" name="page" id="page">
      <option value="5">5</option>
      <option value="10">10</option>
      <option value="15">15</option>
    </select>
    {{ pageCount }}
  </div>
</template>

<script>
export default {
  name: 'AulaP11',
  data() {
    return {
      name: '',
      pageCount: 5
    };
  },
  watch: {
    name() {
      this.onChangeName;
    },
    pageCount() {
      this.onChangePage;
    }
  },
  computed: {},
  methods: {
    onChangeName() {
      console.log(this.name);
    },
    onChangePage() {
      console.log('Nova página');
    }
  }
};
</script>
