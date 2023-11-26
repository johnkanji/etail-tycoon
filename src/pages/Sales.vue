<script setup>
import PageTitle from '../components/PageTitle.vue';
import AddProductModal from '../components/sales/AddProductModal.vue';
import ProductTable from '../components/sales/ProductTable.vue';
import SalesChart from '../components/sales/SalesChart.vue';

</script>
<template>
  <main role="main" class="container">
    <PageTitle>Sales</PageTitle>
    <div class="row">
      <div class="col-5 mx-auto">
        <ProductTable />
      </div>
      <div class="col-5 mx-auto">
        <SalesChart/>
      </div>
    </div>
  </main>
  <AddProductModal />
</template>