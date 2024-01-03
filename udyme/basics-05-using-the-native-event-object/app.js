const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
    };
  },
  // Commputed is using for action that chnage on view:
  computed: {
    fullName() {
      console.log("Running again....!");
      if (this.name == '') {
        return '';
      }
      return this.name + ' ' + 'Developer';
    },
  },
  methods: {
    outputFullName() {
      if (this.name == '') {
        return '';
      }
      return this.name + ' ' + 'Developer';
    },
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = '';
    },
  },
});

app.mount('#events');
