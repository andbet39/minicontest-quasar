import Vue from 'vue'
import Vuex from 'vuex'
import user from './user'
import miniatures from './miniatures'
import contest from './contest'
// import example from './module-example'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */


export const Store = new Vuex.Store({
  modules: {
    user,
    miniatures,
    contest
  },

  // enable strict mode (adds overhead!)
  // for dev mode only
  strict: process.env.DEV
})

 export default Store
/*
export default function () {
  const Store = new Vuex.Store({
    modules: {
      user,
      miniatures
    },

 
    strict: process.env.DEV
  })

  

  return Store
}*/
