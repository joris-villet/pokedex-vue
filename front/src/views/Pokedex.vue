<template>
  <div>
    
    
    <div class="pokedex">
      <h1 class="title"> {{ title }} </h1>
      
      <pokarticle 
        :nom="nom"
        :pv="pv"
        :attaque="attaque"
        :defense="defense"
        :attaqueSpe="attaque_spe"
        :defenseSpe="defense_spe"
        :vitesse="vitesse"
        :img="img"
      >
      </pokarticle>
    </div>

  </div>
</template>


<script>
  import PokArticle from '../components/PokArticle.vue' 

export default {
  name: 'Pokedex',
  components: {
    'pokarticle': PokArticle
  },
   props: {
      nom: { type: String },
      pv: { type: Number },
      attaque: { type: Number },
      defense: { type: Number },
      attaque_spe: { type: Number },
      defense_spe: { type: Number },
      vitesse: { type: Number },
      img: { type: String },
   },
  data () {
    return {
      title: "Liste des Pokemons",
      
    }
  },
}
</script>



<style lang="scss" scoped>
  .title {
    margin: 3rem auto;
  }

  .header {
    height: 100px;
  }

</style>