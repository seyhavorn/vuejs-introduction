const app = Vue.createApp({
  data() {
    return {
      courseGoalA: '<p>Finish the coures and learn Vue!</p>',
      courseGoalB: '<h2>Master Vuew and build amazing apps!</h2>',
      vueLink: 'http://vuejs.org',
    };
  },
  methods: {
    outputGoal() {
      const radowmNumber = Math.random();
      console.log(radowmNumber);
      if (radowmNumber < 0.5) {
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      }
    },
  },
});

app.mount('#user-goal');
