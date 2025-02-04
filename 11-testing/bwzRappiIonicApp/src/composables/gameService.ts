import { readonly, ref } from 'vue';
import { useHistoryService } from './historyService';

const { addMove } = useHistoryService();
const fields = ref( [
    [ '', '', '' ],
    [ '', '', '' ],
    [ '', '', '' ]
  ] );

const activePlayer = ref('X');
const winner = ref('');

export function useGameService() {
  const checkLine = (cell1: string, cell2: string, cell3: string) => (cell1 && cell2 === cell1 && cell3 === cell2);
  const checkCrossUp = () => checkLine(fields.value[0][0], fields.value[1][1], fields.value[2][2]);
  const checkCrossDown = () => checkLine(fields.value[2][0], fields.value[1][1], fields.value[0][2]);
  const checkRow = (row: number) => checkLine(fields.value[row][0], fields.value[row][1], fields.value[row][2]);
  const checkCol = (col: number) => checkLine(fields.value[0][col], fields.value[1][col], fields.value[2][col]);
  
  const checkWinPosition = () => {
    for (let i = 0; i < 3; ++i) {
      if (checkCol(i) || checkRow(i)) {
        return true;
      }
    }
    if (checkCrossUp() || checkCrossDown()) {
      return true;
    }
    return false;
  };

  return {
    winner: readonly(winner),
    activePlayer: readonly(activePlayer),
    fields: readonly(fields),
    selectField: (row: number, col: number) => {
      if (!fields.value[row][col] && !winner.value) {
        fields.value[row][col] = activePlayer.value;
        addMove(row + 1, col + 1);

        if (checkWinPosition()) {
          winner.value = activePlayer.value;
        }
        else {
          activePlayer.value = (activePlayer.value === 'X') ? 'O' : 'X';
        }
      }
    }
  }
}