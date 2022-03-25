<template>
    <div>{{ storeString }}</div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from '@src/ts/stores'

export default defineComponent({
    setup() {
        const store = useStore();
        return {
            storeString: store.state.sampleModule.page1,
        }
    },
})
</script>
