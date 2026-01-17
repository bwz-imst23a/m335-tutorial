import { readonly, computed } from 'vue'
import { useFetch } from './fetch'

export interface WeatherDto {
  main: { temp: number }
}

const { error, data, loadData } = useFetch<WeatherDto>('/weather-data.json')

export function useWeatherService() {
  return {
    temperature: computed(() => data.value?.main.temp),
    error: readonly(error),
    loadData,
  }
}
