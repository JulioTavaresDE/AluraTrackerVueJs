<template class="formulario">
<div class="box formulario">
    <div class="columns formulario">
        <div class="column is-5" role="form" aria-label="Formulario para criacao de uma nova tarefa">
            <input type="text" class="input" placeholder="Qual tarefa voce deseja iniciar?" v-model="descricao">
        </div>

        <div class="column is-3">
            <div class="select">
                <select v-model="idProjeto">
                    <option value="">Selecione o projeto</option>
                    <option
                        :value="projeto.id"
                        v-for="projeto in projetos"
                        :key="projeto.id"
                    >
                    {{ projeto.nome}}
                    </option>

                </select>
            </div>
        </div>


        <div class="column">
            <temporizador @aoTemporizadorFinalizado="finalizarTarefa"></temporizador>
        </div>
    </div>
</div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'
    import Temporizador from './Temporizador.vue';
    import { useStore } from 'vuex'
    import { key } from '@/store'
    import { computed } from '@vue/reactivity';
    
    export default defineComponent({
    name: "MeuTemporizador",
    emits: ['aoSalvarTarefa'],
    components:{
        Temporizador
    },

    data (){
        return {
            descricao: '',
            idProjeto : ''
        }
    },

    methods: {
        finalizarTarefa(tempoDecorrido:number):void {
            this.$emit('aoSalvarTarefa', {
                 duracaoEmSegundos : tempoDecorrido,
                 descricao: this.descricao,
                 projeto: this.projetos.find(proj => proj.id == this.idProjeto)
            })

            console.log('Descricao da Tarefa', this.descricao)
            this.descricao = ' '
        }   
    },
    setup(){
        const store = useStore(key)
        return {
            projetos: computed(()=> store.state.projetos)
        }
    }
    });    
</script>

<style>
    .formulario {
        color: var(--texto-primario);
        background-color: var(--bg-primario);
    }
</style>
