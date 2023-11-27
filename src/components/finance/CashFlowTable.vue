<script setup>
import { computed } from 'vue';
import { useGlobalState } from '../../js/state';
import { currencyFormatter } from '../../js/formatter';

const state = useGlobalState()

const payrollEst = computed(() => { 
    return state.value.employees.workers
        .map(w => parseInt(w.num_employed) * parseFloat(w.wage) * 40)
        .reduce((a,b) => a + b, 0)
})
const inventoryEst = computed(() => {
    return state.value.products
        .map(p => Math.floor(10*p.demand) * parseFloat(p.unitPrice))
        .reduce((a,b) => a + b, 0)
})
const rentEst = 1000;

const salesEst = computed(() => {
    return state.value.products
        .map(p => Math.floor(15*p.demand) * parseFloat(1.5*p.unitPrice))
        .reduce((a,b) => a + b, 0)
})

</script>
<template>
  <div class="cashflowTableHeader d-flex justify-content-between mb-2">
    <h5 class="my-auto">Cash Flow</h5>
  </div>
  <hr>
  <table class="table table-bordered">
    <thead>
      <tr>
        <th scope="col">Description</th>
        <th class="text-end" scope="col">This Week</th>
        <th class="text-end" scope="col">Next Week (Estimate)</th>
      </tr>
    </thead>
    <tbody>
      <tr class="table-danger">
        <td>Payroll</td>
        <td class="text-end">{{ currencyFormatter.format(0) }}</td>
        <td class="text-end">{{ currencyFormatter.format(payrollEst) }}</td>
      </tr>
      <tr class="table-danger">
        <td>Inventory</td>
        <td class="text-end">{{ currencyFormatter.format(0) }}</td>
        <td class="text-end">{{ currencyFormatter.format(inventoryEst) }}</td>
      </tr>
      <tr class="table-danger">
        <td>Rent</td>
        <td class="text-end">{{ currencyFormatter.format(0) }}</td>
        <td class="text-end">{{ currencyFormatter.format(rentEst) }}</td>
      </tr>
      <tr class="table-success">
        <td>Product Sales</td>
        <td class="text-end">{{ currencyFormatter.format(0) }}</td>
        <td class="text-end">{{ currencyFormatter.format(salesEst) }}</td>
      </tr>
      <tr class="table-light">
        <td><strong>Total</strong></td>
        <td class="text-end">{{ currencyFormatter.format(0) }}</td>
        <td class="text-end">{{ currencyFormatter.format(salesEst - payrollEst - inventoryEst - rentEst) }}</td>
      </tr>
    </tbody>
  </table>
</template>
<style scoped>
tr.table-light {
  font-weight: bold;
}
</style>