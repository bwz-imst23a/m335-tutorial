<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tab1" href="/tabs/game">
          <ion-icon aria-hidden="true" :icon="gameController" />
          <ion-label>Tic-Tac-Toe</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab2" href="/tabs/history">
          <ion-icon aria-hidden="true" :icon="trophyOutline" />
          <ion-label>Game</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab3" href="/tabs/about">
          <ion-icon aria-hidden="true" :icon="informationCircleOutline" />
          <ion-label>Info</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue'
import { gameController, trophyOutline, informationCircleOutline  } from 'ionicons/icons'
</script>
