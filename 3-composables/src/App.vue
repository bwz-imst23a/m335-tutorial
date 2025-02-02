<template>
  <h1>{{ title }}</h1>
  <game-board />
  <history-view />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import GameBoard from './components/GameBoard.vue';
import HistoryView from './components/HistoryView.vue';

const title = ref('Tic-Tac-Toe');
</script>

<style scoped>
</style>