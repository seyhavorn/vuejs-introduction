<template>
  <div class="">
    <h4>Testing:</h4>
    
    <h3>Lesson Page:</h3>
    <div class="mb-5">
      <EventPath />
      <TwoWayBinding />
      <OptionVsCompositionAPI />
      <ComposableAPI />
      <SampleList />
    </div>
    <AsyncComponetVue />
  </div>
</template>

<script>
import ComposableAPI from "./ComposableAPI.vue";
import EventPath from "./EventPath.vue";
import OptionVsCompositionAPI from "./OptionVsCompositionAPI.vue";
import TwoWayBinding from "./ToWayBinding.vue";
import SampleList from "../SampleList/SampleList.vue";
import AsyncComponetVue from '../asyncComponents/AsyncComponet.vue';

export default {
  name: "LessonPage",
  components: {
    EventPath,
    TwoWayBinding,
    AsyncComponetVue,
    OptionVsCompositionAPI,
    ComposableAPI,
    SampleList
  },
  methods: {},
};
</script>

<style></style>