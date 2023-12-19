<script setup>
// import { isRef, reactive, ref, unref, toRef, reactive } from "vue";
import { reactive, toRefs } from "vue";

// let count = ref(1);
// const button = ref('');

// function double() {
//   // count.value = count.value * 2
//   count.value = unref(count.value) * 2
//   // const chceck = isRef(count.value) ? count.value : count;
//   console.log('check', button.value);
// }

const cube = reactive({
  length: 20,
  width: 10,
  height: 50,
});

let { length, width, height } = toRefs(cube);
// const length = toRef(cube, "width");

// function useDebouncedRef(value: string, delay = 1000) {
//   let timeout: number;
//   return customRef((track, trigger) => {
//     return {
//       get() {
//         track();
//         return value;
//       },
//       set(newValue: string) {
//         clearTimeout(timeout);
//         timeout = setTimeout(() => {
//           value = newValue;
//           trigger();
//         }, delay);
//       }
//     }
//   })
// }

// const test = useDebouncedRef("hello");

// function change() {
//   test.value = 'Seyha VORN';
// }
</script>

<template>
  <div>
    <!-- <h3>{{ test }}</h3> -->
    <h2>Cupe Length: {{ length }}</h2>
    <h2>Cupe Width: {{ width }}</h2>
    <h2>Cupe Height: {{ height }}</h2>
    <!-- <div class="diver">
      <h4>Count: {{ count }}</h4>
    </div> -->
    <!-- <button ref="button" @click="double()" class="btn btn-primary mt-3">Press Me</button> -->
    <!-- <button @click="change" class="btn btn-sm btn-primary">Press Me</button> -->
  </div>
</template>

<style>
.diver {
  border-bottom: 2px solid #000;
}
</style>