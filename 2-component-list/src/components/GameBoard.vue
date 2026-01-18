<template>
  <div v-for="row in 3" :key="row" class="row">
    <game-field
      v-for="col in 3"
      :key="col"
      :isAlternating="(row + col) % 2 === 0"
      :value="fields[row - 1]![col - 1]!"
      @fieldClick="handleClick(row - 1, col - 1)"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import GameField from './GameField.vue'

const fields = ref([
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
])
const handleClick = (row: number, col: number) => {
  fields.value[row]![col] = 'X'
}
</script>

<style scoped>
.row {
  display: flex;
  flex-direction: row;
}
</style>
