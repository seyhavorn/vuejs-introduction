<script setup>
import { ref, onMounted } from 'vue';

// username code:
const username = ref("Seyha");
function updateUserName(newUserName) {
  username.value = newUserName;
  console.log(username.value);
}


onMounted(() => {
  updateUserName("Seyha");
})

// modal code: 
const isModalShow = ref(false);

function showModal() {
  isModalShow.value = true;
}

onMounted(() => {
  showModal();
})
</script>

<template>
  <div>

  </div>
</template>

<style></style>