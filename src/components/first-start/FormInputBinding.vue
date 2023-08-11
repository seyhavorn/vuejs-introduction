<script>
import InputButton from "./InputButton.vue";
export default {
  name: "FormInputBinding",
  components: { InputButton },
  emit: { 

  },
  data() {
    return {
      email: "",
      selected: "",
      password: "",
      options: [
        { text: "Select option", value: "" },
        { text: "One", value: "A" },
        { text: "Two", value: "B" },
        { text: "Three", value: "C" },
      ],
    };
  },
  props: {},
  mounted() {
    this.login();
  },
  methods: {
    login() {
    },
  },
};
</script>

<template>
  <div class="formInputBinding coantiner w-100 mt-5">
    <form @submit.prevent="login()" class="container w-50">
      <h3 class="text-center text-primary text-uppercase fw-bolder">
        Form Input Binding
      </h3>

      <h3>{{ email }}</h3>
      <h3>{{ password }}</h3>

      <div class="mb-3">
        <div class="form-label">Selected: {{ selected }}</div>
        <select class="form-select" v-model="selected">
          <!-- <option defautl value="">Select Option</option> -->
          <option
            v-for="option in options"
            :key="option.value"
            :value="option.value"
          >
            {{ option.text }}
          </option>
        </select>
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          v-model="email"
          aria-describedby="emailHelp"
        />
        <div id="emailHelp" class="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input
          type="password"
          class="form-control"
          v-model="password"
          id="exampleInputPassword1"
        />
      </div>
      <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    <!-- Template Refs -->
    <h3 class="text-center mt-5">Template Refs</h3>
    <form class="container w-50">
      <input class="form-control" ref="input" />
      <button class="btn btn-sm btn-primary my-3">Add</button>
    </form>

    <InputButton title="Hello my world!"/>
  </div>
</template>

<style>
</style>