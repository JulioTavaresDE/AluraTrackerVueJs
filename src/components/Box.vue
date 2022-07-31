<template>
    <div class="box has-text-weight-bold">
        <slot></slot>
    </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name:'MeuBox'
}) 
</script>

<style>
    .box {
        background: #faf0ca;
    }
</style>