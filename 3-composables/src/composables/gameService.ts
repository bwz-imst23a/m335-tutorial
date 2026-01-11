import { readonly, ref } from 'vue'
import { useHistoryService } from './historyService'

const { addMove } = useHistoryService()
const fields = ref([
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
])

const activePlayer = ref('X')
const winner = ref('')

export function useGameService() {
  const getCell = (row: number, col: number) => fields.value[row]![col]!
  const checkLine = (cell1: string, cell2: string, cell3: string) => (cell1 && cell2 === cell1 && cell3 === cell2)
  const checkCrossUp = () => checkLine(getCell(0, 0), getCell(1, 1), getCell(2, 2))
  const checkCrossDown = () => checkLine(getCell(2, 0), getCell(1, 1), getCell(0, 2))
  const checkRow = (row: number) => checkLine(getCell(row, 0), getCell(row, 1), getCell(row, 2))
  const checkCol = (col: number) => checkLine(getCell(0, col), getCell(1, col), getCell(2, col))
  
  const checkWinPosition = () => {
    for (let i = 0; i < 3; ++i) {
      if (checkCol(i) || checkRow(i)) {
        return true
      }
    }
    if (checkCrossUp() || checkCrossDown()) {
      return true
    }
    return false
  }
  
  return {
    winner: readonly(winner),
    activePlayer: readonly(activePlayer),
    fields: readonly(fields),
    selectField: (row: number, col: number) => {
      if (!getCell(row, col) && !winner.value) {
        fields.value[row]![col] = activePlayer.value
        addMove(row + 1, col + 1)
        
        if (checkWinPosition()) {
          winner.value = activePlayer.value
        }
        else {
          activePlayer.value = (activePlayer.value === 'X') ? 'O' : 'X'
        }
      }
    },
  }
}
