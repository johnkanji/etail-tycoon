<script setup>
  import { Popover } from 'bootstrap';
  import { watchEffect, nextTick } from 'vue';
  import { useGlobalState } from '../js/state';
  
  const steps = [
    { elementId: 'step-0', title: 'Welcome to the Tutorial', content: 'Click here to view the tutorial. It will guide you through setting up an online retailer.' },
    { elementId: 'step-1', title: 'Step 1', content: 'Click here to meet with the Board of Directors and view your current objectives.' },
    { elementId: 'step-2', title: 'Step 2', content: "Next let's choose our first product to sell. Go to the Sales page." },
    { elementId: 'step-3', title: 'Step 3', content: 'Click here to choose a product to sell.' },
  ];
  
  const state = useGlobalState();
  const tutorial = state.value.tutorial;

  let currentPopover;

  watchEffect(() => {
  // Hide the current popover
  if (currentPopover) {
    currentPopover.hide();
    currentPopover.dispose();
  }

  // Create and show the popover for the current step
  const step = steps[tutorial.step];
  if (step) {
    nextTick(() => {
      const element = document.getElementById(step.elementId);
      if (element) {
        currentPopover = new Popover(element, {
          trigger: 'manual',
          html: true,
          title: step.title,
          content: `${step.content} <button id="${step.elementId}-advance" class="btn btn-primary">Next</button>`,
          customClass: 'tutorial-popover' // Add a custom class
        });
        currentPopover.show();
      }
    });
  }
});

</script>

<template>
  <div class="offcanvas offcanvas-end" tabindex="-1" id="tutorialOffcanvas" aria-labelledby="tutorialOffcanvasLabel" data-bs-backdrop="false" data-bs-scroll="true">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasExampleLabel">Tutorial - Step {{ tutorial.step }}</h5>
        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <div v-if="tutorial.step === 1">
          <h6>Welcome to E-tail Tycoon!</h6>
          <p>
            Let’s get you started. This is the Dashboard - it will show you a quick overview of how your business is doing. It's looking a little empty right now, but we'll fix that soon. First let's meet the Board.
          </p>
        </div>
        <div v-if="tutorial.step === 2">
          <h6>The Board and Objectives</h6>
          <p>
            The Board of Directors (BOD) are a group of people that you will report to. They set your objectives and all decisions you make will be judged by them. 
            <br>
            Succeed in achieving the objectives, and the BOD’s trust in you will rise. 
            <br>
            Fail, and you risk losing everything and, potentially, your role in the company.
          </p>
        </div>
        <div v-if="tutorial.step === 3">
          <p>
            Your business will depend on how you manage the products you sell. Generally, less units will be sold of higher priced items. Conversely, lower-priced items will sell more frequently.
          </p><p>
            The unit price of your item is shown. Increase the price, and you will reap profits. Note: Increasing the price significantly higher than competitors may result in poor customer satisfaction and/or public image.
          </p><p>
            Go ahead and click the “Add” button to add a product to your store.
          </p>
        </div>
        <hr>
        <div class="offcanvas-footer fixed-bottom d-flex justify-content-between">
          <button type="button" class="btn btn-primary" @click="tutorial.previousTutorial" :disabled="tutorial.step === 0">
            <i class="bi bi-arrow-left"></i>
          </button>
          <span class="my-auto">{{ tutorial.step }} of 10</span>
          <button type="button" class="btn btn-primary" @click="tutorial.advanceTutorial">
            <i class="bi bi-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
</template>

<style lang="scss">
.tutorial-popover {
  border: 1px solid #888888;
  border-radius: 4px; // Rounded corners
  background-color: #f3f3f3; // Light grey background
  color: #111111; // Dark text
  font-family: Arial, sans-serif; // Arial font
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15); // Shadow for depth
  z-index: 1040 !important;

  .popover-header {
    background-color: goldenrod; // Goldenrod background
    color: #111111; // Dark text
    border-bottom: 1px solid #888888; // Dark grey border
    border-radius: 3px 3px 0 0; // Rounded corners at the top
    font-weight: bold; // Bold font
  }

  .popover-body {
    padding: 10px; // More padding
  }
}
</style>