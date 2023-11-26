<script setup>
import { clearLocalStorage, logLocalStorage } from '../js/state.js'
</script>
<template>
  <hr class="mt-5 mb-4">
  <div class="d-flex">
    <p class="text-muted">© 2023 John Kanji and Michael Stellatos</p>
    <button @click="logLocalStorage" type="button" class="btn btn-outline-info ms-auto">Log localStorage</button>
    <button @click="clearLocalStorage" type="button" class="btn btn-outline-danger ms-auto">Clear localStorage</button>
  </div>
</template>
