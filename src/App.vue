<template>
<div class="container-fluid bg-dark">

  <div class="row  bg-secondary">
    <div class="col">
      <button @click="redApod()" class="btn btn-dark">APOD</button>
      <button @click="redRover()" class="btn btn-dark mx-1">ROVER</button>
      <button @click="redWeather()" class="btn btn-dark">WEATHER</button>
    </div>
  </div>

<apod-page-component v-if="state.apod" />
<rover-page-component v-if="state.rover" />
<weather-page-component v-if="state.weather" />
</div>

</template>

<script>
import { reactive } from 'vue'
import { nasaService } from '../Service/NasaService'
import ApodPageComponent from './components/ApodPageComponent.vue'
import RoverPageComponent from './components/RoverPageComponent.vue'
import WeatherPageComponent from './components/WeatherPageComponent.vue'

export default {
  name: 'App',
  components: {
    ApodPageComponent,
    RoverPageComponent,
    WeatherPageComponent
  },
  setup () {
    const state = reactive({
      apod: false,
      rover: false,
      weather: false
    })
    return {
      state,
      redRover () {
        state.apod = false
        state.weather = false
        state.rover = true
        nasaService.getRover()
      },
      redApod () {
        state.rover = false
        state.weather = false
        state.apod = true
      },
      redWeather () {
        state.rover = false
        state.apod = false
        state.weather = true
        nasaService.getWeather()
      }
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.spinner{
  z-index: -2;
  position: fixed;
}
</style>
