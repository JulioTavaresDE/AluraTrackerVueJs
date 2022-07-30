<template>
<div class="box">
    <div class="columns">
        <div class="column is-8" role="form" aria-label="Formulario para criacao de uma nova tarefa">
            <input type="text" class="input" placeholder="Qual tarefa voce deseja iniciar?">
        </div>

        <div class="column">
            <temporizador></temporizador>
        </div>
    </div>
</div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'
    import Temporizador from './Temporizador.vue';
    export default defineComponent({
    name: "MeuTemporizador",
    components:{
        Temporizador
    }
    });    
</script>