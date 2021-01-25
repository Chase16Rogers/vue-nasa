<template>
<div class="searchComponent">
<form @submit.prevent="sendDate()">
  <input v-model="state.search" type="date">
  <button class="btn btn-outline-success">See the Universe</button>
</form>
</div>
</template>

<script>
import { reactive } from 'vue'
import { nasaService } from '../../Service/NasaService'
export default {
  name: 'searchComponenet',
  setup () {
    const state = reactive({
      search: ''
    })
    return {
      state,
      sendDate () {
        nasaService.getApod(state.search)
      }
    }
  }
}
</script>
