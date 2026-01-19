<template>
  <button
    class="gamefield"
    :class="[ 'player' + value,  { even: isAlternating, active: value !== '' } ]"
    @click="handleClick"
  >
    {{ value }}
  </button>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  fieldClick: []
}>()
defineProps<{
  value: string
  isAlternating: boolean
}>()

const handleClick = () => {
  emit('fieldClick')
}
</script>

<style scoped>
button {
  background-color: white;
}
button:hover {
  background-color: black;
}

.playerX {
  color: blue;
}
.playerO {
  color: red;
}
.even {
  background-color: #eee;
}
@media (prefers-color-scheme: dark) {
  .even {
    background-color: var(--ion-background-color-step-350);
  }
}
.gamefield {
  height: 3.3rem;
  width: 3.3rem;
  border: 2px solid darkgray;
  border-radius: 0;
  margin: -1px;
}
.gamefield.active {
  background-color: lightgray;
}
</style>
