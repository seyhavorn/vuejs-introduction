<template>
  <div class="notFound">
    <h1 class="text-danger fw-bolder fs-1">404</h1>
    <h4>Page Not Found</h4>
    <div class="">
      <button class="btn btn-sm btn-success" @click="back()">Back</button>
      <button class="btn btn-sm btn-info mx-4" @click="forward()">
        Forward
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: "NotFoundPage",
  methods: {
    back() {
      this.$router.go(-1);
    },
    forward() {
      this.$router.go(1);
    },
  },
};
</script>
<style>
.notFound {
  display: flex;
  gap: 2rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>