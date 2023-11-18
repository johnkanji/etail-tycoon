<script setup>
  import { currencyFormatter } from '../../js/formatter';
  const props = defineProps(['image', 'name', 'category', 'demand', 'bulk', 'unitPrice'])
</script>
<template>
  <tr>
    <td class="p-0" scope="row">
      <img :src="`../../images/products/${props.image}.jpg`" class="product-thumb img-fluid">
    </td>
    <td>{{ props.name }}</td>
    <td>{{ props.category }}</td>
    <td>{{ props.demand }}</td>
    <td>{{ props.bulk }}</td>
    <td class="text-end">{{ currencyFormatter.format(props.unitPrice) }}</td>
  </tr>
</template>
<style>
.product-thumb {
  width: 150px;
  height: 150px;
}
</style>