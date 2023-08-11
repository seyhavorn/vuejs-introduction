<template>
  <header class="conatiner-fluid" style="background-color: #50bbbb">
    <div class="container mx-auto">
      <slot name="header"></slot>
    </div>
  </header>
  <main class="container content-main">
    <slot name="content"></slot>
  </main>
  <footer>
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
.content-main {
  margin-top: 50px;
  padding-right: 50px;
}
</style>