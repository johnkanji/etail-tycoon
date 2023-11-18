<script setup>
import PageTitle from '../components/PageTitle.vue';
import AddProductModal from '../components/sales/AddProductModal.vue';
import ProductList from '../components/sales/ProductList.vue';

</script>
<template>
  <main role="main" class="container">
    <PageTitle>Sales</PageTitle>
    <div class="row">
      <div class="col-5 mx-auto">
        <ProductList />
      </div>
      <div class="col-5 mx-auto"></div>
    </div>
  </main>
  <AddProductModal />
</template>