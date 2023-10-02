<template>
  <div id="app">
    <MainLayout>
      <template #header>
        <!-- <nav class="navbar navbar-expand-lg">
          <div class="container-fluid">
            <a class="navbar-brand" href="/">
              <router-link to="/"></router-link>
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <router-link
                    class="nav-link cursor-pointer"
                    to="/"
                    exact
                    active-class="text-white"
                    >Home</router-link
                  >
                </li>
                <li class="nav-item">
                  <router-link
                    class="nav-link cursor-pointer"
                    to="/about"
                    exact
                    active-class="text-white"
                    >About</router-link
                  >
                </li>
                <li class="nav-item">
                  <router-link
                    class="nav-link cursor-pointer"
                    to="/product"
                    exact
                    active-class="text-white"
                    >ProductList</router-link
                  >
                </li>
                <li class="nav-item">
                  <router-link
                    class="nav-link cursor-pointer"
                    to="/lesson"
                    exact
                    active-class="text-white"
                    >Lesson</router-link
                  >
                </li>
              </ul>
              <form class="d-flex" role="search">
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button class="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav> -->
      </template>
      <template #content>
        <router-view />
      </template>
    </MainLayout>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
// import { RouterLink } from "vue-router";
import MainLayout from "./components/layouts/MainLayout.vue";

export default {
  name: "App",
  components: {
    MainLayout,
    // RouterLink,
  },
  data() {
    return { currentPath: window.location.hash };
  },
};
</script>

<style>
#app {
  font-family: "Raleway", sans-serif;
}
html {
  scroll-behavior: smooth;
  -webkit-text-size-adjust: 100%;
}

body {
  margin: 0;
  box-sizing: border-box;
}

.router-active {
  color:blue;
  cursor: pointer;
}
</style>
