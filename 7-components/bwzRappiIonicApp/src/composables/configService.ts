import { readonly, ref } from 'vue';

export interface InputValidation { error?: string }

const playerName = ref(''); // load config from local Storage

export function useConfigService() {
  const setPlayerName = (value?: string | null) => {
    if (checkPlayerName(value)) {
      playerName.value = value!;
    }
  };

  const checkPlayerName = (value?: string | null) => {
    if (value && value.length > 2) {
      return { }; // value is valid
    } else {
      return { error: 'Invalid Name' };
    }
  };

  return {
    playerName: readonly(playerName),
    setPlayerName,
    checkPlayerName,
  }
}
