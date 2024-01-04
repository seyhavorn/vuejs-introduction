const app = Vue.createApp({
  data() {
    return {
      boxASeleted: false,
      boxBSeleted: false,
      boxCSeleted: false,
    };
  },
  computed: {
    boxAClasses() {
      return { active: this.boxASeleted };
    },
  },
  methods: {
    boxSeleted(box) {
      if (box === 'A') {
        this.boxASeleted = !this.boxASeleted;
      } else if (box === 'B') {
        this.boxBSeleted = !this.boxBSeleted;
      } else if (box === 'C') {
        this.boxCSeleted = !this.boxCSeleted;
      }
    },
  },
});

app.mount('#styling');
