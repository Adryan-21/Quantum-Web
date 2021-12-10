import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Fivem from '../views/fivem/Fivem.vue'
import Fivem_Whitelist from '../views/fivem/Fivem_Whitelist.vue'
import Fivem_Regulamin from '../views/fivem/Fivem_Regulamin.vue'
import Minecraft from '../views/minecraft/Minecraft.vue'
import Minecraft_Regulamin from '../views/minecraft/Minecraft_Regulamin.vue'
import Not_Found from '../views/Not_Found.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/fivem',
    name: 'Fivem',
    component: Fivem
  },
  {
    path: '/fivem_whitelist',
    name: 'Fivem_Whitelist',
    component: Fivem_Whitelist
  },
  {
    path: '/fivem_regulamin',
    name: 'Fivem_Regulamin',
    component: Fivem_Regulamin
  },
  {
    path: '/minecraft',
    name: 'Minecraft',
    component: Minecraft
  },
  {
    path: '/minecraft_regulamin',
    name: 'Minecraft_Regulamin',
    component: Minecraft_Regulamin
  },

  {
    path: '*',
    name: '404',
    component: Not_Found
  },
]

// eslint-disable-next-line no-new
const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
