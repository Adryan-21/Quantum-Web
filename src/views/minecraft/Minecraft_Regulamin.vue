<template>
  <div id="app">
    <regulamin></regulamin>
  </div>
</template>

<script>
import regulamin from "../../components/minecraft/regulamin.vue"


export default {
  name: 'Minecraft_Regulamin',
  components:{
    regulamin
  },
  data() {
    return{

    }
  },
  mounted(){
        
  },
  methods: {

  }
}

</script>

<style>
  @font-face {
    font-family: Museo100;
    src: url("../../assets/MuseoSans_100.otf");
  }
  @font-face {
    font-family: Museo300;
    src: url("../../assets/MuseoSans_300.otf");
  }
  @font-face {
    font-family: Museo500;
    src: url("../../assets/MuseoSans_500.otf");
  }
  @font-face {
    font-family: Museo700;
    src: url("../../assets/MuseoSans_700.otf");
  }
  *{
    margin: 0;
  }
  body{
    overflow: hidden;
  }
  #app {
    display: flex;
    width: 100vw;
    height: 100vh;
  }
  .logo_main{
    position: absolute;
    left: 50%;
    top: 9.444444444444445vh;
    transform: translate(-50%,0);
    z-index: 2;
    transition: 1s;
  }
  .logo_main_game{
    position: absolute;
    left: 50%;
    top: 16.75925925925926vh;
    transform: translate(-50%,0);
    z-index: 2;
    transition: 1s;
  }
  .discord{
    position: absolute;
    display: flex;
    align-items: center;
    background: #000000;
    box-shadow: 2px 4px 19px 4px rgba(0, 0, 0, 0.25);
    border-radius: 24px;
    border: 0;
    height: 8.518518518518519vh;
    width: 13.28125vw;
    color: white;
    font-family: Museo700;
    font-size: 2.375rem;
    left: 50%;
    bottom: 7.222222222222222vh;
    transform: translate(-50%,0) translateZ(0)  perspective(1px);
    transition: .5s;
    backface-visibility: hidden;    
    -webkit-font-smoothing: subpixel-antialiased;
    min-width: min-content;
  }
  .discord:hover{
    transform: translate(-50%,0) scale3d(1.1,1.1,1.0) translateZ(0) perspective(1px);
  }
  .discord img {
    margin-left: 0.9895833333333333vw;
    margin-right: 0.8333333333333334vw;
    width:2.604166666666667vw;
    height:6.37037037037037vh;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
