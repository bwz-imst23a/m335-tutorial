import { readonly, ref } from 'vue'

export interface InputValidation { error?: string }

const playerXName = ref('') // load config from local Storage
const playerOName = ref('') // load config from local Storage

export function useConfigService() {
  const setPlayerXName = (value?: string | null) => {
    if (checkPlayerXName(value)) {
      playerXName.value = value!
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
      playerOName.value = value!
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
    playerXName: readonly(playerXName),
    setPlayerXName,
    checkPlayerXName,

    playerOName: readonly(playerOName),
    setPlayerOName,
    checkPlayerOName,
  }
}