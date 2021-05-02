<template>
   <div>
      <transition name="fade">
         <div v-if="show">
            <section class="container">
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
                        <div class="types-infos-progress">
                           <p> PV <span>{{ progress.pokemonPv }}/200:</span></p> 
                           <progress class="types-infos-progress-bar" max="200" :value="progress.pokemonPv"></progress>
                        </div>
                        <div class="types-infos-progress">
                           <p> Attaque <span>{{ progress.pokemonAttaque }}/200:</span></p>
                           <progress class="types-infos-progress-bar" max="200" :value="progress.pokemonAttaque"></progress>
                        </div>
                        <div class="types-infos-progress">
                           <p> Défense <span>{{ progress.pokemonDefense }}/200:</span></p>
                           <progress class="types-infos-progress-bar" max="200" :value="progress.pokemonDefense"></progress>
                        </div>
                        <div class="types-infos-progress">
                           <p> Attaque Spé <span>{{ progress.pokemonAttaqueSpe }}/200:</span></p>
                           <progress class="types-infos-progress-bar" max="200" :value="progress.pokemonAttaqueSpe"></progress>
                        </div>
                        <div class="types-infos-progress">
                           <p> Défense Spé <span>{{ progress.pokemonDefenseSpe }}/200:</span></p>
                           <progress class="types-infos-progress-bar" max="200" :value="progress.pokemonDefenseSpe"></progress>
                        </div>
                        <div class="types-infos-progress">
                           <p> Vitesse <span>{{ progress.pokemonVitesse }}/200:</span></p>
                           <progress class="types-infos-progress-bar" max="200" :value="progress.pokemonVitesse"></progress>
                        </div>
                     </div>  
                  </div>
               </article>
            </section>
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
         show: false,
         progress: {
            pokemonPv: 0,
            pokemonAttaque: 0,
            pokemonDefense: 0,
            pokemonAttaqueSpe: 0,
            pokemonDefenseSpe: 0,
            pokemonVitesse: 0
         }
      }
   },
   created () {
      this.getOnePokemon();
      this.getTypesByPokemon();
      setTimeout(() => {
         this.animProgressBar()
      },700)
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
            this.types = response.data;
            this.show = true;
         }
         catch (error) {
            console.log(error);
         }
      },
      animProgressBar() {
         let timer = setInterval(() => {
            if (this.progress.pokemonPv < this.pokemon.pv) this.progress.pokemonPv++;
            else if (this.progress.pokemonAttaque < this.pokemon.attaque) this.progress.pokemonAttaque++;
            else if (this.progress.pokemonDefense < this.pokemon.defense) this.progress.pokemonDefense++;
            else if (this.progress.pokemonAttaqueSpe < this.pokemon.attaque_spe) this.progress.pokemonAttaqueSpe++;
            else if (this.progress.pokemonDefenseSpe < this.pokemon.defense_spe) this.progress.pokemonDefenseSpe++;
            else if (this.progress.pokemonVitesse < this.pokemon.vitesse) this.progress.pokemonVitesse++;
            else clearInterval(timer)
         }, 5);
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
         width: 700px
      }
   }

   .types {
      display: grid;
      grid-template-rows: 10% 1fr 50%;

      &-title {
         margin: 0;
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
         text-align: left;
         width: 300px;

         &-progress {
            display: flex;
            justify-content: space-between;
            align-items: center;

            p {
               font-weight: bold;
               font-size: 0.8rem;
               color: rgb(111, 146, 175);
               margin: 0.3rem 0;

               span {
                  color: rgb(245, 137, 137);
               }
            }

            &-bar {
               height: 8px;
               border-radius: 5px;
               overflow: hidden;
               border: none;
            }
         }

      }
   }

   .pics {
      width: 50%;
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