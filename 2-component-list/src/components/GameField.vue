<template>
  <button
    class="gamefield"
    :class="{ even: isAlternating, active: value !== '' }"
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
button:hover {
  background-color: black;
}

.even {
  background-color: silver;
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
