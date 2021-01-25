<template>
<div class="row">
  <div class="col text-light">
<h2>Today's High on Mars</h2>
<h2>{{state.appState[AT][mx]}}</h2>
  </div>
</div>
</template>

<script>
import { computed, reactive } from 'vue'
import { AppState } from '../AppState'
export default {
  name: 'WeatherPage',
  components: {
  },
  setup () {
    const state = reactive({
      appState: computed(() => AppState.weather)
    })
    return {
      state
    }
  }
}
</script>
