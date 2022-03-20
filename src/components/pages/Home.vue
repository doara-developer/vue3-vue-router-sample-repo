<template>
    <div>Home</div>
    <button @click="clickButton">Page1</button>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';


export default defineComponent({
    setup() {
        const router = useRouter()
        const clickButton = () => {
            router.push("/page1");
        }
        return {
            clickButton
        }
    },
})
</script>
