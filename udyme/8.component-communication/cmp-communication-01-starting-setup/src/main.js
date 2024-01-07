import { createApp } from 'vue';
import App from './App.vue';
import FriendContact from './components/FriendContact.vue';
import NewFriend from './components/NewFriend.vue';

createApp(App)
  .component('friend-contact', FriendContact)
  .component('new-friend', NewFriend)
  .mount('#app');
