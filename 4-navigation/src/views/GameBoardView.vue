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
    <div>Now playing: {{ activePlayer }}</div>
  </div>
  <div v-else>The winner is: {{ winner }}</div>
  <p><button @click="reset()">Reset</button> <button @click="goToHistory()">History</button></p>
</template>

<script setup lang="ts">
import GameField from '../components/GameField.vue'
import { useGameService } from '@/composables/gameService'
import { useRouter } from 'vue-router'

const router = useRouter()
const { reset, fields, selectField, activePlayer, winner, draw } = useGameService()

const goToHistory = () => {
  router.push('./history')
}
</script>

<style scoped>
.row {
  display: flex;
  flex-direction: row;
}
</style>
