<template>
    <header>
        <h1>
            <img src="../../src/assets/logo.png" alt="Logo Aluratracker">
        </h1>
        <div class="has-text-centered">
            <button class="button" @click="alterarTema"> {{ textoBotao }} </button> 
        </div>
        <nav class="panel mt-5">
            <ul>
                <li>
                    <router-link to="/" class="linkMenu">
                        <i class="fas fa-tasks"></i>
                        Tarefas
                    </router-link>
                </li>
                <li>
                    <router-link to="/projetos" class="linkMenu">
                        <i class="fas fa-project-diagram "></i>
                        Projetos
                    </router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'
    export default defineComponent({
        name: 'BarraLateral',
        emits: ['aoTemaAlterado'],
        data() {
            return {
                    modoEscuroAtivo: false
            }
        },

        computed: {
            textoBotao() {
                if(this.modoEscuroAtivo){
                    return 'Desativar modo escuro'; 
                }
                return 'Ativa modo escuro'
            }
        },

        methods: {
            alterarTema() {
                this.modoEscuroAtivo = !this.modoEscuroAtivo
                this.$emit('aoTemaAlterado',this.modoEscuroAtivo)
            }
        }
    })
</script>

<style scoped>
    header {
        padding: 1rem;
        background-color: #0d3b66;
        widows: 100%;
        height: 100vh;
        text-align: center;
    }
    @media only screen and (max-width: 768px){
        header {
            padding: 2.5rem;
            height: auto;
        }
    }

    .panel li{
        margin: 8px 0;
    }

    .linkMenu {
        color: #fff;
    }

    .linkMenu:hover {
        color: #FAF0CA;
    }

    .linkMenu.router-link-active {
        color: #FAF0CA;
    }

</style>