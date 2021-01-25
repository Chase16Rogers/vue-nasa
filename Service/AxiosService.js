import axios from 'axios'

export const apodApi = axios.create({
  baseURL: 'https://api.nasa.gov/planetary',
  timeout: 3000
})

export const roverApi = axios.create({
  baseURL: 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity',
  timeout: 3000
})

export const weatherApi = axios.create({
  baseURL: 'https://api.nasa.gov/insight_weather',
  timeout: 3000
})
