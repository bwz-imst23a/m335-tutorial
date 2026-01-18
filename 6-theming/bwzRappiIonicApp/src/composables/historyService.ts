import { readonly, ref } from 'vue'

export interface HistoryEntry {
  move: number // specifies the move number (1 based)
  x: number // specifies the x coord in the grid (0 based)
  y: number // specifies the y coord in the grid (0 based)
}

const history = ref<Array<HistoryEntry>>([])
const count = ref(0)

export function useHistoryService() {
  return {
    history: readonly(history),
    addMove: (x: number, y: number) => {
      history.value.push({ move: ++count.value, x, y })
    },
    removeMove: (move: number) => {
      history.value = history.value.filter((e) => e.move !== move)
    },
    clear: () => {
      history.value = []
      count.value = 0
    },
  }
}
