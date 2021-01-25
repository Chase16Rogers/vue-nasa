<template>

<div class="row flex-grow">
  <div class="col-md-3 col-sm-12 flex-grow">
    <p class="text-light mb-0 mt-5">Enter a date to see a stunning vista.</p>
    <search-component class="mb-5" />
  <h5 class="align-self-center text-light">{{state.appState.explanation}}</h5>
  </div>
  <div class="col-md-9 col-sm-12">
  <img :src="`${state.appState.hdurl}`" class="limit img-fluid flex-grow px-0" alt="">
  </div>
</div>

</template>

<script>
import { computed, reactive } from 'vue'
import SearchComponent from './SearchComponent.vue'
import { AppState } from '../AppState'

export default {
  name: 'ApodPage',
  components: {
    SearchComponent
  },
  setup () {
    const state = reactive({
      appState: computed(() => AppState.apod)
    })
    return {
      state
    }
  }
}
</script>

<style scoped>
.limit{
  max-height: 90vh;
}
</style>
