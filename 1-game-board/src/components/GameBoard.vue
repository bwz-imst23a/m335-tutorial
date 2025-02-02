<template>
  <div class="row">
    <field />
    <field />
    <field />
  </div>
  <div class="row">  
    <field />
    <field />
    <field />
  </div>
  <div class="row">
    <field />
    <field />
    <field />
  </div>
</template>
  
<script setup lang="ts">
import Field from './Field.vue';
</script>
  
<style scoped>
.row {
  display: flex;
  flex-direction: row;
}
</style>