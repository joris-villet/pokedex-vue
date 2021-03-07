<template>
   <div>

      <transition name="fade">
         <div class="container" v-if="show">

            <h1 class="title"> {{ pokemon.nom }} </h1>
            <article>
               <img :src="require(`../assets/img/${pokemon.numero}.png`)" :alt="pokemon.nom" class="pics">
               <div v-for="(type, index) in types" :key="index">
                  <router-link :to="{ name: 'Types', params: { typeId: type.type_id, pokemonId: pokemon.id, typeName: type.name}}" class="type">
                     {{ type.name }} 
                  </router-link>
               </div> 
            </article>
           

            <div class="infos-powers">
               <p> PV :  <span>{{ pokemon.pv }}</span></p> 
               <p> Attaque : <span>{{ pokemon.attaque }}</span> </p>
               <p> Défense :  <span>{{ pokemon.defense }}</span></p>
               <p> Attaque Spé :  <span>{{ pokemon.attaque_spe }}</span></p>
               <p> Défense Spé : <span>{{ pokemon.defense_spe }}</span> </p>
               <p> Vitesse :  <span>{{ pokemon.vitesse }}</span></p>
            </div>  
           
         </div>
      </transition>          
   </div>
</template>



<script>

const axios = require('axios');

export default {
   name: 'Pokemon',

   data () {
      return {
         base_url: "http://localhost:7070/pokemon",
         pokemon: [],
         types: [],
         show: false
      }
   },
   created () {
      this.getOnePokemon();
      this.getTypesByPokemon();
   },
   methods: {
     getOnePokemon: async function(){
        try {
           let pokemonId = parseInt(this.$route.params.pokemonId, 10);
           let response = await axios.get(`${this.base_url}/${pokemonId}`);
           console.log(response.data);
           this.pokemon = response.data;
           this.show = true;
        }
        catch (error) {
           console.log(error);
        }
      },
      getTypesByPokemon: async function(){
         try {
            let pokemonId = parseInt(this.$route.params.pokemonId, 10);
            let response = await axios.get(`${this.base_url}/type-by-pokemon/${pokemonId}`);
            this.types = response.data;
            this.show = true;
         }
         catch (error) {
            console.log(error);
         }
      }

   }
}
</script>



<style lang="scss" scoped>
   .container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      max-width: 1000px;
      margin: 3rem auto;

      & article {
         display: flex;
         justify-content: space-between;
         padding: 2rem;
      }
   }


     .type {
         border-radius: 2px;
         box-shadow: 1px 1px 2px grey;
         margin: 5rem 0.2rem;
         padding: 0.5rem 1rem;
         background: rgb(255, 114, 114);
         color: #fff;
         font-weight: bold;
         font-size: 0.8rem;
         text-decoration: none;
         display: block;
         height: 10px;
         line-height: 15px;
         position: relative;
         z-index: 1;
         // &::after {
         //    content: '';
         //    position: absolute;
         //    top: 0;
         //    left: 0;
         //    width: 50%;
         //    height: 100%;
         //    background: orangered;
         //    display: block;
         //    transform-origin: left;
         //    z-index: 0;
         //    &:hover {
         //       width: 100%;
         //       background: green;
         //    }
         // }
      }

   .pics {
      width: 70%;
      height: auto;
      pointer-events: none;
   }

   .fade-enter-active, .fade-leave-active  {
      transition: opacity 2s, transform .8s;
      
   }

   .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
      opacity: 0;
      transform: translateY(300px);
   }
</style>