<template>
  <div>to ref and to value</div>
</template>

<script setup lang="ts">
import { computed, ref, toRef, toValue, unref, watchEffect } from "vue";

const props = defineProps<{ foo: { bar: string } }>();

// useXXX(toRef(props, "msg"));
// useXXX(toRef(props.foo, "bar"));



useXXX(toRef(() => props.foo.bar));

function useXXX(msg: any) {
  console.log(msg);

  watchEffect(() => {
    console.log("watch effect: ", msg.value);
  });
}

const second = ref(2);
const firstRef = toRef(1);
const secondRef = toRef(second);
// getter
const getterRef = toRef(() => 1);

console.log(firstRef);
console.log(secondRef);
console.log(getterRef);



const unrefValue = unref(()=> 2)
console.log("unrefValue",unrefValue)
// unref ? toValue
// ref -> value
// value -> value
// getter -> value

console.log("----------value--------------")
const value1 = toValue(ref(1))
console.log(value1)
const value2 = toValue(2)
console.log(value2)
const value3 = toValue(()=> 3)
console.log(value3)

</script>

<style scoped></style>
