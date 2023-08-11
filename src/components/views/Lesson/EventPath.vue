<template>
  <div class="EventPath">
    <h4 class="mt-4">Modifiying and Even</h4>
    <div class="">
      <div class="d-flex gap-5 justify-content-start align-content-center mt-5">
        <button class="btn btn-sm btn-info" v-on:click="increase(2, $event)">
          Click
        </button>
        <button class="btn btn-sm btn-success" v-on:click="counter++">
          Click
        </button>
        <p>{{ counter * 2 > 10 ? "Greater than 10" : "Smaller than 10" }}</p>
      </div>
      <p v-on:mousemove="updateCoodinates" class="mt-4">
        Coordinates {{ x }} / {{ y }} -
        <span v-on:mousemove.stop>Dead SPOT</span>
      </p>
      <input type="text" v-on:keyup.enter="alertMe" />
    </div>
  </div>
</template>

<script>
export default {
  name: "EventPath",
  data() {
    return {
      x: 0,
      y: 0,
      counter: 0
    };
  },
  methods: {
    increase: function(step) {
      this.counter += step;
    },
    updateCoodinates: function(event) {
      this.x = event.clientX;
      this.y = event.clientY;
    },
    dummy: function(event) {
      event.stopPropagation();
    },
    alertMe: function() {
      alert('Alert!');
    }
  }
};
</script>

<style>
</style>