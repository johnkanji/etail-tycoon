<script setup>
import { computed } from 'vue'

const props = defineProps(['value'])
const emoji = computed(() => {
    switch (props.value) {
        case 1:
            return '😡'
        case 2:
            return '🙁'
        case 3:
            return '🙂'
        case 4:
            return '😄'
        case 5:
            return '🤩'
        default:
            break;
    }
})
</script>
<template>
    <span class="fs-2">{{ emoji }}</span>
</template>