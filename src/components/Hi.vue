<template>
  <div>hi</div>
</template>

<script setup lang="ts">
import { watchEffect } from "vue";

import type { HiProps } from "./hi";
// defineProps<HiProps & true extends false ? { age: number } : {}>();

const { msg = "hahhahahhah"} = defineProps<HiProps>();

watchEffect(() => {
  // ref
  // props.msg
  console.log(msg)
  console.log("watch:", msg);
});
</script>
<style scoped></style>
