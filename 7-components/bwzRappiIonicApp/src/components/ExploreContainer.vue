<template>
  <div id="container">
    <h4>About Tic-Tac-Toe</h4>
    <div><ion-button id="settings">Open Settings</ion-button></div>
  </div>
  <ion-modal ref="modal" @ionModalWillPresent="open" trigger="settings">
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-button @click="cancel">Cancel</ion-button>
        </ion-buttons>
        <ion-title>Settings</ion-title>
        <ion-buttons slot="end">
          <ion-button :strong="true" @click="confirm">Confirm</ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-item>
        <ion-input
          label="Player X"
          label-placement="stacked"
          type="text"
          placeholder="Your name"
          :error-text="playerXNameValidation?.error"
          @ionInput="validatePlayerXName"
          @ionBlur="playerXNameTouched = true"
          :class="{
            'ion-valid': playerXNameValidation && !playerXNameValidation.error,
            'ion-invalid': playerXNameValidation?.error,
            'ion-touched': playerXNameTouched,
          }"
          v-model="playerXNameEdit"
        ></ion-input>
      </ion-item>
      <ion-item>
        <ion-input
          label="Player O"
          label-placement="stacked"
          type="text"
          placeholder="Your name"
          :error-text="playerONameValidation?.error"
          @ionInput="validatePlayerOName"
          @ionBlur="playerONameTouched = true"
          :class="{
            'ion-valid': playerONameValidation && !playerONameValidation.error,
            'ion-invalid': playerONameValidation?.error,
            'ion-touched': playerONameTouched,
          }"
          v-model="playerONameEdit"
        ></ion-input>
      </ion-item>
    </ion-content>
  </ion-modal>
</template>

<script setup lang="ts">
import { IonButtons, IonButton, IonModal, IonHeader,
  IonContent, IonToolbar, IonTitle, IonItem, IonInput } from '@ionic/vue'
import { ref } from 'vue'
import { useConfigService, InputValidation } from '@/composables/configService'

defineProps<{
  name: string,
}>()

const { playerXName, setPlayerXName, checkPlayerXName,
  playerOName, setPlayerOName, checkPlayerOName } = useConfigService()

/* UI Code */
const modal = ref()
const cancel = () => {
  modal.value.$el.dismiss() // close the dialog
}
const confirm = () => {
  if (!playerXNameValidation.value) {
    validatePlayerXName()
  }
  if (!playerONameValidation.value) {
    validatePlayerOName()
  }

  if (!playerXNameValidation.value?.error && !playerONameValidation.value?.error) {
    setPlayerXName(playerXNameEdit.value) // store the configuration
    setPlayerOName(playerONameEdit.value)
    modal.value.$el.dismiss() // thereafter, close the dialog
  }
}
const open = () => { 
  playerXNameTouched.value = false
  playerXNameValidation.value = null
  playerXNameEdit.value = playerXName.value // load the configuration

  playerONameTouched.value = false
  playerONameValidation.value = null
  playerONameEdit.value = playerOName.value // load the configuration
}

/* UI State - Validation Code */
const validatePlayerXName = () => {
  playerXNameTouched.value = true
  playerXNameValidation.value = checkPlayerXName(playerXNameEdit.value)
}

const validatePlayerOName = () => {
  playerONameTouched.value = true
  playerONameValidation.value = checkPlayerOName(playerONameEdit.value)
}

const playerXNameTouched = ref(false)
const playerXNameValidation = ref<InputValidation | null>(null)
const playerXNameEdit = ref('') // default value ''

const playerONameTouched = ref(false)
const playerONameValidation = ref<InputValidation | null>(null)
const playerONameEdit = ref('') // default value ''
</script>

<style scoped>
#container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>