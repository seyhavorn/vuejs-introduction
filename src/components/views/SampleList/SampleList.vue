<script setup>
import { ref } from 'vue';
import SampleListItem from './SampleListItem.vue';
const arr = ref([
  { id: 0, msg: "Hello" },
  { id: 1, msg: "Good Morning!" },
  { id: 2, msg: "Have a good Time!" },
  { id: 3, msg: "Good Job!" }
]);


const activeId = ref(0);

</script>

<template>
  <div class="">
    <h4>Welcome to</h4>
    <button class="btn btn-sm btn-primary" @click="activeId = (activeId + 1) % arr.length">Next</button>
    <ul>
      <sample-list-item v-for="msg in arr" :key="msg.id" :id="msg.id" :is-active="msg.id === activeId"
        :msg="msg.msg"></sample-list-item>
    </ul>
  </div>
</template>

<style></style>