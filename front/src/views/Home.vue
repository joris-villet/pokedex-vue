<template>
  <div class="home">
    <h1 class="title"> {{ title }} </h1>
  </div>
</template>

<script>
// @ is an alias to /src
  

export default {
  name: 'Home',
  components: {
    
  },
  data () {
    return {
       title: "Bienvenue dans le Pokedex App Vuejs"
    }
  }
}
</script>


<style lang="scss" scoped>
  .title {
    margin: 3rem auto;
  }
  

</style>
