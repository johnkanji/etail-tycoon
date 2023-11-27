<script setup>
import ResourceBar from './resource_bar/ResourceBar.vue';

// const props = defineProps(['title'])
</script>
<template>
<div class="row">
    <div class="d-flex">
        <h2><slot></slot></h2>
        <div class="flex-fill"></div>
        <ResourceBar />
    </div>
    <hr/>
</div>
</template>