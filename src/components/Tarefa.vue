<template>
    <div class="box has-text-weight-bold">
        <div class="columns">
            <div class="column is-7">{{tarefa.descricao}}</div>
            <div class="column">
                <cronometro :tempoEmSegundos="tarefa.duracaoEmSegundos"></cronometro>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import cronometro from './cronometro.vue';
import { defineComponent,PropType } from 'vue';
import ITarefa from '@/interfaces/ITarefa';

export default defineComponent ({
    name: 'MinhaTarefa',
    components: {
        cronometro,
    },
    props :{
        tarefa:{
            type:Object as PropType<ITarefa>,
            required : true

        }
    }
})
</script>

<style>
    .box {
        background: #faf0ca;
    }
</style>