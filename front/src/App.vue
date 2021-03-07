<template>
  <div id="app">
    <header class="header">
      <div id="nav">
        <router-link to="/" exact="">Home</router-link> 
        <router-link to="/pokedex">Pokedex</router-link>
      </div>
    </header>
    <router-view/>
  </div><!-- fin #app -->
</template>

<script>
export default {
  data () {
    return {
      
    }
  },
  methods: {
    
  }
}
</script>

<style lang="scss">

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

  #nav {
  padding: 30px;

  a {
    font-weight: bold;
    font-size: 1.2rem;
    color: rgb(39, 34, 34);
    padding: 0 1.5rem;
    text-decoration: none;
    opacity: 0.6;
    transition: .5s;

    &.router-link-exact-active {
      color: #fff;
      opacity: 1;
      font-size: 1.8rem;
    }
  }
}

.header {
  background: crimson;
  height: 250px;
  max-width: 100%;
  border-bottom: 15px solid rgb(39, 34, 34);
}

</style>
