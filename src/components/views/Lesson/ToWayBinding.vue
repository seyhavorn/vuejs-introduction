<template>
  <div>
    <h4>Using Two way Binding!</h4>
    <input type="text" class="form-control" v-model="name">
    <p class="mb-4">{{ name }}</p>

    <div class="">
      <h4>Change Computed Proprties</h4>
      <button v-on:click="increase" class="btn btn-sm btn-success">Increase</button>
      <p>Counter: {{ counter }}</p>
      <p>Result {{ result }}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TwoWayBinding',
  data() {
    return {
      name: 'Seyha VORN',
      counter: 0,
      result: ''
    }
  },
  methods: {
    increase: function (){
      this.counter++;
      this.result = this.counter > 5 ? 'Greater 5' : 'Smaller 5'
    }
  }
}
</script>
<style>
</style>