const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: 'seyha',
          name: 'Seyha VORN',
          phone: '096 409 6066',
          email: 'vornseyha4758@gmail.com',
        },
        {
          id: 'cheat',
          name: 'Chan socheat',
          phone: '096 409 6066',
          email: 'vornseyha4758@gmail.com',
        },
      ],
    };
  },
  methods: {},
});

app.component('friend-contact', {
  template: `
    <li>
    <h2>{{ friend.name }}</h2>
    <button @click="toggleVisible()">
      {{ detailAreVisible ? 'Hide' : 'Show' }}
    </button>
    <ul v-if="detailAreVisible">
      <li><strong>Phone:</strong> {{ friend.phone }}</li>
      <li><strong>Email:</strong> {{ friend.email }}</li>
    </ul>
  </li>
  `,
  data() {
    return {
      detailAreVisible: false,
      friend: {
        id: 'cheat',
        name: 'Chan socheat',
        phone: '096 409 6066',
        email: 'vornseyha4758@gmail.com',
      },
    };
  },
  methods: {
    toggleVisible() {
      this.detailAreVisible = !this.detailAreVisible;
    },
  },
});
app.mount('#app');
