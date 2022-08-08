<template>
    <Box>
        <div class="columns clicavel" @click="tarefaClicada">
            <div class="column is-4">
                {{ tarefa.descricao || 'Tarefa sem descricao' }}
            </div>
            <div class="column is-3">
                {{ tarefa.projeto?.nome || 'N/D' }}
            </div>
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
    emits : ['aoTarefaClicada'],
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
    ,

    methods: {
        tarefaClicada () : void {
        this.$emit('aoTarefaClicada',this.tarefa)
        }
    }
})
</script>


<style scoped>
    .clicavel {
        cursor: pointer;
    }
</style>
