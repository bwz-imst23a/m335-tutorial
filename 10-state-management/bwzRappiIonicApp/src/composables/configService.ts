//import { readonly, ref } from 'vue';
import { useStorageService } from './storageService';

export interface InputValidation { error?: string }

// ...
const { data, setData } = useStorageService('playerName', '');

export function useConfigService() {
  const setPlayerName = (value?: string | null) => {
    if (checkPlayerName(value)) {
      setData(value!);
      // playerName.value = value!;
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
    playerName: data, // readonly(playerName),
    setPlayerName,
    checkPlayerName,
  }
}
