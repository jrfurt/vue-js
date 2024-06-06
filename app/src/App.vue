<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js App" />

  <main class="container">
    <div>
      <h2>Aula 1 - Component</h2>
      <TheHeader v-show="showHeader">
        <template v-slot:header>Header</template>
        <p>Esse é um slot default, sem template</p>
      </TheHeader>
    </div>

    <div>
      <h2>Aula 2 - Diretivas</h2>
      <!-- v-show deixa o conteúdo no DOM, mudando apenas o seu display para none -->
      <div v-show="showName">
        Nome: {{ firstName }} <br />
        Sobrenome: {{ lastName }}
      </div>
      <!-- v-if exibe apenas o conteúdo desejado, sem deixar o que não for exibido no DOM -->
      <p v-if="accessLevel === 'admin'">Admin</p>
      <p v-else-if="accessLevel === 'marketing'">Marketing</p>
      <p v-else>User</p>
    </div>

    <div>
      <h2>Aula 3/4 - Loops/Atributos Dinâmicos</h2>
      <!-- v-bind é utilizando para deixar qualquer propriedade dinâmica -->
      <div>
        <ul>
          <li v-for="(todo, index) in todos" :key="index">
            <img v-if="todo.url" v-bind:src="todo.url" />
            {{ todo.title }}
          </li>
        </ul>
      </div>
    </div>

    <div>
      <h2>Aula 7 - Atrubuto Class e Style dinâmicos</h2>
      <div>
        <!-- Class atribuída através do v-bind e declarada no data -->
        <!-- Ela pode receber uma variável, array ou objeto -->
        <h3 :class="{ title: true }">Exemplo de class dinâmica</h3>
      </div>
    </div>

    <div>
      <h2>Aula 8 - Two-way data binding</h2>
      <p>
        Até agora vimos apenas o on-way data binding, que é basicamente pegar
        inputs a partir do objeto `data` que vem do JavaScript
      </p>
      <p>
        O que teremos agora é que será possível tanto pegar dados do script para
        exibí-lo no HTML, quando pegar dados do HTML para manipulá-los em tempo
        real
      </p>
      <div>
        <h4>Exemplo:</h4>
        <label for="text">Nome:</label> <br />
        <input v-model="valueName" type="text" /> <br />
        <!-- O valor retornado aqui pode vir tanto do objeto `data` do script quanto do input digitado pelo usuário -->
        {{ valueName }}
        <br />
        <br />
        <label>Esportes:</label> <br />
        <select v-model="esportes">
          <!-- O `value` é o valor que o v-model vai ler e armazena na variável que ele guarda -->
          <option value="">Escolha</option>
          <option value="Futebol">Futebol</option>
          <option value="Basquete">Basquete</option>
          <option value="tenis">Tênis</option>
        </select>
        <br />
        {{ esportes }}
      </div>
      <br />

      <div>
        <label for="newsletter">Newsletter</label> <br />
        <!-- O `value` do input é exatamente o mesmo valor da variável que o v-model faz referência -->
        <input v-model="newsletter" type="radio" name="simNao" value="Sim" />
        Sim
        <input v-model="newsletter" type="radio" name="simNao" value="Não" />
        Não
        <br />
        {{ newsletter }}
      </div>
      <br />

      <div>
        <label for="contrato">Contrato</label> <br />
        <input v-model="contrato" type="checkbox" name="contrato" /> Aceita
        nossos termos... <br />
        {{ contrato }}
      </div>
      <br />

      <div>
        <label for="contrato">Contrato</label> <br />
        <input
          v-model="cores"
          type="checkbox"
          name="contrato"
          value="preto"
        />Preto <br />
        <input
          v-model="cores"
          type="checkbox"
          name="contrato"
          value="vermelho"
        />Vermelho <br />
        <input
          v-model="cores"
          type="checkbox"
          name="contrato"
          value="amarelo"
        />Amarelo <br />
        {{ cores }}
      </div>

      <div>
        <h2>Aula 9 - Eventos</h2>
        <p>
          A diretiva `v-on` funciona como forma de monitorar eventos que ocorrem
        </p>
        <p>
          Pode ser usada como <code>v-on:function</code>, ou com o seu atalho
          <code>@function</code>
        </p>
        <div>
          <button v-on:click="onClick">Clique</button>
          <p @mouseover="onMouseOver" @mouseout="onMouseOut">Mouse Over</p>
        </div>
      </div>

      <div>
        <h2>Teste</h2>
        <div>
          <ul>
            <li
              @click="onClickTab('casa')"
              :class="{ selected: isSelected === 'casa' }"
            >
              Casa
            </li>
            <li
              @click="onClickTab('cozinha')"
              :class="{ selected: isSelected === 'cozinha' }"
            >
              Cozinha
            </li>
            <li
              @click="onClickTab('banho')"
              :class="{ selected: isSelected === 'banho' }"
            >
              Banho
            </li>
          </ul>
        </div>
      </div>

      <AulaP10 />
      <AulaP11 />
      <AulaP12 />
      <AulaP13 />
    </div>
  </main>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import TheHeader from './components/TheHeader.vue';
import AulaP10 from './components/AulaP10.vue';
import AulaP11 from './components/AulaP11.vue';
import AulaP12 from './components/AulaP12.vue';
import AulaP13 from './components/AulaP13.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    TheHeader,
    AulaP10,
    AulaP11,
    AulaP12,
    AulaP13
  },
  data() {
    return {
      // directives
      showHeader: true,
      firstName: 'Luís',
      lastName: 'Cláudio',
      showName: false,
      accessLevel: 'user',
      classVar: 'title',
      valueName: 'Hermione',
      esportes: 'Golf',
      newsletter: 'Sim',
      contrato: false,
      isSelected: 'casa',
      // quando for retornado múltiplos valores, precisamos declarar a variável que vai recebê-los como `array`
      cores: [],
      // array for loop
      todos: [
        {
          userId: 1,
          id: 1,
          title: 'delectus aut autem',
          completed: false,
          url: 'https://fakeimg.pl/50x50/cccccc/909090'
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
  methods: {
    onClick($evt) {
      console.log('Clicou!', $evt);
    },
    onMouseOver() {
      console.log('mouse over');
    },
    onMouseOut() {
      console.log('mouse out');
    },
    onClickTab(tabSelected) {
      this.isSelected = tabSelected;
    },
    handleClose() {
      console.log('closou!');
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  margin-bottom: 60px;
}
.container {
  max-width: 750px;
  margin: 0 auto;
  text-align: left;
}

.title {
  color: blue;
}

.selected {
  background-color: darkolivegreen;
  color: antiquewhite;
}
</style>
