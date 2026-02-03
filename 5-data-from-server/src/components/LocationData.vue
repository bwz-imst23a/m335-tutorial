<template>
  <span v-if="error">No weather data available.</span>
  <span v-else-if="location">{{ location }}</span>
  <span v-else>Loading...</span>
</template>

<script setup lang="ts">
import { useLocationService } from '../composables/locationService'

const { location, error, loadData } = useLocationService()
loadData()
</script>
