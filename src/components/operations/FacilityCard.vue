<script setup>
import StarRating from '../StarRating.vue';
const props = defineProps(['type', 'name', 'level'])
</script>
<template>
    <div class="card text-center">
        <figure class="facility-fig">
            <img :src="`../../images/buildings/${props.type}.jpg`" class="figure-img img-fluid rounded">
        </figure>
        <figcaption>{{ props.name }}</figcaption>
        <StarRating stars="1" of="3" />
    </div>
</template>
<style>
.facility-fig {
    width: 100px;
    height: 100px;
    margin: 0;
}
</style>