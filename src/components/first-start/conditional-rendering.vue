<template>
  <div class="conditional-rendering">
    <div class="">
      <h3 class="text-info mt-4">Do you love me???</h3>
      <div class="content-answer">
        <h5 v-if="yes" class="text-success">Yes</h5>
        <h5 v-else class="text-primary">NO</h5>
      </div>

      <button class="btn btn-sm btn-primary" @click="yes = !yes">
        Trigger
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: "ConditionalRender",
  data() {
    return {
      yes: false,
    };
  },
  props: {},
};
</script>

<style scoped>
.content-answer {
  color: red;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
