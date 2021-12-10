<template>
  <div id="fivem" class="big">
        <transition name="fade2">
            <div class="menu"> <p><router-link to="/">Home</router-link></p> <p><router-link to="/fivem_whitelist" >Whitelist</router-link></p> <p><a href="https://discord.gg/csaMXHsp6t" target="_blank">Discord</a></p> <p><a href="/fivem_regulamin">Regulamin</a></p> <p><a href="https://quantum-fivem.tebex.io/" target="_blank">Sklep</a></p></div>
        </transition>
        <transition name="fade">
            <div class="list">
                <h2>Status Podania</h2>
                <div class="header"> 
                    <h3>Imię i nazwisko postaci</h3>
                    <h3>Data urodzenia</h3>
                    <h3>Data podania</h3>
                    <h3>Status</h3>
                </div>
                <div class="applications" v-for="item in status_list" :key="item.id">
                    <h3>{{item.name}}</h3>
                    <h3>{{item.dob}}</h3>
                    <h3>{{item.date}}</h3>
                    <h3>{{item.status}}</h3>

                </div>
            </div>
        </transition>
  </div>
</template>

<script>
export default {
    data() {
        return{

        }
    },
    props:{
        status_list:{
            type: Array,
        }
    },
    created() {
    
    },
    async mounted(){
       
    },
    watch:{

    }
}
</script>

<style scoped>
    .big{
        width: 100vw;
        height: 100vh;
    }
    #fivem{
        background-image: url("../../assets/gtafulltlo.png");
        background-position:center;   
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
    .menu{
        display: flex;
        width: 39.479166666666664vw;
        margin-top: 4.166666666666667vh;
        text-align: center;
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
    .list{
        width: 61.302083333333336vw;
        height: 83.51851851851852vh;
        background-color: #000000B2;
        border-radius: 50px 50px 0px 0px;
        bottom: 0;
        position: absolute;
        padding-top:2.8703703703703702vh;
        display: flex;
        flex-direction: column;
        overflow-y: scroll;
        align-items: center;
    }
    .list h2{
        font-family: 'Segoe UI';
        font-size: 1.875rem;
        color: white;
        margin-bottom: 4.351851851851852vh;
        text-align: center;
    }
    .inputs{
        height: 3.3333333333333335vh;
        display: flex;
        margin-bottom: 3.3333333333333335vh;
    }

    .inputs input{
        margin-left: 2.083333333333333vw;
        background-color: transparent;
        outline: none;
        border: 0;
        border-bottom: 2px solid white;
        color: white;
        font-family: 'Segoe UI';
        font-size: 1.5rem;
        height: 1.9791666666666665vw;
        transition: .5s;
    }
    input:focus{
        border-bottom: 2px solid #BA2C48;
    }
    .question textarea{
        margin-left: 2.083333333333333vw;
        background-color: transparent;
        outline: none;
        border: 0;
        border-bottom: 2px solid white;
        color: white;
        font-family: 'Segoe UI';
        font-size: 1.5rem;
        height: 1.9791666666666665vw;
        transition: border .5s;
        width: 49.791666666666664vw;
        resize: vertical;
        overflow: auto;
    }
    textarea:focus{
        border-bottom: 2px solid #BA2C48;
    }
    .question{
        margin-bottom: 4.444444444444445vh;
        margin-left: 5.3125vw;
        margin-right: 4.114583333333333vw;
    }
    ::-webkit-scrollbar:hover{
        cursor: pointer !important;
    }
    ::-webkit-scrollbar{
        background-color: transparent;
        width: 0.26041666666666663vw;
        cursor: pointer !important;
    }
    ::-webkit-scrollbar-thumb{
        background-color: #BA2C48;
        border-radius: 5px;
    }
    ::-webkit-scrollbar-track{
        background-color: transparent;
    }
    ::-webkit-calendar-picker-indicator {
        filter: invert(1);
    }
    .list button{
        width: 8.229166666666666vw;
        height: 4.2592592592592595vh;
        background: #BA2C48;
        border-radius: 6px;
        color: white;
        font-size: 1.5rem;
        font-family: 'Segoe UI';
        text-align: center;
        border: 0;
        margin:auto;
    }
    .header{
        width: 54.479166666666664vw;
        min-height: 4.907407407407407vh;
        background-color: #2727274A;
        border-radius: 14px;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .header h3{
        color: white;
        font-family: 'Segoe UI';
        font-weight: 300;
        font-size: 1.125rem;
        width: 9.114583333333332vw;
        text-align: center;
    }
    .applications{
        width: 54.479166666666664vw;
        min-height: 4.907407407407407vh;
        display: flex;
        justify-content: space-around;
        align-items: center;
        text-align: center;
    }

    .applications h3{
        color: white;
        font-family: 'Segoe UI';
        font-weight: 300;
        font-size: 1.125rem;
        width: 9.114583333333332vw;
        text-align: center;
    }
</style>