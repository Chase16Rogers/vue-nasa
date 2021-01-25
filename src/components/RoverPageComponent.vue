<template>
<div class="row">
  <div class="col text-light">
    <h2>Front Hazard Avoidance Camera</h2>
<img :src="`${state.appState.img_src}`" alt="">
  </div>
</div>
</template>

<script>
import { computed, reactive } from 'vue'
import { AppState } from '../AppState'
export default {
  name: 'RoverPage',
  components: {
  },
  setup () {
    const state = reactive({
      appState: computed(() => AppState.rover)
    })
    return {
      state
    }
  }
}
</script>
