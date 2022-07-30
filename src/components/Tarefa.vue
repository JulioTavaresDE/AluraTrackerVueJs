<template>
    <div class="box has-text-weight-bold">
        <div class="columns">
            <div class="column is-7">Descricao da Tarefa</div>
            <div class="column">
                <cronometro tempoEmSegundos="15"></cronometro>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import cronometro from './cronometro.vue';
import { defineComponent } from 'vue';
export default defineComponent ({
    name: 'MinhaTarefa',
    components: {
        cronometro,
    },
})
</script>

<style>
    .box {
        background: #faf0ca;
    }
</style>