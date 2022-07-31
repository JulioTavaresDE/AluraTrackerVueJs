<template class="formulario">
<div class="box formulario">
    <div class="columns formulario">
        <div class="column is-8" role="form" aria-label="Formulario para criacao de uma nova tarefa">
            <input type="text" class="input" placeholder="Qual tarefa voce deseja iniciar?" v-model="descricao">
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


    export default defineComponent({
    name: "MeuTemporizador",
    emits: ['aoSalvarTarefa'],
    components:{
        Temporizador
    },

    data (){
        return {
            descricao: ''
        }
    },

    methods: {
        finalizarTarefa(tempoDecorrido:number):void {
            this.$emit('aoSalvarTarefa', {
                 duracaoEmSegundos : tempoDecorrido,
                 descricao: this.descricao
            })

            console.log('Descricao da Tarefa', this.descricao)
            this.descricao = ' '
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
