import * as firebase from 'firebase'

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

export default ({ app, router, Vue }) => {
  Vue.prototype.$auth = AUTH
  Vue.prototype.$db = DB
}