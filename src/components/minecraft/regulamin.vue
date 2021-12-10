<template>
  <div id="minecraft" class="big">
        <transition name="fade2">
            <div class="menu"> <p><router-link to="/">Home</router-link></p> <p><a href="https://discord.gg/WfQx7MHPed" target="_blank">Discord</a></p> <p><router-link to="/minecraft_regulamin">Regulamin</router-link></p> <p><a href="https://quantum-minecraft.tebex.io/" target="_blank">Sklep</a></p></div>
        </transition>
        <transition name="fade">
            <div class="wrap">
                <div class="list">
                    <h2>1. Postanowienia ogólne</h2>
                    <p>1. Nieznajomość regulaminu nie zwalnia z jego przestrzegania.</p>
                    <p>2. Administracja zastrzega sobie prawo do zmiany regulaminu.</p>
                    <p>3. Administracja ma prawo nadawać bany nieuwzględnione w regulaminie, bądź w innej formie niż jest to ujęte.</p>
                    <p>4. Próby sprzedaży, handlu, czerpania korzyści materialnych z kont, rang, przedmiotów, informacji, naszej własności intelektualnej lub pracy są zabronione.</p>
                    <p>5. Zakaz podawania swojego hasła innym graczom, administracja nie oddaje kont. Dzielone konto może zostać zablokowane, a nawet wyczyszczone.</p>

                    <h2>2. Zasady ogólne</h2>
                    <p>1. Administracja nie odpowiada za stracone itemy. Survival to miejsce, gdzie każdy może zabijać i okradać innych. Lagi serwera są niezależne od administracji oraz nie upoważniają administracji do oddawania itemów.</p>
                    <p>2. Świadome bugowanie serwera (wykorzystywanie błędów) jest zabronione. W wypadku znalezienia błędu należy bezzwłocznie powiadomić o tym administrację.</p>
                    <p>3. Na serwerze obowiązuje zakaz podszywania się pod administrację oraz innych graczy.</p>
                    <p>4. Zakaz proszenia administratora o itemy, rangi itp.</p>
                    <p>5. Używanie cheatów/skryptów/modów/programów/tekstur, ułatwiających w znacznym stopniu rozgrywkę, jest zabronione.</p>
                    <p>6. Handel z innymi graczami odbywa się na własne ryzyko. Pożyczanie itemów na własne ryzyko.</p>
                    <p>7. Zakazuje się sprzedaży przedmiotów i kont realnymi walutami.</p>
                
                    <h2>3. Zasady czatu</h2>
                    <p>1. Na serwerze obowiązuje zakaz pisania ciągu słów lub zdań wielkimi literami.</p>
                    <p>2. Zaśmiecanie czatu tą samą, lub podobną pod względem treści wiadomością jest traktowane jako spam i zostanie ukarane.</p>
                    <p>3. Wysyłanie jednej wiadomości, z maksymalną ilością podobnych lub tych samych znaków; nie tworząc zdań, jest zakazane.</p>
                    <p>4. Reklamowanie innych serwerów, obrażanie serwera/administracji jest zakazane.</p>
                    <p>5. Na całym serwerze panuje zakaz używania przekleństw i słów powszechnie uznawanych za wulgarne bądź obraźliwe, szczególnie w sytuacjach niepotrzebnych.</p>
                
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
        
    },
    methods:{
        
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
    #minecraft{
        background-image: url("../../assets/minecraftfulltlo.png");
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
    .wrap{
        width: 61.302083333333336vw;
        height: 83.51851851851852vh;
        background-color: #000000B2;
        border-radius: 50px 50px 0px 0px;
        bottom: 0;
        position: absolute;
        display: flex;
        flex-direction: column;
    }
    .list{
        width: 50.72916666666667vw;
        margin-left: 5.3125vw;
        overflow-y: scroll;
        margin-top:2.7777777777777777vh;
    }
    .list h2{
        font-family: 'Segoe UI';
        font-size: 2rem;
        color: white;
        margin-bottom: 3.240740740740741vh;
        margin-top:2.7777777777777777vh;
    }

    .list p{
        font-family: 'Segoe UI';
        font-size: 1.5rem;
        color: white;
        transition: 0.25s;
        max-width: 50.72916666666667vw;
        margin-bottom:0.76296296296296297vh;
        margin-left: 1.3125vw;
    }
    .list li{
        transition: 0.25s;
    }
    .list p:hover, .list li:hover{
        color: #BA2C48;
        cursor: pointer;
    }

    .list ul{
        list-style: none;
        font-family: 'Segoe UI';
        font-size: 1.5rem;
        color: white;
        margin-left: 1.3125vw;
        margin-bottom:0.76296296296296297vh;
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
</style>