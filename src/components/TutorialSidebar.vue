<script setup>
  import { Popover } from 'bootstrap';
  import { ref, watchEffect, onMounted } from 'vue';
  
  const steps = [
    { elementId: 'step-0', title: 'Step 1', content: 'Click here to do X.' },
    { elementId: 'step-1', title: 'Step 2', content: 'Click here to do Y.' },
    { elementId: 'step-2', title: 'Step 3', content: 'Click here to do Z.' },
  ];
  
  const tutorialStep = ref(0);
  
  const advanceTutorial = () => {
    tutorialStep.value++;
  };

  const previousTutorial = () => {
    if (tutorialStep.value > 0) {
      tutorialStep.value--;
    }
  };

  const popovers = steps.map(step => {
    const element = document.getElementById(step.elementId);
    return new Popover(element, {
      trigger: 'manual',
      html: true,
      title: step.title,
      content: `${step.content} <button id="${step.elementId}-advance" class="btn btn-primary">Next</button>`,
      customClass: 'tutorial-popover' // Add a custom class
    });
  });

  watchEffect(() => {
    // Hide all popovers
    popovers.forEach(popover => popover.hide());

    // Show the popover for the current step
    if (popovers[tutorialStep.value]) {
      popovers[tutorialStep.value].show();
    }
  });

  onMounted(() => {
    // Add click event listener to the advance button in the popover
    document.addEventListener('click', event => {
      if (event.target && event.target.id.endsWith('-advance')) {
        advanceTutorial();
      }
    });
  });
</script>

<template>
  <div class="offcanvas offcanvas-end" tabindex="-1" id="tutorialOffcanvas" aria-labelledby="tutorialOffcanvasLabel" data-bs-backdrop="false" data-bs-scroll="true">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasExampleLabel">Tutorial - Step {{ tutorialStep + 1 }}</h5>
        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <div v-if="tutorialStep === 0">
          Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
        </div>
        <hr>
        <div class="offcanvas-footer fixed-bottom d-flex justify-content-between">
          <button type="button" class="btn btn-primary" @click="previousTutorial" :disabled="tutorialStep === 0">
            <i class="bi bi-arrow-left"></i>
          </button>
          <span class="my-auto">{{ tutorialStep + 1 }} of 10</span>
          <button type="button" class="btn btn-primary" @click="advanceTutorial">
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