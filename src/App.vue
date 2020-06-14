<template>
  <div id="app">
    <div>
      <b-navbar toggleable="md" type="dark" variant="danger">
        <b-navbar-brand to="/">NavBar</b-navbar-brand>
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
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
