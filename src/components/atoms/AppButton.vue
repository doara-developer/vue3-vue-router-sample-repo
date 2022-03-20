<template>
    <button @click="clickButton"><slot /></button>
</template>
<script lang="ts">
import { defineComponent } from 'vue';


export default defineComponent({
    setup(_, context) {
        const clickButton = () => {
            context.emit("click");
        }
        return {
            clickButton
        }
    },
})
</script>
