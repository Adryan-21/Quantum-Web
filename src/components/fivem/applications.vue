<template>
  <div id="fivem" class="big">
        <transition name="fade2">
            <div class="menu"> <p><router-link to="/">Home</router-link></p> <p><router-link to="/fivem_whitelist" >Whitelist</router-link></p> <p><a href="https://discord.gg/csaMXHsp6t" target="_blank">Discord</a></p> <p><a href="/fivem_regulamin">Regulamin</a></p> <p><a href="https://quantum-fivem.tebex.io/" target="_blank">Sklep</a></p></div>
        </transition>
        <transition name="fade">
            <div class="list">
                <h2>Podania</h2>
                <div class="header"> 
                    <h3 :class="{active:newApplications}" @click="SetCategory('new')">Nowe</h3>
                    <h3 :class="{active:decileApplications}" @click="SetCategory('decile')">Odrzucone</h3>
                    <h3 :class="{active:acceptApplications}" @click="SetCategory('accept')">Zaakceptowane</h3>
                </div>
                <div class="applications" v-if="newApplications">
                    <div class="application" v-for="item in applications_new" :key="item.id">
                        <div class="title">
                            <h3>#{{item.id}}</h3>
                            <h3>{{item.discord}}</h3>
                            <h3>{{item.name}}</h3>
                            <h3>{{item.dob}}</h3>
                            <h3>{{item.date}}</h3>
                            <h3 @click="item.show = !item.show" v-if="!item.show" class="control">Wiecej</h3>
                            <h3 @click="item.show = !item.show" v-if="item.show" class="control">Mniej</h3>
                        </div>
                        <transition name="fade">
                            <div class="content" v-if="item.show">
                                <h4>1. Opisz, czym dla Ciebie jest Role Play?</h4>
                                <p>{{item.ans_one}}</p>
                            
                                <h4>2. Opisz, w kilku słowach co uważasz za inicjacje i wytłumacz dlaczego.</h4>
                                <p>{{item.ans_two}}</p>

                                <h4>3. Jakie widzisz plusy i minusy w naszym regulamienie?</h4>
                                <p>{{item.ans_three}}</p>
                                <div class="controls">
                                    <button @click="setStatus('zaakceptowane',item.id,item.id_discord)">Zaakceptuj</button> 
                                    <button @click="setStatus('odrzucone',item.id,item.id_discord)">Odrzuć</button>
                                    <select v-model="current_reason">
                                        <option v-for="reason in reasons" :value="reason.value" :key="reason" :disabled="reason.disable">
                                            {{ reason.text }}
                                        </option>
                                    </select>
                                </div>

                            </div>
                        </transition>
                    </div>
                </div>

                <div class="applications" v-if="decileApplications">
                    <div class="application" v-for="item in applications_decile" :key="item.id">
                        <div class="title">
                            <h3>#{{item.id}}</h3>
                            <h3>{{item.discord}}</h3>
                            <h3>{{item.name}}</h3>
                            <h3>{{item.dob}}</h3>
                            <h3>{{item.date}}</h3>
                            <h3 @click="item.show = !item.show" v-if="!item.show" class="control">Wiecej</h3>
                            <h3 @click="item.show = !item.show" v-if="item.show" class="control">Mniej</h3>
                        </div>
                        <transition name="fade">
                            <div class="content" v-if="item.show">
                                <h4>1. Opisz, czym dla Ciebie jest Role Play?</h4>
                                <p>{{item.ans_one}}</p>
                            
                                <h4>2. Opisz, w kilku słowach co uważasz za inicjacje i wytłumacz dlaczego.</h4>
                                <p>{{item.ans_two}}</p>

                                <h4>3. Jakie widzisz plusy i minusy w naszym regulamienie?</h4>
                                <p>{{item.ans_three}}</p>

                                <h4>Powód odrzucenia</h4>
                                <p>{{item.reason}}</p>

                                <h4>Osoba sprawdzająca</h4>
                                <p>{{item.osoba}}</p>
                            </div>
                        </transition>
                        
                    </div>
                </div>

                <div class="applications" v-if="acceptApplications">
                    <div class="application" v-for="item in applications_accept" :key="item.id">
                        <div class="title">
                            <h3>#{{item.id}}</h3>
                            <h3>{{item.discord}}</h3>
                            <h3>{{item.name}}</h3>
                            <h3>{{item.dob}}</h3>
                            <h3>{{item.date}}</h3>
                            <h3 @click="item.show = !item.show" v-if="!item.show" class="control">Wiecej</h3>
                            <h3 @click="item.show = !item.show" v-if="item.show" class="control">Mniej</h3>
                        </div>
                        <transition name="fade">
                            <div class="content" v-if="item.show">
                                <h4>1. Opisz, czym dla Ciebie jest Role Play?</h4>
                                <p>{{item.ans_one}}</p>
                            
                                <h4>2. Opisz, w kilku słowach co uważasz za inicjacje i wytłumacz dlaczego.</h4>
                                <p>{{item.ans_two}}</p>

                                <h4>3. Jakie widzisz plusy i minusy w naszym regulamienie?</h4>
                                <p>{{item.ans_three}}</p>

                                <h4>Osoba sprawdzająca</h4>
                                <p>{{item.osoba}}</p>
                                

                            </div>
                        </transition>
                        
                    </div>
                </div>
            </div>
        </transition>
  </div>
</template>

<script>
export default {
    data() {
        return{
            newApplications:true,
            decileApplications:false,
            acceptApplications:false,
            current_reason:"Brak",
            reasons:[
                {value:"Brak",text:"Powód",disable:true},
                {value:"Imię i Nazwisko nie jest anglojęzyczne, Niewystarczający opis czym jest RolePlay, Niewystarczający opis czym jest inicjacja.",text:"Imię i Nazwisko nie jest anglojęzyczne, Niewystarczający opis czym jest RolePlay, Niewystarczający opis czym jest inicjacja."},
                {value:"Imię i Nazwisko nie jest anglojęzyczne, Błędny opis czym jest RolePlay, Błędny opis czym jest inicjacja.",text:"Imię i Nazwisko nie jest anglojęzyczne, Błędny opis czym jest RolePlay, Błędny opis czym jest inicjacja."},
                {value:"Imię i Nazwisko nie jest anglojęzyczne, Niewystarczający opis czym jest RolePlay.",text:"Imię i Nazwisko nie jest anglojęzyczne, Niewystarczający opis czym jest RolePlay."},
                {value:"Imię i Nazwisko nie jest anglojęzyczne, Błędny opis czym jest RolePlay.",text:"Imię i Nazwisko nie jest anglojęzyczne, Błędny opis czym jest RolePlay."},
                {value:"Imię i Nazwisko nie jest anglojęzyczne, Niewystarczający opis czym jest inicjacja.",text:"Imię i Nazwisko nie jest anglojęzyczne, Niewystarczający opis czym jest inicjacja."},
                {value:"Imię i Nazwisko nie jest anglojęzyczne, Błędny opis czym jest inicjacja.",text:"Imię i Nazwisko nie jest anglojęzyczne, Błędny opis czym jest inicjacja."},
                {value:"Niewystarczający opis czym jest RolePlay, Niewystarczający opis czym jest inicjacja.",text:"Niewystarczający opis czym jest RolePlay, Niewystarczający opis czym jest inicjacja."},
                {value:"Błędny opis czym jest RolePlay, Błędny opis czym jest inicjacja.",text:"Błędny opis czym jest RolePlay, Błędny opis czym jest inicjacja."},
                {value:"Imię i Nazwisko nie jest anglojęzyczne.",text:"Imię i Nazwisko nie jest anglojęzyczne."},
                {value:"Role Play -  za krótkie i ogólne wyjaśnienie, postaraj się szerzej opisać co rozumiesz pod tym pojęciem. ",text:"Role Play -  za krótkie i ogólne wyjaśnienie, postaraj się szerzej opisać co rozumiesz pod tym pojęciem. "},
                {value:"Inicjacja -  za krótkie i ogólne wyjaśnienie, postaraj się szerzej opisać co rozumiesz pod tym pojęciem. ",text:"Inicjacja -  za krótkie i ogólne wyjaśnienie, postaraj się szerzej opisać co rozumiesz pod tym pojęciem. "},
                {value:"Ogólny brak wysiłku podczas pisania podania. Podanie jest niespójne.",text:"Ogólny brak wysiłku podczas pisania podania. Podanie jest niespójne."},
            ],
        }
    },
    props:{
        applications_new:{
            type:Array,
            default: () => []
        },
        applications_decile:{
            type:Array,
            default:() => []
        },
        applications_accept:{
            type:Array,
            default:() => []
        }
    },
    methods:{
        SetCategory(params){
            this.newApplications = false
            this.decileApplications = false
            this.acceptApplications = false
            if(params == 'new'){
                this.newApplications = true
            }else if (params == 'accept'){
                this.acceptApplications = true
            }else if(params == 'decile'){
                this.decileApplications = true
            }
        },
        setStatus(status,id,id_discord){
            this.$emit('setStatus',status,id,this.current_reason,id_discord)
        }
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
        transition: opacity .25s;
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
        font-weight: 600;
        font-size: 1.125rem;
        width: 9.114583333333332vw;
        text-align: center;
        transition: 0.5s;
    }
    .header h3:hover{
        color: #BA2C48;
        cursor: pointer;
    }
    .applications{
        width: 54.479166666666664vw;
        height: 83.51851851851852vh;
        display: flex;
        align-items: center;
        text-align: center;
        flex-direction: column;
        overflow-y: scroll;
        overflow-x: hidden;
    }

    .applications h3{
        color: white;
        font-family: 'Segoe UI';
        font-weight: 300;
        font-size: 1.125rem;
        width: 9.114583333333332vw;
    }

    .application{
        width: 54.479166666666664vw;
        margin-top: 3.888888888888889vh;
        padding-bottom: 3.888889vh;
        border-bottom: 1px solid rgba(255, 255, 255, 0.14);
    }
    .application .title{
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .application .content{
        width: 46.479167vw;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-left: 4vw;
        margin-top: 3.888888888888889vh;
    }

    .application .content h4{
        color: white;
        font-family: 'Segoe UI';
        font-weight: 400;
        font-size: 1.5rem;
        margin-bottom: 2.4074074074074074vh;
    }

    .application .content p{
        color: white;
        font-family: 'Segoe UI';
        font-weight: 400;
        font-size: 1.125rem;
        text-align: left;
        margin-bottom: 3.240740740740741vh;
    }
    .control{
        cursor: pointer;
        transition: .5s;
    }
    .control:hover{
        color: #BA2C48;
    }

    .controls {
        width: 46.479167vw;
        display: flex;
        justify-content: space-between;
    }
    .controls button{
        margin: 0;
    }
    .controls select{
        width: 8.229166666666666vw;
        height: 4.2592592592592595vh;
        border-radius: 6px;
        color: white;
        background-color: #BA2C48;
        font-size: 1.5rem;
        font-family: 'Segoe UI';
        text-align: center;
        border: 0;
    }
</style>