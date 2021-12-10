<template>
  <div id="minecraft" :class="{small:Main,big:Minecraft,zero:Fivem}">
    <transition name="fade2">
            <div class="menu" v-if="Minecraft"> <p><router-link to="/">Home</router-link></p> <p><a href="">Discord</a></p> <p><a href="">Regulamin</a></p> <p><a href="">Sklep</a></p></div>
        </transition>
    <transition name="fade">
      <img :class="{logo_game:Main,logo_game_active:Minecraft}" src="../../assets/mc.png" alt="" v-if="Minecraft || Main">
    </transition>
      <transition name="fade">
            <button class="more" @click="setCurrentGame" v-if="Main">Więcej</button>
        </transition>

        <transition name="fade2">
            <button class="more" v-if="Minecraft">Dołącz</button>
        </transition>
  </div>
</template>

<script>
export default {
  data(){
        return{
            home:true
        }
    },
  props:{
    Fivem: {
      type:Boolean,
      default:false
    },
    Minecraft: {
      type:Boolean,
      default:false
    },
    Main: {
      type:Boolean,
      default:false
    },
  },
  methods: {
      setCurrentGame(){
        this.$emit('setGame',2)
      }
  }
}
</script>

<style scoped>
    .zero{
        width: 0vw;
        height: 100vh;
    }
    .small{
        width: 50vw;
        height: 100vh;
    }
    .big{
        width: 100vw;
        height: 100vh;
    }
    #minecraft{
        background-image: url("../../assets/minecraftfulltlo.png");
        background-position: center;
        display: flex;
        align-items: center;
        flex-direction: column;
        transition: 1s;
    }
    .logo_game{
        margin-top: 34.25925925925926vh;
    }
    .logo_game_active{
        margin-top: 26.203703703703702vh;
    }
    .more{
        margin-top: 7.222222222222222vh;
        width: 11.208333vw;
        height: 6vh;
        background-color: #000;
        color: white;
        border-radius: 16px;
        border: 0;
        font-family: Museo700;
        font-size: 2rem;
        justify-content: center;
        transition: 0.5s;
    }
    .more:hover{
        transform: scale3d(1.1,1.1,1.0) translateZ(0) perspective(1px);
    }
    .menu{
        display: flex;
        width: 39.479166666666664vw;
        margin-top: 4.166666666666667vh;
        text-align: center;
        justify-content: center;
    }
    .menu a {
        font-size: 2rem;
        font-family: Museo700;
        margin-right: 1.3020833333333335vw;
        margin-left: 1.3020833333333335vw;
        color: white;
        text-decoration: none;
        transition: .5s;
    }
    .menu a:hover{
        color: #BA2C48;
    }
    .active{
        color: #BA2C48 !important;
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity 1s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }

    .fade2-enter-active, .fade2-leave-active {
        transition-delay: 1s;
        transition-duration: 1s;
        /* transition: opacity 1s; */
    }
    .fade2-enter, .fade2-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }



</style>