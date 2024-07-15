<template>
  <div>
    <div class="custom-navbar">
      <div class="navbar-logo">
        <a href=""><h3>Portifólio</h3></a>
      </div>
      <div class="navbar-items">
        <nav>
          <a href="">Home</a>
          <a href="">Habilidades</a>
          <span></span>
        </nav>
      </div>
      <div class="navbar-button">
        <button class="btn btn-outline-success mx-2">Login</button>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  compatConfig: {MODE: 3}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  background: linear-gradient(#000087, #000000);
}

.custom-navbar {
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  background: #444;
  align-items: center;
}

.navbar-logo {
  width: 150px;
  padding: 0 15px;
  display: block;
  height: 100%;
  align-content: center;
}

.navbar-logo a {
  text-decoration: none;
  color: white;
}

.navbar-logo h3 {
  margin: 0;
}

.navbar-items {
  position: relative;
  width: 475px;
  height: 50px;
  background: #222;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.navbar-items nav {
  display: flex;
}

.navbar-items nav a {
  position: relative;
  display: inline-block;
  font-size: 1em;
  font-weight: 500;
  color: white;
  text-decoration: none;
  padding: 0 23px;
  z-index: 1;
}

.navbar-items nav span {
  position: absolute;
  top: 0;
  left: 125px;
  width: 95px;
  height: 100%;
  background: linear-gradient(45deg, #194b4f, #33fffc);
  border-radius: 10px;
  transition: 0.5s;
}

.navbar-items nav a:nth-child(1):hover~span {
  left: 125px;
}

.navbar-items nav a:nth-child(2):hover~span {
  left: 215px;
  width: 130px;
}

.navbar-button {
  display: flex;
  padding: 0 15px;
  width: 150px;
  height: 100%;
  align-items: center;
  justify-content: end;
}
</style>
