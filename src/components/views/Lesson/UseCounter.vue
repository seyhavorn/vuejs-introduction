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
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam, vero soluta? Laboriosam ea sed nisi fuga autem sit
      odit atque ad, omnis ut hic saepe quisquam quibusdam dolorum cum iste.
    </p>
  </div>
</template>

<style></style>