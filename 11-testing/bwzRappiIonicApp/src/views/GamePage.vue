<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Tic-Tac-Toe</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tic-Tac-Toe</ion-title>
        </ion-toolbar>
      </ion-header>

      <main>
        <game-board-view></game-board-view>
      </main>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue'
import GameBoardView from '../components/GameBoardView.vue'
</script>

<style scoped>
main {
  margin: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>