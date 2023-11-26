<script setup>
import { shuffle, slice, includes, remove } from 'lodash'
import { useGlobalState } from '../../js/state';
import { products } from '../../js/products.js'
import { currencyFormatter } from '../../js/formatter';

const state = useGlobalState()
const productOptions = slice(shuffle(products), 0, 5)

const addProduct = (product) => {
  if (!includes(state.value.products.map(p => p.name), product.name) && state.value.products.length < 1) {
    state.value.products.push(product)
  }
}

function removeProduct(product) {
  if (includes(state.value.products.map(p => p.name), product.name)) {
    remove(state.value.products, product)
  }
}

const clickSave = () => {
  if (state.value.tutorial.step === 3) { state.value.tutorial.advanceTutorial() }
}

</script>
<template>
  <div class="modal fade" id="addProductModal" tabindex="-1">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Add Product</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="addProductTable">
            <div class="productTableHeader d-flex justify-content-between mb-2">
              <h5 class="my-auto">Products</h5>
            </div>
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">Image</th>
                  <th scope="col">Name</th>
                  <th scope="col">Category</th>
                  <th scope="col">Demand</th>
                  <th scope="col">Bulk</th>
                  <th scope="col">Unit Price</th>
                  <th scope="col">Add</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="product in productOptions">
                  <td class="p-0" scope="row">
                    <img :src="`/etail-tycoon/images/products/${product.image}.jpg`" class="product-thumb img-fluid">
                  </td>
                  <td>{{ product.name }}</td>
                  <td>{{ product.category }}</td>
                  <td>{{ product.demand }}</td>
                  <td>{{ product.bulk }}</td>
                  <td class="text-end">{{ currencyFormatter.format(product.unitPrice) }}</td>
                  <td>
                    <button type="button" class="btn btn btn-success" v-if="!includes(state.products.map(p => p.name), product.name)">
                      <i class="bi bi-plus-square-fill" @click="addProduct(product)"></i>
                    </button>
                    <button type="button" class="btn btn btn-danger" v-if="includes(state.products.map(p => p.name), product.name)">
                      <i class="bi bi-x-square-fill" @click="removeProduct(product)"></i>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" @click="clickSave" data-bs-dismiss="modal">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</template>