<template>
  <div>
    <div class="pokedex">
      <h1 class="title">{{ title }}</h1>
      <PokArticle />
    </div>
  </div>
</template>


<script>
import PokArticle from "@/components/PokArticle";

export default {
  name: "Pokedex",
  components: { PokArticle },
  data() {
    return {
      title: "Liste des Pokemons",
    };
  },
};
</script>



<style lang="scss" scoped>
.title {
  margin: 3rem auto;
}

.header {
  height: 100px;
}
</style>