const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastName: '',
      // fullName: '',
    };
  },
  watch: {
    counter(value) {
      if (value > 50) {
        const that = this;
        setTimeout(() => {
          console.log('this counter', this.counter);
          that.counter = 0;
        }, 1000);
      }
    },
    // name(value) {
    //   if (value === '') {
    //     this.fullName = '';
    //   } else {
    //     this.fullName = value + ' ' + 'Seyha';
    //   }
    // },
    // lastName(value) {
    //   if (value === '') {
    //     this.fullName = '';
    //   } else {
    //     this.fullName + ' ' + this.name + ' ' + value;
    //   }
    // },
  },
  // Commputed is using for action that chnage on view:
  computed: {
    fullName() {
      console.log('Running again....!');
      if (this.name == '' || this.lastName === '') {
        return '';
      }
      return this.name + ' ' + this.lastName;
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
