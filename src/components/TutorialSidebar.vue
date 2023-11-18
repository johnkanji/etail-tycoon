<script setup>
import { useGlobalState } from '../js/state';
import { useRoute } from 'vue-router';

const state = useGlobalState()

</script>
<template>
  <div class="offcanvas offcanvas-end" tabindex="-1" id="tutorialOffcanvas" aria-labelledby="tutorialOffcanvasLabel" data-bs-backdrop="false" data-bs-scroll="true">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasExampleLabel">Tutorial</h5>
        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <div v-if="state.tutorial.stage === 1">
          Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
        </div>
        <hr>
        <div class="offcanvas-footer fixed-bottom d-flex justify-content-between">
          <button type="button" class="btn btn-primary">
            <i class="bi bi-arrow-left"></i>
          </button>
          <span class="my-auto">{{ state.tutorial.stage }} of 10</span>
          <button type="button" class="btn btn-primary">
            <i class="bi bi-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
</template>