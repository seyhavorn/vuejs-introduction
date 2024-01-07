<script>
export default {
  emits: [
    'add-contact'
  ],
  data() {
    return {
      enteredName: '',
      enterdPhone: '',
      enteredEmail: ''
    }
  },
  methods: {
    submitDate() {
      this.$emit('add-contact', this.enteredName, this.enterdPhone, this.enteredEmail);
    }
  }
}
</script>

<template>
  <div>
    <form @submit.prevent="submitDate">

      <div class="">
        <label for="Name">Name</label>
        <input type="text" v-model="enteredName" name="name" id="name">
      </div>

      <div class="">
        <label for="Name">Phone</label>
        <input type="tel" v-model="enterdPhone" name="phone" id="name">
      </div>

      <div class="">
        <label for="email">Email</label>
        <input type="text" v-model="enteredEmail" name="email" id="name">
      </div>

      <button>Add Contact</button>
    </form>
  </div>
</template>

<style></style>