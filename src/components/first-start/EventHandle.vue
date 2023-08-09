<template>
  <div class="eventHnadle">
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum
      deleniti, nesciunt quae placeat possimus velit ex dolor eius vero.
      Laboriosam dicta esse illo deserunt dolor inventore tenetur. Impedit,
      suscipit assumenda!
    </p>
    <button class="btn btn-sm btn-primary" :on-click="greet()">Check</button>
  </div>
</template>

<script>
export default {
  name: "EventHandle",
  data() {
    return {
      name: "Vue.Js",
    };
  },
  props: {},
  methods: {
    greet(event) {
      alert(`Hello ${this.name}`);
      if (event) {
        alert(event.target.tagname);
      }
    },
  },
};
</script>

<style>
</style>