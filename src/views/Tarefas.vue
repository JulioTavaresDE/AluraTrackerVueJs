<template>
  <Formulario @aoSalvarTarefa="salvarTarefa"></Formulario>
  <div class="lista">
    
    <div class="field">
      <p class="control has-icons-left">
        <input class="input" type="text" placeholder="Digite para filtrar" v-model="filtro">
        <span class="icon is-small is-left">
          <i class="fas fa-search"></i>
        </span>
      </p>
    </div>

    <tarefa v-for="(tarefa, index) in tarefas" :key="index" :tarefa="tarefa" @aoTarefaClicada="selecionarTarefa">
    </tarefa>

    <Modal :mostrar="tarefaSelecionada !=null">
       <template v-slot:cabecalho>
          <p class="modal-card-title">Editando uma tarefa</p>
          <button @click="fecharModal" class="delete" aria-label="close"></button>
        </template>

        <template v-slot:corpo>
          <div class="field">
            <label for="descricaoDaTarefa" class="label">Descricao</label>
            <input type="text" class="input" v-model="tarefaSelecionada.descricao" id="descricaoDaTarefa">
          </div>
        </template>
        
        <template v-slot:rodape>
          <button @click="alterarTarefa" class="button is-success">Salvar alteracoes</button>
          <button @click="fecharModal" class="button">Cancelar</button>
        </template>
    </Modal>
    
    <Box v-if="listaEstaVazia">
      Voce nao esta produtivo hoje :(
    </Box>

    

    <!-- <div class="modal" :class="{ 'is-active': tarefaSelecionada }" v-if="tarefaSelecionada">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Editando uma tarefa</p>
          <button @click="fecharModal" class="delete" aria-label="close"></button>
        </header>
        <section class="modal-card-body">
          <div class="field">
            <label for="descricaoDaTarefa" class="label">Descricao</label>
            <input type="text" class="input" v-model="tarefaSelecionada.descricao" id="descricaoDaTarefa">
          </div>
        </section>
        <footer class="modal-card-foot">
          <button @click="alterarTarefa" class="button is-success">Salvar alteracoes</button>
          <button @click="fecharModal" class="button">Cancelar</button>
        </footer>
      </div>
    </div> -->
  </div>
</template>

<script lang="ts">
import { computed, defineComponent,ref, watchEffect } from 'vue';
import Formulario from '../components/Formulario.vue';
import Tarefa from '../components/Tarefa.vue';
import Box from '../components/Box.vue';
import { useStore } from '@/store';
import { OBTER_TAREFAS } from '@/store/tipo-acoes';
import { CADASTRAR_TAREFA } from '@/store/tipo-acoes';
import ITarefa from '@/interfaces/ITarefa';
import { OBTER_PROJETOS } from '@/store/tipo-acoes';
import { ALTERAR_TAREFA } from '@/store/tipo-acoes';
import Modal from "../components/Modal.vue";

export default defineComponent({
  name: "App",
  components: {
    Formulario, 
    Tarefa,
    Box,
    Modal
},
  data() {
    return {
      tarefaSelecionada: null as ITarefa | null
    }
  },

  computed: {
    listaEstaVazia(): boolean {
      return this.tarefas.length === 0;
    }
  },

  methods: {
    salvarTarefa(tarefa: ITarefa) {
      this.store.dispatch(CADASTRAR_TAREFA, tarefa)
    },
    selecionarTarefa(tarefa: ITarefa) {
      this.tarefaSelecionada = tarefa
    },
    fecharModal() {
      this.tarefaSelecionada = null
    },
    alterarTarefa() {
      this.store.dispatch(ALTERAR_TAREFA, this.tarefaSelecionada)
        .then(() => this.fecharModal())
    }
  },

  setup() {
    const store = useStore();
    store.dispatch(OBTER_TAREFAS);
    store.dispatch(OBTER_PROJETOS);
    const filtro = ref("");

    // const tarefas = computed(() => 
    //   store.state.tarefas.filter(
    //   (t) => !filtro.value || t.descricao.includes(filtro.value)
    //   )
    //   );

      watchEffect(()=> {
          store.dispatch(OBTER_TAREFAS, filtro.value)
      })

    return {
      tarefas: computed(()=> store.state.tarefas),
      store,
      filtro
    };
  },
});
</script>

