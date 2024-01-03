const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmName: '',
    };
  },
  methods: {
    confirmInput() {
      this.confirmName = this.name;
    },
    add(number) {
      this.counter = this.counter + number;
    },
    reduce(number) {
      // this.counter--;
      this.counter = this.counter - number;
    },
    setName(event, lastName) {
      this.name = event.target.value + ' ' + lastName;
    },
    submitForm() {
      alert('Submitted!');
    },
  },
});

app.mount('#events');
