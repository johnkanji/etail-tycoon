<script setup>
import { useGlobalState } from '../js/state';
import { shuffle } from 'lodash';

const state = useGlobalState()

let allImages = []
for (let i = 1; i <= 8; i++) {
  for (let j = 1; j <= 8; j++) {
    allImages.push(`../../images/avatars/image${i}x${j}.png`)
  }
}
allImages = shuffle(allImages)
state.value.player.portrait = allImages[0]
// const selectedImg = ref(allImages[0])
const select = (s) => state.value.player.portrait = s
</script>
<template>
  <div class="row justify-content-md-center">
    <div class="col-4">
      <label for="name-input" class="form-label">Name</label>
      <input type="text" class="form-control" id="name-input" v-model="state.player.name">
      <div id="miniPortraitDiv">
        <a href="#" v-for="i in allImages" @click="select(i)" :class="i === state.player.portrait ? 'active' : ''">
          <img :src="i" class="img-fluid miniPortrait">
        </a>
      </div>
    </div>
    <div class="col-4">
      <img :src="state.player.portrait" class="img-fluid">
    </div>
  </div>
</template>
<style scoped>
#miniPortraitDiv {
  padding-left: 3px;
  margin-top: 1rem;
  max-height: 210px;
  overflow: scroll;
}
.miniPortrait {
  max-width: 80px;
  margin: 3px;
}
a {
  margin: -3px;
}
.active {
  display: inline-block;
  border: 3px solid goldenrod;
  border-radius: 4px;
}
.active > img {
  margin: 0;
}
</style>