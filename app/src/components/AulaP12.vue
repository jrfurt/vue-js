<template>
  <h2>Aula 12 - Ciclo de Vida</h2>
  <div>
    <div>
      <strong>Criação</strong>
      <p>
        - Preparar o componente <br />
        - Ajax, inicializar algumas variáveis <br />
        - Não tem acesso ao template (DOM)
      </p>
    </div>
    <div>
      <strong>Montagem</strong>
      <p>
        - Inicializar uma lib externa <br />
        - Precisa de acesso ao template (DOM) <br />
        - Tem acesso ao template (DOM)
      </p>
    </div>
    <div>
      <strong>Atualização</strong>
      <p>
        - Debug <br />
        - Update
      </p>
    </div>
    <div>
      <strong>Desmontagem</strong>
      <p>- Remover tudo o que for necessário para liberar memória <br /></p>
    </div>
    <div>
      <strong>Hooks</strong>
      <pre><code>
          beforeCreate() {},
          created() {},
          beforeMount() {},
          mounted() {},
          beforeUnmount() {},
          unmounted() {},
        </code></pre>
    </div>
  </div>
  <div>
    <h3>Teste:</h3>
    {{ name }}
  </div>
</template>

<script>
export default {
  name: 'AulaP12',
  data() {
    return {
      name: 'Harry'
    };
  },
  beforeCreate() {
    console.log('before create');
    console.log('Estado: ', this.name);
    console.log('DOM:', this.$el);
  },
  created() {
    console.log('created');
    console.log('Estado: ', this.name);
    console.log('DOM:', this.$el);
  },
  beforeMount() {
    console.log('before mount');
    console.log('Estado: ', this.name);
    console.log('DOM:', this.$el);
  },
  mounted() {
    console.log('mounted');
    console.log('Estado: ', this.name);
    console.log('DOM:', this.$el);
  },
  beforeUnmount() {
    console.log('before unmount');
    console.log('Estado: ', this.name);
  },
  unmounted() {
    console.log('unmounted');
    console.log('Estado: ', this.name);
  },
  watch: {},
  computed: {},
  methods: {}
};
</script>
