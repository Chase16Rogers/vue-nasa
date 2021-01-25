import { AppState } from '../src/AppState'
import { apodApi, roverApi, weatherApi } from './AxiosService'

class NasaService {
  async getApod (date) {
    try {
      const apod = await apodApi.get(`apod?api_key=1H9xQSCmBahjSr4bJIK9yWq6CpajiKclwSDUOSBT&&date=${date}`)
      AppState.apod = apod.data
    } catch (error) {
      console.error(error)
    }
  }

  randoNum () {
    const rando = Math.floor(Math.random() * 100)
    return 1000 - rando
  }

  async getRover () {
    try {
      const res = await roverApi.get(`photos?sol=${this.randoNum()}&api_key=1H9xQSCmBahjSr4bJIK9yWq6CpajiKclwSDUOSBT`)
      AppState.rover = res.data.photos[0]
    } catch (error) {
      console.error(error)
    }
  }

  async getWeather () {
    const res = await weatherApi.get('?api_key=1H9xQSCmBahjSr4bJIK9yWq6CpajiKclwSDUOSBT&feedtype=json&ver=1.0')
    console.log(res.data[757])
    AppState.weather = res.data
  }
}

export const nasaService = new NasaService()
