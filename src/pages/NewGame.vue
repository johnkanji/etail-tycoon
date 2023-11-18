<script setup>
import { useRouter } from 'vue-router';
import CharacterCreation from '../components/CharacterCreation.vue';
import { useGlobalState } from '../js/state';

const state = useGlobalState()
const router = useRouter()

function startTutorial() {
  console.log('start tutorial')
  const state = useGlobalState()
  state.value.products = []
  state.value.tutorial.enabled = true
  router.push('/dashboard')
}

</script>
<template>
  <div id="new-game-modal" class="modal fade" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">New Game</h5>
        </div>
        <div class="modal-body mx-4">
          <p class="lead">
            Congratulations on your new job as CEO. We're very excited you have decided to join us in building our online empire!
          </p>
          <section id="character-creation">
            <CharacterCreation />
          </section>
          <section id="difficulty-selection">
            <div class="mx-3">
              
              <p>
                Dear {{ state.player.name }},
              </p>
              <p>
                Welcome to YourRetailCo! As the newly appointed CEO, you're poised to lead our online retail empire. Get ready to navigate the intricacies of product curation, budget management, and team assembly, as your decisions shape YourRetailCo's destiny.
              </p>
              <p>
                Before you begin, the Board of Directors offers a tailored training session. This brief onboarding experience will equip you with essential insights, ensuring you're ready to optimize business acumen and position YourRetailCo for unprecedented success.
              </p>
              <p>
                Are you prepared for the challenges that lie ahead?
              </p>
              <p>
                Best,
                <br>
                YourRetailCo Board of Directors
              </p>
            </div>
            <div class="d-flex flex-column col-sm-5 mx-auto mt-5">
              <button class="btn btn-primary mb-2" data-bs-dismiss="modal" data-bs-target="#new-game-modal" @click="startTutorial">I'm new (start tutorial)</button>
              <button class="btn btn-primary" disabled>I've done this before</button>
            </div>
          </section>
        </div>
        <!-- <div class="modal-footer">
          <button class="btn btn-secondary disabled">Back</button>
          <button class="btn btn-primary">Next</button>
        </div> -->
      </div>
    </div>
  </div>
</template>
