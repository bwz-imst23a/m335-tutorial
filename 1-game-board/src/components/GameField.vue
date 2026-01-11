<template>
  <button class="gamefield" :class="{ active: value !== '' }" @click="handleClick">
    {{ value }}
  </button>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref('')

const handleClick = () => {
  value.value = 'X'
}
</script>

<style scoped>
.gamefield {
  height: 3.3rem;
  width: 3.3rem;
  border: 2px solid darkgray;
  border-radius: 0;
  margin: -1px;
}
.active {
  background-color: lightgray;
}
</style>
