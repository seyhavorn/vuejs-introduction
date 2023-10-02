<template>
  <header class="conatiner-fluid" style="background-color: #50bbbb">
     <slot name="header"></slot>
    <div class="d-flex">
      <nav class="sidebar sidebar-menu" style="width: 200px;">
        <div class="sidebar-heading">
            <router-link class="nav-link cursor-pointer text-uppercase" to="/">
                SEYHA SHOP
            </router-link>
        </div>
        <ul class="sidebar-nav">
            <router-link class="nav-link cursor-pointer" to="/" exact
              active-class="sidebar-list-active">
              <li class="">
                    Home
              </li>
            </router-link>

            <router-link class="nav-link cursor-pointer" to="/about" exact
                         active-class="sidebar-list-active">
                <li class="">
                    About
                </li>
            </router-link>

            <router-link class="nav-link cursor-pointer" to="/product" exact
                         active-class="sidebar-list-active">
                <li class="">
                    About
                </li>
            </router-link>

            <router-link class="nav-link cursor-pointer" to="/lesson" exact
                         active-class="sidebar-list-active">
                <li class="">
                    About
                </li>
            </router-link>

            <router-link to="/test3" class="nav-link cursor-pointer" exact active-class="sidebar-list-active">
                <li class="">
                  Support
                </li>
            </router-link>

            <router-link to="/test4" class="nav-link cursor-pointer" exact active-class="sidebar-list-active">
                <li class="">
                    Test4
                </li>
            </router-link>

<!--          <li><a href="#">Services</a></li>-->
<!--          <li><a href="#">Portfolio</a></li>-->
<!--          <li><a href="#">Contact</a></li>-->
        </ul>
      </nav>
      <div class="content p-4">
        <main class="container content-main">
          <slot name="content"></slot>
        </main>
      </div>
    </div>
  </header>
  <footer>
    <slot name="footer"></slot>
  </footer>
</template>

<script>
export default {
  name: "MainLayout",
  data() {
    return {};
  },
  props: {},
};
</script>

<style>
.content-main {
  padding-left: 200px;
}

.sidebar-menu {
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
}

.sidebar {
  height: 100vh;
  background-color: #343a40;
  color: white;
}

.sidebar-heading {
  padding: 1rem;
  margin-top: 1rem;
  font-size: 1.2rem;
}

.sidebar-nav {
  list-style: none;
  padding: 0;
}

.sidebar-nav li {
  padding: 0.8rem 1rem;
  cursor: pointer;
  transition: all 0.4s;
}

.sidebar-list-active {
  color: white;
  background-color: #4fbbbb;
}

.sidebar-nav li:hover {
  color: white;
  background-color: #4fbbbb;
}

.sidebar-nav li a {
  color: white;
  text-decoration: none;
}

.sidebar-nav li a:hover {
  color: #f8f9fa;
}
</style>
