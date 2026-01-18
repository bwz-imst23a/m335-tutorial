<template>
  <ion-card>
    <ion-card-header>
      <ion-card-title>Moves</ion-card-title>
    </ion-card-header>

    <ion-card-content>
      <ion-list :inset="true">
        <ion-item-sliding v-for="entry in history" :key="entry.move">
          <ion-item>
            <span class="item-move" slot="start">
              {{ entry.move }}
            </span>
            <ion-label>Move {{ entry.x }} / {{ entry.y }}</ion-label>
          </ion-item>
          <ion-item-options slot="end">
            <ion-item-option color="danger" @click="removeMove(entry.move)" :expandable="true">
              <ion-button fill="clear" color="light">
                <ion-icon slot="icon-only" :icon="trash"></ion-icon>
              </ion-button>
            </ion-item-option>
          </ion-item-options>
        </ion-item-sliding>

        <ion-item-sliding v-if="history.length === 0">
          <ion-item>
            <ion-label>No history item.</ion-label>
          </ion-item>
        </ion-item-sliding>
      </ion-list>
    </ion-card-content>
  </ion-card>
</template>

<script setup lang="ts">
import { useHistoryService } from '../composables/historyService';
import { IonCard, IonCardTitle, IonCardHeader, IonCardContent,
  IonList, IonItemSliding, IonItem, IonItemOption, IonItemOptions, IonLabel,
  IonIcon, IonButton } from '@ionic/vue';
import { trash } from 'ionicons/icons';

const { history, removeMove } = useHistoryService();
</script>
  
<style scoped>
.item-move {
  font-weight: bold;
  font-style: italic;
  color: var(--ion-color-primary);
}
</style>