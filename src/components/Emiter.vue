<template>
  <div>
    <button @click="handleEmitFoo">emit foo</button>
    <button @click="handleEmitBar">emit bar</button>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  foo: [id: number];
  bar: [name: string, age: number];
}>();

// const emit = defineEmits<{
//   (e: "foo", id: number): void;
//   (e: "bar", name: string, ...rest: any[]): void;
// }>();

function handleEmitFoo() {
  emit("foo", 1);
}
function handleEmitBar() {
  emit("bar", "bar", 18);
}
</script>

<style scoped></style>
