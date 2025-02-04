import { useStorageService } from './storageService';

export interface InputValidation { error?: string }

const { data: playerName, setData: storePlayerName } = useStorageService('playerName', '');

export function useConfigService() {
  const setPlayerName = (value?: string | null) => {
    if (checkPlayerName(value)) {
      storePlayerName(value!);
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
    playerName,
    setPlayerName,
    checkPlayerName,
  }
}
