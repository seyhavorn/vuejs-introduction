<template>
  <div class="">
    <h3>Lesson Page:</h3>
    <div class="mb-5">
      <EventPath />
    </div>
    <div class="mb-5">
      <TwoWayBinding />
    </div>

    <div class="mb-5">
      <CompositionApi />
    </div>
    <div class="mb-5">
      <OptionVsCompositionAPI />
    </div>
    <div class="mb-5">
      <ComposableAPI />
    </div>
    <div class="mb-5">
      <ComposableAPIS/>
    </div>
  </div>
</template>

<script>
import ComposableAPIS from "./ComposableAPIS.vue";
import CompositionApi from "./CompositionApi.vue";
import EventPath from "./EventPath.vue";
import OptionVsCompositionAPI from "./OptionVsCompositionAPI.vue";
import TwoWayBinding from "./ToWayBinding.vue";

export default {
  name: "LessonPage",
  components: {
    EventPath,
    TwoWayBinding,
    CompositionApi,
    OptionVsCompositionAPI,
    ComposableAPIS
},
  methods: {},
};
</script>

<style></style>