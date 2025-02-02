<template>
  <span v-if="error">No weather data available.</span>
  <span v-else-if="temperature">Temperature: {{ temperature }}° C</span>
  <span v-else>Loading...</span>
</template>

<script setup lang="ts">
import { useWeatherService } from '../composables/weatherService';

const { temperature, error, loadData } = useWeatherService();
loadData();
</script>