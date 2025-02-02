<template>
<div v-for="row in 3" class="row">
  <field v-for="col in 3" :value="fields[row - 1][col - 1]" @fieldClick="selectField(row - 1, col - 1)" />
</div>
<div v-if="!winner">
  <div>Now playing: {{ activePlayer }}</div>
</div>
<div v-else>
  The winner is: {{ winner }}
</div>
<p><button @click="goToHistory()">History</button></p>
</template>
  
<script setup lang="ts">
import Field from '../components/Field.vue';
import { useGameService } from '@/composables/gameService';
import { useRouter } from 'vue-router';

const router = useRouter();

const { fields, selectField, activePlayer, winner } = useGameService();

const goToHistory = () => {
  router.push('./history');
}
</script>
  
<style scoped>
.row {
  display: flex;
  flex-direction: row;
}
</style>