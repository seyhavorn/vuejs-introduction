<template>
  <div class="">
    <header>
      <slot name="header"></slot>
    </header>
  </div>
  <main>
    <slot name="content"></slot>
  </main>
  <footer>
    <!-- footer content -->
    <slot name="footer"></slot>
  </footer>
</template>

<script>
export default {
  name: "MainLayout",
  data() {
    return {};
  },
  props: {},
};
</script>

<style>
</style>