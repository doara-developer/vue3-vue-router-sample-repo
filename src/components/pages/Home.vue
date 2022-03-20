<template>
    <div>Home</div>
    <AppButton @click="goToPage1">Page1</AppButton>
    <AppButton @click="goToPage2">Page2</AppButton>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import AppButton from '@src/components/atoms/AppButton.vue';


export default defineComponent({
    components: {AppButton},
    setup() {
        const router = useRouter()
        const goToPage1 = () => {
            router.push("/page1");
        }
        const goToPage2 = () => {
            router.push("/page2");
        }
        return {
            goToPage1,
            goToPage2,
        }
    },
})
</script>
