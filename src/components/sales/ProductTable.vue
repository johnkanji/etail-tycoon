<script setup>
import { useGlobalState } from '../../js/state';
import ProductListItem from './ProductTableItem.vue';

const state = useGlobalState()
const props = defineProps(['hideEditButton'])

</script>
<template>
  <div class="productTable mb-4">
    <div class="productTableHeader d-flex justify-content-between mb-2">
      <h5 class="my-auto">Products ({{ state.products.length }}/1)</h5>
      <button v-if="props.hideEditButton !== ''" id="step-3" type="button" class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#addProductModal">
        <i class="bi bi-plus"></i>Add
      </button>
    </div>
    <hr>
    <table class="table table-bordered">
      <thead>
        <tr>
          <th scope="col">Image</th>
          <th scope="col">Name</th>
          <th scope="col">Category</th>
          <th scope="col">Demand</th>
          <th scope="col">Bulk</th>
          <th scope="col">Unit Price</th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="state.products.length === 0">
          <td colspan="6" class="text-center">
            Nothing to show here. Choose products to sell on the <router-link to="/sales">Sales</router-link> page.
          </td>
        </tr>
        <ProductListItem v-for="product in state.products" v-bind="product" />
      </tbody>
    </table>
  </div>
</template>
<style lang="scss" scoped>
  .productTable {
    a {
      padding: 0;
    }
  }
</style>