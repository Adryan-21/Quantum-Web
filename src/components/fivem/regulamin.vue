<template>
  <div id="fivem" class="big">
        <transition name="fade2">
            <div class="menu"> <p><router-link to="/">Home</router-link></p> <p><router-link to="/fivem_whitelist" >Whitelist</router-link></p> <p><a href="https://discord.gg/csaMXHsp6t" target="_blank">Discord</a></p> <p><a href="/fivem_regulamin">Regulamin</a></p> <p><a href="https://quantum-fivem.tebex.io/" target="_blank">Sklep</a></p></div>
        </transition>
        <transition name="fade">
            <div class="wrap">
                <div class="list">
                    <h2>1. Zasady ogólne</h2>
                    <p>1. Wejście na serwer jest równoznaczne z akceptacją regulaminu.</p>
                    <p>2. Nieznajomość regulaminu nie zwalnia z jego przestrzegania.</p>
                    <p>3. Wchodząc na serwer gracz jest zobowiązany wcielić się w swoją postać.</p>
                    <p>4. Używanie zwrotów "ooc", "ic", "mam telefon w głowie", "muszę się zamyślić", "mam czerwone oczka" itp. uznawane będzie za wyjście z roli/Fail–RP.</p>
                    <p>5. Odegranie za pomocą komend wyrzucenia przedmiotu, który fizycznie posiada się w ekwipunku oraz odegranie braku dowodu osobistego traktowane będzie jako Fail–RP/PG.</p>
                    <p>6. Po każdym restarcie serwera obowiązuje dziesięciominutowy immunitet dla każdego gracza. W tym czasie zakazuje się rozpoczynania agresywnych akcji RP (wyjątkiem jest kontynuacja akcji sprzed restartu).</p>
                    <p>7. Na serwerze obowiązują tzw. miejsca publiczne gdzie istnieje możliwość rozpoczęcia agresywnej akcji RP (tj. porwanie, akcja poprzedzona inicjacją słowną bądź z użyciem broni palnej) tylko pod warunkiem odpowiednio dobrego podłoża do jej rozpoczęcia. Poniżej lista miejsc publicznych:</p>
                    <ul>
                        <li>a) Garaże publiczne (typu “garaż A”, skryptowo oznaczone na mapie)</li>
                        <li>b) Komendy policji</li>
                        <li>c) Szpitale</li>
                        <li>d) Warsztaty samochodowe</li>
                        <li>e) Salony samochodowe</li>
                        <li>f) Więzienie</li>
                        <li>g) Departament sprawiedliwości</li>
                        <li>h) Urząd</li>
                    </ul>
                    <p>8. W mieście zakazuje się bezsensownych strzelanin, nadużywania broni palnej, prowokowania drugiej strony/grupy, jeżdżenie za policją, celowe jej prowokowanie, itp.</p>
                    <p>9. Podczas zakuwania oraz przeszukania nie jest wymagane używanie komend narracyjnych w celu opisania wykonywanych czynności. Warunek: podczas zakuwania osoba musi mieć podniesione do góry ręce (jeśli osoba nie chce podnieść rąk można ją spacyfikować bądź użyć tasera)</p>
                    <p>10. Po otrzymaniu trzech banów w ciągu 30 dni za nieposzanowanie życia zostaje nałożona kara FCK.</p>
                    <p>11. Na potrzeby akcji RP, każdy punkt regulaminu może być nagięty za zgodą drugiego gracza i pod warunkiem, że takie działanie będzie miało swoje uzasadnienie.</p>
                    <p>12. Jeżeli podczas trwającej akcji RP dostałeś crasha, należy zgłosić to według przyjętego wzoru na odpowiednim kanale naszego discorda.</p>
                    <p>13. Zakazuje się używania programów wspomagających oraz wykorzystywania bugów w celu zdobycia przewagi w rozgrywce.</p>

                    <h2>2. Zasady działania Administracji</h2>
                    <p>1. Serwer jest dla osób, które ukończyły szesnasty rok życia, posiadają sprawny mikrofon oraz przeszły mutację głosu.</p>
                    <p>2. Rekrutacja na whitelist odbywa się w dwóch etapach. Pierwszy etap obejmuje pisemne podanie składane przez każdego gracza. Następnie osoby, których podanie zostało zaakceptowane mogą podejść do weryfikacji głosowej na odpowiednim kanale.</p>
                    <p>3. Gracz zobowiązany jest do posiadania takiego samego nicku na discordzie jak i na steamie.</p>
                    <p>4.Wyłącznie administracja może wezwać gracza kanał “rządowy” po uprzednim wysłaniu przez jedną ze stron zgłoszenia z materiałem dowodowym:</p>
                    <ul>
                        <li>a) Zabrania się zgłoszeń pt. „czy ktoś może wejść na In–Game?”  itp.</li>
                        <li>b) Podczas wyjaśniania sytuacji na kanale Administracyjnym, zakazuje się jej nagrywania lub transmitowania. Niestosowanie się do tego punktu może skutkować banem oraz natychmiastowym zakończeniem omawianej sprawy.</li>
                        <li>c) Dowody wymagane podczas składania skargi/zgłoszenia na innego gracza mają ważność 24h od momentu zdarzenia, którego dotyczy zgłoszenie. Pisanie zgłoszeń i ticketów bez zdjęć/nagrań może zostać automatycznie zamknięte.</li>
                    </ul>

                    <h2>3. Zasady dotyczące Postaci</h2>
                    <p>1. Gracz zobowiązany jest do konsekwentnego prowadzenia swojej postaci.</p>
                    <p>2. Odgrywanie osoby z tymczasowymi lub permanentnymi zaburzeniami psychicznymi w celu złagodzenia lub braku konsekwencji za popełniony czyn jest niedopuszczalne.</p>
                    <p>3. Posiadając w ekwipunku długą broń palną, kij bejsbolowy lub inne przedmioty o znacznych gabarytach obowiązkowo należy mieć na sobie torbę/plecak lub odegrać wyciągnięcie przedmiotu z pojazdu.</p>
                    <p>4. Dowód osobisty każda postać ma zawsze przy sobie. (Zasady ogólne pkt. 5.)</p>
                    <p>5. Majątek przepada wraz z permanentnym banem bądź CK postaci.</p>
                    <p>6. Imię i nazwisko postaci musi być anglojęzyczne oraz nie może być takie samo jak osoby rozpoznawalnej, sławnej lub znanej z filmu, książki bądź komiksu np. Donald Trump lub Tony Stark.</p>
                   
                    <h2>4. Rozgrywka</h2>
                    <p>1. Maksymalna ilość osób uczestniczących w agresywnej akcji RP wynosi 8.</p>
                    <p>2. Zakaz prowadzenia rozmów OOC w IC, a także zbędnego spamowania na czacie Local–OOC.</p>
                    <p>3. Nie można rozpoznać drugiej osoby po głosie, gdy posiada ona na sobie maskę oraz w najmniejszym stopniu moduluje głos.</p>
                    <p>4. Zakazuje się schorzałego RP bez zgody drugiej osoby (odcinanie kończyn, gwałt, trwałe okaleczenia, urazy, itp.). </p>
                    <p>5. Zakazuje się lootowania graczy na bw podczas trwającej strzelaniny.</p>
                    <p>6. Zabrania się przechodzenia przez zamknięte drzwi/tekstury/budynki za pomocą animacji, będzie to uznawane jako wykorzystywanie mechaniki gry.</p>
                    <p>7. Zakazuje się podszywania pod służby publiczne, wyjątkiem jest uzasadniona akcja RP (gracz porwał funkcjonariusza SASP i odegrał odebranie mu ubrania w celu wykonania akcji RP).</p>
                    <p>8. Zakazuje się używania pojazdów wojskowych.</p>
                    <p>9. Każda akcja RP musi być rozpoczęta inicjacją słowną w sposób możliwy do usłyszenia dla przeciwnej osoby/grupy.</p>
                    <p>10. Ilość osób w aucie musi być realistyczna. Mając czteroosobowy pojazd nie można podnieść nikogo na ręce za pomocą kajdanek lub animacji z wytłumaczeniem "Biorę Cię na kolanka".</p>
                    <p>11. Obrażenia, które doprowadziły postać do BW muszą być faktyczne oraz realistyczne w stosunku do rodzaju wypadku (np. postrzał w kamizelkę można odegrać tylko w momencie, gdy posiadając ją na sobie do paska życia dodany został tzw. “armor”, a nie została tylko wizualnie założona w sklepie odzieżowym).</p>
                
                    <h2>5. Przestępstwa</h2>
                    <p>1. Zakazuje się okradania kont bankowych innych graczy.</p>
                    <p>2. W przypadku napadów minimalna ilość napastników znajdujących się w środku oraz maksymalna ilość osób (napastników/SASP) w akcji wynosi:</p>
                    <ul>
                        <li>a) Kasetka/Bankomat: Min – 1 / Max – 2 (SASP Max 4).</li>
                        <li>b) Sklep: Min – 2 / Max – 4 (SASP Max 6).</li>
                        <li>c) Bank/Jubiler: Min – 4 / Max – 6 (SASP Max 8).</li>
                        <li>d) Pacyfik: Min – 6 / Max – 8 (SASP Max 10).</li>
                    </ul>
                    <p>3. Zakazuje się okradania graczy podczas wykonywania przez nich prac legalnych (wyjątkiem jest prowokacja ze strony osoby pracującej).</p>
                    <p>4. Zakazuje się porywania funkcjonariuszy SASP, gdy jest ich mniej niż 8 aktywnych na służbie.</p>
                    <p>5. Zakazuje się porywania pracownika służb medycznych, gdy jest ich mniej niż 4 aktywnych na służbie.</p>
                    <p>6. Odbijanie konwoju dozwolone jest tylko przez osoby z jednej organizacji (jeżeli osoba lub osoby z gangu A są konwojowane to tylko osoby z tego samego gangu mają prawo ich odbijać).</p>
                    <p>7. Do rozpoczęcia każdego napadu wymagany jest co najmniej jeden zakładnik (maksymalna liczba zakładników w miejscu napadu nie może przekraczać maksymalnej liczny napastników prowadzącej napad).</p>
                    <p>8. Ze strony SASP muszą zostać podjęte negocjacje z zachowaniem proporcji jeden zakładnik = jedno żądanie obowiązującej zarówno napastników jak i funkcjonariuszy.</p>
                    <p>9. Zakaz sprzedaży narkotyków w grupach powyżej 4 osób. Zakazuje się również dojazdów na sprzedawanie aby łączna liczba napastników wynosiła 8. Limit funkcjonariuszy podczas reakcji na sprzedaż również wynosi 4.</p>
                
                    <h2>6. Organizacje przestępcze</h2>
                    <p>1. Jeżeli osoba będąca w zarejestrowanym gangu złamie jego regulamin, gang może wnioskować o FCK dla takiej osoby dostarczając odpowiednie dowody.</p>
                    <p>2. Zarejestrowany gang posiada grupową inicjację.</p>
                    <p>3. Zarejestrowanemu gangowi zakazuje się posiadania sojuszu/współpracy z innymi gangami.</p>
                    <p>4. Do gangów lore zaliczamy: 
                        <ul>
                            <li>a) Chamberlain Hills</li>
                            <li>b) Ballas</li>
                            <li>c) Los Santos Vagos</li>
                            <li>d) The Lost Brotherhood</li>
                            <li>e) Bracia O'Neil</li>
                            <li>f) Triada</li>
                            <li>g) Aztekowie</li>
                            <li>h) Marabunta Grande</li>
                            <li>i) Angels of Death</li>
                            <li>j) Crips</li>
                            <li>k) Bloods</li>
                        </ul>                
                    <h2>7. Pojęcia</h2>
                    <p>1. VDM (Vehicle Deathmatch) – Zabijanie graczy przy pomocy pojazdów bez podstaw RP.</p>
                    <p>2. RDM (Random Deathmatch) – Zabijanie losowych graczy bez podstaw RP.</p>
                    <p>3. BW (Brutally Wounded) – Doprowadzenie postaci do stanu nieprzytomności.</p>
                    <p>4. Amnezja – Po “zabraniu przez lokalnego medyka” (odrodzeniu na szpitalnym korytarzu bez przedmiotów). Wymaga od gracza zapomnienia całej akcji, która doprowadziła jego postać do bw. Mówienie o amnezji w IC (“kurde stary obudziłem się w szpitalu, chyba amnezja” jest traktowane jako Fail-RP)</p>
                    <p>5. CK (Character Kill) – Całkowite uśmiercenie odgrywanej postaci.</p>
                    <p>6. RK (Revenge Kill) – Zabicie w celu zemsty.</p>
                    <p>7. OOC (Out–Of–Character) – Wszystko co niezwiązane jest z rozgrywką.</p>
                    <p>8. IC (In–Character) – Wszystko co dotyczy bezpośrednio rozgrywki.</p>
                    <p>9. MG (Metagaming) – Przenoszenie i wykorzystywanie informacji z OOC w IC.</p>
                    <p>10. PG (Power Gaming) – Wymuszanie na drugim graczu akcji RP.</p>
                    <p>11. CL/BL (Combat–Log/Battlelog) – Wyjście z gry podczas akcji RP, bądź stanu nieprzytomności.</p>
                    <p>12. Fail RP – Odegranie akcji RP w sposób niezgodny z regulaminem, bądź z ogólnym pojęciem Role Play.</p>
                    <p>13. Loot–RP – Konfiskowanie rzeczy innym graczom bez postaw RP. Najczęściej wykorzystując fakt, że leżą na bw, do którego nie doprowadziliśmy lub korzystając z mechaniki typu zakucie i zabranie rzeczy bez żadnej innej interakcji.</p>
                    <p>14. CB (Cop Baiting) – Celowe działanie w celu zmuszenia policji do podjęcia działania przeciw danemu graczowi (np. strzelanie w powietrze aby zwabić SASP, wielokrotne zaczepianie SASP i prowokowanie pościgu itp).</p>
                    <p>15. FD (Fail Driving) – Jazda pojazdem niezgodnie z jego fizycznymi i mechanicznymi możliwościami, np. wjazd w góry pojazdem do tego nieprzystosowanym.</p>
                    <p>16. Komenda narracyjna ME – Służy do opisania aktualnie wykonywanej przez postać czynności. Używana zazwyczaj gdy nie da się zaprezentować owej czynności przy pomocy animacji lub innej mechaniki gry.</p>
                    <p>17. Komenda narracyjna DO – Służy do opisywania aktualnego stanu otoczenia, postaci, pojazdu bądź biegu odgrywanej akcji. Ponadto zakazuje się kłamstwa podczas korzystania z narratora DO.</p>
                    <p>18. Komenda narracyjna TRY – Po jej wpisaniu otrzymujemy odpowiedź zwrotną w postaci "Udane"/ "Nieudane", w odpowiedniej sytuacji możemy jej użyć w celu sprawdzenia czy dana akcja zakończyła się powodzeniem.</p>
                    <p>19. Komenda narracyjna OPIS – Służy do opisywania cech wyglądu naszej postaci oraz obrażeń, które inny gracz może bez większego problemu na pierwszy rzut oka zobaczyć np. (złamana ręka, poplamiona koszulka itp.)</p>
                    <p>20. Komenda narracyjna OPIS2 – Służy do opisywania otoczenia np. (na ścianie jest namalowane graffiti, szyba w oknie jest wybita itp.).</p>
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