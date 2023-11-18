<script setup>
import NewGame from './NewGame.vue';
</script>
<template>
  <div class="row">
    <div class="col-5 mx-auto d-grid gap-2">
      <button type="button" class="btn btn-primary btn-lg" disabled>Continue</button>
      <button type="button" class="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#new-game-modal">New Game</button>
    </div>
  </div>
  <NewGame id="new-game-modal" />
</template>
<style>
  /* .navbar div :not(:first-child) {
    display: none;
  } */
</style>