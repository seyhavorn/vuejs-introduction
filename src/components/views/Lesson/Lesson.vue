<template>
  <div class="">
    <h3>Lesson Page:</h3>
    <div class="mb-5">
      <EventPath />
    </div>
    <div class="mb-5">
      <TwoWayBinding />
    </div>
  </div>
</template>

<script>
import EventPath from "./EventPath.vue";
import TwoWayBinding from "./ToWayBinding.vue";
export default {
  name: "LessonPage",
  components: {
    EventPath,
    TwoWayBinding,
  },
  methods: {},
};
</script>

<style>
</style>