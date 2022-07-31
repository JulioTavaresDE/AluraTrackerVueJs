<template>
    <Box>
        <div class="columns">
            <div class="column is-7">{{ tarefa.descricao || 'Tarefa sem descricao' }}</div>
            <div class="column">
                <cronometro :tempoEmSegundos="tarefa.duracaoEmSegundos"></cronometro>
            </div>
        </div>
    </Box>
</template>

<script lang="ts">
import cronometro from './cronometro.vue';
import { defineComponent,PropType } from 'vue';
import ITarefa from '@/interfaces/ITarefa';
import Box  from './Box.vue';

export default defineComponent ({
    name: 'MinhaTarefa',
    components: {
    cronometro,
    Box
},
    props :{
        tarefa:{
            type:Object as PropType<ITarefa>,
            required : true

        }
    }
})
</script>

