import * as firebase from 'firebase'
import { Store } from '../store'
const config = {
  apiKey: 'AIzaSyBs4TKOKnIuCiEyKiWczBR8o1i1su6X2Kk',
  authDomain: '...',
  databaseURL: '...',
  projectId: 'minichallenger-9cf36',
  storageBucket: 'gs://minichallenger-9cf36.appspot.com',
  messagingSenderId: '...'
}

const fireApp = firebase.initializeApp(config)
export const DB = fireApp.firestore()
export const AUTH = fireApp.auth()
export const STORAGE = fireApp.storage()

/*
AUTH.onAuthStateChanged((user)=> {
  if(user) {
    Store.dispatch('user/setUser',{uid: user.uid, displayName:user.displayName})
  }
});

AUTH.setPersistence(firebase.auth.Auth.Persistence.SESSION)
*/
export default ({ app, router, Vue }) => {
  Vue.prototype.$auth = AUTH
  Vue.prototype.$db = DB
  Vue.prototype.$storage = STORAGE
}