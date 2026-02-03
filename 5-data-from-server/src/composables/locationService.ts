import { readonly, computed } from 'vue'
import { useFetch } from './fetch'

export interface LocationDto {
  location: { name: string }
}

const { error, data, loadData } = useFetch<LocationDto>('/location.json')

export function useLocationService() {
  return {
    location: computed(() => data.value?.location.name),
    error: readonly(error),
    loadData,
  }
}
