<template>
  <div id="container">
    <h4>{{ name }}</h4>
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
          label="Player"
          label-placement="stacked"
          type="text"
          placeholder="Your name"
          :error-text="playerNameValidation?.error"
          @ionInput="validatePlayerName"
          @ionBlur="playerNameTouched = true"
          :class="{
            'ion-valid': playerNameValidation && !playerNameValidation.error,
            'ion-invalid': playerNameValidation?.error,
            'ion-touched': playerNameTouched,
          }"
          v-model="playerNameEdit"
        ></ion-input>
      </ion-item>
    </ion-content>
  </ion-modal>
</template>

<script setup lang="ts">
import { IonButtons, IonButton, IonModal, IonHeader,
  IonContent, IonToolbar, IonTitle, IonItem, IonInput } from '@ionic/vue';
import { ref } from 'vue';
import { useConfigService, InputValidation } from '@/composables/configService'; 

defineProps<{
  name: string,
}>();

const { playerName, setPlayerName, checkPlayerName } = useConfigService();

/* UI Code */
const modal = ref();
const cancel = () => {
  modal.value.$el.dismiss(); // close the dialog
};
const confirm = () => {
  if (!playerNameValidation.value) {
    validatePlayerName();
  }

  if (!playerNameValidation.value?.error) {
    setPlayerName(playerNameEdit.value); // store the entire configuration (including the players name)
    modal.value.$el.dismiss(); // close the dialog
  }
};
const open = () => { 
  playerNameTouched.value = false;
  playerNameValidation.value = null;
  playerNameEdit.value = playerName.value; // load the configuration
};

/* UI State - Validation Code */
const validatePlayerName = () => {
  playerNameTouched.value = true;
  playerNameValidation.value = checkPlayerName(playerNameEdit.value);
};
const playerNameTouched = ref(false);
const playerNameValidation = ref<InputValidation | null>(null);
const playerNameEdit = ref(''); // default value ''
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