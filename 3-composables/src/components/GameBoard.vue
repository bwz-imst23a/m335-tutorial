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
</template>
  
<script setup lang="ts">
import Field from './Field.vue';
import { useGameService } from '@/composables/gameService';

const { fields, selectField, activePlayer, winner } = useGameService();
</script>
  
<style scoped>
.row {
  display: flex;
  flex-direction: row;
}
</style>