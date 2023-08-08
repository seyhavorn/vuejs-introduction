<template>
  <HelloWorld />
</template>

<script>
import HelloWorld from "./components/first-start/HelloWorld.vue";
import 'bootstrap/dist/css/bootstrap.css';

export default {
  name: "App",
  components: {
    HelloWorld,
  },
};
</script>

<style>
#app {
  font-family: 'Raleway', sans-serif;
}
html {
  scroll-behavior: smooth;
  -webkit-text-size-adjust: 100%;
}

body {
  margin: 0;
  box-sizing: border-box;
}
</style>
