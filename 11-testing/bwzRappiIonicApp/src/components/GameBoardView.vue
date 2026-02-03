<template>
  <div v-for="row in 3" :key="row" class="row">
    <game-field
      v-for="col in 3"
      :key="col"
      :isAlternating="(row + col) % 2 === 0"
      :value="fields[row - 1]![col - 1]!"
      @fieldClick="selectField(row - 1, col - 1)"
    />
  </div>
  <div v-if="draw">
    <div>Draw, please start a new game.</div>
  </div>
  <div v-else-if="!winner">
    <div>Now playing: {{ (activePlayer === 'X') ? playerXName : playerOName }} as {{ activePlayer }}</div>
  </div>
  <div v-else>The winner is: {{ winner }}</div>
  <p><ion-button fill="outline" @click="reset()">Reset</ion-button></p>
</template>

<script setup lang="ts">
import GameField from '../components/GameField.vue'
import { useGameService } from '@/composables/gameService'
import { useConfigService } from '@/composables/configService'
import { IonButton } from '@ionic/vue'

const { reset, fields, selectField, activePlayer, winner, draw } = useGameService()
const { playerXName, playerOName } = useConfigService()
</script>

<style scoped>
.row {
  display: flex;
  flex-direction: row;
}
</style>
