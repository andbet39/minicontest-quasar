import  {AUTH } from './../../boot/firebase'

export function setUser(context,payload){
    context.commit('setUser', payload)
    context.dispatch('miniatures/getMyMiniatures',null,{root:true})
}
export function signOut(context,payload){
    AUTH.signOut().then(()=>{
        context.commit('signOut')
     })
}

export function signIn (context,payload) {
    AUTH.signInWithEmailAndPassword(payload.email,payload.password)
    .then(user => {
        console.log(user)
        const newUser = {
            uid: user.user.uid,
            displayName :user.user.displayName,
         }
        context.commit('setUser', newUser)
        context.dispatch('miniatures/getMyMiniatures',null,{root:true})
    })
}

export function signUp (context,payload) {
    AUTH.createUserWithEmailAndPassword(payload.email,payload.password)
    .then(res => {
        res.user.updateProfile({
            displayName: payload.name
        }).then(()=>{
                const newUser = {
                    uid: user.user.uid,
                    displayName :user.user.displayName,
                 }
                context.commit('setUser', newUser)
                context.dispatch('miniatures/getMyMiniatures',null,{root:true})
            }
        )       
    })
}

export async function reloadUser(context){
      
   const user = await new Promise((resolve, reject) => {
        AUTH.onAuthStateChanged(user => {
          console.log("BeforeDispatch")
          console.log("USER : ",user)
         // store.dispatch('user/setUser',user)
          resolve(user)
        })
      })
      if(user){
        const newUser = {
            uid: user.uid,
            displayName :user.displayName,
         }
        context.commit('setUser', newUser)
      }else{
        context.commit('setUser', null)
      }
      
}

