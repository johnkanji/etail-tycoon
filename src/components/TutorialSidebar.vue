<script setup>
  import { Popover } from 'bootstrap';
  import { watchEffect, nextTick } from 'vue';
  import { useGlobalState } from '../js/state';

  const steps = [
    { elementId: 'step-0', title: 'Welcome to the Tutorial', content: 'Click here to view the tutorial. It will guide you through setting up an online retailer.' },
    { elementId: 'step-1', title: 'Step 1', content: 'Click here to meet with the Board of Directors and view your current objectives.' },
    { elementId: 'step-2', title: 'Step 2', content: "Next let's choose our first product to sell. Go to the Sales page." },
    { elementId: 'step-3', title: 'Step 3', content: 'Click here to choose a product to sell.' },
    { elementId: 'step-4', title: 'Step 4', content: 'Go to the Employees page to hire some workers.' },
    { elementId: 'step-5', title: 'Step 5', content: 'Click here to hire some workers. Just enter the number you want to hire and click "Save"' },
    { elementId: 'step-6', title: 'Step 6', content: 'Click here to to proceed with your decision and see how your new additions have affected things.' },
    { elementId: 'step-7', title: 'Step 7', content: "The Stock Price reflects the overall success of the company. It's based on your Budget, Public Image, and Customer Satisfaction." },
    { elementId: 'step-8', title: 'Step 8', content: "The Budget meter represents the amount of money you have available to spend." },
    { elementId: 'step-9', title: 'Step 9', content: "The Public Image meter represents the how favourably the public views our company." },
    { elementId: 'step-10', title: 'Step 10', content: "The Customer Satisfaction meter represents how happy recent customers have been with their shopping experience." },
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
  console.log(step)
  if (step) {
    nextTick(() => {
      const element = document.getElementById(step.elementId);
      console.log(element);
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
  <div class="offcanvas offcanvas-bottom" tabindex="-1" id="tutorialOffcanvas" aria-labelledby="tutorialOffcanvasLabel" data-bs-backdrop="false" data-bs-scroll="true">
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
          <h6>Choosing Our First Product</h6>
          <p>
            Your business will depend on how you manage the products you sell. Generally, less units will be sold of higher priced items. Conversely, lower-priced items will sell more frequently.
          </p><p>
            The unit price of your item is shown. Increase the price, and you will reap profits. Note: Increasing the price significantly higher than competitors may result in poor customer satisfaction and/or public image.
          </p><p>
            Go ahead and click the “Add” button to add a product to your store.
          </p>
        </div>
        <div v-if="tutorial.step === 4 || tutorial.step === 5">
          <h6>Hire Some Workers</h6>
          <p>
            As your business grows, you will need to hire employees. Let's hire some warehouse operators and delivery drivers. 
          </p><p>
            Employees come at a financial cost, however they will result in greater efficacy when business starts to grow! Employees will have a satisfaction meter, and their morale will depend on your moral, ethical and professional decisions.
          </p><p>
            Click the "Hire" button and hire 5 Warehouse Packers and 2 Delivery Drivers.
          </p>
        </div>
        <div v-if="tutorial.step === 6">
          <h6>Advance to the Next Week</h6>
          <p>
            In eTail Tycoon, time is measured in weeks. Each week, you will be able to make decisions that will affect your business. As you make changes, you can see an estimate of how they will affect your Budget, Public Image, and Customer Satisfaction, but remember, these are only estimates.
          </p>
          <p>
            Click the "Next Week" button now to advance to the next week.
          </p>
        </div>
        <div v-if="tutorial.step === 7">
          <h6>Tracking Your Success - Stock Price</h6>
          <p>
            The greatest determinant of your business’ success will be your stock price. Your stock price will depend on your decisions. Your decisions will affect three main areas: budget, public image, and customer satisfaction.
          </p><p>
            Click next to find out more.
          </p>
        </div>
        <div v-if="tutorial.step === 8">
          <h6>Tracking Your Success - Budget</h6>
          <p>
            Your Budget meter has gone down! This is because you have an expense in the purchased items to be stocked in your warehouse.
            The hiring of the warehouse operator and warehouse driver have also added payroll to your business, which is an expense. 
          </p><p>
            Click on the <router-link to="/finance">Finance</router-link> tab to track your budget, including income and expenses.
          </p>
        </div>
        <div v-if="tutorial.step === 9">
          <h6>Tracking Your Success - Public Image</h6>
          <p>
            Your Public Image meter has gone up (points to star rating)! This is because word has gone out on social media that you are investing in your business with the hiring of employees and the addition of one item. Word is starting to spread about E-tail Tycoon in local communities. Potential investors are getting excited!
          </p><p>
            Your public image will change depending on decisions you make that are business-oriented. Your public image will also change based on ethical and moral decisions you make.
          </p>
        </div>
        <div v-if="tutorial.step === 10">
          <h6>Tracking Your Success - Customer Satisfaction</h6>
          <p>
            Your Customer Service meter has gone up to 🙂! This is because you have now hired another two employees, who will definitely help you keep up with orders! As your business grows, you will need to ensure customers are satisfied. Not having enough employees could result in delayed package deliveries, overworked staff and unprofessional service. Having too many staff may result in an increased payroll that may not be utilized to its potential. 
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