<template>
  <div class="row">
    <game-field />
    <game-field />
    <game-field />
  </div>
  <div class="row">
    <game-field />
    <game-field />
    <game-field />
  </div>
  <div class="row">
    <game-field />
    <game-field />
    <game-field />
  </div>
</template>

<script setup lang="ts">
import GameField from './GameField.vue'
</script>

<style scoped>
.row {
  display: flex;
  flex-direction: row;
}
</style>
