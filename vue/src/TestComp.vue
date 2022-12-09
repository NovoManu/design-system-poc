<template>
  <div>
    <span>Name: {{ item.first}}</span> |
    <span>Last Name: {{ item.last }}</span>
    <span>End of the line</span>
  </div>
</template>

<script setup>
defineProps({
  item: {
    required: true
  }
})
</script>

<style scoped></style>
