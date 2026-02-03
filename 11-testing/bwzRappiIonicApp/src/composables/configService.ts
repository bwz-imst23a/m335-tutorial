import { useStorageService } from './storageService'

export interface InputValidation { error?: string }

const { data: playerXName, setData: storePlayerXName } = useStorageService('playerXName', '')
const { data: playerOName, setData: storePlayerOName } = useStorageService('playerOName', '')

export function useConfigService() {
  const setPlayerXName = (value?: string | null) => {
    if (checkPlayerXName(value)) {
      storePlayerXName(value!)
    }
  }
  const checkPlayerXName = (value?: string | null) => {
    if (value && value.length > 2) {
      return { } // value is valid
    } else {
      return { error: 'Invalid Name' }
    }
  }

  const setPlayerOName = (value?: string | null) => {
    if (checkPlayerOName(value)) {
      storePlayerOName(value!)
    }
  }
  const checkPlayerOName = (value?: string | null) => {
    if (value && value.length > 2) {
      return { } // value is valid
    } else {
      return { error: 'Invalid Name' }
    }
  }

  return {
    playerXName,
    setPlayerXName,
    checkPlayerXName,

    playerOName,
    setPlayerOName,
    checkPlayerOName,
  }
}