<template>
  <div id="app" style="position:relative;">
      <b-navbar toggleable="md" type="dark" sticky style=" background-color: maroon;">
        <b-navbar-brand to="/">SumoBot</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
           <b-navbar-nav>
            <b-nav-item to="/about">About</b-nav-item>
            <b-nav-item to="/competitions">Competitions</b-nav-item>
            <b-nav-item to="/tutorials">Tutorials</b-nav-item>
            <b-nav-item to="/gallery">Gallery</b-nav-item>
            <b-nav-item to="/signup">Sign Up</b-nav-item>
          </b-navbar-nav>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: "Open Sans", sans-serif;
  font-size: 1.1rem;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.navbar-dark .navbar-nav .nav-link{
  color:white!important;
  text-shadow: #000 0px 0px 1px;
}
</style>
