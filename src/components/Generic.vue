<template>
  <div></div>
</template>

<script setup lang="ts" generic="T, U extends string">
defineProps<{ age: T; names: U[] }>();
</script>

<style scoped></style>
