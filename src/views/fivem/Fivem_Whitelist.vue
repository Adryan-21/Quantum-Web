<template>
  <div id="app">
    <whitelist @sendApplication="sendApplication"  v-if="whitelist"/>
    <status :status_list="status_list" v-if="status"/>
    <applications @setStatus="setStatus" :applications_new="applications_new" :applications_decile="applications_decile" :applications_accept="applications_accept" v-if="applications"/>
  </div>
</template>

<script>
import axios from "axios";
import whitelist from "../../components/fivem/whitelist.vue"
import status from "../../components/fivem/status.vue"
import applications from "../../components/fivem/applications.vue"


export default {
  name: 'Fivem_Whitelist',
  components:{
    whitelist,
    status,
    applications,
  },
  data() {
    return{
      whitelist:false,
      status:false,
      applications:false,
      status_list:[],
      applications_new:[],
      applications_decile:[],
      applications_accept:[],
    }
  },
  async mounted(){
        let uri = window.location.search.substring(1); 
        let params = new URLSearchParams(uri);
        let self = this
        if(params.get("code") != null){
          await axios.get("http://quantum-servers.net:5000/api/register",{params:{code:params.get("code")}}).then(function (datas) {
            if(datas.data.status.on_discord){
              location.href = "https://discord.gg/csaMXHsp6t"
            }
            self.whitelist=datas.data.status.whitelist
            self.status=datas.data.status.status
            self.applications=datas.data.status.applications
            localStorage.token = JSON.stringify(datas.data.data);
            self.$router.replace({'query': null});
            console.log(self.whitelist);
            console.log(self.status);
            console.log(self.applications);
          })
        }else if(localStorage.token != undefined){
          var _token = JSON.parse(localStorage.token)
          if(_token.access_token != undefined){
              await axios.get("http://quantum-servers.net:5000/api/login",{params:{code:_token.access_token}}).then(function (datas) {
                  if(datas.data.status.on_discord){
                    location.href = "https://discord.gg/csaMXHsp6t"
                  }
                  self.whitelist=datas.data.status.whitelist

                  self.status=datas.data.status.status
                  if(self.status == true){
                    self.status_list=datas.data.status_list
                  }
                  self.applications=datas.data.status.applications
                  if(self.applications == true){
                    self.applications_new = datas.data.data.applications_new
                    self.applications_decile = datas.data.data.applications_decile
                    self.applications_accept = datas.data.data.applications_accept
                  }
              })
          }else{
            location.href = "https://discord.com/api/oauth2/authorize?client_id=898282246409162842&redirect_uri=http%3A%2F%2Fquantum-servers.net%2Ffivem_whitelist&response_type=code&scope=identify%20guilds"
          }
        }else{
          location.href = "https://discord.com/api/oauth2/authorize?client_id=898282246409162842&redirect_uri=http%3A%2F%2Fquantum-servers.net%2Ffivem_whitelist&response_type=code&scope=identify%20guilds"
        }
        
    },
  methods: {
        sendApplication(params){
          localStorage.removeItem('name');
          localStorage.removeItem('dob');
          localStorage.removeItem('quest_one');
          localStorage.removeItem('quest_two');
          localStorage.removeItem('quest_three');
          let self = this
          if(localStorage.token != undefined){
            var _token = JSON.parse(localStorage.token)
            if(_token.access_token != undefined){
              axios.get("http://quantum-servers.net:5000/api/sendApplication",{params:{code:_token.access_token,data:JSON.stringify(params)}}).then(function (params) {
                if(params.data.success == true){
                  self.status_list = params.data.aplication
                  self.whitelist = false
                  self.status = true
                }else{
                    location.href = "https://discord.gg/csaMXHsp6t"
                }
              })
            }
          }
          
        },
        setStatus(status,id,reason,id_discord){
          console.log(status,id,reason);
          let self = this
          if(localStorage.token != undefined){
            var _token = JSON.parse(localStorage.token)
            if(_token.access_token != undefined){
              axios.get("http://quantum-servers.net:5000/api/setStatus",{params:{code:_token.access_token,data:JSON.stringify({status:status,id:id,reason:reason,id_discord:id_discord})}}).then(function (params) {
                if(params.data == true){
                  axios.get("http://quantum-servers.net:5000/api/login",{params:{code:_token.access_token}}).then(function (datas) {
                    self.applications=datas.data.status.applications
                    if(self.applications == true){
                      self.applications_new = datas.data.data.applications_new
                      self.applications_decile = datas.data.data.applications_decile
                      self.applications_accept = datas.data.data.applications_accept
                    }
                  })
                }
              })
            }
          }
        }
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
