<template>
  <div id="fivem" class="big">
        <transition name="fade2">
            <div class="menu"> <p><router-link to="/">Home</router-link></p> <p><router-link to="/fivem_whitelist" >Whitelist</router-link></p> <p><a href="https://discord.gg/csaMXHsp6t" target="_blank">Discord</a></p> <p><a href="/fivem_regulamin">Regulamin</a></p> <p><a href="https://quantum-fivem.tebex.io/" target="_blank">Sklep</a></p></div>
        </transition>
        <transition name="fade">
            <div class="whitelist">
                <div class="question">
                    <h2>1. Imię i nazwisko, data urodzenia postaci.</h2>
                    <div class="inputs">
                        <input type="text" placeholder="Imię i nazwisko" v-model="name">
                        <input type="date" placeholder="Data urodzenia" v-model="dob" min="1900-01-01" value="1999-05-21">
                    </div>
                </div>
                
                <div class="question">
                    <h2>2. Opisz, czym dla Ciebie jest Role Play?</h2>
                    <textarea placeholder="Tekst..." v-model="quest_one"></textarea>
                </div>

                <div class="question">
                    <h2>3. Opisz, w kilku słowach co uważasz za inicjacje i wytłumacz dlaczego.</h2>
                    <textarea placeholder="Tekst..." v-model="quest_two"></textarea>
                </div>

                <div class="question">
                    <h2>4. Jakie widzisz plusy i minusy w naszym regulamienie?</h2>
                    <textarea placeholder="Tekst..." v-model="quest_three"></textarea>
                </div>

                <div class="question">
                    <button @click="sendApplication">Aplikuj</button>
                </div>
            </div>
        </transition>
  </div>
</template>

<script>
export default {
    data() {
        return{
            name:"",
            dob:"",
            quest_one:"",
            quest_two:"",
            quest_three:"",
        }
    },
    props:{
        application:{
            type:Boolean,
            default:false,
            required: true
        }
    },
    methods: {
        sendApplication(){
            var application = {name:this.name,dob:this.dob,ans_one:this.quest_one,ans_two:this.quest_two,ans_three:this.quest_three}
            this.$emit("sendApplication",application)
        }
    },
    async mounted(){
        if(localStorage.name != undefined){
            this.name = localStorage.name
        }
        if(localStorage.dob != undefined){
            this.dob = localStorage.dob
        }
        if(localStorage.quest_one != undefined){
            this.quest_one = localStorage.quest_one
        }
        if(localStorage.quest_two != undefined){
            this.quest_two = localStorage.quest_two
        }
        if(localStorage.quest_three != undefined){
            this.quest_three = localStorage.quest_three
        }        
    },
    watch:{
        name(newName) {
            localStorage.name = newName;
        },
        dob(newName) {
            localStorage.dob = newName;
        },
        quest_one(newName) {
            localStorage.quest_one = newName;
        },
        quest_two(newName) {
            localStorage.quest_two = newName;
        },
        quest_three(newName) {
            localStorage.quest_three = newName;
        }
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
    .whitelist{
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
    }
    .whitelist h2{
        font-family: 'Segoe UI';
        font-size: 1.875rem;
        color: white;
        margin-bottom: 3.3333333333333335vh;
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
        display: flex;
        flex-direction: column;
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
    .whitelist button{
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
</style>