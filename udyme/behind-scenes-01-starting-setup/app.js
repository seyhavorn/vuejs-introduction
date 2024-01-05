const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      // this.message = this.currentUserInput;
      this.message = this.$refs.userText.value;
    },
  },
  beforeCreate() {
    console.log('beforeCreated()');
  },
  created() {
    console.log('created()');
  },
  beforeMount() {
    console.log('beforeMount()');
  },
  mounted() {
    console.log('mounted()');
  },
  beforeUpdate() {
    console.log('beforeUpdate()');
  },
  update() {
    console.log('update()');
  },
  beforeUnmount() {
    console.log('beforeUnmounted()');
  },
  unmount() {
    console.log('unmount()');
  },
});

app.mount('#app');

// setTimeout(function () {
//   app.unmount();
// }, 2000);

const app2 = Vue.createApp({
  template: `
  <p>{{ favoritMeal }}</p>
  `,
  data() {
    return {
      favoritMeal: 'Piza',
    };
  },
  methods: {},
});

app2.mount('#app2');
