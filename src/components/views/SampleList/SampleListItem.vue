<script setup>
import { onUpdated } from 'vue';

// eslint-disable-next-line no-undef
const props = defineProps({
  id: Number,
  msg: String,
  isActive: Boolean,
});
onUpdated(() => {
  console.log("Updateing " + props.id);
}); 
</script>

<template>
  <li>
    <span v-if="isActive"> -></span>
    {{ msg }}
  </li>
</template>

<style></style>