
<script setup>
const props = defineProps(['type'])
</script>
<template>
    <button class="btn btn-outline-secondary btn-lg">
        <i class="m-0 bi bi-building-add" style="font-size: 4rem"></i>
        <p>Build</p>
    </button>
</template>
<style scoped>
button {
    display: block;
}
</style>