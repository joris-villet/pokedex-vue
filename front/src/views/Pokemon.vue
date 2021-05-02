<template>
   <div>
      <transition name="fade">
         <div class="container" v-if="show">
            <h1 class="title"> {{ pokemon.nom }} </h1>
            <article>
               <img :src="require(`../assets/img/${pokemon.numero}.png`)" :alt="pokemon.nom" class="pics">
               <div class="types">
                  <h3 class="types-title">Pokemon de type:</h3>
                  <div class="types-buttons">
                     <div v-for="(type, index) in types" :key="index">
                        <router-link :to="{ 
                           name: 'Types', 
                           params: { 
                              typeId: type.type_id, 
                              typeName: type.name
                              }}" 
                           class="types-buttons-button" 
                           :style="{background: type.color}">
                           {{ type.name }} 
                        </router-link>
                     </div> 
                  </div>
                  <div class="types-infos">
                     <p> PV :  <span>{{ pokemon.pv }}</span></p> 
                     <p> Attaque : <span>{{ pokemon.attaque }}</span> </p>
                     <p> Défense :  <span>{{ pokemon.defense }}</span></p>
                     <p> Attaque Spé :  <span>{{ pokemon.attaque_spe }}</span></p>
                     <p> Défense Spé : <span>{{ pokemon.defense_spe }}</span> </p>
                     <p> Vitesse :  <span>{{ pokemon.vitesse }}</span></p>
                  </div>  
               </div>
            </article>
           

           
         </div>
      </transition>          
   </div>
</template>

<script>
import axios from 'axios'

export default {
   name: 'Pokemon',
   data () {
      return {
         base_url: "http://localhost:7070/api",
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
           this.pokemon = response.data;
           this.show = true;
        }
        catch (error) {
           console.log(error);
        }
      },
      getTypesByPokemon: async function(){
         try {
            const pokemonId = parseInt(this.$route.params.pokemonId, 10);
            const response = await axios.get(`${this.base_url}/type-by-pokemon/${pokemonId}`);
            for (const props in response.data) {
               console.log(`name: ${response.data[props].name}, color: ${response.data[props].color}`)
            }
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

   .types {

      &-title {
         margin: 0;
         margin-bottom: 1rem;
         text-align: left;
      }

      &-buttons {
         display: flex;

         &-button {
            display: block;
            margin-right: 1rem;
            height: 30px;
            width: 80px;
            line-height: 30px;
            color: #fff;
            text-decoration: none;
            box-shadow: 1px 1px 2px grey;
            border-radius: 2px;
            font-weight: bold;
         }
      }

      &-infos {
         background: rgb(253, 218, 153);
         text-align: left;

         p {
            color: red;

            span {
               color: yellow;
            }
         }
      }
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