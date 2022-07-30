<template>
<div class="box">
    <div class="columns">
        <div class="column is-8" role="form" aria-label="Formulario para criacao de uma nova tarefa">
            <input type="text" class="input" placeholder="Qual tarefa voce deseja iniciar?">
        </div>

        <div class="column">
               <div class="is-flex is-align-items-center is-justify-content-space-between"
               >
                    <Cronometro :tempo-em-segundos="tempoEmSegundos"></Cronometro>    
                    <button class="button" @click="iniciar">
                        <span class="icon">
                            <i class="fas fa-play"></i>
                        </span>
                        <span>Play</span>
                    </button>

                    <button class="button" @click="finalizar">
                        <span class="icon">
                            <i class="fas fa-stop"></i>
                        </span>
                        <span>Stop</span>
                    </button>
                </div>
        </div>
    </div>
</div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'
    import Cronometro from './cronometro.vue';
    export default defineComponent({
    name: "MeuFormulario",
    components:{
        Cronometro
    },
    data() {
        return {
            tempoEmSegundos: 0,
            cronometro: 0
        };
    },
    methods: {
        iniciar() {
            this.cronometro = setInterval(() => {
                this.tempoEmSegundos += 1;
            }, 1000);
            console.log("iniciando");
        },
        finalizar() {
            clearInterval(this.cronometro);
        }
    },
    //components: { Cronometro }
})
</script>
