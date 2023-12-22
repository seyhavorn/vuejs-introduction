<template>
  <div>
    <h3 class="border-bottom border-1 mb-4">My Home</h3>
    <button class="btn btn-sm btn-primary" @click="show = !show">Show List</button>
    <div class="myHome" v-if="show">
      <h3 class="mb-4">My List</h3>
      <ListView />
    </div>
  </div>
</template>

<script>

import LoadingComponent from "./LoadingComponent.vue";
import ErrorComponent from "./ErroComponent.vue";

// const List = () => ({
//   // components: import(/* webpackChunkName */ "@/components/views/asyncComponents/ListView.vue"),
//   component: import(/* webpackChunkName */ "./ListView.vue"),
//   loading: LoadingComponent,
//   erorr: ErrorComponent,
//   timeout: 3000
// });

export default {
  data() {
    return {
      show: false,
    };
  },
  components: {
    // ListView: () => import(/* List View */ "./ListView");
    // eslint-disable-next-line vue/no-unused-components
    LoadingComponent,
    // eslint-disable-next-line vue/no-unused-components
    ErrorComponent
  },
  computed: {
    List() {
      return () => ({
        component: import(/* webpackChunkName */ "./ListView.vue"),
        loading: LoadingComponent,
        erorr: ErrorComponent,
        timeout: 3000
      });
    }
  }
}
</script>

<style>
.myHome {
  background-color: #000;
}
</style>