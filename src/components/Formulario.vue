<template>
<div class="box">
    <div class="columns">
        <div class="column is-8" role="form" aria-label="Formulario para criacao de uma nova tarefa">
            <input type="text" class="input" placeholder="Qual tarefa voce deseja iniciar?">
        </div>

        <div class="column">
               <div class="is-flex is-align-items-center is-justify-content-space-between"
               >
                    <section>
                        <strong>{{ tempoDecorrido }}</strong>
                    </section>
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
    export default defineComponent({
       name: 'MeuFormulario',
       data(){
            return {
                tempoEmSegundos: 0
            }
       },

        computed: {
            tempoDecorrido(): string {
                return new Date(this.tempoEmSegundos * 1000).toISOString().substr(11,8)
            }
        },

       methods: {
        iniciar(){
            setInterval (()=>{
                this.tempoEmSegundos+=1;
            },1000)
            console.log('iniciando');
        },
        finalizar(){
            console.log('finalizando')
        }
       }
    })
</script>
