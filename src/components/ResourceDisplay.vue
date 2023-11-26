<script setup>
import { onMounted } from 'vue'
import { Tooltip } from 'bootstrap'
const props = defineProps(['text', 'info', 'icon', 'badgeType'])
onMounted(() => {
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
        .forEach(tooltip => {
            new Tooltip(tooltip)
    })
});
</script>
<template>
    <h4 class="me-2" data-bs-toggle="tooltip" data-bs-placement="bottom" :data-bs-title="props.info">
        <div :class="'badge bg-' + props.badgeType">
            <i :class="'bi ' + props.icon"></i>
            <slot></slot>
        </div>
    </h4>
</template>
<style lang="scss" scoped>
.badge {
    /* margin-left: 0.25rem; */
    /* margin-right: 0.25rem; */
    font-weight: normal !important;
}
.bg-primary {
    color: var(--bs-body-color);
}
i {
    width: 1em;
    margin-right: 0.25em;
}
</style>