<template>
  <div id="app" class="container mt-4">
    <!-- <MainLayout>
      <template #header>
      </template>
      <template #content>
        <router-view />
      </template>
    </MainLayout> -->
    <router-view />
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
// import { RouterLink } from "vue-router";
// import MainLayout from "./components/layouts/MainLayout.vue";

export default {
  name: "App",
  components: {
    // MainLayout,
    // RouterLink,
  },
  data() {
    return { currentPath: window.location.hash };
  },
};
</script>

<style>
#app {
  font-family: "Raleway", sans-serif;
}

html {
  scroll-behavior: smooth;
  -webkit-text-size-adjust: 100%;
}

body {
  margin: 0;
  box-sizing: border-box;
}

.router-active {
  color: blue;
  cursor: pointer;
}
</style>
