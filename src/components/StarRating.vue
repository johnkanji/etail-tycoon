<script setup>
const props = defineProps(['stars', 'of'])
</script>
<template>
<div style="display: inline">
    <span v-for="n in Math.floor(props.stars)">
        <i class="bi bi-star-fill" style="width: 1em; margin-right: 0.5em"></i>
    </span>
    <span v-if="(props.stars - Math.floor(props.stars)) !== 0">
        <i class="bi bi-star-half" style="width: 1em; margin-right: 0.5em"></i>
    </span>
    <span v-for="n in (props.of - Math.ceil(props.stars))">
        <i class="bi bi-star" style="width: 1em; margin-right: 0.5em"></i>
    </span>
</div>
</template>
<style scoped>
span {
    color: goldenrod;
}
</style>