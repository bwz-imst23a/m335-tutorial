<template>
  <h1>{{ title }}</h1>
  <game-board />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import GameBoard from './components/GameBoard.vue';

const title = ref('Tic-Tac-Toe');
</script>

<style scoped>
</style>