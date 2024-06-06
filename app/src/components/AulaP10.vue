<template>
  <h2>Aula 10 - Computed Properties</h2>
  <p>
    Propriedades computadas são propriedades utilizadas quando se depende de
    outro fator para a renderização. <br />
    No exemplo abaixo os arrays que estão sendo carregados dependem de um array
    principal, que é o array <strong>todos</strong>. <br />
    Elas se diferem da
    <strong>propriedade de métodos</strong> (<code>methods</code>) pelo fato de
    que os seus valores <strong>são cacheados</strong>, e apenas recomputados
    quando o fator da qual ela depende é alterado.
  </p>
  <div>
    <h3>Tarefas Não-completadas</h3>
    <ul>
      <li v-for="todo in uncompletedTodos" :key="todo.id">
        {{ todo.title }}
      </li>
    </ul>
    <h3>Tarefas Completadas</h3>
    <ul>
      <li v-for="todo in completedTodos" :key="todo.id">
        {{ todo.title }}
      </li>
    </ul>
    <h3>Todas as Tarefas</h3>
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        <input v-model="todo.completed" type="checkbox" /> {{ todo.title }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'AulasP2',
  data() {
    return {
      todos: [
        {
          userId: 1,
          id: 1,
          title: 'delectus aut autem',
          completed: false
        },
        {
          userId: 1,
          id: 2,
          title: 'quis ut nam facilis et officia qui',
          completed: false
        },
        {
          userId: 1,
          id: 3,
          title: 'fugiat veniam minus',
          completed: false
        },
        {
          userId: 1,
          id: 4,
          title: 'et porro tempora',
          completed: true
        },
        {
          userId: 1,
          id: 5,
          title:
            'laboriosam mollitia et enim quasi adipisci quia provident illum',
          completed: false
        }
      ]
    };
  },
  methods: {},
  computed: {
    uncompletedTodos() {
      return this.todos.filter((todo) => !todo.completed);
    },
    completedTodos() {
      return this.todos.filter((todo) => todo.completed);
    }
  }
};
</script>

<style scoped></style>
