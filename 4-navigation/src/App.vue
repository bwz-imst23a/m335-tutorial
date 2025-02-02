<template>
  <h1>{{ title }}</h1>
  <nav>
    <RouterLink to="/game">Tic-Tac-Toe</RouterLink> &nbsp;|&nbsp;
    <RouterLink to="/history">History</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
  <small>Path: {{ $route.fullPath }}</small>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const title = ref('Tic-Tac-Toe');
</script>

<style scoped>
nav a {
  color: #444;
  font-weight: lighter;
  padding: 1rem 0 0.4rem;
  text-decoration: none;
  display: inline-block;
}
</style>