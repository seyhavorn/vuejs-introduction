<template>
  <div class="inputButton">
    <!-- <MainLayout>
      <template #content>
      </template>
    </MainLayout> -->
    <h4>Title: {{ title }}</h4>
  </div>
</template>

<script>
// import MainLayout from "./components/layouts/MainLayout.vue";
export default {
  name: "InputButton",
  // components: { MainLayout },
  props: ["title"],
};
</script>

<style>
</style>