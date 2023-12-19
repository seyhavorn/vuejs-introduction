<script>
import { ref, computed } from 'vue';

export function useCounter(initialValue) {
  const count = ref(initialValue);

  function increment() {
    count.value++;
  }

  function decrement() {
    count.value--;
  }

  const doubledCount = computed(() => count.value * 2);

  return {
    count,
    increment,
    decrement,
    doubledCount
  };
}

</script>

<template>
  <div>

  </div>
</template>

<style></style>