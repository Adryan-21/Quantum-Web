<template>
  <div id="app">
    <h1>Nie ma takiej strony</h1>
    <button @click="Lobby">Powrót</button>
  </div>
</template>

<script>



export default {
  name: 'Not_Found',
  components:{

  },
  data() {
    return{

    }
  },
  methods: {
    Lobby() {
        this.$router.push('/')
    }
  }
}

</script>

<style scoped>
  @font-face {
    font-family: Museo100;
    src: url("../assets/MuseoSans_100.otf");
  }
  @font-face {
    font-family: Museo300;
    src: url("../assets/MuseoSans_300.otf");
  }
  @font-face {
    font-family: Museo500;
    src: url("../assets/MuseoSans_500.otf");
  }
  @font-face{
    font-family: Museo700;
    src: url("../assets/MuseoSans_700.otf");
  }
  *{
    margin: 0;
  }
  body{
    overflow: hidden;
  }
  #app {
    width: 100vw;
    height: 100vh;
    background-image: url("../assets/404.png");
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  h1{
    margin-top: 50vh;
    color: #FFFFFF;
    font-family: 'Segoe UI';
    font-size: 4.5rem;
    margin-bottom: 5.092592592592593vh;
  }

  button{
    width: 8.229166666666666vw;
    height: 4.2592592592592595vh;
    background-color: #BA2C48;
    border-radius: 6px;
    color: #FFFFFF;
    border: 0;
    font-family: 'Segoe UI';
    font-size: 1.5rem;
    cursor: pointer;
    transition: 0.5s;
  }
  button:hover{
    transform: scale(1.1);
  }

</style>
