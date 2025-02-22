<template>
  <button className="gamefield" @click="handleClick">{{ value }}</button>
</template>

<script setup lang="ts">
const emit = defineEmits<{
 fieldClick: [ ]
}>();
defineProps<{
  value: string
}>();

const handleClick = () => {
    emit('fieldClick');
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
</style>