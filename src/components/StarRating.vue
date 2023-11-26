<script setup>
const props = defineProps(['stars', 'of'])
</script>
<template>
<div style="display: inline">
    <span v-for="n in Math.floor(Number(props.stars))">
        <i class="bi bi-star-fill" style="width: 1em; margin-right: 0.5em"></i>
    </span>
    <span v-if="(Number(props.stars) - Math.floor(Number(props.stars))) !== 0">
        <i class="bi bi-star-half" style="width: 1em"></i>
    </span>
    <span v-for="n in (Number(props.of) - Math.ceil(Number(props.stars)))">
        <i class="bi bi-star" style="width: 1em"></i>
    </span>
</div>
</template>
<style scoped>
span {
    color: goldenrod;
}
</style>