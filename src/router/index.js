import Vue from 'vue'
import VueRouter from 'vue-router'

import routes from './routes'
import { AUTH } from 'src/boot/firebase'

Vue.use(VueRouter)



export default function ({ store }) {
  const Router = new VueRouter({
    scrollBehavior: () => ({ x: 0, y: 0 }),
    routes,

    // Leave these as they are and change in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    mode: process.env.VUE_ROUTER_MODE,
    base: process.env.VUE_ROUTER_BASE
  })

  Router.beforeEach(async (to, from, next) => {
   
    let user=store.getters['user/getUser']
    const requiresAuth = to.matched.some(recordedRoute => recordedRoute.meta.requiresAuth)

    if(requiresAuth && user == null){
      await store.dispatch('user/reloadUser')
      user=store.getters['user/getUser']
    }
   

    if (requiresAuth && !user) {
      next({ path: '/auth/signin', query: { from: to.path } })
    } else {
      next()
    }
  })
    
  return Router
}
