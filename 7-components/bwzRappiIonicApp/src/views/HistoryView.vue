<template>
  <header>
    <h2>Moves</h2>
  </header>
  <ul class="messages">
    <li v-for="entry in history" :key="entry.move">
      <div>
        <span class="badge">{{ entry.move }}</span>
        Move {{ entry.x }} / {{ entry.y }}
      </div>
      <button type="button" title="delete message" class="remove-message" @click="removeMove(entry.move)">X</button>
    </li>
  </ul>
  <p><button @click="goToGame()">Game</button></p>
</template>
  
<script setup lang="ts">
import { useHistoryService } from '../composables/historyService';
import { useRouter } from 'vue-router';

const router = useRouter();
const { history, removeMove } = useHistoryService();

const goToGame = () => {
  router.push({ name: 'game' });
}
</script>
  
<style scoped>
.messages {
  margin: 0 0 2em 0;
  list-style-type: none;
  width: 100%;
}
.messages li {
  position: relative;
  display: flex;
}

.messages div {
  color: #333;
  text-decoration: none;
  background-color: #EEE;
  margin: .5em;
  line-height: 1.8em;
  border-radius: 4px;
  display: block;
  width: 100%;
}

.messages .badge {
  display: inline-block;
  font-size: small;
  text-align: center;
  color: white;
  background-color: #405061;
  min-width: 2rem;
  margin-right: .8em;
  border-radius: 4px 0 0 4px;
}

.messages .remove-message {
  height: 1.8rem;
  margin: 0.5rem;
  padding: 0 0.5rem 0 0.5rem;
}
</style>