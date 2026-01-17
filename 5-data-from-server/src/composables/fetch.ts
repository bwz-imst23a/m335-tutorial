import { ref, readonly } from 'vue'

export function useFetch<T>(url: string) {
  const data = ref<T | null>(null)
  const error = ref<unknown>(null)

  return {
    data: readonly(data),
    error: readonly(error),
    loadData: async () => {
      try {
        const request = await fetch(url)
        data.value = await request.json()
      } catch (err) {
        error.value = err
      }
    },
  }
}
