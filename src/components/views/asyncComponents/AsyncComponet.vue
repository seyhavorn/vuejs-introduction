<script>

import MyHome from './MyHome.vue';
import ListView from './ListView.vue';

export default {
  name: 'AsyncComponetVue',
  components: {
    MyHome,
    ListView
  }
}
</script>

<template>
  <div>
    <ListView />
    <MyHome />
  </div>
</template>

<style></style>