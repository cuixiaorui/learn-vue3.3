<template>
  <div>
    app
    <!-- <Hi></Hi>
    <button @click="HandleChangeMsg">change msg</button> -->
    <!-- <Generic age="10" :names="["1","2",3]"></Generic>
    <GenericT :msg="123"></GenericT>
    <Emiter ></Emiter>
    <Sloter>
      <template v-slot="{msg}">{{ msg }}</template>
      <template v-slot:foo="{bar}">{{ bar }}</template>
    </Sloter> -->
    <!-- <DefineModel v-model="foo" ></DefineModel> -->
    <!-- <DefineOptions></DefineOptions> -->
    <ToRefAndToValue :foo="foo"></ToRefAndToValue>
  </div>
</template>

<script setup lang="ts">
import ToRefAndToValue from "./components/ToRefAndToValue.vue";
// import Hi from "./components/Hi.vue";
// import DefineModel from './components/DefineModel.vue';
// import DefineOptions from './components/DefineOptions.vue';
// import Generic from './components/Generic.vue';
// import GenericT from './components/GenericT';
// import Emiter from './components/Emiter.vue';
// import Sloter from './components/Sloter.vue';

import { ref } from "vue";

const msg = ref("heihei");

function HandleChangeMsg() {
  msg.value += "hei";
}

// const foo = ref("1234")
// const bar = ref("dlsakfldsfjdlasfj")

const foo = ref({
  bar: "baraa",
});


window.foo = foo

</script>

<style scoped></style>
